# Naskah Video Demo NalarPublik (Durasi: 5 Menit)

> **Tema:** Menjembatani Anggaran APBD, Data Riil Lapangan BPS, dan Suara Warga.  
> **Studi Kasus:** Kabupaten Toba, Sumatera Utara.  
> **Format:** Sederhana, Lugas, Narasi Kuat & Berdampak (*High-Impact*).

---

## ⏱️ Rangkuman Rundown Waktu (Total: 5 Menit)

| Bagian | Durasi | Topik | Pembicara |
| :--- | :---: | :--- | :--- |
| **Bagian 1** | 00:00 - 00:45 (45s) | Pembuka Masalah & Perkenalan Tim | **Rony Pangaribuan** (PM) |
| **Bagian 2** | 00:45 - 03:45 (3 Menit) | Live Demo 4 Fitur Utama Platform | **Maxwell Rumahorbo** (FE) & **Boy Simamora** (BE) |
| **Bagian 3** | 03:45 - 04:30 (45s) | Rencana Pengembangan (*Roadmap*) | **Boy Simamora** (BE) |
| **Bagian 4** | 04:30 - 05:00 (30s) | Kesimpulan & Penutup | **Rony Pangaribuan** (PM) |

---

## 🎬 Naskah Lengkap & Panduan Layar

### BAGIAN 1: PEMBUKA & PERKENALAN TIM (00:00 – 00:45)
*Layar: Kamera aktif menghadap presenter / Menampilkan Beranda NalarPublik.*

**[00:00 - 00:20] Hook Masalah**
> **Rony Pangaribuan (Project Manager):**  
> *"Horas, salam sejahtera bagi kita semua.*  
> *Sering kali dokumen anggaran daerah tebalnya beratus-ratus halaman, tapi warga sulit mengetahui: ke mana sebenarnya uang rakyat dibelanjakan? Dan apakah pembagian anggaran tersebut sudah menjawab masalah nyata di lapangan?*  
> *Inilah **NalarPublik** — platform pendukung keputusan berbasis data yang menghubungkan data resmi APBD, data statistik BPS, dan aspirasi partisipatif masyarakat."*

**[00:20 - 00:45] Perkenalan Tim**
> **Rony Pangaribuan (Project Manager):**  
> *"Perkenalkan, kami dari Tim NalarPublik:*  
> *1. Saya sendiri, **Rony Pangaribuan**, sebagai Project Manager.*  
> *2. Rekan saya, **Maxwell Rumahorbo**, sebagai Front End Developer.*  
> *3. Dan rekan saya, **Boy Simamora**, sebagai Back End Developer.*  
> *Untuk fase percontohan ini, sistem kami mengambil fokus pada 4 kecamatan utama di Kabupaten Toba: Balige, Laguboti, Porsea, dan Habinsaran. Mari kita lihat langsung bagaimana platform ini bekerja."*

---

### BAGIAN 2: LIVE DEMO FITUR UTAMA (00:45 – 03:45)
*Layar: Tangkapan layar web live `https://nalarpublik.vercel.app`.*

#### 📍 Fitur 1: Peta Wilayah & Gap Analysis (00:45 – 01:30)
*Layar: Masuk ke halaman **Peta Anggaran** (`/map`). Klik pin merah Habinsaran.*

> **Maxwell Rumahorbo (Front End):**  
> *"Kita mulai dari menu pertama: **Peta Wilayah Gap Analysis**.*  
> *Di sini, publik dan pengambil kebijakan bisa melihat Kabupaten Toba bukan sekadar garis batas peta, melainkan peta prioritas kebutuhan.*  
> *Perhatikan pin berwarna merah di **Kecamatan Habinsaran**.*  
> *Ketika kita klik, sistem langsung membandingkan kondisi riil di lapangan vs alokasi anggaran APBD:*  
> *- Data BPS menunjukkan kerusakan jalan di Habinsaran mencapai **46%**.*  
> *- Namun, porsi APBD infrastruktur di sana hanya dialokasikan **16%**.*  
> *Sistem kami secara otomatis mendeteksi adanya **Defisit Anggaran -30% (Status Kritis)**. Ini membuktikan bahwa pembagian anggaran selama ini belum tepat sasaran."*

---

#### 🗳️ Fitur 2: Simulator Anggaran Partisipatif Warga (01:30 – 02:15)
*Layar: Pindah ke menu **Simulator** (`/simulator`). Pilih Habinsaran, geser slider Infrastruktur ke 45%, ketik catatan aspirasi, klik Kirim.*

> **Maxwell Rumahorbo (Front End):**  
> *"Lalu bagaimana solusinya? Di menu kedua, kami menghadirkan **Simulator Anggaran Partisipatif**.*  
> *Di halaman ini, warga biasa tidak lagi hanya jadi penonton, tetapi menjadi perencana anggaran.*  
> *Warga memilih kecamatannya, lalu membagikan kuota 100% anggaran ke 4 sektor utama: Infrastruktur, Kesehatan, Pendidikan, dan Sosial.*  
> *Misalnya, warga Habinsaran menaikkan porsi jalan menjadi 45%, lalu menulis catatan: 'Jalan antar desa longsor, hasil panen kopi sulit dibawa ke kota.'*  
> *Saat tombol 'Kirim Aspirasi' ditekan, suara masyarakat ini langsung tersimpan dan diteruskan secara instan ke sistem pemerintah."*

