import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DataHonor() {
  const [viewDetail, setViewDetail] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState("Ganjil 2026/2027");

  // === TAMPILAN HALAMAN DETAIL ===
  if (viewDetail) {
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

          {/* Header Detail */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-[26px] font-extrabold text-black mb-1">Rincian Perhitungan SKS</h1>
              <p className="text-[16px] text-slate-600 font-medium">
                Pemeriksaan detail komponen SKS untuk <span className="font-bold text-black">Dr. Budi Santoso, M.T.</span> pada periode {selectedSemester}
              </p>
            </div>
            <div className="flex items-center gap-2 text-amber-600 bg-orange-50 px-4 py-2 rounded-lg border border-orange-200">
              <i className="fa-solid fa-clock-rotate-left text-[16px]"></i>
              <span className="font-semibold text-[15px]">Menunggu Verifikasi Keuangan</span>
            </div>
          </div>

          {/* Kotak Info Dosen */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center justify-between mb-8 shadow-sm">
            <div className="flex flex-col">
              <span className="text-[14px] text-slate-500 font-bold mb-1 uppercase tracking-wider">Nama Dosen</span>
              <span className="text-[17px] font-bold text-black">Dr. Budi Santoso, M.T.</span>
            </div>
            <div className="w-[1px] h-12 bg-slate-200"></div>
            <div className="flex flex-col">
              <span className="text-[14px] text-slate-500 font-bold mb-1 uppercase tracking-wider">NIP / NIDN</span>
              <span className="text-[17px] font-bold text-black">198001012005</span>
            </div>
            <div className="w-[1px] h-12 bg-slate-200"></div>
            <div className="flex flex-col">
              <span className="text-[14px] text-slate-500 font-bold mb-1 uppercase tracking-wider">Program Studi</span>
              <span className="text-[17px] font-bold text-black">Teknik Informatika</span>
            </div>
            <div className="w-[1px] h-12 bg-slate-200"></div>
            <div className="flex flex-col">
              <span className="text-[14px] text-slate-500 font-bold mb-1 uppercase tracking-wider">Target Beban Wajib</span>
              <span className="text-[17px] font-bold text-[#1687F5]">10 SKS</span>
            </div>
          </div>

          {/* Layout Baru: flex-col (Atas-Bawah) */}
          <div className="flex flex-col gap-8 w-full">
            
            {/* Tabel Utama - Membentang Penuh, Hanya Menampilkan SKS Lebih */}
            <div className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-5 text-[14px] font-bold text-black tracking-wider">MATA KULIAH</th>
                    <th className="px-6 py-5 text-[14px] font-bold text-black tracking-wider">KELAS</th>
                    <th className="px-6 py-5 text-[14px] font-bold text-black tracking-wider text-center">JENIS KELAS</th>
                    <th className="px-6 py-5 text-[14px] font-bold text-black tracking-wider text-center">KATEGORI SKS</th>
                    <th className="px-6 py-5 text-[14px] font-bold text-black tracking-wider text-center">SKS LEBIH</th>
                    <th className="px-6 py-5 text-[14px] font-bold text-black tracking-wider text-center">WAKTU</th>
                    <th className="px-6 py-5 text-[14px] font-bold text-black tracking-wider text-right">TARIF/SKS</th>
                    <th className="px-6 py-5 text-[14px] font-bold text-black tracking-wider text-right">SUBTOTAL</th>
                  </tr>
                </thead>
                <tbody className="text-[14px] md:text-[15px] text-slate-700 font-medium">
                  
                  {/* Baris SKS Lebih 100% */}
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="px-6 py-5">Pemrograman Web Lanjut</td>
                    <td className="px-6 py-5">TI-5A</td>
                    <td className="px-6 py-5 text-center">
                      <span className="inline-block px-3 py-1 border border-slate-300 rounded text-slate-600 bg-white font-bold text-[11px] md:text-[12px]">Reguler</span>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className="px-3 py-1.5 border border-green-200 rounded-md text-green-700 bg-green-50 font-bold text-[11px] md:text-[12px]">Kelebihan SKS (100%)</span>
                    </td>
                    <td className="px-6 py-5 text-center font-bold text-[#1687F5]">4 SKS</td>
                    <td className="px-6 py-5 text-center text-slate-500">16 Minggu</td>
                    <td className="px-6 py-5 text-right text-slate-500">Rp 150.000</td>
                    <td className="px-6 py-5 text-right font-bold text-black">Rp 9.600.000</td>
                  </tr>
                  
                  {/* Baris SKS Lebih 100% - Badak */}
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="px-6 py-5">Mobile Programming</td>
                    <td className="px-6 py-5">TI-5B</td>
                    <td className="px-6 py-5 text-center">
                      <span className="inline-block px-3 py-1 border border-pink-200 rounded text-pink-600 bg-pink-50 font-bold text-[11px] md:text-[12px]">Badak</span>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className="px-3 py-1.5 border border-green-200 rounded-md text-green-700 bg-green-50 font-bold text-[11px] md:text-[12px]">Kelebihan SKS (100%)</span>
                    </td>
                    <td className="px-6 py-5 text-center font-bold text-[#1687F5]">2 SKS</td>
                    <td className="px-6 py-5 text-center text-slate-500">16 Minggu</td>
                    <td className="px-6 py-5 text-right text-slate-500">Rp 150.000</td>
                    <td className="px-6 py-5 text-right font-bold text-black">Rp 4.800.000</td>
                  </tr>

                  {/* Baris SKS Lebih 50% */}
                  <tr className="border-b border-slate-100 hover:bg-slate-50 bg-orange-50/30">
                    <td className="px-6 py-5">Basis Data Lanjut</td>
                    <td className="px-6 py-5">TI-3A</td>
                    <td className="px-6 py-5 text-center">
                      <span className="inline-block px-3 py-1 border border-blue-200 rounded text-blue-700 bg-blue-50 font-bold text-[11px] md:text-[12px]">Kerjasama CCIT</span>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className="px-3 py-1.5 border border-orange-200 rounded-md text-orange-700 bg-orange-50 font-bold text-[11px] md:text-[12px]">Kelebihan SKS (50%)</span>
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

            {/* Kotak Ringkasan Pembayaran - Pindah ke Bawah, Rata Kanan (self-end) */}
            <div className="w-full md:w-[500px] self-end bg-white border-2 border-slate-100 rounded-2xl p-8 shadow-sm">
              <h3 className="text-[18px] font-extrabold text-black mb-6 border-b border-slate-100 pb-4">Ringkasan Pembayaran</h3>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-[15px] text-slate-600 font-medium">Beban Mengajar Wajib</span>
                <span className="text-[15px] text-slate-400 font-bold">10 SKS (Tidak dihitung)</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[15px] text-slate-600 font-medium">Total Kelebihan SKS Diakui</span>
                <span className="text-[15px] text-[#1687F5] font-bold">8 SKS</span>
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
                <span className="text-[15px] text-slate-600 font-medium">Honor Bruto </span>
                <span className="text-[15px] text-black font-bold">Rp 16.800.000</span>
              </div>
              <div className="flex justify-between items-center mb-8">
                <span className="text-[15px] text-slate-600 font-medium">Potongan PPh 21 (5%)</span>
                <span className="text-[15px] text-red-500 font-bold">-Rp 840.000</span>
              </div>

              <div className="border-t-2 border-dashed border-slate-200 my-6"></div>
              
              <div className="flex justify-between items-center bg-blue-50 p-4 rounded-xl">
                <span className="text-[18px] text-[#1687F5] font-extrabold">Honor Netto</span>
                <span className="text-[18px] text-[#1687F5] font-extrabold">Rp 15.960.000</span>
              </div>
            </div>

          </div>

          <p className="mt-8 text-[13px] text-slate-500 flex items-center gap-2 font-medium">
            <i className="fa-solid fa-circle-info"></i> Mode Pengawasan (Read-Only). Sesuai Perdir PNJ No. 11 Tahun 2025. SKS Wajib tidak masuk komponen tagihan.
          </p>

        </div>
      </div>
    );
  }

  // === TAMPILAN HALAMAN DAFTAR UTAMA ===
  return (
    <div className="flex-1 w-full bg-[#f8fafc] font-sans p-8">
      <div className="w-full">
        
        {/* Header Judul & Dropdown Filter Semester */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h1 className="text-[28px] font-extrabold text-black mb-2">Data Honorarium Dosen</h1>
            <p className="text-[16px] text-slate-600 font-medium">Rincian perhitungan kelebihan SKS dan honor per individu.</p>
          </div>
          
          {/* Dropdown Filter Semester */}
          <div className="flex items-center bg-white border border-slate-300 rounded-lg px-4 py-2.5 shadow-sm">
            <i className="fa-solid fa-filter text-slate-400 mr-3 text-[15px]"></i>
            <select 
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="bg-transparent border-none text-[15px] font-bold text-slate-700 focus:outline-none cursor-pointer"
            >
              <option value="Ganjil 2026/2027">Ganjil 2026/2027</option>
              <option value="Genap 2025/2026">Genap 2025/2026 (Riwayat)</option>
              <option value="Ganjil 2025/2026">Ganjil 2025/2026 (Riwayat)</option>
            </select>
          </div>
        </div>
        
        {/* Tabel Data Honor - Ukuran text diperbesar */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-8 py-5 text-[15px] font-bold text-black">NO</th>
                <th className="px-8 py-5 text-[15px] font-bold text-black">NAMA DOSEN</th>
                <th className="px-8 py-5 text-[15px] font-bold text-black">NIP</th>
                <th className="px-8 py-5 text-[15px] font-bold text-black text-center">KELEBIHAN SKS</th>
                <th className="px-8 py-5 text-[15px] font-bold text-black text-center">STATUS</th>
                <th className="px-8 py-5 text-[15px] font-bold text-black text-center">AKSI</th>
              </tr>
            </thead>
            <tbody className="text-[16px] text-slate-700 font-medium">
              
              {/* Baris 1 - Terverifikasi */}
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="px-8 py-5">1</td>
                <td className="px-8 py-5 text-black ">Dr. Budi Santoso, M.T.</td>
                <td className="px-8 py-5">198001012005</td>
                <td className="px-8 py-5 text-center ">8 SKS</td>
                <td className="px-8 py-5 text-center">
                  <span className="inline-flex px-4 py-2 rounded-full border border-green-300 bg-green-50 text-green-700 text-[14px] font-bold">
                    Terverifikasi
                  </span>
                </td>
                <td className="px-8 py-5 text-center flex justify-center">
                  <button 
                    onClick={() => setViewDetail(true)}
                    className="flex items-center gap-2 px-5 py-2.5 border border-slate-300 rounded-lg hover:border-[#1687F5] hover:text-[#1687F5] hover:bg-blue-50 transition-all text-[15px] font-bold"
                  >
                    <i className="fa-regular fa-eye"></i> Lihat Detail
                  </button>
                </td>
              </tr>

              {/* Baris 2 - Menunggu Verifikasi */}
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="px-8 py-5">2</td>
                <td className="px-8 py-5 text-black ">Siti Aminah, S.Kom., M.Kom.</td>
                <td className="px-8 py-5">198505152010</td>
                <td className="px-8 py-5 text-center ">4 SKS</td>
                <td className="px-8 py-5 text-center">
                  <span className="inline-flex px-4 py-2 rounded-full border border-orange-300 bg-orange-50 text-orange-600 text-[14px] font-bold">
                    Menunggu Verifikasi
                  </span>
                </td>
                <td className="px-8 py-5 text-center flex justify-center">
                  <button 
                    onClick={() => setViewDetail(true)}
                    className="flex items-center gap-2 px-5 py-2.5 border border-slate-300 rounded-lg hover:border-[#1687F5] hover:text-[#1687F5] hover:bg-blue-50 transition-all text-[15px] font-bold"
                  >
                    <i className="fa-regular fa-eye"></i> Lihat Detail
                  </button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}