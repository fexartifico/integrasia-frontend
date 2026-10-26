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

      </div>
    </div>
  );
}