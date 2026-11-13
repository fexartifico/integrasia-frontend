import { useState } from 'react';

export default function HonorariumDosen() {
  // State untuk filter semester
  const [selectedSemester, setSelectedSemester] = useState("Ganjil 2026/2027");

  // Data Spesifik Bu Dewi Yanti Liliana
  const [dosenData] = useState({
    nama: "DEWI YANTI LILIANA",
    nip: "198111162005012004",
    prodi: "Teknik Informatika",
    jabatan: "Lektor Kepala (IV/a)",
    golongan: "Gol IV",
    kelebihanSks: "17 SKS",
    targetSks: "10 SKS",
    status: "Menunggu Verifikasi Keuangan",
    sksBreakdown: {
      kuota100: "6 SKS",
      kuota50: "4 SKS",
      kuota0: "7 SKS"
    },
    mataKuliahList: [
      {
        mataKuliah: "Machine Learning",
        kelas: "6ACCIT",
        metodePengajaran: "Non Team Teaching",
        kategoriSks: "100%",
        sksLebih: "2 SKS",
        waktu: "16 Minggu",
        tarifBase: 250000,
        tarifEfektif: 250000,
        subtotal: 8000000
      },
      {
        mataKuliah: "Natural Language Processing",
        kelas: "6AMSU",
        metodePengajaran: "Non Team Teaching",
        kategoriSks: "100%",
        sksLebih: "2 SKS",
        waktu: "16 Minggu",
        tarifBase: 300000,
        tarifEfektif: 300000,
        subtotal: 9600000
      },
      {
        mataKuliah: "Natural Language Processing",
        kelas: "6B",
        metodePengajaran: "Non Team Teaching",
        kategoriSks: "100%",
        sksLebih: "2 SKS",
        waktu: "16 Minggu",
        tarifBase: 160000,
        tarifEfektif: 160000,
        subtotal: 5120000
      },
      {
        mataKuliah: "Machine Learning",
        kelas: "6A",
        metodePengajaran: "Non Team Teaching",
        kategoriSks: "50%",
        sksLebih: "2 SKS",
        waktu: "16 Minggu",
        tarifBase: 160000,
        tarifEfektif: 80000,
        subtotal: 2560000
      },
      {
        mataKuliah: "Pengolahan Citra Digital",
        kelas: "4A",
        metodePengajaran: "Non Team Teaching",
        kategoriSks: "50%",
        sksLebih: "2 SKS",
        waktu: "16 Minggu",
        tarifBase: 160000,
        tarifEfektif: 80000,
        subtotal: 2560000
      },
      {
        mataKuliah: "Artificial Intelligence (AI)",
        kelas: "2A",
        metodePengajaran: "Team Teaching",
        kategoriSks: "0%",
        sksLebih: "2 SKS",
        waktu: "8 Minggu",
        tarifBase: 160000,
        tarifEfektif: 0,
        subtotal: 0
      },
      {
        mataKuliah: "Kecerdasan Buatan untuk Game",
        kelas: "6A",
        metodePengajaran: "Non Team Teaching",
        kategoriSks: "0%",
        sksLebih: "3 SKS",
        waktu: "16 Minggu",
        tarifBase: 160000,
        tarifEfektif: 0,
        subtotal: 0
      },
      {
        mataKuliah: "Kecerdasan Buatan & Machine Learning",
        kelas: "4A",
        metodePengajaran: "Non Team Teaching",
        kategoriSks: "0%",
        sksLebih: "2 SKS",
        waktu: "16 Minggu",
        tarifBase: 160000,
        tarifEfektif: 0,
        subtotal: 0
      }
    ]
  });

  // Kalkulasi Otomatis Honor Bruto & Netto berdasarkan subtotal > 0
  const honorBrutoVal = dosenData.mataKuliahList.reduce((acc, item) => acc + item.subtotal, 0);
  const pphPercent = dosenData.golongan === 'Gol IV' ? 0.15 : 0.05;
  const pajakPphVal = Math.round(honorBrutoVal * pphPercent);
  const honorNettoVal = honorBrutoVal - pajakPphVal;

  return (
    <div className="flex-1 w-full bg-[#f8fafc] font-sans p-8">
      <div className="w-full">
        
        {/* Header Detail & Filter Semester */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h1 className="text-[28px] font-extrabold text-black mb-2">Rincian Honorarium</h1>
            <p className="text-[16px] text-slate-600 font-medium">
              Penjabaran mata kuliah dan perhitungan nominal Kelebihan SKS periode ini.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            {/* Filter Semester */}
            <div className="flex items-center bg-white border border-slate-300 rounded-lg px-3 py-2 shadow-sm">
              <i className="fa-solid fa-filter text-slate-400 mr-2 text-[14px]"></i>
              <select 
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="bg-transparent border-none text-[14px] font-bold text-slate-700 focus:outline-none cursor-pointer"
              >
                <option value="Ganjil 2026/2027">Ganjil 2026/2027</option>
                <option value="Genap 2025/2026">Genap 2025/2026 (Riwayat)</option>
                <option value="Ganjil 2025/2026">Ganjil 2025/2026 (Riwayat)</option>
              </select>
            </div>
            
            {/* Status Batch */}
            <div className="flex items-center gap-2 text-orange-600 bg-orange-50 px-5 py-2.5 rounded-lg border border-orange-200 shadow-sm">
              <i className="fa-solid fa-clock-rotate-left text-[16px]"></i>
              <span className="font-semibold text-[15px]">{dosenData.status}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full">
          
          {/* Tabel Rincian Kelas */}
          <div className="w-full bg-white border border-slate-300 rounded-xl shadow-sm overflow-hidden overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-max">
              <thead className="bg-slate-50 border-b border-slate-300">
                <tr>
                  <th className="px-6 py-5 text-[14px] font-bold text-black">MATA KULIAH</th>
                  <th className="px-6 py-5 text-[14px] font-bold text-black text-center">KELAS</th>
                  <th className="px-6 py-5 text-[14px] font-bold text-black text-center">METODE PENGAJARAN</th>
                  <th className="px-6 py-5 text-[14px] font-bold text-black text-center">KATEGORI SKS</th>
                  <th className="px-6 py-5 text-[14px] font-bold text-black text-center">SKS LEBIH</th>
                  <th className="px-6 py-5 text-[14px] font-bold text-black text-center">WAKTU</th>
                  <th className="px-6 py-5 text-[14px] font-bold text-black text-right">TARIF/SKS</th>
                  <th className="px-6 py-5 text-[14px] font-bold text-black text-right">Honor Bruto</th>
                </tr>
              </thead>
              <tbody className="text-[14px] md:text-[15px] text-slate-700 font-medium divide-y divide-slate-200">
                {dosenData.mataKuliahList.map((item, idx) => (
                  <tr 
                    key={idx} 
                    className={`hover:bg-slate-50 transition-colors ${
                      item.kategoriSks === '50%' 
                        ? 'bg-orange-50/20' 
                        : item.kategoriSks === '0%' 
                        ? 'bg-slate-50/40 text-slate-400' 
                        : ''
                    }`}
                  >
                    <td className="px-6 py-5 font-bold text-slate-900">{item.mataKuliah}</td>
                    <td className="px-6 py-5 text-center">
                      <span className={`inline-block px-3 py-1 border rounded-md font-bold text-[12px] ${
                        item.kelas.includes('MSU') 
                          ? 'border-red-200 text-red-600 bg-red-50' 
                          : item.kelas.includes('CCIT') 
                          ? 'border-blue-200 text-blue-700 bg-blue-50' 
                          : 'border-slate-300 text-slate-700 bg-slate-100'
                      }`}>
                        {item.kelas}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-center text-slate-600 font-medium">{item.metodePengajaran}</td>
                    <td className="px-6 py-5 text-center">
                      <span className={`px-3 py-1.5 border rounded-md font-bold text-[11px] md:text-[12px] ${
                        item.kategoriSks === '100%' 
                          ? 'border-green-200 text-green-700 bg-green-50' 
                          : item.kategoriSks === '50%' 
                          ? 'border-orange-200 text-orange-700 bg-orange-50' 
                          : 'border-slate-200 text-slate-400 bg-slate-100'
                      }`}>
                        Kelebihan SKS ({item.kategoriSks})
                      </span>
                    </td>
                    <td className={`px-6 py-5 text-center font-bold ${item.kategoriSks === '0%' ? 'text-slate-400' : 'text-[#1687F5]'}`}>
                      {item.sksLebih}
                    </td>
                    <td className="px-6 py-5 text-center text-slate-500">{item.waktu}</td>
                    
                    {/* TARIF/SKS */}
                    <td className="px-6 py-5 text-right">
                      {item.kategoriSks === '100%' ? (
                        <span className="text-slate-500">Rp {item.tarifBase.toLocaleString('id-ID')}</span>
                      ) : item.kategoriSks === '50%' ? (
                        <div>
                          <div className="text-slate-400 line-through text-[12px]">Rp {item.tarifBase.toLocaleString('id-ID')}</div>
                          <div className="text-orange-600 font-bold">Rp {item.tarifEfektif.toLocaleString('id-ID')}</div>
                        </div>
                      ) : (
                        <div>
                          <div className="text-slate-400 line-through text-[12px]">Rp {item.tarifBase.toLocaleString('id-ID')}</div>
                          <div className="text-slate-400 font-bold">Rp 0</div>
                        </div>
                      )}
                    </td>

                    {/* Honor Bruto Per Matkul */}
                    <td className="px-6 py-5 text-right font-bold text-black">
                      {item.subtotal > 0 ? (
                        `Rp ${item.subtotal.toLocaleString('id-ID')}`
                      ) : (
                        <span className="text-slate-400 font-normal">Rp 0</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Kotak Ringkasan Keuangan - Rata Kanan */}
          <div className="w-full md:w-[500px] self-end flex flex-col gap-4">
            
            <div className="bg-[#FAFAFA] border border-slate-300 rounded-2xl p-8 shadow-sm">
              <h3 className="text-[17px] font-extrabold text-black mb-6 border-b border-slate-200 pb-3">Ringkasan Honorarium Semester Ini</h3>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-[14px] text-slate-600 font-medium">Beban Mengajar Wajib</span>
                <span className="text-[14px] text-slate-400 font-medium">{dosenData.targetSks} (Tidak dihitung)</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[14px] text-slate-600 font-medium">Total Kelebihan SKS Diakui</span>
                <span className="text-[14px] text-[#1687F5] font-bold">{dosenData.kelebihanSks}</span>
              </div>
              
              <div className="ml-4 mb-6 border-l-2 border-slate-200 pl-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[13px] text-slate-500">Kuota 100% (Maks 6 SKS)</span>
                  <span className="text-[13px] text-green-600 font-bold">{dosenData.sksBreakdown.kuota100}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[13px] text-slate-500">Kuota 50% (Sisa)</span>
                  <span className="text-[13px] text-orange-500 font-bold">{dosenData.sksBreakdown.kuota50}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[13px] text-slate-500">Kuota 0% (Tidak Dibayar)</span>
                  <span className="text-[13px] text-slate-400 font-bold">{dosenData.sksBreakdown.kuota0}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-[15px] text-slate-800 font-bold">Honor Bruto</span>
                <span className="text-[15px] text-black font-extrabold">Rp {honorBrutoVal.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[15px] text-slate-800 font-medium">Potongan PPh 21 ({dosenData.golongan === 'Gol IV' ? '15%' : '5%'})</span>
                <span className="text-[15px] text-red-500 font-bold">-Rp {pajakPphVal.toLocaleString('id-ID')}</span>
              </div>

              <div className="border-t border-dashed border-slate-400 mb-6"></div>
              
              <div className="flex justify-between items-center bg-blue-50 p-4 rounded-xl">
                <span className="text-[18px] text-[#1687F5] font-extrabold">Honor Netto</span>
                <span className="text-[18px] text-[#1687F5] font-extrabold">Rp {honorNettoVal.toLocaleString('id-ID')}</span>
              </div>
            </div>

            <p className="mt-2 text-[12px] text-slate-500 flex items-center justify-end gap-2 font-medium">
              <i className="fa-solid fa-circle-info bg-slate-400 text-white rounded-full p-0.5 text-[10px]"></i> Sesuai Perdir PNJ. SKS Wajib tidak masuk tagihan honor kelebihan SKS.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}