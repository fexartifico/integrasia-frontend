import { Link } from 'react-router-dom';
import '../../styles.css'; // Pastikan path ini sesuai dengan tempat kamu menyimpan style.css

export default function LandingPage() {
  return (
    <div className="flex min-h-screen w-full bg-white font-sans overflow-hidden">

      {/* Kolom Kiri - Teks dan Tombol */}
      <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-center px-12 z-10 bg-white">

        {/* mt-[-200px] untuk menarik blok teks lebih ke atas */}
        <div className="max-w-xl text-center z-10 mt-[-200px]">
          {/* Ukuran font diperbesar menjadi 56px */}
          <h1 className="text-[56px] font-extrabold text-slate-900 mb-6 tracking-wide leading-tight">
            SELAMAT DATANG
          </h1>
          {/* Ukuran font deskripsi diperbesar menjadi 20px */}
          <p className="text-[20px] text-slate-500 font-medium mb-12 leading-relaxed px-4">
            Masuk untuk mengakses Sistem Informasi Honor menggunakan akun institusi
          </p>

          <Link to="/login" className="inline-flex items-center justify-center gap-3 bg-[#2b88d8] hover:bg-[#1a6ebd] text-white px-10 py-4 rounded-xl font-semibold text-[18px] transition-all w-full max-w-[340px] shadow-lg hover:shadow-xl hover:-translate-y-1">
            <i className="fa-solid fa-lock"></i>
            Masuk dengan SSO &rarr;
          </Link>
        </div>

        {/* Placeholder Gambar Gedung (Kiri Bawah) */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none">
          <img 
            src="images/pana.png" 
            alt="Cityscape" 
            className="w-[95%] max-h-[70vh] object-contain object-bottom opacity-90" 
          />
        </div>
      </div>

      {/* Kolom Kanan - Logo dan Latar Biru */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#9cd4fc] to-[#60b6f8] relative justify-center items-center overflow-hidden">
        
        {/* 1. Vector Kiri - Diubah jadi full height (h-full) dan menempel dari atas ke bawah */}
        <img 
          src="images/Vector_2.png" 
          alt="Vector Decoration" 
          className="absolute top-0 left-0 h-full w-auto object-cover object-left pointer-events-none z-0" 
        />

        {/* 2. Dekorasi Lingkaran Abstrak dengan Warna dari Figma */}
        
        {/* Efek blur besar di background (warna dasar #30AFFF opacity 20%) */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#30AFFF]/20 rounded-full blur-3xl z-0"></div>
        
        {/* Lingkaran glow sedang (warna dasar #30AFFF opacity 30%) */}
        <div className="absolute top-0 -right-24 w-[350px] h-[350px] bg-[#30AFFF]/30 rounded-full blur-2xl z-0"></div>
        
        {/* Lingkaran solid di pojok kanan atas dengan GRADIENT sesuai Figma */}
        <div className="absolute -top-16 -right-16 w-[250px] h-[250px] bg-gradient-to-br from-[#30AFFF]/40 to-[#1D6999]/50 rounded-full z-0"></div>

        {/* Logo Besar dengan Animasi Naik Turun (class: animate-float) */}
        <div className="z-10 flex flex-col items-center animate-float">
           <img src="images/spirit_landing.png" alt="SPIRIT INTEGRASIA" className="w-[650px] drop-shadow-2xl" />
        </div>
      </div>

    </div>
  );
}