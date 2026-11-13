import React, { useState } from 'react';

export default function ProfilSaya() {
  // State data profil sesuai parameter kamu
  const [profil] = useState({
    nama: "Dewi Yanti Liliana",
    role: "Dosen",
    nip: "198111162005012004",
    nidn: "0016118101",
    prodi: "Teknik Informatika",
    jafung: "Lektor Kepala/IVa",
    foto: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=300&auto=format&fit=crop"
  });

  return (
    <div className="flex-1 w-full bg-[#f8fafc] font-sans p-8 min-h-screen">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Tombol Kembali (Navigasi Atas) */}
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2.5 px-4 py-2 border border-slate-300 rounded-xl bg-white text-slate-700 font-bold hover:bg-slate-50 transition-all mb-6 shadow-sm text-[14px] cursor-pointer active:scale-95 w-fit"
        >
          <i className="fa-solid fa-arrow-left text-[#1687F5]"></i>
          <span>Kembali</span>
        </button>

        {/* Header Profil & Tombol Edit */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-[30px] font-bold text-black mb-1">Profil Saya</h1>
            <p className="text-[16px] text-slate-500 font-medium">Informasi akun dan data diri Anda</p>
          </div>

          <button 
            onClick={() => alert("Fitur Edit Profil")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#38bdf8] hover:bg-[#0284c7] text-white font-bold transition-all shadow-sm active:scale-95 text-[14px] cursor-pointer"
          >
            <i className="fa-solid fa-user-gear text-[15px]"></i>
            <span>Edit Profil</span>
          </button>
        </div>

        {/* Card Utama Profil */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm">
          
          {/* Box Banner Dosen Atas */}
          <div className="bg-[#f1f5f9] rounded-2xl p-6 flex items-center gap-6 mb-8">
            <img 
              src={profil.foto} 
              alt={profil.nama} 
              className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <div>
              <h2 className="text-[26px] font-extrabold text-black mb-1">{profil.nama}</h2>
              <p className="text-[18px] text-slate-400 font-medium">{profil.role}</p>
            </div>
          </div>

          {/* Sub-header Informasi Pribadi */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-6 rounded-full bg-[#1687f5] text-white flex items-center justify-center text-[12px] font-bold">
              <i className="fa-solid fa-info"></i>
            </div>
            <h3 className="text-[22px] font-extrabold text-black">Informasi Pribadi</h3>
          </div>

          {/* List Data Diri */}
          <div className="divide-y divide-slate-100">
            <div className="py-4.5 flex items-center">
              <span className="w-1/4 text-[15px] font-bold text-slate-500">Nama</span>
              <span className="w-3/4 text-[15px] font-bold text-slate-900">{profil.nama}</span>
            </div>

            <div className="py-4.5 flex items-center">
              <span className="w-1/4 text-[15px] font-bold text-slate-500">NIP</span>
              <span className="w-3/4 text-[15px] font-bold text-slate-900">{profil.nip}</span>
            </div>

            <div className="py-4.5 flex items-center">
              <span className="w-1/4 text-[15px] font-bold text-slate-500">NIDN</span>
              <span className="w-3/4 text-[15px] font-bold text-slate-900">{profil.nidn}</span>
            </div>

            <div className="py-4.5 flex items-center">
              <span className="w-1/4 text-[15px] font-bold text-slate-500">Program Studi</span>
              <span className="w-3/4 text-[15px] font-bold text-slate-900">{profil.prodi}</span>
            </div>

            <div className="py-4.5 flex items-center">
              <span className="w-1/4 text-[15px] font-bold text-slate-500">Jafung/Pangkat</span>
              <span className="w-3/4 text-[15px] font-bold text-slate-900">{profil.jafung}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}