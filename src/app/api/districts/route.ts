import { NextResponse } from 'next/server'
import { INITIAL_DISTRICTS } from '@/lib/data'
import { calculateOverallGap, calculateGapStatus } from '@/lib/gap-calculator'
import { District } from '@/types'
import { supabase } from '@/lib/supabase'

const memoryDistricts: District[] = [...INITIAL_DISTRICTS]

export async function GET() {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('districts').select('*').order('name')
      if (!error && data && data.length > 0) {
        const enriched = (data as District[]).map((d) => ({
          ...d,
          overall_gap_score: calculateOverallGap(d),
          gap_status: calculateGapStatus(d),
        }))
        return NextResponse.json({
          source: 'supabase_postgres',
          last_synced: new Date().toISOString(),
          data: enriched,
        })
      }
    } catch {
      // Fallback ke in-memory jika query database terkendala
    }
  }

  return NextResponse.json({
    source: 'live_bps_hybrid',
    last_synced: new Date().toISOString(),
    data: memoryDistricts,
  })
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const { id, budget_infra_pct, budget_health_pct, budget_edu_pct, budget_social_pct } = body

    if (!id) {
      return NextResponse.json({ error: 'ID kecamatan wajib disertakan' }, { status: 400 })
    }

    const total = budget_infra_pct + budget_health_pct + budget_edu_pct + budget_social_pct
    if (total !== 100) {
      return NextResponse.json({ error: 'Total alokasi 4 sektor wajib berjumlah tepat 100%' }, { status: 400 })
    }

    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('districts')
          .update({
            budget_infra_pct,
            budget_health_pct,
            budget_edu_pct,
            budget_social_pct,
            updated_at: new Date().toISOString(),
          })
          .eq('id', id)
          .select()
          .single()

        if (!error && data) {
          const updated = data as District
          updated.overall_gap_score = calculateOverallGap(updated)
          updated.gap_status = calculateGapStatus(updated)
          return NextResponse.json({ success: true, data: updated })
        }
      } catch {
        // Fallback ke in-memory
      }
    }

    const index = memoryDistricts.findIndex((d) => d.id === id)
    if (index === -1) {
      return NextResponse.json({ error: 'Kecamatan tidak ditemukan' }, { status: 404 })
    }

    const current = memoryDistricts[index]
    const updated: District = {
      ...current,
      budget_infra_pct,
      budget_health_pct,
      budget_edu_pct,
      budget_social_pct,
    }

    updated.overall_gap_score = calculateOverallGap(updated)
    updated.gap_status = calculateGapStatus(updated)
    updated.updated_at = new Date().toISOString()

    memoryDistricts[index] = updated

    return NextResponse.json({ success: true, data: updated })
  } catch {
    return NextResponse.json({ error: 'Gagal memperbarui anggaran' }, { status: 500 })
  }
}

