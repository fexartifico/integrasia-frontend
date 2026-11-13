import { useState } from 'react';

export default function DataVerifikasi() {
  const [viewDetail, setViewDetail] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState("Ganjil 2026/2027");
  const [searchQuery, setSearchQuery] = useState('');

  // Data Dosen Antrean Verifikasi (DEWI YANTI LILIANA di posisi teratas)
  const [dosenList, setDosenList] = useState([
    {
      id: 1,
      nama: "DEWI YANTI LILIANA",
      nip: "198111162005012004",
      prodi: "Teknik Informatika",
      jabatan: "Lektor Kepala (IV/a)",
      golongan: "Gol IV",
      kelebihanSks: "17 SKS",
      targetSks: "10 SKS",
      status: "Menunggu Verifikasi",
      sksBreakdown: {
        kuota100: "6 SKS",
        kuota50: "4 SKS",
        kuota0: "7 SKS"
      },
      mataKuliahList: [
        {
          mataKuliah: "Machine Learning",
          kelas: "6ACCIT",
          metodePengajaran: "Non Team Teaching",
          jumlahDosen: 1,
          kategoriSks: "100%",
          sksLebih: "2 SKS",
          waktu: "16 Minggu",
          tarifBase: 250000,
          tarifEfektif: 250000,
          subtotal: 8000000
        },
        {
          mataKuliah: "Natural Language Processing",
          kelas: "6AMSU",
          metodePengajaran: "Non Team Teaching",
          jumlahDosen: 1,
          kategoriSks: "100%",
          sksLebih: "2 SKS",
          waktu: "16 Minggu",
          tarifBase: 300000,
          tarifEfektif: 300000,
          subtotal: 9600000
        },
        {
          mataKuliah: "Natural Language Processing",
          kelas: "6B",
          metodePengajaran: "Non Team Teaching",
          jumlahDosen: 1,
          kategoriSks: "100%",
          sksLebih: "2 SKS",
          waktu: "16 Minggu",
          tarifBase: 160000,
          tarifEfektif: 160000,
          subtotal: 5120000
        },
        {
          mataKuliah: "Machine Learning",
          kelas: "6A",
          metodePengajaran: "Non Team Teaching",
          jumlahDosen: 1,
          kategoriSks: "50%",
          sksLebih: "2 SKS",
          waktu: "16 Minggu",
          tarifBase: 160000,
          tarifEfektif: 80000,
          subtotal: 2560000
        },
        {
          mataKuliah: "Pengolahan Citra Digital",
          kelas: "4A",
          metodePengajaran: "Non Team Teaching",
          jumlahDosen: 1,
          kategoriSks: "50%",
          sksLebih: "2 SKS",
          waktu: "16 Minggu",
          tarifBase: 160000,
          tarifEfektif: 80000,
          subtotal: 2560000
        },
        {
          mataKuliah: "Artificial Intelligence (AI)",
          kelas: "2A",
          metodePengajaran: "Team Teaching",
          jumlahDosen: 2,
          kategoriSks: "0%",
          sksLebih: "2 SKS",
          waktu: "8 Minggu",
          tarifBase: 160000,
          tarifEfektif: 0,
          subtotal: 0
        },
        {
          mataKuliah: "Kecerdasan Buatan untuk Game",
          kelas: "6A",
          metodePengajaran: "Non Team Teaching",
          jumlahDosen: 1,
          kategoriSks: "0%",
          sksLebih: "3 SKS",
          waktu: "16 Minggu",
          tarifBase: 160000,
          tarifEfektif: 0,
          subtotal: 0
        },
        {
          mataKuliah: "Kecerdasan Buatan & Machine Learning",
          kelas: "4A",
          metodePengajaran: "Non Team Teaching",
          jumlahDosen: 1,
          kategoriSks: "0%",
          sksLebih: "2 SKS",
          waktu: "16 Minggu",
          tarifBase: 160000,
          tarifEfektif: 0,
          subtotal: 0
        }
      ]
    },
    {
      id: 2,
      nama: "Dr. Budi Santoso, M.T.",
      nip: "198001012005011001",
      prodi: "Teknik Informatika",
      jabatan: "Lektor Kepala (IV/a)",
      golongan: "Gol IV",
      kelebihanSks: "8 SKS",
      targetSks: "10 SKS",
      status: "Terverifikasi",
      sksBreakdown: {
        kuota100: "6 SKS",
        kuota50: "2 SKS",
        kuota0: "0 SKS"
      },
      mataKuliahList: [
        {
          mataKuliah: "Pemrograman Web Lanjut",
          kelas: "5A",
          metodePengajaran: "Non Team Teaching",
          jumlahDosen: 1,
          kategoriSks: "100%",
          sksLebih: "4 SKS",
          waktu: "16 Minggu",
          tarifBase: 150000,
          tarifEfektif: 150000,
          subtotal: 9600000
        },
        {
          mataKuliah: "Mobile Programming",
          kelas: "6AMSU",
          metodePengajaran: "Team Teaching Seri",
          jumlahDosen: 2,
          kategoriSks: "100%",
          sksLebih: "2 SKS",
          waktu: "16 Minggu",
          tarifBase: 150000,
          tarifEfektif: 150000,
          subtotal: 4800000
        },
        {
          mataKuliah: "Basis Data Lanjut",
          kelas: "5ACCIT",
          metodePengajaran: "Non Team Teaching",
          jumlahDosen: 1,
          kategoriSks: "50%",
          sksLebih: "2 SKS",
          waktu: "16 Minggu",
          tarifBase: 150000,
          tarifEfektif: 75000,
          subtotal: 2400000
        }
      ]
    },
    {
      id: 3,
      nama: "Siti Aminah, S.E., M.Ak.",
      nip: "198505152010122003",
      prodi: "Akuntansi",
      jabatan: "Lektor (III/c)",
      golongan: "Gol III",
      kelebihanSks: "4 SKS",
      targetSks: "12 SKS",
      status: "Menunggu Verifikasi",
      sksBreakdown: {
        kuota100: "4 SKS",
        kuota50: "0 SKS",
        kuota0: "0 SKS"
      },
      mataKuliahList: [
        {
          mataKuliah: "Akuntansi Keuangan Lanjut",
          kelas: "4A",
          metodePengajaran: "Non Team Teaching",
          jumlahDosen: 1,
          kategoriSks: "100%",
          sksLebih: "4 SKS",
          waktu: "16 Minggu",
          tarifBase: 150000,
          tarifEfektif: 150000,
          subtotal: 9600000
        }
      ]
    }
  ]);

  const [selectedDosen, setSelectedDosen] = useState(dosenList[0]);

  // Handler Verifikasi
  const handleVerifikasi = (id) => {
    const updated = dosenList.map(item => 
      item.id === id ? { ...item, status: "Terverifikasi" } : item
    );
    setDosenList(updated);
    setSelectedDosen(prev => ({ ...prev, status: "Terverifikasi" }));
    alert(`Data honorarium ${selectedDosen.nama} berhasil disetujui & diverifikasi!`);
  };

  const handleTolak = (id) => {
    alert(`Data honorarium ${selectedDosen.nama} dikembalikan untuk direvisi.`);
  };

  // Kalkulasi Otomatis Honor Bruto & Netto per Dosen Terpilih
  const honorBrutoVal = selectedDosen.mataKuliahList.reduce((acc, item) => acc + item.subtotal, 0);
  const pphPercent = selectedDosen.golongan === 'Gol IV' ? 0.15 : 0.05;
  const pajakPphVal = Math.round(honorBrutoVal * pphPercent);
  const honorNettoVal = honorBrutoVal - pajakPphVal;

  const filteredDosen = dosenList.filter(dosen => 
    dosen.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dosen.nip.includes(searchQuery)
  );

  // === TAMPILAN HALAMAN DETAIL ===
  if (viewDetail) {
    return (
      <div className="flex-1 w-full bg-[#f8fafc] font-sans p-8">
        <div className="w-full">
          
          {/* Tombol Kembali */}
          <button 
            onClick={() => setViewDetail(false)}
            className="flex items-center gap-3 px-5 py-2.5 border border-slate-300 rounded-lg bg-white text-slate-700 font-bold hover:bg-slate-50 transition-colors mb-8 shadow-sm text-[15px] cursor-pointer"
          >
            <i className="fa-solid fa-arrow-left text-[#1687F5]"></i>
            Kembali ke Data Honor
          </button>

          {/* Header Detail */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-[26px] font-extrabold text-black mb-1">Rincian Perhitungan SKS</h1>
              <p className="text-[16px] text-slate-600 font-medium">
                Pemeriksaan detail komponen SKS untuk <span className="font-bold text-black">{selectedDosen.nama}</span> pada periode {selectedSemester}
              </p>
            </div>
            
            {/* Status Verifikasi */}
            {selectedDosen.status === "Terverifikasi" ? (
              <div className="flex items-center gap-2 text-green-700 bg-green-50 px-4 py-2 rounded-lg border border-green-300">
                <i className="fa-solid fa-check-circle text-[16px]"></i>
                <span className="font-bold text-[15px]">Terverifikasi</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-orange-600 bg-orange-50 px-4 py-2 rounded-lg border border-orange-300">
                <i className="fa-solid fa-clock-rotate-left text-[16px]"></i>
                <span className="font-bold text-[15px]">Menunggu Verifikasi Keuangan</span>
              </div>
            )}
          </div>

          {/* KOTAK INFO DOSEN */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4 mb-8 shadow-sm">
            <div className="flex flex-col">
              <span className="text-[13px] text-slate-500 font-bold mb-1 uppercase tracking-wider">Nama Dosen</span>
              <span className="text-[16px] font-bold text-black">{selectedDosen.nama}</span>
            </div>

            <div className="hidden lg:block w-[1px] h-10 bg-slate-200"></div>

            <div className="flex flex-col">
              <span className="text-[13px] text-slate-500 font-bold mb-1 uppercase tracking-wider">NIP / NIDN</span>
              <span className="text-[16px] font-bold text-black">{selectedDosen.nip}</span>
            </div>

            <div className="hidden lg:block w-[1px] h-10 bg-slate-200"></div>

            <div className="flex flex-col">
              <span className="text-[13px] text-slate-500 font-bold mb-1 uppercase tracking-wider">Jabatan / Golongan</span>
              <span className="text-[16px] font-bold text-[#1687F5]">{selectedDosen.jabatan}</span>
            </div>

            <div className="hidden lg:block w-[1px] h-10 bg-slate-200"></div>

            <div className="flex flex-col">
              <span className="text-[13px] text-slate-500 font-bold mb-1 uppercase tracking-wider">Program Studi</span>
              <span className="text-[16px] font-bold text-black">{selectedDosen.prodi}</span>
            </div>

            <div className="hidden lg:block w-[1px] h-10 bg-slate-200"></div>

            <div className="flex flex-col">
              <span className="text-[13px] text-slate-500 font-bold mb-1 uppercase tracking-wider">Target Beban Wajib</span>
              <span className="text-[16px] font-bold text-[#1687F5]">{selectedDosen.targetSks}</span>
            </div>
          </div>

          {/* Layout Flex Col (Tabel & Summary) */}
          <div className="flex flex-col gap-8 w-full">
            
            {/* Tabel Rincian SKS Lebih */}
            <div className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-max">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-5 text-[14px] font-bold text-black tracking-wider">MATA KULIAH</th>
                    <th className="px-6 py-5 text-[14px] font-bold text-black tracking-wider text-center">KELAS</th>
                    <th className="px-6 py-5 text-[14px] font-bold text-black tracking-wider text-center">METODE PENGAJARAN</th>
                    <th className="px-6 py-5 text-[14px] font-bold text-black tracking-wider text-center">JUMLAH DOSEN</th>
                    <th className="px-6 py-5 text-[14px] font-bold text-black tracking-wider text-center">KATEGORI SKS</th>
                    <th className="px-6 py-5 text-[14px] font-bold text-black tracking-wider text-center">SKS LEBIH</th>
                    <th className="px-6 py-5 text-[14px] font-bold text-black tracking-wider text-center">WAKTU</th>
                    <th className="px-6 py-5 text-[14px] font-bold text-black tracking-wider text-right">TARIF/SKS</th>
                    <th className="px-6 py-5 text-[14px] font-bold text-black tracking-wider text-right">SUBTOTAL</th>
                  </tr>
                </thead>
                <tbody className="text-[14px] md:text-[15px] text-slate-700 font-medium">
                  {selectedDosen.mataKuliahList.map((item, idx) => (
                    <tr 
                      key={idx} 
                      className={`border-b border-slate-100 hover:bg-slate-50 ${
                        item.kategoriSks === '50%' 
                          ? 'bg-orange-50/20' 
                          : item.kategoriSks === '0%' 
                          ? 'bg-slate-50/40 text-slate-400' 
                          : ''
                      }`}
                    >
                      <td className="px-6 py-5 font-bold text-slate-900">{item.mataKuliah}</td>
                      <td className="px-6 py-5 text-center">
                        <span className={`inline-block px-3 py-1 border rounded-md font-bold text-[12px] ${
                          item.kelas.includes('MSU') 
                            ? 'border-red-200 text-red-600 bg-red-50' 
                            : item.kelas.includes('CCIT') 
                            ? 'border-blue-200 text-blue-700 bg-blue-50' 
                            : 'border-slate-300 text-slate-700 bg-slate-100'
                        }`}>
                          {item.kelas}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-center text-slate-600 font-medium">{item.metodePengajaran}</td>
                      <td className="px-6 py-5 text-center font-bold text-slate-800">{item.jumlahDosen}</td>
                      <td className="px-6 py-5 text-center">
                        <span className={`px-3 py-1.5 border rounded-md font-bold text-[11px] md:text-[12px] ${
                          item.kategoriSks === '100%' 
                            ? 'border-green-200 text-green-700 bg-green-50' 
                            : item.kategoriSks === '50%' 
                            ? 'border-orange-200 text-orange-700 bg-orange-50' 
                            : 'border-slate-200 text-slate-400 bg-slate-100'
                        }`}>
                          Kelebihan SKS ({item.kategoriSks})
                        </span>
                      </td>
                      <td className={`px-6 py-5 text-center font-bold ${item.kategoriSks === '0%' ? 'text-slate-400' : 'text-[#1687F5]'}`}>
                        {item.sksLebih}
                      </td>
                      <td className="px-6 py-5 text-center text-slate-500">{item.waktu}</td>
                      
                      {/* TARIF/SKS */}
                      <td className="px-6 py-5 text-right">
                        {item.kategoriSks === '100%' ? (
                          <span className="text-slate-500">Rp {item.tarifBase.toLocaleString('id-ID')}</span>
                        ) : item.kategoriSks === '50%' ? (
                          <div>
                            <div className="text-slate-400 line-through text-[12px]">Rp {item.tarifBase.toLocaleString('id-ID')}</div>
                            <div className="text-orange-600 font-bold">Rp {item.tarifEfektif.toLocaleString('id-ID')}</div>
                          </div>
                        ) : (
                          <div>
                            <div className="text-slate-400 line-through text-[12px]">Rp {item.tarifBase.toLocaleString('id-ID')}</div>
                            <div className="text-slate-400 font-bold">Rp 0</div>
                          </div>
                        )}
                      </td>

                      {/* SUBTOTAL */}
                      <td className="px-6 py-5 text-right font-bold text-black">
                        {item.subtotal > 0 ? (
                          `Rp ${item.subtotal.toLocaleString('id-ID')}`
                        ) : (
                          <span className="text-slate-400 font-normal">Rp 0</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Kotak Ringkasan & Tombol Aksi */}
            <div className="w-full md:w-[520px] self-end flex flex-col gap-6">
              
              <div className="bg-white border-2 border-slate-100 rounded-2xl p-8 shadow-sm">
                <h3 className="text-[18px] font-extrabold text-black mb-6 border-b border-slate-100 pb-4">Ringkasan Pembayaran</h3>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[15px] text-slate-600 font-medium">Beban Mengajar Wajib</span>
                  <span className="text-[15px] text-slate-400 font-bold">{selectedDosen.targetSks} (Tidak dihitung)</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[15px] text-slate-600 font-medium">Total Kelebihan SKS Diakui</span>
                  <span className="text-[15px] text-[#1687F5] font-bold">{selectedDosen.kelebihanSks}</span>
                </div>
                
                <div className="ml-4 mb-6 border-l-2 border-slate-200 pl-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[13px] text-slate-500">Kuota 100%</span>
                    <span className="text-[13px] text-green-600 font-bold">{selectedDosen.sksBreakdown.kuota100}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[13px] text-slate-500">Kuota 50%</span>
                    <span className="text-[13px] text-orange-500 font-bold">{selectedDosen.sksBreakdown.kuota50}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[13px] text-slate-500">Kuota 0% (Tidak Dibayar)</span>
                    <span className="text-[13px] text-slate-400 font-bold">{selectedDosen.sksBreakdown.kuota0}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[15px] text-slate-600 font-medium">Honor Bruto</span>
                  <span className="text-[15px] text-black font-bold">Rp {honorBrutoVal.toLocaleString('id-ID')}</span>
                </div>

                <div className="flex justify-between items-center mb-8">
                  <span className="text-[15px] text-slate-600 font-medium">Potongan PPh 21 ({selectedDosen.golongan === 'Gol IV' ? '15%' : '5%'})</span>
                  <span className="text-[15px] text-red-500 font-bold">-Rp {pajakPphVal.toLocaleString('id-ID')}</span>
                </div>

                <div className="border-t-2 border-dashed border-slate-200 my-6"></div>
                
                <div className="flex justify-between items-center bg-blue-50 p-4 rounded-xl">
                  <span className="text-[18px] text-[#1687F5] font-extrabold">Honor Netto</span>
                  <span className="text-[18px] text-[#1687F5] font-extrabold">Rp {honorNettoVal.toLocaleString('id-ID')}</span>
                </div>
              </div>

              {/* ACTION BUTTONS (Disesuaikan dengan Desain Gambar) */}
              {selectedDosen.status !== "Terverifikasi" ? (
                <div className="flex items-center gap-4 w-full">
                  <button 
                    onClick={() => handleTolak(selectedDosen.id)}
                    className="flex-1 py-4 px-6 rounded-2xl font-bold text-[16px] text-red-600 bg-red-50/70 border border-red-200 hover:bg-red-100/80 transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-sm active:scale-95"
                  >
                    <i className="fa-solid fa-xmark text-[17px]"></i>
                    <span>Tolak Data</span>
                  </button>
                  <button 
                    onClick={() => handleVerifikasi(selectedDosen.id)}
                    className="flex-1 py-4 px-6 rounded-2xl font-bold text-[16px] text-emerald-700 bg-emerald-50/80 border border-emerald-300 hover:bg-emerald-100/80 transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-sm active:scale-95"
                  >
                    <i className="fa-solid fa-check text-[17px]"></i>
                    <span>Setujui & Verifikasi</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-slate-100 text-slate-500 font-bold text-[14px] border border-slate-200">
                  <i className="fa-solid fa-lock"></i> Data Telah Diverifikasi Keuangan
                </div>
              )}

            </div>

          </div>

        </div>
      </div>
    );
  }

  // === TAMPILAN HALAMAN DAFTAR UTAMA ===
  return (
    <div className="flex-1 w-full bg-[#f8fafc] font-sans p-8">
      <div className="w-full">
        
        {/* Header Judul & Dropdown Filter Semester */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h1 className="text-[28px] font-extrabold text-black mb-2">Verifikasi Honorarium Dosen</h1>
            <p className="text-[16px] text-slate-600 font-medium">Pemeriksaan dan persetujuan perhitungan kelebihan SKS mengajar.</p>
          </div>
          
          <div className="flex items-center bg-white border border-slate-300 rounded-lg px-4 py-2.5 shadow-sm">
            <i className="fa-solid fa-filter text-slate-400 mr-3 text-[15px]"></i>
            <select 
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="bg-transparent border-none text-[15px] font-bold text-slate-700 focus:outline-none cursor-pointer"
            >
              <option value="Ganjil 2026/2027">Ganjil 2026/2027</option>
              <option value="Genap 2025/2026">Genap 2025/2026 (Riwayat)</option>
              <option value="Ganjil 2025/2026">Ganjil 2025/2026 (Riwayat)</option>
            </select>
          </div>
        </div>

        {/* Action Bar Search Input */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm mb-6">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between gap-4">
            <div className="relative w-full max-w-[320px]">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <i className="fa-solid fa-magnifying-glass text-[14px]"></i>
              </div>
              <input 
                type="text" 
                placeholder="Cari nama dosen..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-full text-[14px] font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1687F5] focus:ring-2 focus:ring-blue-50 transition-all shadow-sm"
              />
            </div>
            
            <div className="text-[13px] font-bold text-slate-400">
              Menampilkan {filteredDosen.length} data antrean
            </div>
          </div>

          {/* Tabel Data Antrean */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-max">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-8 py-5 text-[15px] font-bold text-black w-[80px]">NO</th>
                  <th className="px-8 py-5 text-[15px] font-bold text-black">NAMA DOSEN</th>
                  <th className="px-8 py-5 text-[15px] font-bold text-black">NIP</th>
                  <th className="px-8 py-5 text-[15px] font-bold text-black text-center">KELEBIHAN SKS</th>
                  <th className="px-8 py-5 text-[15px] font-bold text-black text-center">STATUS</th>
                  <th className="px-8 py-5 text-[15px] font-bold text-black text-center">AKSI</th>
                </tr>
              </thead>
              <tbody className="text-[15px] text-slate-700 font-medium divide-y divide-slate-100">
                {filteredDosen.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-8 py-10 text-center text-slate-400 font-bold">
                      Tidak ada data dosen yang sesuai.
                    </td>
                  </tr>
                ) : (
                  filteredDosen.map((item, index) => (
                    <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-8 py-5 font-bold text-slate-400">{index + 1}</td>
                      <td className="px-8 py-5">
                        <div className="text-black font-bold">{item.nama}</div>
                        <div className="text-[13px] text-slate-500 font-medium">{item.jabatan}</div>
                      </td>
                      <td className="px-8 py-5 text-slate-600">{item.nip}</td>
                      <td className="px-8 py-5 text-center font-bold text-[#1687F5]">{item.kelebihanSks}</td>
                      <td className="px-8 py-5 text-center">
                        {item.status === "Terverifikasi" ? (
                          <span className="inline-flex px-4 py-1.5 rounded-full border border-green-300 bg-green-50 text-green-700 text-[13px] font-bold">
                            Terverifikasi
                          </span>
                        ) : (
                          <span className="inline-flex px-4 py-1.5 rounded-full border border-orange-300 bg-orange-50 text-orange-600 text-[13px] font-bold">
                            Menunggu Verifikasi
                          </span>
                        )}
                      </td>
                      <td className="px-8 py-5 text-center flex justify-center">
                        <button 
                          onClick={() => {
                            setSelectedDosen(item);
                            setViewDetail(true);
                          }}
                          className="flex items-center gap-2 px-5 py-2.5 bg-[#1687F5] hover:bg-blue-600 text-white rounded-lg transition-all text-[13px] font-bold shadow-sm active:scale-95 cursor-pointer"
                        >
                          <i className="fa-regular fa-eye"></i> Lihat Detail
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </div>
  );
}