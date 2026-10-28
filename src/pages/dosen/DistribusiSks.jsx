import { useState } from "react";

// === DATA REFERENSI DETAIL DISTRIBUSI SKS ===
const TIERS = [
  { key: "wajib", title: "Wajib Mengajar", note: "6 SKS", top: "border-t-[#3B5BDB]", head: "bg-[#EDF0FD]", pill: "bg-[#3B5BDB] text-white", cell: "bg-[#F6F8FE]" },
  { key: "p100", title: "Kelebihan SKS 100%", note: "WM + 6 SKS", top: "border-t-[#12A58A]", head: "bg-[#E4F6F2]", pill: "bg-[#12A58A] text-white", cell: "bg-[#F4FBF9]" },
  { key: "p50", title: "Kelebihan SKS 50%", note: "100% + 4 SKS", top: "border-t-[#F2A33A]", head: "bg-[#FDF2E0]", pill: "bg-[#F2A33A] text-[#4A2E05]", cell: "bg-[#FFFAF2]" },
  { key: "none", title: "Kelebihan SKS", note: "tidak dibayarkan", top: "border-t-[#B4BAC6]", head: "bg-[#EEF0F3]", pill: "bg-[#6B7280] text-white", cell: "bg-[#F8F9FA]" },
];

const JURUSAN_TI = "Teknik Informatika dan Komputer";
const PASCA = "Pascasarjana";

const ROWS = [
  { jurusan: JURUSAN_TI, prodi: "Sarjana Terapan - Teknik Informatika", jenis: "Reguler", kelas: "5A", mk: "(TIK502) Perencanaan Sistem", sks: 3, metode: "Non Team Teaching", dosen: 1, sksDosen: 3, wajib: 3 },
  { jurusan: JURUSAN_TI, prodi: "Sarjana Terapan - Teknik Informatika", jenis: "Reguler", kelas: "5C", mk: "(TIK502) Perencanaan Sistem", sks: 3, metode: "Team Teaching Seri", dosen: 1, sksDosen: 3, wajib: 3 },
  { jurusan: JURUSAN_TI, prodi: "Sarjana Terapan - Teknik Multimedia dan Jaringan", jenis: "Reguler", kelas: "1B", mk: "(TMJ110) Algoritma dan Pemrograman", sks: 3, metode: "Non Team Teaching", dosen: 1, sksDosen: 3, p100: 3 },
  { jurusan: JURUSAN_TI, prodi: "Sarjana Terapan - Teknik Informatika", jenis: "Reguler", kelas: "3A", mk: "(TIK304) Kecerdasan Buatan", sks: 2, metode: "Non Team Teaching", dosen: 1, sksDosen: 2, p100: 2 },
  { jurusan: PASCA, prodi: "Magister Terapan - Teknik Elektro", jenis: "Pascasarjana", kelas: "1A", mk: "(MTE103) Algoritma dan Pemodelan", sks: 2, metode: "Non Team Teaching", dosen: 1, sksDosen: 2, p100: 1, p50: 1 },
  { jurusan: PASCA, prodi: "Magister Terapan - Teknik Elektro", jenis: "Pascasarjana", kelas: "3A", mk: "(MTE307) Pervasive Computing", sks: 3, metode: "Team Teaching Seri", dosen: 2, sksDosen: 1.5, p50: 1.5 },
];

const fmt = (n) => String(n).replace(".", ",");
const TH = "px-4 py-3.5 text-[12.5px] font-semibold leading-snug text-slate-600";

// Generator Data 16 Minggu
const WEEKS_DATA = Array.from({ length: 16 }, (_, i) => ({
  no: i + 1,
  minggu: `Minggu ${i + 1} Perkuliahan`,
  totalSks: 16,
  status: i < 8 ? "Terlaksana" : i === 8 ? "Minggu Ini" : "Mendatang",
}));

