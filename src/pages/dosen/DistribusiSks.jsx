export default function DistribusiSks() {
  return (
    <div className="flex-1 w-full bg-[#f8fafc] font-sans p-8">
      <div className="w-full">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[28px] font-extrabold text-[#0F172A] mb-2">Distribusi SKS</h1>
          <p className="text-[15px] text-slate-500 font-medium">
            Rincian pemetaan beban mengajar wajib dan kelebihan SKS per mata kuliah.
          </p>
        </div>
        
        {/* Container Tabel dengan Overflow Horizontal */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden w-full">
          <div className="overflow-x-auto">
            {/* Menggunakan min-w-max agar tabel tidak terjepit jika layarnya kecil */}
            <table className="w-full text-center border-collapse min-w-max">
              <thead className="bg-[#F8FAFC] border-b border-slate-200">
                <tr>
                  <th className="px-4 py-4 text-[12px] font-bold text-slate-700 border-r border-slate-200">No</th>
                  <th className="px-4 py-4 text-[12px] font-bold text-slate-700 border-r border-slate-200">Jurusan</th>
                  <th className="px-4 py-4 text-[12px] font-bold text-slate-700 border-r border-slate-200">Program Studi</th>
                  <th className="px-4 py-4 text-[12px] font-bold text-slate-700 border-r border-slate-200">Jenis Kelas</th>
                  <th className="px-4 py-4 text-[12px] font-bold text-slate-700 border-r border-slate-200">Nama<br/>Kelas</th>
                  <th className="px-4 py-4 text-[12px] font-bold text-slate-700 border-r border-slate-200 text-left">Mata Kuliah</th>
                  <th className="px-3 py-4 text-[12px] font-bold text-slate-700 border-r border-slate-200">SKS<br/>MK</th>
                  <th className="px-4 py-4 text-[12px] font-bold text-slate-700 border-r border-slate-200">Metode<br/>Pengajaran</th>
                  <th className="px-3 py-4 text-[12px] font-bold text-slate-700 border-r border-slate-200">Jumlah<br/>Dosen</th>
                  <th className="px-3 py-4 text-[12px] font-bold text-slate-700 border-r border-slate-200">SKS<br/>Dosen</th>
                  <th className="px-4 py-4 text-[12px] font-bold text-slate-700 border-r border-slate-200 w-[110px]">Wajib<br/>Mengajar<br/>( 6 SKS )</th>
                  <th className="px-4 py-4 text-[12px] font-bold text-slate-700 border-r border-slate-200 w-[120px]">Kelebihan SKS<br/>Pembayaran<br/>100%<br/>( WM + 6 SKS )</th>
                  <th className="px-4 py-4 text-[12px] font-bold text-slate-700 border-r border-slate-200 w-[120px]">Kelebihan SKS<br/>Pembayaran<br/>50%<br/>( 100% + 4 SKS )</th>
                  <th className="px-4 py-4 text-[12px] font-bold text-slate-700 w-[110px]">Kelebihan<br/>SKS<br/>Tidak<br/>dibayarkan</th>
                </tr>
              </thead>
              <tbody className="text-[13px] text-slate-600 font-medium">
                
                {/* Baris 1 */}
                <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-4 border-r border-slate-200">1</td>
                  <td className="px-4 py-4 border-r border-slate-200">Teknik Informatika dan<br/>Komputer</td>
                  <td className="px-4 py-4 border-r border-slate-200">Sarjana Terapan - Teknik<br/>Informatika</td>
                  <td className="px-4 py-4 border-r border-slate-200">Reguler</td>
                  <td className="px-4 py-4 border-r border-slate-200"><a href="#" className="text-[#00B074] font-bold underline hover:text-emerald-700">5A</a></td>
                  <td className="px-4 py-4 border-r border-slate-200 text-left">(TIK502) Perencanaan<br/>Sistem</td>
                  <td className="px-3 py-4 border-r border-slate-200">3</td>
                  <td className="px-4 py-4 border-r border-slate-200">Non Team<br/>Teaching</td>
                  <td className="px-3 py-4 border-r border-slate-200">1</td>
                  <td className="px-3 py-4 border-r border-slate-200">3</td>
                  <td className="px-4 py-4 border-r border-slate-200"><span className="inline-block bg-[#4B5563] text-white px-3 py-1 rounded-full font-bold text-[11px]">3 SKS</span></td>
                  <td className="px-4 py-4 border-r border-slate-200 text-slate-400">-</td>
                  <td className="px-4 py-4 border-r border-slate-200 text-slate-400">-</td>
                  <td className="px-4 py-4 text-slate-400">-</td>
                </tr>

                {/* Baris 2 */}
                <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-4 border-r border-slate-200">2</td>
                  <td className="px-4 py-4 border-r border-slate-200">Teknik Informatika dan<br/>Komputer</td>
                  <td className="px-4 py-4 border-r border-slate-200">Sarjana Terapan - Teknik<br/>Informatika</td>
                  <td className="px-4 py-4 border-r border-slate-200">Reguler</td>
                  <td className="px-4 py-4 border-r border-slate-200"><a href="#" className="text-[#00B074] font-bold underline hover:text-emerald-700">5C</a></td>
                  <td className="px-4 py-4 border-r border-slate-200 text-left">(TIK502) Perencanaan<br/>Sistem</td>
                  <td className="px-3 py-4 border-r border-slate-200">3</td>
                  <td className="px-4 py-4 border-r border-slate-200">Team Teaching<br/>Seri</td>
                  <td className="px-3 py-4 border-r border-slate-200">1</td>
                  <td className="px-3 py-4 border-r border-slate-200">3</td>
                  <td className="px-4 py-4 border-r border-slate-200"><span className="inline-block bg-[#4B5563] text-white px-3 py-1 rounded-full font-bold text-[11px]">3 SKS</span></td>
                  <td className="px-4 py-4 border-r border-slate-200 text-slate-400">-</td>
                  <td className="px-4 py-4 border-r border-slate-200 text-slate-400">-</td>
                  <td className="px-4 py-4 text-slate-400">-</td>
                </tr>

                {/* Baris 3 */}
                <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-4 border-r border-slate-200">3</td>
                  <td className="px-4 py-4 border-r border-slate-200">Teknik Informatika dan<br/>Komputer</td>
                  <td className="px-4 py-4 border-r border-slate-200">Sarjana Terapan - Teknik<br/>Multimedia dan Jaringan</td>
                  <td className="px-4 py-4 border-r border-slate-200">Reguler</td>
                  <td className="px-4 py-4 border-r border-slate-200"><a href="#" className="text-[#00B074] font-bold underline hover:text-emerald-700">1B</a></td>
                  <td className="px-4 py-4 border-r border-slate-200 text-left">(TMJ110) Algoritma dan<br/>Pemrograman</td>
                  <td className="px-3 py-4 border-r border-slate-200">3</td>
                  <td className="px-4 py-4 border-r border-slate-200">Non Team<br/>Teaching</td>
                  <td className="px-3 py-4 border-r border-slate-200">1</td>
                  <td className="px-3 py-4 border-r border-slate-200">3</td>
                  <td className="px-4 py-4 border-r border-slate-200 text-slate-400">-</td>
                  <td className="px-4 py-4 border-r border-slate-200"><span className="inline-block bg-[#00B074] text-white px-3 py-1 rounded-full font-bold text-[11px]">3 SKS</span></td>
                  <td className="px-4 py-4 border-r border-slate-200 text-slate-400">-</td>
                  <td className="px-4 py-4 text-slate-400">-</td>
                </tr>

                {/* Baris 4 */}
                <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-4 border-r border-slate-200">4</td>
                  <td className="px-4 py-4 border-r border-slate-200">Teknik Informatika dan<br/>Komputer</td>
                  <td className="px-4 py-4 border-r border-slate-200">Sarjana Terapan - Teknik<br/>Informatika</td>
                  <td className="px-4 py-4 border-r border-slate-200">Reguler</td>
                  <td className="px-4 py-4 border-r border-slate-200"><a href="#" className="text-[#00B074] font-bold underline hover:text-emerald-700">3A</a></td>
                  <td className="px-4 py-4 border-r border-slate-200 text-left">(TIK304) Kecerdasan<br/>Buatan</td>
                  <td className="px-3 py-4 border-r border-slate-200">2</td>
                  <td className="px-4 py-4 border-r border-slate-200">Non Team<br/>Teaching</td>
                  <td className="px-3 py-4 border-r border-slate-200">1</td>
                  <td className="px-3 py-4 border-r border-slate-200">2</td>
                  <td className="px-4 py-4 border-r border-slate-200 text-slate-400">-</td>
                  <td className="px-4 py-4 border-r border-slate-200"><span className="inline-block bg-[#00B074] text-white px-3 py-1 rounded-full font-bold text-[11px]">2 SKS</span></td>
                  <td className="px-4 py-4 border-r border-slate-200 text-slate-400">-</td>
                  <td className="px-4 py-4 text-slate-400">-</td>
                </tr>

                {/* Baris 5 */}
                <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-4 border-r border-slate-200">5</td>
                  <td className="px-4 py-4 border-r border-slate-200">Pascasarjana</td>
                  <td className="px-4 py-4 border-r border-slate-200">Magister Terapan - Teknik<br/>Elektro</td>
                  <td className="px-4 py-4 border-r border-slate-200">Pascasarjana</td>
                  <td className="px-4 py-4 border-r border-slate-200"><a href="#" className="text-[#00B074] font-bold underline hover:text-emerald-700">1A</a></td>
                  <td className="px-4 py-4 border-r border-slate-200 text-left">(MTE103) Algoritma dan<br/>Pemodelan</td>
                  <td className="px-3 py-4 border-r border-slate-200">2</td>
                  <td className="px-4 py-4 border-r border-slate-200">Non Team<br/>Teaching</td>
                  <td className="px-3 py-4 border-r border-slate-200">1</td>
                  <td className="px-3 py-4 border-r border-slate-200">2</td>
                  <td className="px-4 py-4 border-r border-slate-200 text-slate-400">-</td>
                  <td className="px-4 py-4 border-r border-slate-200"><span className="inline-block bg-[#00B074] text-white px-3 py-1 rounded-full font-bold text-[11px]">1 SKS</span></td>
                  <td className="px-4 py-4 border-r border-slate-200"><span className="inline-block bg-[#00B074] text-white px-3 py-1 rounded-full font-bold text-[11px]">1 SKS</span></td>
                  <td className="px-4 py-4 text-slate-400">-</td>
                </tr>

                {/* Baris 6 */}
                <tr className="border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-4 border-r border-slate-200">6</td>
                  <td className="px-4 py-4 border-r border-slate-200">Pascasarjana</td>
                  <td className="px-4 py-4 border-r border-slate-200">Magister Terapan - Teknik<br/>Elektro</td>
                  <td className="px-4 py-4 border-r border-slate-200">Pascasarjana</td>
                  <td className="px-4 py-4 border-r border-slate-200"><a href="#" className="text-[#00B074] font-bold underline hover:text-emerald-700">3A</a></td>
                  <td className="px-4 py-4 border-r border-slate-200 text-left">(MTE307) Pervasive<br/>Computing</td>
                  <td className="px-3 py-4 border-r border-slate-200">3</td>
                  <td className="px-4 py-4 border-r border-slate-200">Team Teaching<br/>Seri</td>
                  <td className="px-3 py-4 border-r border-slate-200">2</td>
                  <td className="px-3 py-4 border-r border-slate-200">1.5</td>
                  <td className="px-4 py-4 border-r border-slate-200 text-slate-400">-</td>
                  <td className="px-4 py-4 border-r border-slate-200 text-slate-400">-</td>
                  <td className="px-4 py-4 border-r border-slate-200"><span className="inline-block bg-[#00B074] text-white px-3 py-1 rounded-full font-bold text-[11px]">1.5 SKS</span></td>
                  <td className="px-4 py-4 text-slate-400">-</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}