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
          
          {/* Card 1: Total Budget (Hijau) */}
          <div className="bg-white rounded-2xl p-6 flex items-center gap-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-[60px] h-[60px] rounded-xl bg-[#ECFDF5] flex items-center justify-center shrink-0">
              <i className="fa-solid fa-wallet text-[#10B981] text-[28px]"></i>
            </div>
            <div>
              <div className="text-[22px] font-extrabold text-black leading-none mb-1">Rp 105.000.000</div>
              <div className="text-[14px] text-slate-500 font-medium">Total Budget Honorarium</div>
            </div>
          </div>

          {/* Card 2: Menunggu Verifikasi (Orange) */}
          <div className="bg-white rounded-2xl p-6 flex items-center gap-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-[60px] h-[60px] rounded-xl bg-[#FFF4E5] flex items-center justify-center shrink-0">
              <i className="fa-solid fa-clock-rotate-left text-[#F59E0B] text-[28px]"></i>
            </div>
            <div>
              <div className="text-[22px] font-extrabold text-black leading-none mb-1">12 Data</div>
              <div className="text-[14px] text-slate-500 font-medium">Menunggu Verifikasi Anda</div>
            </div>
          </div>

          {/* Card 3: Selesai Diverifikasi (Biru) */}
          <div className="bg-white rounded-2xl p-6 flex items-center gap-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-[60px] h-[60px] rounded-xl bg-[#EFF6FF] flex items-center justify-center shrink-0">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.5833 17L29.1267 13.0616L29.6083 7.84831L24.4942 6.68664L21.8167 2.18164L17 4.24997L12.1833 2.18164L9.50584 6.68664L4.39167 7.83414L4.87334 13.0475L1.41667 17L4.87334 20.9383L4.39167 26.1658L9.50584 27.3275L12.1833 31.8325L17 29.75L21.8167 31.8183L24.4942 27.3133L29.6083 26.1516L29.1267 20.9383L32.5833 17ZM14.1667 24.0833L8.5 18.4166L10.4975 16.4191L14.1667 20.0741L23.5025 10.7383L25.5 12.75L14.1667 24.0833Z" fill="#1687F5"/>
              </svg>
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