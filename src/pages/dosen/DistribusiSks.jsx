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

export default function DistribusiSksTabel() {
  return (
    <div
      className="w-full overflow-hidden rounded-xl bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/80"
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
              <th className={`${TH} text-center`}>Nama<br />Kelas</th>
              <th className={TH}>Mata Kuliah</th>
              <th className={`${TH} text-center`}>SKS<br />MK</th>
              <th className={TH}>Metode<br />Pengajaran</th>
              <th className={`${TH} text-center`}>Jumlah<br />Dosen</th>
              <th className={`${TH} text-center`}>SKS<br />Dosen</th>
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
                  <a href="#" className="inline-flex h-8 min-w-[2.25rem] items-center justify-center rounded-lg bg-slate-900 px-2 text-[13px] font-bold text-white transition-colors hover:bg-[#3B5BDB]">
                    {r.kelas}
                  </a>
                </td>
                <td className="px-4 py-4 font-semibold leading-snug text-slate-900">{r.mk}</td>
                <td className="px-4 py-4 text-center tabular-nums">{r.sks}</td>
                <td className="px-4 py-4">{r.metode}</td>
                <td className="px-4 py-4 text-center tabular-nums">{r.dosen}</td>
                <td className="px-4 py-4 text-center font-semibold tabular-nums text-slate-800">{fmt(r.sksDosen)}</td>
                {TIERS.map((t) => (
                  <td key={t.key} className={`px-4 py-4 text-center ${t.cell}`}>
                    {r[t.key] ? (
                      <span className={`inline-block rounded-md px-2.5 py-1 text-[12px] font-bold tabular-nums ${t.pill}`}>{fmt(r[t.key])} SKS</span>
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
  );
}