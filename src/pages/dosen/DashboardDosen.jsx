export default function DashboardDosen() {
  return (
    <div className="flex-1 w-full bg-[#f8fafc] font-sans p-8">
      <div className="w-full">
        
        {/* Header Judul */}
        <div className="mb-10">
          <h1 className="text-[28px] font-extrabold text-black mb-2">Dashboard Pengawasan</h1>
          <p className="text-[16px] text-slate-600 font-medium">Selamat datang Dosen, berikut adalah ringkasan sistem hari ini.</p>
        </div>
        
        {/* Card Statistik Dosen - 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
          
          <div className="bg-white rounded-2xl p-6 flex items-center gap-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-[60px] h-[60px] rounded-xl bg-[#EFF6FF] flex items-center justify-center shrink-0">
              <i className="fa-solid fa-users text-[#1687F5] text-[28px]"></i>
            </div>
            <div>
              <div className="text-[22px] font-extrabold text-black leading-none mb-1">18 SKS</div>
              <div className="text-[15px] text-slate-500 font-medium">Total Beban Mengajar</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 flex items-center gap-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-[60px] h-[60px] rounded-xl bg-[#ECFDF5] flex items-center justify-center shrink-0">
              <i className="fa-solid fa-money-bill-wave text-[#10B981] text-[28px]"></i>
            </div>
            <div>
              <div className="text-[22px] font-extrabold text-black leading-none mb-1">6 SKS</div>
              <div className="text-[15px] text-slate-500 font-medium">Kelebihan SKS Diakui</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 flex items-center gap-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-[60px] h-[60px] rounded-xl bg-[#FFF4E5] flex items-center justify-center shrink-0">
              <i className="fa-solid fa-clock-rotate-left text-[#F59E0B] text-[28px]"></i>
            </div>
            <div>
              <div className="text-[20px] font-extrabold text-black leading-none mb-1">Menunggu Verifikasi</div>
              <div className="text-[15px] text-slate-500 font-medium">Status Keuangan Saat Ini</div>
            </div>
          </div>

        </div>

        {/* Card Informasi Perdir Aktif Saat Ini */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-[52px] h-[52px] rounded-xl bg-blue-50 text-[#1687F5] flex items-center justify-center shrink-0">
              <i className="fa-solid fa-file-contract text-[24px]"></i>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">Landasan Hukum Perhitungan</span>
                <span className="px-2.5 py-0.5 rounded-full border border-green-200 bg-green-50 text-green-700 text-[11px] font-bold">Berlaku</span>
              </div>
              <h3 className="text-[17px] font-extrabold text-black">
                Perdir No. 11 Tahun 2025 <span className="text-slate-400 font-normal">| SK-DIR/023/2026</span>
              </h3>
              <p className="text-[14px] text-slate-500 font-medium">Standar Tarif Honorarium SKS TA 2026/2027</p>
            </div>
          </div>

          {/* Tombol Akses File Dokumen */}
          <a 
            href="#" 
            className="flex items-center gap-2 px-5 py-2.5 border border-slate-300 rounded-xl text-[#1687F5] font-bold hover:bg-blue-50 hover:border-[#1687F5] transition-all text-[14px] shrink-0 active:scale-95 shadow-sm"
          >
            <i className="fa-solid fa-file-pdf text-red-500 text-[16px]"></i>
            Lihat Dokumen PDF
          </a>
        </div>

      </div>
    </div>
  );
}