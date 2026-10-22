export default function DokumenPerdir() {
  return (
    <div className="flex-1 w-full bg-[#f8fafc] font-sans p-8">
      <div className="w-full">
        
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-[28px] font-extrabold text-black mb-2">Dokumen Peraturan Direktur (Perdir)</h1>
            <p className="text-[16px] text-slate-600 font-medium">Unggah dokumen peraturan yang menjadi dasar hukum perhitungan honorarium.<br/>Upload Perdir Baru</p>
          </div>
          <button className="bg-[#1687F5] hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold text-[14px] flex items-center gap-2 shadow-sm transition-all">
            <i className="fa-solid fa-cloud-arrow-up text-sm"></i>
            Upload Perdir Baru
          </button>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-5 text-[15px] font-bold text-black">Nomor Peraturan</th>
                <th className="px-6 py-5 text-[15px] font-bold text-black">Judul Dokumen</th>
                <th className="px-6 py-5 text-[15px] font-bold text-black">Tanggal Penetapan</th>
                <th className="px-6 py-5 text-[15px] font-bold text-black">File Lampiran</th>
                <th className="px-6 py-5 text-[15px] font-bold text-black text-center">Status</th>
                <th className="px-6 py-5 text-[15px] font-bold text-black text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-[14px] text-slate-700 font-medium">
              
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="px-6 py-5 font-bold text-black">SK-DIR/023/2026</td>
                <td className="px-6 py-5">Standar Tarif Honorarium<br/>SKS TA 2026/2027</td>
                <td className="px-6 py-5">01 Agustus 2026</td>
                <td className="px-6 py-5">
                  <a href="#" className="flex items-center gap-2 text-[#1687F5] hover:underline font-semibold">
                    <i className="fa-solid fa-file-pdf"></i> SK_Tarif_2026.pdf
                  </a>
                </td>
                <td className="px-6 py-5 text-center">
                  <span className="inline-flex px-4 py-1.5 rounded-full border border-green-300 bg-green-50 text-green-700 text-[13px] font-bold">
                    Berlaku
                  </span>
                </td>
                <td className="px-6 py-5 text-center">
                  <button className="text-red-500 hover:text-red-700 transition-colors"><i className="fa-solid fa-trash-can"></i></button>
                </td>
              </tr>
              
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="px-6 py-5 font-bold text-black">SK-DIR/023/2026</td>
                <td className="px-6 py-5">Standar Tarif Honorarium<br/>SKS TA 2026/2027</td>
                <td className="px-6 py-5">01 Agustus 2026</td>
                <td className="px-6 py-5">
                  <a href="#" className="flex items-center gap-2 text-[#1687F5] hover:underline font-semibold">
                    <i className="fa-solid fa-file-pdf"></i> SK_Tarif_2026.pdf
                  </a>
                </td>
                <td className="px-6 py-5 text-center">
                  <span className="inline-flex px-4 py-1.5 rounded-full border border-red-200 bg-red-50 text-red-600 text-[13px] font-bold">
                    Tidak Berlaku
                  </span>
                </td>
                <td className="px-6 py-5 text-center">
                  <button className="text-red-500 hover:text-red-700 transition-colors"><i className="fa-solid fa-trash-can"></i></button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}