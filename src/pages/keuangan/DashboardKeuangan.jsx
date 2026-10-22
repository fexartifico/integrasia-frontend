import { Link } from 'react-router-dom';

export default function DashboardKeuangan() {
  return (
    <div className="flex-1 w-full bg-[#f8fafc] font-sans p-8">
      <div className="w-full">
        
        {/* Header Judul */}
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-[28px] font-extrabold text-black mb-2">Dashboard Keuangan</h1>
            <p className="text-[15px] text-slate-600 font-medium">Ringkasan verifikasi honorarium dan pencairan anggaran institusi.</p>
          </div>
          <Link to="/keuangan/verifikasi" className="bg-[#10b981] hover:bg-[#059669] text-white px-5 py-2.5 rounded-xl font-bold text-[14px] flex items-center gap-2 shadow-sm transition-all">
            <i className="fa-solid fa-clipboard-check text-lg"></i>
            Buka Antrean Verifikasi
          </Link>
        </div>
        
        {/* Card Statistik Keuangan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
          
          <div className="bg-white rounded-2xl p-6 flex items-center gap-5 border border-slate-200 shadow-sm">
            <div className="w-[60px] h-[60px] rounded-xl bg-emerald-500 flex items-center justify-center shrink-0">
              <i className="fa-solid fa-wallet text-white text-[28px]"></i>
            </div>
            <div>
              <div className="text-[22px] font-extrabold text-black leading-none mb-1">Rp 105.000.000</div>
              <div className="text-[14px] text-slate-500 font-medium">Total Budget Honorarium</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 flex items-center gap-5 border-2 border-orange-200 bg-orange-50/30 shadow-sm">
            <div className="w-[60px] h-[60px] rounded-xl bg-orange-500 flex items-center justify-center shrink-0">
              <i className="fa-solid fa-clock-rotate-left text-white text-[28px]"></i>
            </div>
            <div>
              <div className="text-[22px] font-extrabold text-black leading-none mb-1">12 Data</div>
              <div className="text-[14px] text-orange-600 font-bold">Menunggu Verifikasi Anda</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 flex items-center gap-5 border border-slate-200 shadow-sm">
            <div className="w-[60px] h-[60px] rounded-xl bg-blue-500 flex items-center justify-center shrink-0">
              <i className="fa-solid fa-circle-check text-white text-[28px]"></i>
            </div>
            <div>
              <div className="text-[22px] font-extrabold text-black leading-none mb-1">75 Data</div>
              <div className="text-[14px] text-slate-500 font-medium">Selesai Diverifikasi</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}