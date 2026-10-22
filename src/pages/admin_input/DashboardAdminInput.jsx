import { useState } from 'react';

export default function DashboardAdminInput() {
  // State untuk menangani efek loading saat sinkronisasi
  const [isSyncing, setIsSyncing] = useState(false);

  // Fungsi simulasi tarik data dari API SISTER
  const handleSyncSister = () => {
    setIsSyncing(true);
    
    // Simulasi jeda waktu API (misal butuh 2.5 detik untuk narik data)
    setTimeout(() => {
      setIsSyncing(false);
      alert("Sinkronisasi SISTER berhasil! Data beban mengajar dosen telah diperbarui.");
    }, 2500);
  };

  return (
    <div className="flex-1 w-full bg-[#f8fafc] font-sans p-8">
      <div className="w-full">
        
        {/* Header Judul & Tombol Sinkronisasi SISTER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-[28px] font-extrabold text-[#0F172A] mb-2">Dashboard Pengelolaan Data</h1>
            <p className="text-[15px] text-slate-500 font-medium">Overview data referensi tarif honorarium dan dokumen peraturan (Perdir).</p>
          </div>
          
          {/* Tombol Sinkronisasi */}
          <button 
            onClick={handleSyncSister}
            disabled={isSyncing}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-[14px] transition-all shadow-sm border border-slate-200 ${
              isSyncing 
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                : 'bg-white text-slate-700 hover:text-[#1687F5] hover:border-[#1687F5] hover:bg-blue-50 hover:shadow-md'
            }`}
          >
            {/* Icon akan berputar (animate-spin) jika state isSyncing bernilai true */}
            <i className={`fa-solid fa-rotate ${isSyncing ? 'animate-spin text-slate-400' : 'text-[#1687F5]'}`}></i>
            {isSyncing ? 'Menarik Data...' : 'Sinkronisasi'}
          </button>
        </div>
        
        {/* Card Statistik Admin Input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[800px]">
          
          {/* Card 1: Total Baris Tarif Aktif */}
          <div className="bg-white rounded-[20px] p-6 flex items-center gap-5 border border-slate-200 shadow-sm transition-transform hover:translate-y-[-2px]">
            <div className="w-[60px] h-[60px] rounded-2xl bg-[#EFF6FF] flex items-center justify-center shrink-0">
              <i className="fa-solid fa-tags text-[#2563EB] text-[26px] transform -rotate-90"></i>
            </div>
            <div>
              <div className="text-[26px] font-extrabold text-[#0F172A] leading-none mb-1.5">86</div>
              <div className="text-[15px] text-slate-500 font-medium">Total Baris Tarif Aktif</div>
            </div>
          </div>

          {/* Card 2: Perdir Aktif Saat Ini */}
          <div className="bg-white rounded-[20px] p-6 flex items-center gap-5 border border-slate-200 shadow-sm transition-transform hover:translate-y-[-2px]">
            <div className="w-[60px] h-[60px] rounded-2xl bg-[#ECFDF5] flex items-center justify-center shrink-0">
              <i className="fa-solid fa-file-shield text-[#10B981] text-[26px]"></i>
            </div>
            <div>
              <div className="text-[26px] font-extrabold text-[#0F172A] leading-none mb-1.5">SK-2026/01</div>
              <div className="text-[15px] text-slate-500 font-medium">Perdir Aktif Saat Ini</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}