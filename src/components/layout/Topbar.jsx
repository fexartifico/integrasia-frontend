import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Topbar() {
  // State untuk mengontrol buka/tutup menu profil dropdown
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  // Ref untuk mendeteksi klik di luar menu dropdown
  const profileRef = useRef(null);

  // Efek untuk menutup dropdown jika user mengklik area lain di layar
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-[90px] bg-white flex items-center justify-between px-10 z-50 shrink-0 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] relative">
      {/* Search Bar */}
      <div className="relative w-[500px]">
        <i className="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 text-lg"></i>
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full py-3.5 pr-4 pl-12 border-2 border-slate-200 rounded-xl text-[16px] font-medium text-slate-700 bg-slate-50 focus:outline-none focus:border-[#4DD7F7] focus:bg-white transition-all placeholder:text-slate-400"
        />
      </div>
      
      {/* Profil & Notifikasi */}
      <div className="flex items-center gap-8">
        
        {/* Notifikasi Lonceng */}
        <div className="relative cursor-pointer hover:scale-110 transition-transform">
          <i className="fa-regular fa-bell text-[26px] text-slate-700"></i>
          {/* Titik Merah Notifikasi */}
          <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
        </div>
        
        {/* Pembatas / Divider vertical */}
        <div className="w-[2px] h-10 bg-slate-200"></div>

        {/* Informasi User (Nama, Role & Avatar) - Dibungkus div relative untuk dropdown */}
        <div className="relative" ref={profileRef}>
          {/* Tombol Profil (Bisa Diklik) */}
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-4 cursor-pointer group bg-transparent border-none focus:outline-none text-left"
          >
            {/* Teks Nama & Role */}
            <div className="flex flex-col items-end">
              <span className="text-[16px] font-bold text-slate-800 group-hover:text-[#1687F5] transition-colors leading-tight">Reza</span>
              <span className="text-[13px] font-medium text-slate-500">Pimpinan</span>
            </div>

            {/* Avatar Profil */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-[3px] border-slate-300 group-hover:border-[#1687F5] transition-colors overflow-hidden bg-slate-100">
              <i className="fa-solid fa-user text-[20px] text-slate-400 mt-1"></i>
            </div>
            
            {/* Ikon Panah Kecil (Chevron) */}
            <i className={`fa-solid fa-chevron-down text-slate-400 text-xs transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`}></i>
          </button>

          {/* Menu Dropdown Profil */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-4 w-[240px] bg-[#E8F1FD] border border-slate-200 rounded-xl shadow-lg overflow-hidden z-50 animate-fade-in-down">
              
              {/* Opsi Profile */}
              <button className="w-full flex items-center gap-4 px-6 py-4 hover:bg-blue-100/50 transition-colors group text-left border-b border-slate-200">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black group-hover:scale-110 transition-transform">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.66667 5.33333C6.66667 3.91885 7.22857 2.56229 8.22876 1.5621C9.22896 0.561903 10.5855 0 12 0C13.4145 0 14.771 0.561903 15.7712 1.5621C16.7714 2.56229 17.3333 3.91885 17.3333 5.33333C17.3333 6.74782 16.7714 8.10438 15.7712 9.10457C14.771 10.1048 13.4145 10.6667 12 10.6667C10.5855 10.6667 9.22896 10.1048 8.22876 9.10457C7.22857 8.10438 6.66667 6.74782 6.66667 5.33333ZM6.66667 13.3333C4.89856 13.3333 3.20286 14.0357 1.95262 15.286C0.702379 16.5362 0 18.2319 0 20C0 21.0609 0.421427 22.0783 1.17157 22.8284C1.92172 23.5786 2.93913 24 4 24H20C21.0609 24 22.0783 23.5786 22.8284 22.8284C23.5786 22.0783 24 21.0609 24 20C24 18.2319 23.2976 16.5362 22.0474 15.286C20.7971 14.0357 19.1014 13.3333 17.3333 13.3333H6.66667Z" fill="currentColor"/>
                </svg>
                <span className="font-extrabold text-black text-[18px]">Profile</span>
              </button>

              {/* Opsi Logout - Menggunakan komponen Link untuk navigasi kembali ke login */}
              <Link to="/login" className="w-full flex items-center gap-4 px-6 py-4 hover:bg-blue-100/50 transition-colors group text-left">
                <svg viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black group-hover:scale-110 transition-transform">
                  <path d="M11.25 3.74993H14.2755C17.1285 3.74993 18.555 3.74993 19.44 4.62889C19.935 5.11787 20.154 5.77484 20.25 6.7498M11.25 27.7489H14.2755C17.1285 27.7489 18.555 27.7489 19.44 26.8699C19.935 26.381 20.154 25.724 20.25 24.749M26.25 15.7494H15.75M24 11.9996C24 11.9996 27.75 14.7595 27.75 15.7494C27.75 16.7394 24 19.4993 24 19.4993M1.3395 3.74993C0.75 4.67539 0.75 5.86934 0.75 8.25574V23.2461C0.75 25.6325 0.75 26.8264 1.3395 27.7489C1.4445 27.9139 1.562 28.0699 1.692 28.2169C2.4165 29.0358 3.5655 29.3643 5.862 30.0198C8.1615 30.6768 9.312 31.0053 10.146 30.5133C10.2904 30.4276 10.4247 30.3259 10.5465 30.2103C11.25 29.5428 11.25 28.3489 11.25 25.9535V5.54535C11.25 3.15145 11.25 1.956 10.5465 1.29003C10.4247 1.17441 10.2904 1.07278 10.146 0.987046C9.3135 0.495066 8.1615 0.822053 5.8605 1.48052C3.5655 2.136 2.4165 2.46448 1.6905 3.28345C1.56149 3.43006 1.44414 3.58503 1.3395 3.74993Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-extrabold text-black text-[18px]">Logout</span>
              </Link>

            </div>
          )}
        </div>

      </div>
    </header>
  );
}