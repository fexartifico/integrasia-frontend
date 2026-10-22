export default function RekapHonor() {
  const dummyData = [
    { id: 1, prodi: "Teknik Informatika", dosen: 15, sks: 45, total: "Rp 22.500.000" },
    { id: 2, prodi: "Teknik Mesin", dosen: 12, sks: 30, total: "Rp 15.000.000" },
    { id: 3, prodi: "Teknik Elektro", dosen: 10, sks: 25, total: "Rp 12.500.000" },
    { id: 4, prodi: "Akuntansi", dosen: 20, sks: 60, total: "Rp 30.000.000" },
    { id: 5, prodi: "Administrasi Bisnis", dosen: 18, sks: 50, total: "Rp 25.000.000" },
  ];

  return (
    <div className="flex-1 w-full bg-[#f8fafc] font-sans p-8">
      <div className="w-full">
        
        {/* Header Area */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-[28px] font-extrabold text-black mb-2">Rekapitulasi Honorarium</h1>
            <p className="text-[16px] text-slate-600 font-medium">Laporan agregat honorarium berdasarkan Program Studi/Jurusan</p>
          </div>
          
          {/* Tombol Export */}
          <button className="flex items-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white px-5 py-2.5 rounded-lg font-bold text-[14px] transition-colors shadow-sm">
            <i className="fa-solid fa-file-excel text-[16px]"></i>
            Export Laporan (excel)
          </button>
        </div>

        {/* 
          Table Area 
          Zoy hapus overflow-hidden dan border di pembungkus ini, 
          dan memindahkan pengaturan border langsung ke <table> agar lebih tegas 
        */}
        <div className="w-full">
          {/* 
            Gunakan border-separate agar border-spacing-0 bekerja. 
            Ini trik agar border luar (tabel) dan border dalam (td/th) tidak saling bertumpuk dan menipis.
          */}
          <table className="w-full text-left border-separate border-spacing-0 border-2 border-slate-800 rounded-xl overflow-hidden shadow-sm">
            
            {/* Warna Header Diubah ke #E8F1FD */}
            <thead className="bg-[#E8F1FD]">
              <tr>
                {/* Border kanan dan bawah untuk sel header */}
                <th className="border-r border-b border-slate-800 px-6 py-5 text-[15px] font-extrabold text-black text-center w-[80px]">No</th>
                <th className="border-r border-b border-slate-800 px-6 py-5 text-[15px] font-extrabold text-black text-left">Program Studi / Jurusan</th>
                <th className="border-r border-b border-slate-800 px-6 py-5 text-[15px] font-extrabold text-black text-center">Total Dosen Mengajar</th>
                <th className="border-r border-b border-slate-800 px-6 py-5 text-[15px] font-extrabold text-black text-center">Total Kelebihan SKS</th>
                {/* Sel terakhir tidak butuh border kanan (karena sudah ditutup oleh border tabel luar) */}
                <th className="border-b border-slate-800 px-6 py-5 text-[15px] font-extrabold text-black text-center">Total</th>
              </tr>
            </thead>
            
            <tbody className="text-[15px] text-black font-semibold bg-white">
              {dummyData.map((item, index) => {
                // Mengecek apakah ini baris terakhir sebelum Grand Total
                const isLastDataRow = index === dummyData.length - 1;
                
                return (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    {/* Sel dalam tbody diberi border kanan dan bawah */}
                    <td className={`border-r border-slate-800 px-6 py-4 text-center ${isLastDataRow ? '' : 'border-b'}`}>{item.id}</td>
                    <td className={`border-r border-slate-800 px-6 py-4 text-left ${isLastDataRow ? '' : 'border-b'}`}>{item.prodi}</td>
                    <td className={`border-r border-slate-800 px-6 py-4 text-center ${isLastDataRow ? '' : 'border-b'}`}>{item.dosen}</td>
                    <td className={`border-r border-slate-800 px-6 py-4 text-center ${isLastDataRow ? '' : 'border-b'}`}>{item.sks} SKS</td>
                    {/* Sel terakhir tidak butuh border kanan */}
                    <td className={`px-6 py-4 text-center border-slate-800 ${isLastDataRow ? '' : 'border-b'}`}>{item.total}</td>
                  </tr>
                );
              })}
              
              {/* Grand Total Row */}
              <tr className="bg-slate-50">
                {/* 
                  Tambahkan border-t (atas) untuk memisahkan Grand Total dari data di atasnya.
                  Colspan 2 menggabungkan kolom No dan Prodi.
                */}
                <td colSpan="2" className="border-t border-r border-slate-800 px-6 py-5 text-center font-extrabold text-black text-[18px]">
                  Grand Total :
                </td>
                <td className="border-t border-r border-slate-800 px-6 py-5 text-center font-extrabold text-black text-[16px]">75</td>
                <td className="border-t border-r border-slate-800 px-6 py-5 text-center font-extrabold text-black text-[16px]">210 SKS</td>
                <td className="border-t border-slate-800 px-6 py-5 text-center font-extrabold text-black text-[16px]">Rp 105.000.000</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}