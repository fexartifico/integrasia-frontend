import { Link } from 'react-router-dom';

export default function SelectRole() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-[#689ec9] to-[#c7dbe8] p-4 font-sans relative">
      
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-[500px] relative overflow-hidden min-h-[650px] flex flex-col">
        
        <div className="px-10 py-10 flex-1 z-10 flex flex-col justify-center">
          {/* Logo Top */}
          <div className="flex flex-col items-center mb-6">
            <img 
              src="images/logo_integrasia.png" 
              alt="Logo SI" 
              className="h-20 mb-3 object-contain transform scale-150" 
            />
            <h2 className="text-[20px] font-extrabold tracking-widest text-slate-900 mt-3">SPIRIT INTEGRASIA</h2>
          </div>
          
          <div className="text-center mb-6">
            <h1 className="text-[26px] font-extrabold text-slate-900 mb-1 tracking-tight">Selamat Datang</h1>
            <p className="text-[14px] text-slate-500 font-medium">Silahkan pilih role untuk melanjutkan</p>
          </div>
          
          <div className="flex flex-col gap-3">
            
            {/* 1. Opsi Pimpinan (Tema Pink) */}
            <Link to="/dashboard" className="flex items-center gap-4 p-3 border-2 border-slate-200 rounded-2xl hover:border-[#d9447e] hover:shadow-md transition-all group bg-white relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#fce7f3] flex items-center justify-center text-[#be185d] group-hover:scale-110 transition-transform shrink-0">
                <i className="fa-solid fa-user-tie text-xl"></i>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[16px] text-slate-800 leading-tight">Pimpinan</span>
                <span className="text-[12px] text-slate-500 font-medium">Masuk sebagai pimpinan</span>
              </div>
            </Link>

            {/* 2. Opsi Keuangan (Tema Hijau) */}
            <Link to="/keuangan/dashboard" className="flex items-center gap-4 p-3 border-2 border-slate-200 rounded-2xl hover:border-emerald-500 hover:shadow-md transition-all group bg-white relative z-10">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform shrink-0">
                <i className="fa-solid fa-wallet text-xl"></i>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[16px] text-slate-800 leading-tight">Keuangan</span>
                <span className="text-[12px] text-slate-500 font-medium">Verifikasi data honorarium</span>
              </div>
            </Link>

            {/* 3. Opsi Super Admin (Tema Ungu) */}
            <Link to="/superadmin/dashboard" className="flex items-center gap-4 p-3 border-2 border-slate-200 rounded-2xl hover:border-purple-500 hover:shadow-md transition-all group bg-white relative z-10">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform shrink-0">
                <i className="fa-solid fa-user-shield text-xl"></i>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[16px] text-slate-800 leading-tight">Super Admin</span>
                <span className="text-[12px] text-slate-500 font-medium">Kendali penuh sistem</span>
              </div>
            </Link>

            {/* 4. Opsi Admin Input (Tema Oranye) */}
            <Link to="/admin-input/dashboard" className="flex items-center gap-4 p-3 border-2 border-slate-200 rounded-2xl hover:border-orange-500 hover:shadow-md transition-all group bg-white relative z-10">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform shrink-0">
                <i className="fa-solid fa-user-pen text-xl"></i>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[16px] text-slate-800 leading-tight">Admin Input</span>
                <span className="text-[12px] text-slate-500 font-medium">Pengelolaan data master & SKS</span>
              </div>
            </Link>

            {/* 5. Opsi Dosen (Tema Slate/Abu-abu) */}
            <Link to="/dosen/dashboard" className="flex items-center gap-4 p-3 border-2 border-slate-200 rounded-2xl hover:border-slate-800 hover:shadow-md transition-all group bg-white relative z-10">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform shrink-0">
                <i className="fa-solid fa-chalkboard-user text-xl"></i>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[16px] text-slate-800 leading-tight">Dosen</span>
                <span className="text-[12px] text-slate-500 font-medium">Masuk sebagai pengajar</span>
              </div>
            </Link>

          </div>
        </div>

        {/* Siluet Gedung Bawah */}
        <div className="absolute bottom-0 left-0 w-full z-0 opacity-30 pointer-events-none">
          <img src="images/city.png" alt="City" className="w-full h-auto object-cover object-bottom" />
        </div>
      </div>
      
    </div>
  );
}