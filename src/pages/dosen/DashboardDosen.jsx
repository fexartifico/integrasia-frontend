export default function DashboardDosen() {
  return (
    <div className="flex-1 w-full bg-[#f8fafc] font-sans p-8">
      <div className="w-full">
        
        {/* Header Judul */}
        <div className="mb-10">
          <h1 className="text-[28px] font-extrabold text-black mb-2">Dashboard Pengawasan</h1>
          {/* Zoy revisi teksnya sedikit biar cocok untuk Dosen ya! */}
          <p className="text-[16px] text-slate-600 font-medium">Selamat datang Dosen, berikut adalah ringkasan sistem hari ini.</p>
        </div>
        
        {/* Card Statistik Dosen - Desain memanjang putih bersih */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          
          <div className="bg-white rounded-2xl p-6 flex items-center gap-5 border border-slate-200 shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-[#1687F5] flex items-center justify-center shrink-0 shadow-md">
              <i className="fa-solid fa-users text-white text-2xl"></i>
            </div>
            <div>
              <div className="text-[22px] font-extrabold text-black leading-none mb-1">18 SKS</div>
              <div className="text-[15px] text-slate-500 font-medium">Total Beban Mengajar</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 flex items-center gap-5 border border-slate-200 shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0 shadow-md">
              <i className="fa-solid fa-money-bill-wave text-white text-2xl"></i>
            </div>
            <div>
              <div className="text-[22px] font-extrabold text-black leading-none mb-1">6 SKS</div>
              <div className="text-[15px] text-slate-500 font-medium">Kelebihan SKS Diakui</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 flex items-center gap-5 border border-slate-200 shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center shrink-0 shadow-md">
              <i className="fa-solid fa-clock-rotate-left text-white text-2xl"></i>
            </div>
            <div>
              <div className="text-[20px] font-extrabold text-black leading-none mb-1">Menunggu Verifikasi</div>
              <div className="text-[15px] text-slate-500 font-medium">Status Keuangan Saat Ini</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}