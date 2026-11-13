import { useState } from 'react';

export default function DataHonor() {
  const [viewDetail, setViewDetail] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState("Ganjil 2025/2026");
  const [searchQuery, setSearchQuery] = useState('');

  // 2 Data Dummy Dosen
  const [dosenList] = useState([
    {
      id: 1,
      nama: "DEWI YANTI LILIANA",
      statusDosen: "DT",
      nip: "198111162005012004",
      prodi: "Teknik Informatika",
      jabatan: "Lektor Kepala (IV/a)",
      golongan: "Gol IV",
      kelebihanSks: "9 SKS",
      targetSks: "10 SKS",
      status: "Terverifikasi",
      mataKuliahList: [
        { mataKuliah: "Machine Learning", kelas: "6ACCIT", metodePengajaran: "Non Team Teaching", jumlahDosen: 1, sksTotal: 2, minggu: 16, tarifBase: 250000 },
        { mataKuliah: "Natural Language Processing", kelas: "6AMSU", metodePengajaran: "Non Team Teaching", jumlahDosen: 1, sksTotal: 2, minggu: 16, tarifBase: 300000 },
        { mataKuliah: "Artificial Intelligence (AI)", kelas: "2A", metodePengajaran: "Team Teaching", jumlahDosen: 2, sksTotal: 2, minggu: 8, tarifBase: 220000 },
        { mataKuliah: "Kecerdasan Buatan untuk Game", kelas: "6A", metodePengajaran: "Non Team Teaching", jumlahDosen: 1, sksTotal: 3, minggu: 16, tarifBase: 160000 }
      ]
    },
    {
      id: 2,
      nama: "Dr. BUDI SANTOSO, M.T.",
      statusDosen: "DT",
      nip: "198001012005011001",
      prodi: "Teknik Informatika",
      jabatan: "Lektor (III/c)",
      golongan: "Gol III",
      kelebihanSks: "11 SKS",
      targetSks: "12 SKS",
      status: "Menunggu Verifikasi",
      mataKuliahList: [
        { mataKuliah: "Pemrograman Web Lanjut", kelas: "5A", metodePengajaran: "Non Team Teaching", jumlahDosen: 1, sksTotal: 3, minggu: 16, tarifBase: 150000 },
        { mataKuliah: "Basis Data", kelas: "3B", metodePengajaran: "Non Team Teaching", jumlahDosen: 1, sksTotal: 2, minggu: 16, tarifBase: 150000 },
        // SISTEM OPERASI: Total 3 SKS. Sisa kuota 100% tinggal 1. Maka: 1 SKS (100%) & 2 SKS (50%)
        { mataKuliah: "Sistem Operasi", kelas: "3AMSU", metodePengajaran: "Non Team Teaching", jumlahDosen: 1, sksTotal: 3, minggu: 16, tarifBase: 200000 },
        // KEAMANAN JARINGAN: Total 3 SKS. Sisa kuota 50% tinggal 2. Maka: 2 SKS (50%) & 1 SKS (0%)
        { mataKuliah: "Keamanan Jaringan", kelas: "5ACCIT", metodePengajaran: "Non Team Teaching", jumlahDosen: 1, sksTotal: 3, minggu: 16, tarifBase: 180000 }
      ]
    }
  ]);

  const [selectedDosen, setSelectedDosen] = useState(dosenList[0]);

  // FUNGSI INTI: Otomatis Menghitung & Split Kuota SKS (Maks 6 SKS 100%, Maks 4 SKS 50%)
  const generateSplitRows = (mkList) => {
    let sisaKuota100 = 6;
    let sisaKuota50 = 4;
    const rows = [];

    mkList.forEach((mk) => {
      let sisaSksMatkul = mk.sksTotal;
      const bagianMatkul = [];

      // 1. Alokasi ke Kuota 100%
      if (sisaSksMatkul > 0 && sisaKuota100 > 0) {
        const ambil100 = Math.min(sisaSksMatkul, sisaKuota100);
        const subtotal100 = (ambil100 / mk.jumlahDosen) * mk.minggu * mk.tarifBase;
        bagianMatkul.push({
          ...mk,
          kategoriSks: "100%",
          sksLebihNum: ambil100,
          sksLebih: `${ambil100} SKS`,
          waktu: `${mk.minggu} Minggu`,
          tarifEfektif: mk.tarifBase,
          subtotal: subtotal100
        });
        sisaKuota100 -= ambil100;
        sisaSksMatkul -= ambil100;
      }

      // 2. Alokasi ke Kuota 50%
      if (sisaSksMatkul > 0 && sisaKuota50 > 0) {
        const ambil50 = Math.min(sisaSksMatkul, sisaKuota50);
        const tarif50 = mk.tarifBase * 0.5;
        const subtotal50 = (ambil50 / mk.jumlahDosen) * mk.minggu * tarif50;
        bagianMatkul.push({
          ...mk,
          kategoriSks: "50%",
          sksLebihNum: ambil50,
          sksLebih: `${ambil50} SKS`,
          waktu: `${mk.minggu} Minggu`,
          tarifEfektif: tarif50,
          subtotal: subtotal50
        });
        sisaKuota50 -= ambil50;
        sisaSksMatkul -= ambil50;
      }

      // 3. Alokasi ke Kuota 0% (Diatas 10 SKS)
      if (sisaSksMatkul > 0) {
        bagianMatkul.push({
          ...mk,
          kategoriSks: "0%",
          sksLebihNum: sisaSksMatkul,
          sksLebih: `${sisaSksMatkul} SKS`,
          waktu: `${mk.minggu} Minggu`,
          tarifEfektif: 0,
          subtotal: 0
        });
      }

      // Tandai baris UI jika mata kuliah terpecah lebih dari 1 bagian
      const isSplit = bagianMatkul.length > 1;
      bagianMatkul.forEach((part, index) => {
        rows.push({
          ...part,
          isSplitParent: isSplit && index === 0,
          isSplitChild: isSplit && index > 0,
          splitInfo: isSplit ? `${part.sksLebihNum}/${mk.sksTotal} SKS` : null
        });
      });
    });

    return rows;
  };

  // Kalkulasi & Render Rows Berdasarkan Dosen Terpilih
  const processedRows = generateSplitRows(selectedDosen.mataKuliahList);
  const totalSksLebih = processedRows.reduce((acc, item) => acc + item.sksLebihNum, 0);
  const honorBrutoVal = processedRows.reduce((acc, item) => acc + item.subtotal, 0);

  // Kalkulasi Pajak & Netto
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

            {/* Indicator Status */}
            {selectedDosen.status === "Terverifikasi" ? (
              <div className="flex items-center gap-2 text-green-700 bg-green-50 px-4 py-2 rounded-lg border border-green-300">
                <i className="fa-solid fa-check-circle text-[16px]"></i>
                <span className="font-bold text-[15px]">Terverifikasi Keuangan</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-amber-600 bg-orange-50 px-4 py-2 rounded-lg border border-orange-200">
                <i className="fa-solid fa-clock-rotate-left text-[16px]"></i>
                <span className="font-semibold text-[15px]">Menunggu Verifikasi Keuangan</span>
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
              <span className="text-[13px] text-slate-500 font-bold mb-1 uppercase tracking-wider">Status Dosen</span>
              <span className="text-[16px] font-bold text-[#1687F5]">{selectedDosen.statusDosen}</span>
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
              <span className="text-[13px] text-slate-500 font-bold mb-1 uppercase tracking-wider">Target Wajib</span>
              <span className="text-[16px] font-bold text-[#1687F5]">{selectedDosen.targetSks}</span>
            </div>
          </div>

          {/* Layout Tabel & Summary */}
          <div className="flex flex-col gap-8 w-full">
            
            {/* Tabel Utama Rincian Mata Kuliah */}
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
                  {processedRows.map((item, idx) => (
                    <tr 
                      key={idx} 
                      className={`hover:bg-slate-50 transition-colors ${
                        item.isSplitParent 
                          ? 'border-b border-dashed border-orange-200' 
                          : 'border-b border-slate-100'
                      } ${
                        item.kategoriSks === '50%' 
                          ? 'bg-orange-50/25' 
                          : item.kategoriSks === '0%' 
                          ? 'bg-slate-50/40 text-slate-400' 
                          : ''
                      }`}
                    >
                      {/* KOLOM MATA KULIAH (Dengan Indikator Split/Pecahan) */}
                      <td className="px-6 py-5">
                        {item.isSplitChild ? (
                          <div className="flex items-center gap-2.5 pl-4">
                            <span className="text-orange-400 font-bold text-[16px] leading-none">↳</span>
                            <div>
                              <div className="font-bold text-slate-700">{item.mataKuliah}</div>
                              <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded bg-orange-100/80 text-orange-700 text-[11px] font-bold">
                                Sisa Split ({item.splitInfo})
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="font-bold text-slate-900">{item.mataKuliah}</div>
                            {item.isSplitParent && (
                              <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-[#1687F5] text-[11px] font-bold">
                                <i className="fa-solid fa-code-branch text-[10px]"></i>
                                Split Kuota ({item.splitInfo})
                              </span>
                            )}
                          </div>
                        )}
                      </td>
                      
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
                      <td className={`px-6 py-5 text-center font-bold ${
                        item.kategoriSks === '0%' 
                          ? 'text-slate-400' 
                          : item.kategoriSks === '50%' 
                          ? 'text-orange-600' 
                          : 'text-[#1687F5]'
                      }`}>
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
                  
                  {/* BARIS TOTAL TABEL */}
                  <tr className="bg-slate-100/50 border-t-2 border-slate-300">
                    <td colSpan="5" className="px-6 py-5 text-right font-extrabold text-slate-800 text-[15px]">
                      TOTAL KESELURUHAN
                    </td>
                    <td className="px-6 py-5 text-center font-extrabold text-[#1687F5] text-[15px]">
                      {totalSksLebih} SKS
                    </td>
                    <td colSpan="2"></td>
                    <td className="px-6 py-5 text-right font-extrabold text-black text-[15px]">
                      Rp {honorBrutoVal.toLocaleString('id-ID')}
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

            {/* Kotak Ringkasan Pembayaran */}
            <div className="w-full md:w-[480px] self-end bg-white border-2 border-slate-100 rounded-2xl p-8 shadow-sm">
              <h3 className="text-[18px] font-extrabold text-black mb-6 border-b border-slate-100 pb-4">Ringkasan Pembayaran</h3>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-[15px] text-slate-600 font-medium">Beban Mengajar Wajib</span>
                <span className="text-[15px] text-slate-400 font-bold">{selectedDosen.targetSks} (Tidak dihitung)</span>
              </div>
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-[15px] text-slate-600 font-medium">Honor Bruto</span>
                <span className="text-[15px] text-black font-bold">Rp {honorBrutoVal.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between items-center mb-8">
                <span className="text-[15px] text-slate-600 font-medium">
                  Potongan PPh 21 ({selectedDosen.golongan === 'Gol IV' ? '15%' : '5%'})
                </span>
                <span className="text-[15px] text-red-500 font-bold">-Rp {pajakPphVal.toLocaleString('id-ID')}</span>
              </div>

              <div className="border-t-2 border-dashed border-slate-200 my-6"></div>
              
              <div className="flex justify-between items-center bg-blue-50 p-4 rounded-xl">
                <span className="text-[18px] text-[#1687F5] font-extrabold">Honor Netto</span>
                <span className="text-[18px] text-[#1687F5] font-extrabold">Rp {honorNettoVal.toLocaleString('id-ID')}</span>
              </div>
            </div>

          </div>

          <p className="mt-8 text-[13px] text-slate-500 flex items-center gap-2 font-medium">
            <i className="fa-solid fa-circle-info"></i> Mode Pengawasan (Read-Only). Algoritma akan otomatis memecah SKS mata kuliah yang menabrak batas kuota 6 SKS (100%) dan 4 SKS (50%).
          </p>

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
            <h1 className="text-[28px] font-extrabold text-black mb-2">Data Honorarium Dosen</h1>
            <p className="text-[16px] text-slate-600 font-medium">Rincian perhitungan kelebihan SKS dan honor per individu.</p>
          </div>
          
          <div className="flex items-center bg-white border border-slate-300 rounded-lg px-4 py-2.5 shadow-sm">
            <i className="fa-solid fa-filter text-slate-400 mr-3 text-[15px]"></i>
            <select 
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="bg-transparent border-none text-[15px] font-bold text-slate-700 focus:outline-none cursor-pointer"
            >
              <option value="Ganjil 2025/2026">Ganjil 2025/2026</option>
              <option value="Genap 2025/2026">Genap 2025/2026 (Riwayat)</option>
              <option value="Ganjil 2026/2027">Ganjil 2026/2027</option>
            </select>
          </div>
        </div>
        
        {/* Container Tabel Utama */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          
          {/* Header Action Bar di Dalam Tabel */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between gap-4 bg-white">
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
              Menampilkan {filteredDosen.length} data
            </div>
          </div>

          {/* Tabel Data Honor */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-max">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-8 py-5 text-[15px] font-bold text-black w-[80px]">NO</th>
                  <th className="px-8 py-5 text-[15px] font-bold text-black">NAMA DOSEN</th>
                  <th className="px-8 py-5 text-[15px] font-bold text-black text-center">STATUS DOSEN</th>
                  <th className="px-8 py-5 text-[15px] font-bold text-black">NIP</th>
                  <th className="px-8 py-5 text-[15px] font-bold text-black text-center">KELEBIHAN SKS</th>
                  <th className="px-8 py-5 text-[15px] font-bold text-black text-center">STATUS</th>
                  <th className="px-8 py-5 text-[15px] font-bold text-black text-center">AKSI</th>
                </tr>
              </thead>
              <tbody className="text-[16px] text-slate-700 font-medium divide-y divide-slate-100">
                
                {filteredDosen.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-8 py-10 text-center text-slate-400 font-bold">
                      Tidak ada data dosen yang sesuai dengan pencarian.
                    </td>
                  </tr>
                ) : (
                  filteredDosen.map((item, index) => (
                    <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-8 py-5">{index + 1}</td>
                      <td className="px-8 py-5">
                        <div className="text-black font-bold">{item.nama}</div>
                        <div className="text-[13px] text-slate-500 font-medium mt-0.5">{item.jabatan}</div>
                      </td>
                      <td className="px-8 py-5 text-center">
                        <span className="bg-[#1687F5] text-white text-[12px] px-3 py-1 rounded-md font-bold tracking-wider">
                          {item.statusDosen}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-slate-600">{item.nip}</td>
                      <td className="px-8 py-5 text-center font-bold">{item.kelebihanSks}</td>
                      <td className="px-8 py-5 text-center">
                        {item.status === "Terverifikasi" ? (
                          <span className="inline-flex px-4 py-1.5 rounded-full border border-green-300 bg-green-50 text-green-700 text-[14px] font-bold">
                            Terverifikasi
                          </span>
                        ) : (
                          <span className="inline-flex px-4 py-1.5 rounded-full border border-orange-300 bg-orange-50 text-orange-600 text-[14px] font-bold">
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
                          className="flex items-center gap-2 px-5 py-2.5 border border-slate-300 rounded-lg hover:border-[#1687F5] hover:text-[#1687F5] hover:bg-blue-50 transition-all text-[15px] font-bold shadow-sm active:scale-95 cursor-pointer"
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