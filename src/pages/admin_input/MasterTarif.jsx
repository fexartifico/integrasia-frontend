export default function MasterTarif() {
  return (
    <div className="flex-1 w-full bg-[#f8fafc] font-sans p-8">
      <div className="w-full">
        
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-[28px] font-extrabold text-black mb-2">Master Data Tarif SKS</h1>
            <p className="text-[16px] text-slate-600 font-medium">Kelola besaran nominal honor berdasarkan PT Kerjasama, Jenis Kelas, dan Jabatan.</p>
          </div>
          <button className="bg-[#1687F5] hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold text-[14px] flex items-center gap-2 shadow-sm transition-all">
            <i className="fa-solid fa-plus text-sm"></i>
            Tambah Tarif Baru
          </button>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-5 text-[15px] font-bold text-black">Jenis</th>
                <th className="px-6 py-5 text-[15px] font-bold text-black">PT Kerjasama</th>
                <th className="px-6 py-5 text-[15px] font-bold text-black">JENIS KELAS</th>
                <th className="px-6 py-5 text-[15px] font-bold text-black">Jabatan / Golongan</th>
                <th className="px-6 py-5 text-[15px] font-bold text-black text-right">Honor (Rp)</th>
                <th className="px-6 py-5 text-[15px] font-bold text-black text-center">Tanggal Expired</th>
                <th className="px-6 py-5 text-[15px] font-bold text-black text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-[14px] text-slate-700 font-medium">
              
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4"><span className="px-3 py-1 border border-blue-200 rounded text-blue-600 bg-blue-50 font-bold text-[12px]">KERJA SAMA</span></td>
                <td className="px-6 py-4 font-bold text-black">PT CCIT</td>
                <td className="px-6 py-4">Administrasi Bisnis<br/>Terapan - CCIT</td>
                <td className="px-6 py-4">Guru Besar IV/d-Pembina<br/>Utama Madya</td>
                <td className="px-6 py-4 text-right font-bold text-[#1687F5]">300.000</td>
                <td className="px-6 py-4 text-center"><i className="fa-regular fa-calendar mr-2"></i> 2030-12-31</td>
                <td className="px-6 py-4 text-center">
                  <button className="text-[#1687F5] hover:text-blue-700 transition-colors"><i className="fa-solid fa-pen"></i></button>
                </td>
              </tr>
              
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4"><span className="px-3 py-1 border border-blue-200 rounded text-blue-600 bg-blue-50 font-bold text-[12px]">KERJA SAMA</span></td>
                <td className="px-6 py-4 font-bold text-black">PT CCIT</td>
                <td className="px-6 py-4">Administrasi Bisnis<br/>Terapan - CCIT</td>
                <td className="px-6 py-4">Lektor Kepala IV/<br/>a-Pembina</td>
                <td className="px-6 py-4 text-right font-bold text-[#1687F5]">250.000</td>
                <td className="px-6 py-4 text-center"><i className="fa-regular fa-calendar mr-2"></i> 2030-12-31</td>
                <td className="px-6 py-4 text-center">
                  <button className="text-[#1687F5] hover:text-blue-700 transition-colors"><i className="fa-solid fa-pen"></i></button>
                </td>
              </tr>

              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4"><span className="px-3 py-1 border border-slate-300 rounded text-slate-600 bg-white font-bold text-[12px]">REGULER</span></td>
                <td className="px-6 py-4 font-bold text-black">-</td>
                <td className="px-6 py-4">Akuntansi - Reguler</td>
                <td className="px-6 py-4">Asisten Ahli ---</td>
                <td className="px-6 py-4 text-right font-bold text-[#1687F5]">150.000</td>
                <td className="px-6 py-4 text-center"><i className="fa-regular fa-calendar mr-2"></i> 2030-12-31</td>
                <td className="px-6 py-4 text-center">
                  <button className="text-[#1687F5] hover:text-blue-700 transition-colors"><i className="fa-solid fa-pen"></i></button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}