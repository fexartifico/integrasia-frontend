
import React, { useState } from 'react';

export default function HonorNonPengajaranDosen() {
  // State Filter Periode
  const [filterPeriode, setFilterPeriode] = useState('Ganjil 2026/2027');

  // State Tab untuk memisahkan kategori
  const [activeTab, setActiveTab] = useState('Pendidikan');

  // Kategori valid per tab
  const categoriesPendidikan = [
    'Pembimbing Utama Tesis', 
    'Pembimbing Pendamping Tesis', 
    'Pembimbing Skripsi/TA', 
    'Pembimbing PKL/Magang', 
    'Penguji Tesis', 
    'Penguji Skripsi/TA', 
    'Pembimbing Akademik'
  ];

  const categoriesPenunjang = [
    'Penguji Seminar Proposal Mhs Skripsi/TA/Tesis'
  ];

  // ================= DATA DUMMY DOSEN (Simulasi Dosen yang sedang Login) =================
  const [dosenData] = useState({
    nama: "Dr. Budi Santoso, M.T.",
    nip: "198001012005011001",
    jabatan: "Kaprodi",
    golongan: "Gol IV/a",
    status: "Terverifikasi Keuangan", // Status verifikasi saat ini
    rincianGroups: [
      // --- DATA PENDIDIKAN ---
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
      // --- DATA PENUNJANG ---
      {
        jenis: "Penguji Seminar Proposal Mhs Skripsi/TA/Tesis",
        kegiatan: "Penguji Seminar Proposal",
        judul: "Sistem Pakar Diagnosa Penyakit",
        mahasiswaList: [
          { mhs: "Ahmad Dani", sks: 0.5, status: "Beban lebih", tarif: "Rp 186.000 x 40%", subtotal: 74400 },
          { mhs: "Ari Lasso", sks: 2, status: "Selesai", tarif: "Rp 186.000 x 40%", subtotal: 74400 }
        ],
        totalMahasiswa: 2,
        totalSubtotal: 148800
      }
    ]
  });

  // Logika Pemisahan Data Berdasarkan Tab Aktif
  const validCategories = activeTab === 'Pendidikan' ? categoriesPendidikan : categoriesPenunjang;
  const filteredGroups = dosenData.rincianGroups.filter(g => validCategories.includes(g.jenis));
  
  // Kalkulasi Keuangan per Tab
  const tabBruto = filteredGroups.reduce((acc, curr) => acc + curr.totalSubtotal, 0);
  const tabPph = Math.round(tabBruto * (dosenData.golongan.includes('IV') ? 0.15 : 0.05));
  const tabNetto = tabBruto - tabPph;

  const stringPenjumlahan = filteredGroups.map(g => `Rp ${g.totalSubtotal.toLocaleString('id-ID')}`).join(' + ');

  return (
    <div className="flex-1 w-full bg-[#f8fafc] font-sans p-8 relative">
      <div className="w-full">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6">
          <div>
            <h1 className="text-[28px] font-extrabold text-black mb-2">Rincian Honor Non-Pengajaran</h1>
            <div className="flex items-center gap-3 text-slate-600 font-medium text-[15px]">
              <span>{dosenData.nama}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
              <span>NIP. {dosenData.nip}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
              <span className="font-bold text-[#1687F5]">{dosenData.golongan}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
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

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-bold text-slate-700">Status Pembayaran</label>
              {dosenData.status === "Terverifikasi Keuangan" ? (
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 font-bold text-[14px] shadow-sm">
                  <i className="fa-solid fa-circle-check"></i> Terverifikasi Keuangan
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50 text-amber-600 font-bold text-[14px] shadow-sm">
                  <i className="fa-solid fa-clock"></i> Menunggu Verifikasi
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tab Navigasi Menu */}
        <div className="flex items-center gap-6 border-b border-slate-300 mb-6">
          <button 
            onClick={() => setActiveTab('Pendidikan')}
            className={`pb-3 text-[16px] font-bold transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'Pendidikan' 
                ? 'text-[#1687F5] border-[#1687F5]' 
                : 'text-slate-500 border-transparent hover:text-slate-700'
            }`}
          >
            <i className="fa-solid fa-graduation-cap"></i> Pendidikan
          </button>
          <button 
            onClick={() => setActiveTab('Penunjang')}
            className={`pb-3 text-[16px] font-bold transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'Penunjang' 
                ? 'text-[#1687F5] border-[#1687F5]' 
                : 'text-slate-500 border-transparent hover:text-slate-700'
            }`}
          >
            <i className="fa-solid fa-chalkboard-user"></i> Penunjang
          </button>
        </div>

        {/* Detail Tabel Data (Sesuai Referensi Gambar) */}
        <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
          
          {filteredGroups.length === 0 ? (
            <div className="text-center py-10 text-slate-500 font-medium">
              Belum ada rincian kegiatan untuk kategori ini pada periode terpilih.
            </div>
          ) : (
            filteredGroups.map((group, gIdx) => (
              <div key={gIdx} className="mb-8 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[13px] border-collapse min-w-max">
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
                          <td className="px-5 py-3 font-bold text-slate-800 w-[20%]">{group.kegiatan}</td>
                          <td className="px-5 py-3 w-[25%]">{group.judul}</td>
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
                        <td colSpan="2" className="px-5 py-4 text-[14px]">Total</td>
                        <td className="px-5 py-4 text-left">{group.totalMahasiswa}</td>
                        <td colSpan="3"></td>
                        <td className="px-5 py-4 text-right text-[14px]">Rp {group.totalSubtotal.toLocaleString('id-ID')}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            ))
          )}

          {/* Kotak Summary (Ringkasan Honor Bruto & Netto Paling Bawah) */}
          {filteredGroups.length > 0 && (
            <div className="bg-slate-200 border border-slate-300 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center mt-10">
              <div className="w-full md:w-auto">
                <div className="text-[14px] text-slate-600 font-bold mb-3">Ringkasan Honor Tab Ini</div>
                <div className="text-[14px] text-slate-700 mt-1 flex flex-wrap items-center gap-2 font-medium">
                  <span>Bruto : <span className="font-bold text-slate-900">{stringPenjumlahan || 0} = Rp {tabBruto.toLocaleString('id-ID')}</span></span>
                  <span className="text-slate-400 mx-2">|</span>
                  <span>Potongan PPH 21 : <span className="font-bold text-red-500">-Rp {tabPph.toLocaleString('id-ID')}</span></span>
                </div>
              </div>
              
              <div className="w-full md:w-auto text-left md:text-right border-t md:border-t-0 md:border-l border-slate-400 pt-4 md:pt-0 md:pl-8 mt-4 md:mt-0">
                <div className="text-[12px] text-slate-500 font-bold uppercase tracking-wider mb-1">Total Netto {activeTab}</div>
                <div className="text-[22px] font-black text-[#1687F5]">Rp {tabNetto.toLocaleString('id-ID')}</div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}