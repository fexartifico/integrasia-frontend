import { useState } from 'react';

export default function DashboardAdminInput() {
  // State untuk menangani efek loading saat sinkronisasi
  const [isSyncing, setIsSyncing] = useState(false);
  
  // State log sinkronisasi (Menghapus 'Oleh' dan menambah contoh data 'Gagal')
  const [syncLogs, setSyncLogs] = useState([
    { 
      id: 1, 
      date: "24 Oktober 2026, 14:30", 
      status: "Berhasil", 
      message: "Memperbarui beban mengajar dosen." 
    },
    { 
      id: 2, 
      date: "20 Oktober 2026, 09:15", 
      status: "Berhasil", 
      message: "Memperbarui beban mengajar dosen." 
    },
    { 
      id: 3, 
      date: "18 Oktober 2026, 11:20", 
      status: "Gagal", 
      message: "Gagal terhubung ke server SISTER (Connection Timeout)." 
    }
  ]);

  // State untuk membuka/menutup Modal Log
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fungsi simulasi tarik data dari API SISTER
  const handleSyncSister = () => {
    setIsSyncing(true);
    
    setTimeout(() => {
      setIsSyncing(false);
      
      const now = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      const formattedDate = now.toLocaleDateString('id-ID', options).replace('.', ':');

      const newLog = {
        id: Date.now(),
        date: formattedDate,
        status: "Berhasil",
        message: "Memperbarui beban mengajar dosen."
      };
      
      setSyncLogs([newLog, ...syncLogs]);
      alert("Sinkronisasi SISTER berhasil! Data beban mengajar dosen telah diperbarui.");
    }, 2500);
  };

  return (
    <div className="flex-1 w-full bg-[#f8fafc] font-sans p-8 relative">
      <div className="w-full">
        
        {/* Header Judul & Tombol-Tombol Aksi */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-[28px] font-extrabold text-[#0F172A] mb-2">Dashboard Pengelolaan Data</h1>
            <p className="text-[15px] text-slate-500 font-medium">Overview data referensi tarif honorarium dan dokumen peraturan (Perdir).</p>
          </div>
          
          {/* Area Tombol */}
          <div className="flex items-center gap-3">
            {/* Tombol Riwayat (Secondary) */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-[14px] bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-800 transition-all shadow-sm active:scale-95"
            >
              <i className="fa-solid fa-clock-rotate-left"></i>
              Riwayat
            </button>

            {/* Tombol Sinkronisasi (Primary Biru Solid) */}
            <button 
              onClick={handleSyncSister}
              disabled={isSyncing}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-[14px] transition-all duration-200 shadow-md active:scale-95 ${
                isSyncing 
                  ? 'bg-slate-300 text-white cursor-not-allowed' 
                  : 'bg-[#1687F5] hover:bg-blue-600 text-white shadow-blue-500/20'
              }`}
            >
              <i className={`fa-solid fa-rotate ${isSyncing ? 'animate-spin' : ''}`}></i>
              {isSyncing ? 'Menarik Data...' : 'Sinkronisasi'}
            </button>
          </div>
        </div>
        
        {/* Card Statistik Admin Input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[800px]">
          
          <div className="bg-white rounded-[20px] p-6 flex items-center gap-5 border border-slate-200 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md cursor-default">
            <div className="w-[60px] h-[60px] rounded-2xl bg-[#EFF6FF] flex items-center justify-center shrink-0">
              <i className="fa-solid fa-tags text-[#2563EB] text-[26px] transform -rotate-90"></i>
            </div>
            <div>
              <div className="text-[26px] font-extrabold text-[#0F172A] leading-none mb-1.5">86</div>
              <div className="text-[15px] text-slate-500 font-medium">Total Baris Tarif Aktif</div>
            </div>
          </div>

          <div className="bg-white rounded-[20px] p-6 flex items-center gap-5 border border-slate-200 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md cursor-default">
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

      {/* =========================================
          MODAL LOG RIWAYAT SINKRONISASI
      ========================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div className="bg-white rounded-[24px] shadow-2xl w-full max-w-[500px] relative z-10 overflow-hidden flex flex-col max-h-[85vh]">
            
            {/* Header Modal */}
            <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-white shrink-0">
              <div>
                <h2 className="text-[20px] font-extrabold text-slate-800">Riwayat Sinkronisasi</h2>
                <p className="text-[14px] text-slate-500 font-medium mt-1">Catatan pembaruan data dari server SISTER.</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-50 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors"
              >
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>

            {/* Isi Log */}
            <div className="p-8 overflow-y-auto flex-1 bg-slate-50">
              {syncLogs.length === 0 ? (
                <div className="text-center text-slate-400 py-10">
                  <i className="fa-regular fa-folder-open text-4xl mb-3"></i>
                  <p className="font-bold text-[15px]">Belum ada riwayat</p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {syncLogs.map((log) => (
                    <div key={log.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex gap-4 items-start">
                      
                      {/* Icon Dinamis (Biru untuk Berhasil, Merah untuk Gagal) */}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        log.status === "Berhasil" ? 'bg-blue-50 text-[#1687F5]' : 'bg-red-50 text-red-500'
                      }`}>
                        <i className={`fa-solid ${
                          log.status === "Berhasil" ? 'fa-cloud-arrow-down' : 'fa-circle-exclamation'
                        } text-[16px]`}></i>
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-bold text-slate-800 text-[15px]">{log.date}</h4>
                          
                          {/* Badge Dinamis (Hijau untuk Berhasil, Merah untuk Gagal) */}
                          <span className={`inline-flex px-2.5 py-1 rounded-full border text-[11px] font-bold ${
                            log.status === "Berhasil" 
                              ? 'border-green-200 bg-green-50 text-green-700' 
                              : 'border-red-200 bg-red-50 text-red-600'
                          }`}>
                            {log.status}
                          </span>
                        </div>
                        
                        {/* Pesan Keterangan */}
                        <p className={`text-[13px] font-medium ${
                          log.status === "Berhasil" ? 'text-slate-500' : 'text-red-500'
                        }`}>
                          {log.message}
                        </p>
                      </div>

                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}