import React, { useState } from 'react';

export default function DataHonorPendidikanPimpinan() {
  // State Filter Atas
  const [filterJurusan, setFilterJurusan] = useState('Teknik Informatika');
  const [filterPeriode, setFilterPeriode] = useState('Ganjil 2026/2027');

  // State Tab & Search & Category
  const [activeTab, setActiveTab] = useState('Pendidikan');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');

  // State Halaman Detail
  const [viewDetail, setViewDetail] = useState(false);
  const [selectedDosen, setSelectedDosen] = useState(null);

  // Daftar Kategori per Tab
  const categoriesPendidikan = [
    'Semua', 
    'Pembimbing Utama Tesis', 
    'Pembimbing Pendamping Tesis', 
    'Pembimbing Skripsi/TA', 
    'Pembimbing PKL/Magang', 
    'Penguji Tesis', 
    'Penguji Skripsi/TA', 
    'Pembimbing Akademik'
  ];

  const categoriesPenunjang = [
    'Semua', 
    'Penguji Seminar Proposal Mhs Skripsi/TA/Tesis'
  ];

  const currentCategories = activeTab === 'Pendidikan' ? categoriesPendidikan : categoriesPenunjang;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveCategory('Semua');
  };

  // ================= DATA DUMMY (Sesuai Desain) =================
  const [dataHonor] = useState([
    {
      id: 1,
      nama: "Dr. Budi Santoso, M.T.",
      nip: "198001012005011001",
      jabatan: "Kaprodi",
      golongan: "Gol IV/a",
      bkdTerpenuhi: true,
      // Dosen 1: Mengikuti ke-7 Kegiatan
      kegiatan: [
        "Pembimbing Utama Tesis", 
        "Pembimbing Pendamping Tesis", 
        "Pembimbing Skripsi/TA", 
        "Pembimbing PKL/Magang", 
        "Penguji Tesis", 
        "Penguji Skripsi/TA", 
        "Pembimbing Akademik"
      ],
      honorBruto: 2006000,
      pajakPph: 300900, // 15% (Gol IV)
      honorNetto: 1705100,
      status: "Terverifikasi Keuangan",
      rincianGroups: [
        {
          jenis: "Pembimbing Utama Tesis",
          kegiatan: "Pembimbing Utama Tesis",
          judul: "Implementasi AI pada Medis",
          mahasiswaList: [
            { mhs: "Husen Alaydrus", sks: 0.5, status: "Beban lebih", tarif: "Rp 186.000 x 60%", subtotal: 111600 },
            { mhs: "Faris Alwan", sks: 2, status: "Berlanjut", tarif: "Rp 186.000 x 60%", subtotal: 111600 },
            { mhs: "Darwin Alesandro", sks: 2, status: "Selesai", tarif: "Rp 186.000 x 60%", subtotal: 111600 },
            { mhs: "Raditya Meyka", sks: 2, status: "Beban lebih", tarif: "Rp 186.000 x 60%", subtotal: 111600 }
          ],
          totalMahasiswa: 4,
          totalSubtotal: 446400
        },
        {
          jenis: "Pembimbing Pendamping Tesis",
          kegiatan: "Pembimbing Pendamping Tesis",
          judul: "Analisis Big Data",
          mahasiswaList: [
            { mhs: "Edhis Supriyadi", sks: 0.5, status: "Beban lebih", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
            { mhs: "Raihan Putra", sks: 2, status: "Berlanjut", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
            { mhs: "Ahmad Rizki", sks: 2, status: "Selesai", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
            { mhs: "Budi Doremi", sks: 2, status: "Beban lebih", tarif: "Rp 186.000 x 40%", subtotal: 74400 }
          ],
          totalMahasiswa: 4,
          totalSubtotal: 297600
        },
        {
          jenis: "Pembimbing Skripsi/TA",
          kegiatan: "Pembimbing Skripsi/TA",
          judul: "Aplikasi E-Commerce V2",
          mahasiswaList: [
            { mhs: "Siti Rahma", sks: 0.5, status: "Beban lebih", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
            { mhs: "M. Rizky", sks: 2, status: "Berlanjut", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
            { mhs: "Dewi Kirana", sks: 2, status: "Selesai", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
            { mhs: "Arya Bima", sks: 2, status: "Beban lebih", tarif: "Rp 186.000 x 40%", subtotal: 74400 }
          ],
          totalMahasiswa: 4,
          totalSubtotal: 297600
        },
        {
          jenis: "Pembimbing PKL/Magang",
          kegiatan: "Pembimbing PKL/Magang",
          judul: "Sistem Presensi RFID PT Astra",
          mahasiswaList: [
            { mhs: "Sinta Nuriyah", sks: 0.5, status: "Beban lebih", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
            { mhs: "Kevin Sanjaya", sks: 2, status: "Berlanjut", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
            { mhs: "Rina Nose", sks: 2, status: "Selesai", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
            { mhs: "Doni Salmanan", sks: 2, status: "Beban lebih", tarif: "Rp 186.000 x 40%", subtotal: 74400 }
          ],
          totalMahasiswa: 4,
          totalSubtotal: 297600
        },
        {
          jenis: "Penguji Tesis",
          kegiatan: "Penguji Tesis",
          judul: "Pengembangan IoT Smart City",
          mahasiswaList: [
            { mhs: "Citra Kirana", sks: 0.5, status: "Beban lebih", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
            { mhs: "Indra Kenz", sks: 2, status: "Berlanjut", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
            { mhs: "Tukul Arwana", sks: 2, status: "Selesai", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
            { mhs: "Andre Taulany", sks: 2, status: "Beban lebih", tarif: "Rp 186.000 x 40%", subtotal: 74400 }
          ],
          totalMahasiswa: 4,
          totalSubtotal: 297600
        },
        {
          jenis: "Penguji Skripsi/TA",
          kegiatan: "Penguji Skripsi/TA",
          judul: "Sistem Pakar Diagnosa Penyakit",
          mahasiswaList: [
            { mhs: "Sule", sks: 0.5, status: "Beban lebih", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
            { mhs: "Nunung", sks: 2, status: "Berlanjut", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
            { mhs: "Azis Gagap", sks: 2, status: "Selesai", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
            { mhs: "Parto", sks: 2, status: "Beban lebih", tarif: "Rp 186.000 x 40%", subtotal: 74400 }
          ],
          totalMahasiswa: 4,
          totalSubtotal: 297600
        },
        {
          jenis: "Pembimbing Akademik",
          kegiatan: "Pembimbing Akademik",
          judul: "Bimbingan Kelas TI-6A",
          mahasiswaList: [
            { mhs: "Ahmad Dani", sks: 2, status: "Beban lebih", tarif: "Rp 17.900", subtotal: 17900 },
            { mhs: "Ari Lasso", sks: 2, status: "Beban lebih", tarif: "Rp 17.900", subtotal: 17900 },
            { mhs: "Once Mekel", sks: 2, status: "Beban lebih", tarif: "Rp 17.900", subtotal: 17900 },
            { mhs: "Yuke", sks: 2, status: "Beban lebih", tarif: "Rp 17.900", subtotal: 17900 }
          ],
          totalMahasiswa: 4,
          totalSubtotal: 71600
        }
      ]
    },
    {
      id: 2,
      nama: "Siti Aminah, S.E., M.Ak.",
      nip: "198505152010122003",
      jabatan: "Lektor",
      golongan: "Gol III/c",
      bkdTerpenuhi: true,
      // Dosen 2: 3 Kegiatan
      kegiatan: [
        "Pembimbing Utama Tesis",
        "Pembimbing Pendamping Tesis",
        "Penguji Seminar Proposal Mhs Skripsi/TA/Tesis"
      ],
      honorBruto: 781200,
      pajakPph: 39060, // 5% (Gol III)
      honorNetto: 742140,
      status: "Terverifikasi Keuangan",
      rincianGroups: [
        {
          jenis: "Pembimbing Utama Tesis",
          kegiatan: "Pembimbing Utama Tesis",
          judul: "Audit Sistem Informasi Bank",
          mahasiswaList: [
            { mhs: "Junaedi", sks: 0.5, status: "Beban lebih", tarif: "Rp 186.000 x 60%", subtotal: 111600 },
            { mhs: "Rahmat", sks: 2, status: "Berlanjut", tarif: "Rp 186.000 x 60%", subtotal: 111600 },
            { mhs: "Gilang", sks: 2, status: "Beban lebih", tarif: "Rp 186.000 x 60%", subtotal: 111600 }
          ],
          totalMahasiswa: 3,
          totalSubtotal: 334800
        },
        {
          jenis: "Pembimbing Pendamping Tesis",
          kegiatan: "Pembimbing Pendamping Tesis",
          judul: "Valuasi Startup Digital",
          mahasiswaList: [
            { mhs: "Syifa", sks: 0.5, status: "Beban lebih", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
            { mhs: "Mila", sks: 2, status: "Selesai", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
            { mhs: "Tasya", sks: 2, status: "Beban lebih", tarif: "Rp 186.000 x 40%", subtotal: 74400 }
          ],
          totalMahasiswa: 3,
          totalSubtotal: 223200
        },
        {
          jenis: "Penguji Seminar Proposal Mhs Skripsi/TA/Tesis",
          kegiatan: "Penguji Seminar Proposal",
          judul: "Efektivitas Pajak Daerah",
          mahasiswaList: [
            { mhs: "Dinda", sks: 0.5, status: "Beban lebih", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
            { mhs: "Tiara", sks: 2, status: "Selesai", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
            { mhs: "Lyodra", sks: 2, status: "Beban lebih", tarif: "Rp 186.000 x 40%", subtotal: 74400 }
          ],
          totalMahasiswa: 3,
          totalSubtotal: 223200
        }
      ]
    },
    {
      id: 3,
      nama: "Dr. Ir. Hendra Wijaya, M.T.",
      nip: "197508122002121001",
      jabatan: "Lektor Kepala",
      golongan: "Gol IV/c",
      bkdTerpenuhi: true,
      // Dosen 3: 4 Kegiatan
      kegiatan: [
        "Pembimbing Skripsi/TA", 
        "Pembimbing PKL/Magang",
        "Penguji Skripsi/TA",
        "Pembimbing Akademik"
      ],
      honorBruto: 723300,
      pajakPph: 108495, // 15% (Gol IV)
      honorNetto: 614805,
      status: "Menunggu Verifikasi Keuangan",
      rincianGroups: [
        {
          jenis: "Pembimbing Skripsi/TA",
          kegiatan: "Pembimbing Skripsi/TA",
          judul: "Robotika Pertanian Terpadu",
          mahasiswaList: [
            { mhs: "Galih", sks: 0.5, status: "Beban lebih", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
            { mhs: "Ratna", sks: 2, status: "Selesai", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
            { mhs: "Dilan", sks: 2, status: "Berlanjut", tarif: "Rp 186.000 x 40%", subtotal: 74400 }
          ],
          totalMahasiswa: 3,
          totalSubtotal: 223200
        },
        {
          jenis: "Pembimbing PKL/Magang",
          kegiatan: "Pembimbing PKL/Magang",
          judul: "Magang PLTU Suralaya",
          mahasiswaList: [
            { mhs: "Milea", sks: 0.5, status: "Beban lebih", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
            { mhs: "Iqbal", sks: 2, status: "Selesai", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
            { mhs: "Vanesha", sks: 2, status: "Berlanjut", tarif: "Rp 186.000 x 40%", subtotal: 74400 }
          ],
          totalMahasiswa: 3,
          totalSubtotal: 223200
        },
        {
          jenis: "Penguji Skripsi/TA",
          kegiatan: "Penguji Skripsi/TA",
          judul: "Desain Turbin Angin Vertikal",
          mahasiswaList: [
            { mhs: "Fauzi", sks: 0.5, status: "Beban lebih", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
            { mhs: "Ihsan", sks: 2, status: "Selesai", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
            { mhs: "Putra", sks: 2, status: "Beban lebih", tarif: "Rp 186.000 x 40%", subtotal: 74400 }
          ],
          totalMahasiswa: 3,
          totalSubtotal: 223200
        },
        {
          jenis: "Pembimbing Akademik",
          kegiatan: "Pembimbing Akademik",
          judul: "Bimbingan Kelas EL-4B",
          mahasiswaList: [
            { mhs: "Andi", sks: 2, status: "Beban lebih", tarif: "Rp 17.900", subtotal: 17900 },
            { mhs: "Bagus", sks: 2, status: "Beban lebih", tarif: "Rp 17.900", subtotal: 17900 },
            { mhs: "Cahyo", sks: 2, status: "Beban lebih", tarif: "Rp 17.900", subtotal: 17900 }
          ],
          totalMahasiswa: 3,
          totalSubtotal: 53700
        }
      ]
    }
  ]);

  // Logika Filter Data
  const validCategoriesToMatch = currentCategories.slice(1);

  const filteredData = dataHonor.filter(item => {
    const matchSearch = item.nama.toLowerCase().includes(searchQuery.toLowerCase());
    const hasActivityInTab = item.kegiatan.some(keg => validCategoriesToMatch.includes(keg));
    if (!hasActivityInTab) return false;
    const matchCategory = activeCategory === 'Semua' || item.kegiatan.includes(activeCategory);
    return matchSearch && matchCategory;
  }).map(item => {
    const displayKegiatan = item.kegiatan.filter(keg => validCategoriesToMatch.includes(keg));
    return { ...item, displayKegiatan };
  });

  // ================= TAMPILAN HALAMAN DETAIL (Page Baru) =================
  if (viewDetail && selectedDosen) {
    // Saring grup rincian berdasarkan Tab yang sedang aktif
    const filteredGroups = selectedDosen.rincianGroups.filter(g => validCategoriesToMatch.includes(g.jenis));
    const tabBruto = filteredGroups.reduce((acc, curr) => acc + curr.totalSubtotal, 0);
    const tabPph = Math.round(tabBruto * (selectedDosen.golongan.includes('IV') ? 0.15 : 0.05));
    const tabNetto = tabBruto - tabPph;

    // Kalkulasi String Rincian Penjumlahan (Contoh: Rp 446.400 + Rp 297.600 = Rp 744.000)
    const stringPenjumlahan = filteredGroups.map(g => `Rp ${g.totalSubtotal.toLocaleString('id-ID')}`).join(' + ');

    return (
      <div className="flex-1 w-full bg-[#f8fafc] font-sans p-8">
        <div className="w-full">
          
          {/* Tombol Kembali */}
          <button 
            onClick={() => setViewDetail(false)}
            className="flex items-center gap-3 px-5 py-2.5 border border-slate-300 rounded-lg bg-white text-slate-700 font-bold hover:bg-slate-50 transition-colors mb-8 shadow-sm text-[15px]"
          >
            <i className="fa-solid fa-arrow-left"></i>
            Kembali ke Data Honor
          </button>

          {/* Header Info Dosen */}
          <div className="mb-8">
            <h1 className="text-[26px] font-extrabold text-black mb-2">Detail Honorarium — {selectedDosen.nama}</h1>
            <div className="flex items-center gap-3 text-slate-600 font-medium text-[15px]">
              <span>NIP. {selectedDosen.nip}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
              <span>{selectedDosen.jabatan}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
              <span className="font-bold text-[#1687F5]">{selectedDosen.golongan}</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
            
            {/* Iterasi Tabel per Jenis Kegiatan */}
            {filteredGroups.map((group, gIdx) => (
              <div key={gIdx} className="mb-8 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[13px] border-collapse">
                    <thead className="bg-[#f8fafc] border-b border-slate-200 text-slate-700">
                      <tr>
                        <th className="px-5 py-4 font-extrabold uppercase tracking-wider text-[12px]">NAMA KEGIATAN</th>
                        <th className="px-5 py-4 font-extrabold uppercase tracking-wider text-[12px]">JUDUL</th>
                        <th className="px-5 py-4 font-extrabold uppercase tracking-wider text-[12px]">NAMA MAHASISWA</th>
                        <th className="px-5 py-4 font-extrabold uppercase tracking-wider text-[12px] text-center">SKS</th>
                        <th className="px-5 py-4 font-extrabold uppercase tracking-wider text-[12px]">STATUS</th>
                        <th className="px-5 py-4 font-extrabold uppercase tracking-wider text-[12px] text-right">TARIF SBM</th>
                        <th className="px-5 py-4 font-extrabold uppercase tracking-wider text-[12px] text-right">SUBTOTAL</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-600 bg-white">
                      {group.mahasiswaList.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50/50">
                          {/* Nama Kegiatan & Judul diisi ke setiap baris (Tidak di-Merge/rowspan) */}
                          <td className="px-5 py-3 font-bold text-slate-800 w-[20%]">
                            {group.kegiatan}
                          </td>
                          <td className="px-5 py-3 w-[25%]">
                            {group.judul}
                          </td>
                          <td className="px-5 py-3">{row.mhs}</td>
                          <td className="px-5 py-3 text-center">{row.sks}</td>
                          <td className="px-5 py-3">{row.status}</td>
                          <td className="px-5 py-3 text-right">{row.tarif}</td>
                          <td className="px-5 py-3 text-right font-bold text-slate-900">Rp {row.subtotal.toLocaleString('id-ID')}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-[#f8fafc] border-t border-slate-200 text-slate-800 font-bold">
                      <tr>
                        {/* Total di bawah Kegiatan & Judul (colSpan 2), Angka di bawah Nama Mahasiswa */}
                        <td colSpan="2" className="px-5 py-4 text-[14px]">Total</td>
                        <td className="px-5 py-4 text-left">{group.totalMahasiswa}</td>
                        <td colSpan="3"></td>
                        <td className="px-5 py-4 text-right text-[14px]">Rp {group.totalSubtotal.toLocaleString('id-ID')}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            ))}

            {/* Kotak Summary (Ringkasan Honor Bruto & Netto Paling Bawah) Sesuai Gambar */}
            <div className="bg-slate-200 border border-slate-300 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center mt-10">
              <div className="w-full md:w-auto">
                <div className="text-[14px] text-slate-600 font-bold mb-3">Ringkasan Honor Bruto</div>
                <div className="text-[14px] text-slate-700 mt-1 flex flex-wrap items-center gap-2 font-medium">
                  <span>Bruto : <span className="font-bold text-slate-900">{stringPenjumlahan} = Rp {tabBruto.toLocaleString('id-ID')}</span></span>
                  <span className="text-slate-400 mx-2">|</span>
                  <span>Potongan PPH 21 : <span className="font-bold text-red-500">-Rp {tabPph.toLocaleString('id-ID')}</span></span>
                </div>
              </div>
              
              <div className="w-full md:w-auto text-left md:text-right border-t md:border-t-0 md:border-l border-slate-400 pt-4 md:pt-0 md:pl-8 mt-4 md:mt-0">
                <div className="text-[12px] text-slate-500 font-bold uppercase tracking-wider mb-1">Total Netto</div>
                <div className="text-[22px] font-black text-[#1687F5]">Rp {tabNetto.toLocaleString('id-ID')}</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }

  // ================= TAMPILAN HALAMAN DAFTAR (UTAMA) =================
  return (
    <div className="flex-1 w-full bg-[#f8fafc] font-sans p-8 relative">
      <div className="w-full">
        
        {/* Header Monitoring Pimpinan */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-6">
          <div>
            <h1 className="text-[28px] font-extrabold text-black mb-2">Monitoring Honor Dosen Pendidikan & Penunjang</h1>
            <p className="text-[15px] text-slate-500 font-medium">Pemantauan rekapitulasi honorarium bimbingan dan kegiatan non-pengajaran.</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-bold text-slate-700">Jurusan</label>
              <div className="relative">
                <select 
                  value={filterJurusan}
                  onChange={(e) => setFilterJurusan(e.target.value)}
                  className="bg-white border border-slate-300 rounded-xl pl-4 pr-10 py-2.5 text-[14px] font-bold text-slate-800 focus:outline-none focus:border-[#1687F5] transition-all appearance-none cursor-pointer shadow-sm min-w-[200px]"
                >
                  <option value="Teknik Informatika">Teknik Informatika</option>
                  <option value="Teknik Elektro">Teknik Elektro</option>
                  <option value="Akuntansi">Akuntansi</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-500">
                  <i className="fa-solid fa-chevron-down text-[12px]"></i>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-bold text-slate-700">Periode</label>
              <div className="relative">
                <select 
                  value={filterPeriode}
                  onChange={(e) => setFilterPeriode(e.target.value)}
                  className="bg-white border border-slate-300 rounded-xl pl-4 pr-10 py-2.5 text-[14px] font-bold text-slate-800 focus:outline-none focus:border-[#1687F5] transition-all appearance-none cursor-pointer shadow-sm min-w-[180px]"
                >
                  <option value="Ganjil 2026/2027">Ganjil 2026/2027</option>
                  <option value="Genap 2025/2026">Genap 2025/2026</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-500">
                  <i className="fa-solid fa-chevron-down text-[12px]"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigasi (Dipisah Dari Container Tabel) */}
        <div className="flex items-center gap-6 border-b border-slate-300 mb-6">
          <button 
            onClick={() => handleTabChange('Pendidikan')}
            className={`pb-3 text-[16px] font-bold transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'Pendidikan' 
                ? 'text-[#1687F5] border-[#1687F5]' 
                : 'text-slate-500 border-transparent hover:text-slate-700'
            }`}
          >
            <i className="fa-solid fa-graduation-cap"></i> Pendidikan
          </button>
          <button 
            onClick={() => handleTabChange('Penunjang')}
            className={`pb-3 text-[16px] font-bold transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'Penunjang' 
                ? 'text-[#1687F5] border-[#1687F5]' 
                : 'text-slate-500 border-transparent hover:text-slate-700'
            }`}
          >
            <i className="fa-solid fa-chalkboard-user"></i> Penunjang
          </button>
        </div>

        {/* Container Tabel Utama */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
          
          {/* Action Bar (Search & Filter Kategori) */}
          <div className="p-6 border-b border-slate-100 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 bg-slate-50/50">
            <div className="relative w-full xl:w-[280px] shrink-0">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i className="fa-solid fa-magnifying-glass text-slate-400 text-[14px]"></i>
              </div>
              <input 
                type="text" 
                placeholder="Cari nama dosen..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-300 rounded-full text-[14px] focus:outline-none focus:border-[#1687F5] transition-all font-medium placeholder:text-slate-400 shadow-sm"
              />
            </div>

            {/* Pill Filter Berdasarkan Tab Aktif */}
            <div className="flex items-center gap-2 overflow-x-auto w-full pb-2 xl:pb-0 hide-scrollbar">
              {currentCategories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-[13px] font-bold border transition-all active:scale-95 ${
                    activeCategory === cat 
                      ? 'bg-[#1687F5] border-[#1687F5] text-white shadow-md shadow-blue-500/20' 
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Tabel Data Dosen */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-max">
              <thead className="bg-white border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-[13px] font-bold text-slate-500 w-[60px]">No</th>
                  <th className="px-6 py-4 text-[13px] font-bold text-slate-500">Nama Dosen</th>
                  <th className="px-6 py-4 text-[13px] font-bold text-slate-500">Jenis Kegiatan</th>
                  <th className="px-6 py-4 text-[13px] font-bold text-slate-500 text-right">Honor Bruto</th>
                  <th className="px-6 py-4 text-[13px] font-bold text-slate-500 text-center">Status Keuangan</th>
                  <th className="px-6 py-4 text-[13px] font-bold text-slate-500 text-center">Detail</th>
                </tr>
              </thead>
              <tbody className="text-[14px] text-slate-700 font-medium divide-y divide-slate-100">
                
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-10 text-center text-slate-400 font-bold">
                      Tidak ada data yang sesuai.
                    </td>
                  </tr>
                ) : (
                  filteredData.map((item, index) => {
                    // Hitung honor bruto spesifik tab yang sedang dilihat di row ini
                    const filteredGroupsRow = item.rincianGroups.filter(g => validCategoriesToMatch.includes(g.jenis));
                    const displayBruto = filteredGroupsRow.reduce((acc, curr) => acc + curr.totalSubtotal, 0);

                    return (
                      <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="px-6 py-5 font-bold text-slate-400">{index + 1}</td>
                        
                        <td className="px-6 py-5">
                          <div className="font-bold text-slate-900 mb-0.5">{item.nama}</div>
                          <div className="text-[13px] text-slate-500 flex items-center gap-1.5">
                            <span>{item.jabatan}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span className="font-bold text-slate-600">{item.golongan}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span>{item.displayKegiatan.length} Kegiatan</span>
                          </div>
                        </td>

                        <td className="px-6 py-5">
                          <div className="flex flex-wrap items-center gap-2">
                            {item.displayKegiatan.slice(0, 3).map((keg, kIndex) => (
                              <span key={kIndex} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-[12px] font-bold rounded-full shadow-sm">
                                {keg}
                              </span>
                            ))}
                            {item.displayKegiatan.length > 3 && (
                              <span className="px-3 py-1 bg-slate-100 border border-slate-200 text-slate-500 text-[12px] font-bold rounded-full">
                                +{item.displayKegiatan.length - 3} lainnya
                              </span>
                            )}
                          </div>
                        </td>

                        <td className="px-6 py-5 text-right">
                          <div className="font-extrabold text-slate-900">Rp {displayBruto.toLocaleString('id-ID')}</div>
                        </td>

                        <td className="px-6 py-5 text-center">
                          {item.status === "Terverifikasi Keuangan" ? (
                            <span className="inline-flex px-3 py-1.5 rounded-full border border-green-200 bg-green-50 text-green-600 text-[12px] font-bold">
                              <i className="fa-solid fa-circle-check mr-1.5 self-center"></i> Terverifikasi
                            </span>
                          ) : (
                            <span className="inline-flex px-3 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-amber-600 text-[12px] font-bold">
                              <i className="fa-solid fa-clock mr-1.5 self-center"></i> Menunggu Verifikasi
                            </span>
                          )}
                        </td>

                        <td className="px-6 py-5 text-center">
                          <button 
                            onClick={() => {
                              setSelectedDosen(item);
                              setViewDetail(true);
                            }}
                            className="px-5 py-2 font-bold rounded-lg text-[13px] transition-all flex items-center gap-2 mx-auto bg-white border border-slate-300 text-slate-600 hover:border-[#1687F5] hover:text-[#1687F5] shadow-sm active:scale-95"
                          >
                            <i className="fa-regular fa-eye"></i> Lihat
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}