---

#### 📊 Fitur 3: Dasbor Keputusan Admin & Rekomendasi Otomatis (02:15 – 03:00)
*Layar: Masuk ke menu **Login Admin** (`/login`), login dengan Google/Manual, masuk ke Dasbor Admin (`/admin`). Tampilkan grafik 3 batang dan Alert Anomali.*

> **Boy Simamora (Back End):**  
> *"Sekarang mari kita masuk ke sisi pemerintah: **Dasbor Analitik & Pengambil Keputusan**.*  
> *Akses admin ini terkunci secara aman dengan whitelist khusus.*  
> *Di dasbor ini, pembuat kebijakan di Bappeda atau DPRD disajikan perbandingan 3 data sekaligus dalam satu grafik:*  
> *1. Masalah riil lapangan (BPS).*  
> *2. Rencana alokasi anggaran pemerintah saat ini.*  
> *3. Dan rata-rata keinginan masyarakat hasil simulator tadi.*  
> *Tidak hanya menyajikan grafik, sistem kami juga memiliki **Mesin Rekomendasi Kebijakan Otomatis**. Sebelum rapat Musrenbang digelar, sistem sudah memberikan rekomendasi berbasis data: 'Habinsaran butuh realokasi minimal +15% ke sektor jalan, yang dapat dialihkan dari pos belanja yang mengalami surplus'."*

---

#### 📄 Fitur 4: Pusat Penerjemah Dokumen DPA ke Bentuk Fisik (03:00 – 03:45)
*Layar: Pindah ke halaman **Data Terbuka** (`/open-data`), buka pop-up upload DPA, pilih contoh DPA, terbitkan, lalu tunjukkan kartu fisik (Km jalan, ruang kelas, posyandu).*

> **Maxwell Rumahorbo (Front End):**  
> *"Fitur unggulan terakhir kami ada di **Portal Data Terbuka: Penerjemah Dokumen DPA**.*  
> *Selama ini dokumen anggaran daerah membingungkan warga karena berisi kode rekening birokrasi.*  
> *Di NalarPublik, admin cukup mengunggah berkas DPA resmi.*  
> *Dalam hitungan detik, sistem memindai pagu anggaran dan langsung menerjemahkan angka miliaran rupiah tersebut menjadi **wujud fisik nyata di lapangan**:*  
> *- Rp 4 Miliar anggaran jalan otomatis diterjemahkan menjadi: **5 Km Pengaspalan Jalan Hotmix**.*  
> *- Anggaran kesehatan langsung dikonversi menjadi: **Unit Posyandu Gizi Balita**.*  
> *- Anggaran pendidikan dikonversi menjadi: **Ruang Kelas Sekolah Dasar yang Direhab**.*  
> *Data ini transparan dan bisa diunduh oleh siapa saja dalam format CSV."*

---

### BAGIAN 3: RENCANA PENGEMBANGAN / ROADMAP (03:45 – 04:30)
*Layar: Menampilkan slide/grafik rencana pengembangan atau tampilan ringkasan platform.*

> **Boy Simamora (Back End):**  
> *"Untuk rencana pengembangan ke depan, kami telah merancang 3 tahapan integrasi:*  
> *1. **Ekspansi Cakupan Wilayah:** Memperluas cakupan dari 4 kecamatan percontohan menjadi seluruh 16 kecamatan di Kabupaten Toba, hingga kabupaten lain di kawasan Danau Toba.*  
> *2. **Integrasi API Nasional:** Menghubungkan sistem secara langsung ke Web API BPS Pusat dan sistem SIPD Kemendagri agar sinkronisasi data terjadi otomatis secara berkala.*  
> *3. **Verifikasi Aspirasi Berbasis NIK/Lokasi:** Menambahkan verifikasi warga berbasis geolokasi agar aspirasi yang masuk semakin terverifikasi dan akuntabel untuk Musrenbang resmi."*

---

### BAGIAN 4: KESIMPULAN & PENUTUP (04:30 – 05:00)
*Layar: Kamera presenter kembali aktif / Menampilkan Logo & Slogan NalarPublik.*

> **Rony Pangaribuan (Project Manager):**  
> *"NalarPublik membuktikan bahwa transparansi anggaran bukan sekadar menampilkan angka, melainkan memastikan bahwa setiap rupiah uang rakyat dialokasikan pada masalah yang paling membutuhkan bukti dan solusi.*  
> *Dari Toba, untuk tata kelola anggaran daerah yang lebih adil, cerdas, dan transparan.*  
> *Saya Rony Pangaribuan, bersama Maxwell Rumahorbo dan Boy Simamora, pamit undur diri.*  
> *Horas, Mauliate, terima kasih!"*

---

## 💡 Tips Praktis Saat Merekam Video:
1. **Kecepatan Bicara:** Santai, percaya diri, jangan terburu-buru (tempo rata-rata 120-130 kata per menit pas untuk 5 menit).
2. **Kursor Layar:** Arahkan kursor tepat ke elemen yang sedang dijelaskan (misal: saat menyebut angka 46%, sorot angka 46% di pop-up peta).
3. **Pencahayaan & Audio:** Pastikan mic jernih dan layar browser menggunakan zoom level 100% atau 110% agar teks terbaca jelas di video.
