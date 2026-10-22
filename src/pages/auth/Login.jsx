import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  // State untuk mengontrol apakah password tampil atau tidak
  //useState hook digunakan untuk membuat state showPassword, yang awalnya di-set ke false (password tersembunyi). Ketika user mengklik ikon mata, state ini akan berubah menjadi true (password terlihat) atau kembali ke false (password tersembunyi).
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-[#689ec9] to-[#c7dbe8] p-4 font-sans relative">
      
      {/* Card Login */}
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-[500px] relative overflow-hidden min-h-[650px] flex flex-col">
        
        <div className="p-12 flex-1 z-10 flex flex-col justify-center">
          {/* Logo Tengah - Path update ke images/ */}
          <div className="flex justify-center mb-8">
            <div className="w-[80px] h-[80px] flex items-center justify-center">
                <img src="images/toga.png" alt="Logo SSO" className="w-full" />
            </div>
          </div>
          
          <h2 className="text-center text-[30px] font-extrabold text-slate-900 mb-10 tracking-tight">Login SSO</h2>
          
          <form className="flex flex-col gap-6">
            {/* Input Email */}
            <div>
              <label className="block text-[15px] font-bold text-slate-800 mb-0">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="fa-regular fa-envelope text-slate-400 text-lg"></i>
                </div>
                <input 
                  type="email" 
                  placeholder="pnj@kampus.ac.id" 
                  className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl text-[15px] font-medium text-slate-900 focus:ring-0 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Input Password */}
            <div>
              <label className="block text-[15px] font-bold text-slate-800 mb-0">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="fa-solid fa-lock text-slate-400 text-lg"></i>
                </div>
                
                {/* Tipe input berubah dinamis antara "text" atau "password" berdasarkan state showPassword */}
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="password" 
                  className="w-full pl-12 pr-12 py-4 border-2 border-slate-200 rounded-xl text-[15px] font-medium text-slate-900 focus:ring-0 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                />
                
                {/* Tombol Mata (Bisa di-klik) */}
                <div 
                  className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer group"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {/* Ikonnya berubah otomatis: kalau lagi dilihat (eye-slash), kalau disembunyikan (eye) */}
                  <i className={`fa-regular ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-slate-400 group-hover:text-slate-600 text-lg transition-colors`}></i>
                </div>
              </div>
            </div>

            {/* Tombol Masuk */}
            <Link to="/select-role" className="mt-6 bg-[#2b88d8] hover:bg-[#1a6ebd] text-white text-center py-4 rounded-xl font-bold text-[16px] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Masuk
            </Link>
          </form>
        </div>

        {/* Siluet Gedung Bawah - Path update ke images/ */}
        <div className="absolute bottom-0 left-0 w-full z-0 opacity-60 pointer-events-none">
          <img src="images/city.png" alt="City" className="w-full h-auto object-cover object-bottom" />
        </div>
      </div>
      
    </div>
  );
}