import { useState } from 'react';

export default function HonorariumDosen() {
  // State untuk filter semester
  const [selectedSemester, setSelectedSemester] = useState("Ganjil 2026/2027");

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
          
          <div className="flex items-center gap-4">
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
              <span className="font-semibold text-[15px]">Menunggu Verifikasi Keuangan</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full">
          
          {/* Tabel Rincian Kelas - Dipisah Kolom JENIS KELAS */}
          <div className="w-full">
            <table className="w-full text-left border-collapse border border-slate-300 bg-white rounded-xl shadow-sm overflow-hidden">
              <thead className="bg-slate-50 border-b border-slate-300">
                <tr>
                  <th className="px-6 py-5 text-[14px] font-bold text-black">MATA KULIAH</th>
                  <th className="px-6 py-5 text-[14px] font-bold text-black">KELAS</th>
                  <th className="px-6 py-5 text-[14px] font-bold text-black text-center">JENIS KELAS</th>
                  <th className="px-6 py-5 text-[14px] font-bold text-black text-center">KATEGORI SKS</th>
                  <th className="px-6 py-5 text-[14px] font-bold text-black text-center">SKS LEBIH</th>
                  <th className="px-6 py-5 text-[14px] font-bold text-black text-center">WAKTU</th>
                  <th className="px-6 py-5 text-[14px] font-bold text-black text-right">TARIF/SKS</th>
                  <th className="px-6 py-5 text-[14px] font-bold text-black text-right">Honor Bruto</th>
                </tr>
              </thead>
              <tbody className="text-[14px] md:text-[15px] text-slate-700 font-medium">
                
                {/* Baris SKS Lebih 100% */}
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-5 font-bold text-black">Pemrograman Web Lanjut</td>
                  <td className="px-6 py-5">TI-5A</td>
                  <td className="px-6 py-5 text-center">
                    <span className="inline-block px-3 py-1 border border-slate-300 rounded text-slate-600 bg-white font-bold text-[11px] md:text-[12px]">Reguler</span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className="px-3 py-1.5 border border-green-200 rounded-md text-green-700 bg-green-50 font-bold text-[12px]">Kelebihan SKS (100%)</span>
                  </td>
                  <td className="px-6 py-5 text-center font-bold text-[#1687F5]">4 SKS</td>
                  <td className="px-6 py-5 text-center text-slate-500">16 Minggu</td>
                  <td className="px-6 py-5 text-right text-slate-500">Rp 150.000</td>
                  <td className="px-6 py-5 text-right font-bold text-black">Rp 9.600.000</td>
                </tr>
                
                {/* Baris SKS Lebih 100% - Kelas Badak */}
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-5 font-bold text-black">Mobile Programming</td>
                  <td className="px-6 py-5">TI-5B</td>
                  <td className="px-6 py-5 text-center">
                    <span className="inline-block px-3 py-1 border border-pink-200 rounded text-pink-600 bg-pink-50 font-bold text-[11px] md:text-[12px]">Badak</span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className="px-3 py-1.5 border border-green-200 rounded-md text-green-700 bg-green-50 font-bold text-[12px]">Kelebihan SKS (100%)</span>
                  </td>
                  <td className="px-6 py-5 text-center font-bold text-[#1687F5]">2 SKS</td>
                  <td className="px-6 py-5 text-center text-slate-500">16 Minggu</td>
                  <td className="px-6 py-5 text-right text-slate-500">Rp 150.000</td>
                  <td className="px-6 py-5 text-right font-bold text-black">Rp 4.800.000</td>
                </tr>

                {/* Baris SKS Lebih 50% - Batas Kuota 100% Habis */}
                <tr className="border-b border-slate-200 hover:bg-slate-50 bg-orange-50/30">
                  <td className="px-6 py-5 font-bold text-black">Basis Data Lanjut</td>
                  <td className="px-6 py-5">TI-3A</td>
                  <td className="px-6 py-5 text-center">
                    <span className="inline-block px-3 py-1 border border-blue-200 rounded text-blue-700 bg-blue-50 font-bold text-[11px] md:text-[12px]">Kerjasama CCIT</span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className="px-3 py-1.5 border border-orange-200 rounded-md text-orange-700 bg-orange-50 font-bold text-[12px]">Kelebihan SKS (50%)</span>
                  </td>
                  <td className="px-6 py-5 text-center font-bold text-orange-600">2 SKS</td>
                  <td className="px-6 py-5 text-center text-slate-500">16 Minggu</td>
                  <td className="px-6 py-5 text-right">
                    <div className="text-slate-400 line-through text-[12px]">Rp 150.000</div>
                    <div className="text-orange-600 font-bold">Rp 75.000</div>
                  </td>
                  <td className="px-6 py-5 text-right font-bold text-black">Rp 2.400.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Kotak Ringkasan Keuangan - Rata Kanan */}
          <div className="w-full md:w-[500px] self-end flex flex-col gap-4">
            
            <div className="bg-[#FAFAFA] border border-slate-300 rounded-2xl p-8 shadow-sm">
              <h3 className="text-[17px] font-extrabold text-black mb-6 border-b border-slate-200 pb-3">Ringkasan Honorarium Semester Ini</h3>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-[14px] text-slate-600 font-medium">Beban Mengajar Wajib</span>
                <span className="text-[14px] text-slate-400 font-medium">10 SKS (Tidak dihitung)</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[14px] text-slate-600 font-medium">Total Kelebihan SKS Diakui</span>
                <span className="text-[14px] text-black font-bold">8 SKS</span>
              </div>
              
              <div className="ml-4 mb-6 border-l-2 border-slate-200 pl-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[13px] text-slate-500">• Kuota 100% (Maks 6 SKS)</span>
                  <span className="text-[13px] text-green-600 font-bold">6 SKS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[13px] text-slate-500">• Kuota 50% (Sisa)</span>
                  <span className="text-[13px] text-orange-500 font-bold">2 SKS</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-[15px] text-slate-800 font-bold">Honor Bruto </span>
                <span className="text-[15px] text-black font-extrabold">Rp 16.800.000</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[15px] text-slate-800 font-medium">Potongan PPh 21 (5%)</span>
                <span className="text-[15px] text-red-500 font-bold">-Rp 840.000</span>
              </div>

              <div className="border-t border-dashed border-slate-400 mb-6"></div>
              
              <div className="flex justify-between items-center">
                <span className="text-[20px] text-[#1687F5] font-extrabold">Honor Netto</span>
                <span className="text-[20px] text-[#1687F5] font-extrabold">Rp 15.960.000</span>
              </div>
            </div>

            <p className="mt-2 text-[12px] text-slate-500 flex items-center justify-end gap-2 font-medium">
              <i className="fa-solid fa-circle-info bg-slate-400 text-white rounded-full p-0.5 text-[10px]"></i> Sesuai Perdir PNJ No. 11 Tahun 2025. SKS Wajib tidak masuk tagihan.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}