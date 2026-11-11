# Naskah Video Demo NalarPublik (Durasi: 5 Menit)

Tema: Menjembatani Anggaran APBD, Data Riil Lapangan BPS, dan Suara Warga
Studi Kasus: Kabupaten Toba, Sumatera Utara
Presenter Tunggal: Rony Pangaribuan (Project Manager)
Anggota Tim Pengembang:
- Rony Pangaribuan (Project Manager & Presenter)
- Maxwell Rumahorbo (Front End Developer)
- Boy Simamora (Back End Developer)

---

## Rangkuman Waktu Video (Total: 5 Menit)

| Bagian | Menit | Durasi | Topik Utama |
| :--- | :---: | :---: | :--- |
| Bagian 1 | 00:00 - 00:45 | 45 detik | Masalah Utama & Perkenalan Tim |
| Bagian 2 | 00:45 - 03:45 | 3 menit | Demo 4 Fitur Utama Platform |
| Bagian 3 | 03:45 - 04:30 | 45 detik | Rencana Pengembangan (Roadmap) |
| Bagian 4 | 04:30 - 05:00 | 30 detik | Kesimpulan & Penutup |

---

## Naskah Lengkap dan Panduan Tampilan Layar

### BAGIAN 1: PEMBUKA DAN PERKENALAN TIM (00:00 - 00:45)
Panduan Layar: Menampilkan presenter di kamera, lalu beralih ke halaman Beranda NalarPublik (https://nalarpublik.vercel.app).

[00:00 - 00:20] Masalah Utama:
"Horas, salam sejahtera bagi kita semua.
Sering kali dokumen anggaran daerah tebalnya beratus-ratus halaman, tetapi warga sulit mengetahui: ke mana sebenarnya uang rakyat dialokasikan? Dan yang paling penting, apakah pembagian anggaran tersebut sudah menjawab masalah nyata di lapangan?
Inilah NalarPublik, sebuah platform web pengambil keputusan berbasis data yang menghubungkan data resmi APBD, data statistik BPS, dan aspirasi partisipatif masyarakat."

[00:20 - 00:45] Perkenalan Tim:
"Perkenalkan, saya Rony Pangaribuan, selaku Project Manager pada proyek NalarPublik ini. 
Sistem ini kami kembangkan bersama dua rekan saya:
Pertama, Maxwell Rumahorbo sebagai Front End Developer yang merancang antarmuka dan interaktivitas visual.
Kedua, Boy Simamora sebagai Back End Developer yang menangani logika kalkulasi, data, dan arsitektur sistem.
Untuk fase percontohan ini, kami mengambil fokus pada empat kecamatan utama di Kabupaten Toba: Balige, Laguboti, Porsea, dan Habinsaran. Mari kita lihat langsung bagaimana platform ini bekerja."

---

### BAGIAN 2: DEMO FITUR UTAMA (00:45 - 03:45)
Panduan Layar: Tangkapan layar web live nalarpublik.vercel.app.

#### Fitur 1: Peta Wilayah dan Analisis Kesenjangan (00:45 - 01:30)
Panduan Layar: Buka halaman Peta Anggaran (/map). Arahkan kursor dan klik pin merah pada Kecamatan Habinsaran.

"Fitur pertama adalah Peta Wilayah dan Analisis Kesenjangan atau Gap Analysis.
Di halaman ini, publik maupun pemerintah daerah dapat melihat Kabupaten Toba berdasarkan prioritas kebutuhan riil, bukan sekadar peta administratif.
Perhatikan pin berwarna merah di Kecamatan Habinsaran.
Ketika kita klik, sistem langsung membandingkan kondisi riil lapangan dengan porsi anggaran daerah:
Data BPS mencatat bahwa tingkat kerusakan jalan di Habinsaran mencapai 46 persen.
Namun, pemerintah daerah hanya mengalokasikan 16 persen anggaran infrastruktur ke wilayah ini.
Sistem kami secara otomatis menghitung dan memberikan peringatan: terdapat defisit anggaran sebesar minus 30 persen dengan status Kritis. Ini membuktikan secara data bahwa alokasi anggaran selama ini belum proporsional dengan masalah di lapangan."

---

#### Fitur 2: Simulator Anggaran Partisipatif (01:30 - 02:15)
Panduan Layar: Buka halaman Simulator (/simulator). Pilih Kecamatan Habinsaran, geser slider Infrastruktur ke 45 persen, ketik catatan singkat di kotak aspirasi, lalu klik tombol Kirim Aspirasi.

"Untuk menyelesaikan ketimpangan tersebut, kami menghadirkan fitur kedua: Simulator Anggaran Partisipatif.
Di sini warga tidak lagi pasif, melainkan ikut berperan sebagai perencana kebijakan.
Warga cukup memilih kecamatan domisilinya, lalu membagikan kuota 100 persen anggaran ke empat sektor utama: Infrastruktur, Kesehatan, Pendidikan, dan Sosial.
Sebagai contoh, warga Habinsaran dapat menaikkan porsi infrastruktur menjadi 45 persen, lalu menambahkan catatan lapangan: 'Jalan antar-desa rusak berat dan rawan longsor saat musim panen.'
Saat tombol Kirim Aspirasi ditekan, data ini langsung tersimpan ke sistem dan siap dianalisis oleh pemerintah daerah."

---

#### Fitur 3: Dasbor Keputusan Admin dan Detektor Anomali (02:15 - 03:00)
Panduan Layar: Buka halaman Dasbor Admin (/admin). Tunjukkan grafik perbandingan 3 batang per sektor dan kartu peringatan rekomendasi Musrenbang.

"Sekarang kita beralih ke sisi pengambil kebijakan melalui Dasbor Keputusan Admin.
Dasbor ini dilindungi sistem keamanan khusus untuk memastikan hanya pihak berwenang yang dapat mengakses data analitik.
Di dasbor ini, pembuat kebijakan di Bappeda atau DPRD disajikan perbandingan tiga sumber data sekaligus dalam satu grafik:
Pertama, tingkat masalah lapangan dari BPS.
Kedua, rencana alokasi anggaran daerah saat ini.
Ketiga, rata-rata keinginan masyarakat dari simulator tadi.
Tidak hanya grafik, sistem kami dilengkapi Mesin Rekomendasi Kebijakan Otomatis. Sebelum rapat Musrenbang digelar, sistem sudah memberikan arahan konkret: 'Habinsaran memerlukan realokasi minimal plus 15 persen ke sektor infrastruktur jalan, yang dapat dialihkan dari pos anggaran sektor yang mengalami surplus'."

---

#### Fitur 4: Penerjemah Dokumen DPA ke Ekuivalen Fisik (03:00 - 03:45)
Panduan Layar: Pindah ke halaman Data Terbuka (/open-data). Klik tombol Unggah / Terjemahkan DPA Baru, pilih salah satu contoh DPA, klik Terbitkan, lalu sorot kartu ekuivalensi fisik (Km jalan, posyandu gizi, ruang kelas) dan tombol unduh CSV.

"Fitur unggulan keempat kami berada di Portal Data Terbuka: Pusat Penerjemah Dokumen DPA.
Dokumen DPA biasanya sulit dipahami oleh masyarakat umum karena dipenuhi kode rekening birokrasi.
Di NalarPublik, admin cukup mengunggah berkas DPA resmi.
Sistem kami secara otomatis memindai pagu anggaran dan langsung menerjemahkan nominal miliaran rupiah tersebut menjadi wujud fisik nyata di lapangan:
Anggaran jalan empat miliar rupiah otomatis diterjemahkan menjadi lima kilometer aspal hotmix.
Anggaran kesehatan langsung dihitung menjadi unit posyandu gizi balita untuk pencegahan stunting.
Dan anggaran pendidikan dihitung menjadi jumlah ruang kelas sekolah dasar yang bisa direhabilitasi total.
Seluruh data ini transparan dan dapat diunduh oleh masyarakat dalam format CSV."

---

### BAGIAN 3: RENCANA PENGEMBANGAN SISTEM (03:45 - 04:30)
Panduan Layar: Menampilkan halaman utama atau slide ringkas arsitektur masa depan NalarPublik.

"Untuk tahapan pengembangan ke depan, kami telah menyiapkan tiga rencana strategis:
Pertama, Ekspansi Wilayah: Memperluas cakupan data dari empat kecamatan percontohan menjadi seluruh 16 kecamatan di Kabupaten Toba, hingga kabupaten lain di kawasan Danau Toba.
Kedua, Integrasi API Nasional: Menghubungkan sistem secara otomatis ke Web API BPS Pusat dan sistem SIPD Kemendagri agar pembacaan APBD dan indikator kemiskinan selalu tersinkronisasi secara berkala tanpa input manual.
Ketiga, Validasi Aspirasi Warga: Menambahkan verifikasi berbasis geolokasi dan integrasi kependudukan agar setiap usulan yang masuk ke simulator memiliki bobot validasi yang kuat untuk dibawa langsung ke forum Musrenbang resmi."

---

### BAGIAN 4: KESIMPULAN DAN PENUTUP (04:30 - 05:00)
Panduan Layar: Kamera presenter kembali penuh di layar, menampilkan logo NalarPublik dan alamat web nalarpublik.vercel.app.

"NalarPublik membuktikan bahwa transparansi anggaran bukan sekadar memajang angka, melainkan memastikan bahwa setiap rupiah uang rakyat dialokasikan pada masalah yang paling mendesak secara adil dan terukur.
Dari Toba, kami membangun standar baru tata kelola anggaran daerah yang berbasis bukti, cerdas, dan transparan.
Saya Rony Pangaribuan, mewakili seluruh tim pengembang NalarPublik, mengucapkan terima kasih.
Horas, salam sehat untuk kita semua."