export default function DistribusiSks() {
  // State untuk berpindah tampilan: 'rekap' | 'detail'
  const [viewMode, setViewMode] = useState("rekap");
  const [selectedWeek, setSelectedWeek] = useState(null);

  const handleOpenDetail = (weekNum) => {
    setSelectedWeek(weekNum);
    setViewMode("detail");
  };

  const handleBackToRekap = () => {
    setViewMode("rekap");
    setSelectedWeek(null);
  };

  return (
    <div className="flex-1 w-full bg-[#f8fafc] font-sans p-8">
      <div className="w-full">
        
        {/* =========================================
            TAMPILAN 1: REKAP 16 MINGGU PERKULIAHAN
        ========================================= */}
        {viewMode === "rekap" && (
          <div>
            {/* Header Judul */}
            <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h1 className="text-[28px] font-extrabold text-[#0F172A] mb-2">
                  Rekap Distribusi SKS Mingguan
                </h1>
                <p className="text-[15px] text-slate-500 font-medium">
                  Monitoring beban mengajar dan distribusi SKS per pertemuan semester ini.
                </p>
              </div>

              {/* Status Semester Badge */}
              <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-xl text-[#1687F5] font-bold text-[14px]">
                <i className="fa-solid fa-calendar-check"></i>
                <span>Semester Ganjil 2026/2027</span>
              </div>
            </div>

          

            {/* Tabel 16 Minggu Perkuliahan */}
            <div className="w-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="px-6 py-4 text-[13px] font-bold text-slate-700 text-center w-[80px]">NO</th>
                      <th className="px-6 py-4 text-[13px] font-bold text-slate-700">MINGGU PERKULIAHAN</th>
                      <th className="px-6 py-4 text-[13px] font-bold text-slate-700 text-center">TOTAL SKS</th>
                      <th className="px-6 py-4 text-[13px] font-bold text-slate-700 text-center">STATUS</th>
                      <th className="px-6 py-4 text-[13px] font-bold text-slate-700 text-center w-[220px]">AKSI</th>
                    </tr>
                  </thead>
                  <tbody className="text-[14px] text-slate-700 divide-y divide-slate-100">
                    {WEEKS_DATA.map((item) => (
                      <tr 
                        key={item.no} 
                        className="hover:bg-blue-50/40 transition-colors group"
                      >
                        {/* No */}
                        <td className="px-6 py-4 text-center font-bold text-slate-400 group-hover:text-slate-700">
                          {item.no}
                        </td>

                        {/* Minggu */}
                        <td className="px-6 py-4 font-bold text-slate-900">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center text-[12px] font-bold group-hover:bg-[#1687F5] group-hover:text-white transition-colors">
                              M{item.no}
                            </div>
                            <span>{item.minggu}</span>
                          </div>
                        </td>

                        {/* Total SKS */}
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center px-3 py-1 rounded-lg bg-slate-100 text-slate-800 font-extrabold text-[13px] border border-slate-200">
                            {item.totalSks} SKS
                          </span>
                        </td>

                        {/* Status */}
                        <td className="px-6 py-4 text-center">
                          {item.status === "Terlaksana" && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[12px]">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Terlaksana
                            </span>
                          )}
                          {item.status === "Minggu Ini" && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-bold text-[12px] animate-pulse">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Minggu Ini
                            </span>
                          )}
                          {item.status === "Mendatang" && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-500 border border-slate-200 font-medium text-[12px]">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Mendatang
                            </span>
                          )}
                        </td>

                        {/* Tombol Lihat Pertemuan */}
                        <td className="px-6 py-4 text-center">
                          <button
                            onClick={() => handleOpenDetail(item.no)}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 font-bold text-[13px] hover:border-[#1687F5] hover:text-[#1687F5] hover:bg-blue-50 transition-all shadow-sm active:scale-95"
                          >
                            <i className="fa-regular fa-eye"></i>
                            <span>Lihat Pertemuan</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* =========================================
            TAMPILAN 2: DETAIL DISTRIBUSI SKS TABEL
        ========================================= */}
        {viewMode === "detail" && (
          <div>
            {/* Tombol Kembali ke Rekap */}
            <button
              onClick={handleBackToRekap}
              className="flex items-center gap-2.5 px-5 py-2.5 border border-slate-300 rounded-xl bg-white text-slate-700 font-bold hover:bg-slate-50 hover:border-slate-400 transition-all mb-6 shadow-sm text-[14px] active:scale-95"
            >
              <i className="fa-solid fa-arrow-left text-[#1687F5]"></i>
              <span>Kembali ke Rekap Mingguan</span>
            </button>

            {/* Sub-Header Detail */}
            <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-[24px] font-extrabold text-slate-900">
                  Rincian Pertemuan - Minggu {selectedWeek}
                </h2>
                <p className="text-[14px] text-slate-500 font-medium mt-1">
                  Detail pemetaan beban mengajar wajib dan kelebihan SKS per mata kuliah pada Minggu {selectedWeek}.
                </p>
              </div>

              <div className="bg-slate-900 text-white px-4 py-2 rounded-xl font-bold text-[13px] shadow-sm">
                Minggu ke-{selectedWeek} dari 16
              </div>
            </div>

            {/* TABEL DETAIL DISTRIBUSI SKS */}
            <div
              className="w-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80"
              style={{ fontFamily: "'Figtree', system-ui, sans-serif" }}
            >
              <style>{`@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap');`}</style>

              <div className="overflow-x-auto">
                <table className="w-full min-w-max border-collapse text-left">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 align-bottom">
                      <th className={`${TH} text-center`}>No</th>
                      <th className={TH}>Jurusan</th>
                      <th className={TH}>Program Studi</th>
                      <th className={TH}>Jenis Kelas</th>
                      <th className={`${TH} text-center`}>
                        Nama<br />Kelas
                      </th>
                      <th className={TH}>Mata Kuliah</th>
                      <th className={`${TH} text-center`}>
                        SKS<br />MK
                      </th>
                      <th className={TH}>
                        Metode<br />Pengajaran
                      </th>
                      <th className={`${TH} text-center`}>
                        Jumlah<br />Dosen
                      </th>
                      <th className={`${TH} text-center`}>
                        SKS<br />Dosen
                      </th>
                      {TIERS.map((t) => (
                        <th key={t.key} className={`${TH} w-[130px] border-t-4 text-center ${t.top} ${t.head}`}>
                          {t.title}
                          <div className="mt-0.5 text-[11.5px] font-medium text-slate-500">({t.note})</div>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody className="text-[13.5px] text-slate-600">
                    {ROWS.map((r, i) => (
                      <tr key={i} className="border-b border-slate-100 transition-colors last:border-b-0 hover:bg-[#F7F8FC]">
                        <td className="px-4 py-4 text-center tabular-nums text-slate-400">{i + 1}</td>
                        <td className="px-4 py-4 leading-snug">{r.jurusan}</td>
                        <td className="px-4 py-4 leading-snug">{r.prodi}</td>
                        <td className="px-4 py-4">{r.jenis}</td>
                        <td className="px-4 py-4 text-center">
                          <span className="inline-flex h-8 min-w-[2.25rem] items-center justify-center rounded-lg bg-slate-900 px-2 text-[13px] font-bold text-white transition-colors">
                            {r.kelas}
                          </span>
                        </td>
                        <td className="px-4 py-4 font-semibold leading-snug text-slate-900">{r.mk}</td>
                        <td className="px-4 py-4 text-center tabular-nums">{r.sks}</td>
                        <td className="px-4 py-4">{r.metode}</td>
                        <td className="px-4 py-4 text-center tabular-nums">{r.dosen}</td>
                        <td className="px-4 py-4 text-center font-semibold tabular-nums text-slate-800">{fmt(r.sksDosen)}</td>
                        {TIERS.map((t) => (
                          <td key={t.key} className={`px-4 py-4 text-center ${t.cell}`}>
                            {r[t.key] ? (
                              <span className={`inline-block rounded-md px-2.5 py-1 text-[12px] font-bold tabular-nums ${t.pill}`}>
                                {fmt(r[t.key])} SKS
                              </span>
                            ) : (
                              <span className="text-slate-300">&ndash;</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}