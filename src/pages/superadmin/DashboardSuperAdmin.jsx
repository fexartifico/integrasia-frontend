export default function DashboardSuperAdmin() {
  return (
    <div className="flex-1 w-full bg-[#f8fafc] font-sans p-8">
      <div className="w-full">
        
        {/* Header Judul */}
        <div className="mb-10">
          <h1 className="text-[28px] font-extrabold text-black mb-2">Dashboard Administrator</h1>
          <p className="text-[16px] text-slate-600 font-medium">Ringkasan status akun pengguna</p>
        </div>
        
        {/* Card Statistik Administrator */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          
          <div className="bg-white rounded-2xl p-6 flex items-center gap-5 border border-slate-200 shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
              <i className="fa-solid fa-users text-purple-600 text-2xl"></i>
            </div>
            <div>
              <div className="text-[24px] font-extrabold text-black leading-none mb-1">100</div>
              <div className="text-[15px] text-slate-500 font-medium">Total Pengguna</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 flex items-center gap-5 border border-slate-200 shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
              <i className="fa-solid fa-user-check text-emerald-500 text-2xl"></i>
            </div>
            <div>
              <div className="text-[24px] font-extrabold text-black leading-none mb-1">152</div>
              <div className="text-[15px] text-slate-500 font-medium">Akun Aktif</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 flex items-center gap-5 border border-slate-200 shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
              <i className="fa-solid fa-user-lock text-red-500 text-2xl"></i>
            </div>
            <div>
              <div className="text-[24px] font-extrabold text-black leading-none mb-1">16</div>
              <div className="text-[15px] text-slate-500 font-medium">Akun Nonaktif</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}