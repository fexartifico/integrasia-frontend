import { useState } from 'react';

export default function RekapHonor() {
  const [selectedPeriode, setSelectedPeriode] = useState('Ganjil 2025/2026');

  const dataByPeriode = {
    'Ganjil 2025/2026': [
      { id: 1, prodi: "Teknik Informatika dan Komputer", dosen: 15, sks: 45, total: 22500000 },
      { id: 2, prodi: "Teknik Mesin", dosen: 12, sks: 30, total: 15000000 },
      { id: 3, prodi: "Teknik Elektro", dosen: 10, sks: 25, total: 12500000 },
      { id: 4, prodi: "Akuntansi", dosen: 20, sks: 60, total: 30000000 },
      { id: 5, prodi: "Administrasi Niaga", dosen: 18, sks: 50, total: 25000000 },
      { id: 6, prodi: "Teknik Grafika dan Penerbitan", dosen: 18, sks: 50, total: 25000000 },
      { id: 7, prodi: "Teknik Sipil", dosen: 18, sks: 50, total: 25000000 },
    ],
    'Genap 2025/2026': [
      { id: 1, prodi: "Teknik Informatika", dosen: 14, sks: 40, total: 20000000 },
      { id: 2, prodi: "Teknik Mesin", dosen: 11, sks: 28, total: 14000000 },
      { id: 3, prodi: "Teknik Elektro", dosen: 9, sks: 22, total: 11000000 },
      { id: 4, prodi: "Akuntansi", dosen: 19, sks: 55, total: 27500000 },
      { id: 5, prodi: "Administrasi Niaga", dosen: 18, sks: 50, total: 25000000 },
      { id: 6, prodi: "Teknik Grafika dan Penerbitan", dosen: 18, sks: 50, total: 25000000 },
      { id: 7, prodi: "Teknik Sipil", dosen: 18, sks: 50, total: 25000000 },
      
    ],
    'Ganjil 2026/2027': [
      { id: 1, prodi: "Teknik Informatika", dosen: 16, sks: 48, total: 24000000 },
      { id: 2, prodi: "Teknik Mesin", dosen: 13, sks: 34, total: 17000000 },
      { id: 3, prodi: "Teknik Elektro", dosen: 11, sks: 28, total: 14000000 },
      { id: 4, prodi: "Akuntansi", dosen: 21, sks: 62, total: 31000000 },
      { id: 5, prodi: "Administrasi Niaga", dosen: 18, sks: 50, total: 25000000 },
      { id: 6, prodi: "Teknik Grafika dan Penerbitan", dosen: 18, sks: 50, total: 25000000 },
      { id: 7, prodi: "Teknik Sipil", dosen: 18, sks: 50, total: 25000000 },
    ],
  };

  const currentData = dataByPeriode[selectedPeriode] || [];

  // Kalkulasi otomatis Grand Total sesuai periode terpilih
  const totalDosen = currentData.reduce((sum, item) => sum + item.dosen, 0);
  const totalSks = currentData.reduce((sum, item) => sum + item.sks, 0);
  const grandTotal = currentData.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="flex-1 w-full bg-[#f8fafc] font-sans p-8">
      <div className="w-full">
        
        {/* Header Area + Filter Periode */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
          <div>
            <h1 className="text-[28px] font-extrabold text-black mb-2">Rekapitulasi Honorarium</h1>
            <p className="text-[16px] text-slate-600 font-medium">Laporan agregat honorarium berdasarkan Program Studi/Jurusan</p>
          </div>

          {/* Dropdown Filter Periode */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <i className="fa-solid fa-filter text-[14px]"></i>
            </div>
            <select
              value={selectedPeriode}
              onChange={(e) => setSelectedPeriode(e.target.value)}
              className="bg-white border border-slate-200 rounded-xl pl-11 pr-10 py-2.5 text-[14px] font-bold text-slate-800 focus:outline-none focus:border-[#1687F5] transition-all appearance-none cursor-pointer shadow-sm min-w-[235px]"
            >
              <option value="Ganjil 2025/2026">Ganjil 2025/2026</option>
              <option value="Genap 2025/2026">Genap 2025/2026</option>
              <option value="Ganjil 2026/2027">Ganjil 2026/2027</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-600">
              <i className="fa-solid fa-chevron-down text-[12px]"></i>
            </div>
          </div>
        </div>

        {/* Table Area */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-0 border-2 border-slate-800 rounded-xl overflow-hidden shadow-sm">
            
            <thead className="bg-[#E8F1FD]">
              <tr>
                <th className="border-r border-b border-slate-800 px-6 py-5 text-[15px] font-extrabold text-black text-center w-[80px]">No</th>
                <th className="border-r border-b border-slate-800 px-6 py-5 text-[15px] font-extrabold text-black text-left">Program Studi / Jurusan</th>
                <th className="border-r border-b border-slate-800 px-6 py-5 text-[15px] font-extrabold text-black text-center">Total Dosen Mengajar</th>
                <th className="border-r border-b border-slate-800 px-6 py-5 text-[15px] font-extrabold text-black text-center">Total Kelebihan SKS</th>
                <th className="border-b border-slate-800 px-6 py-5 text-[15px] font-extrabold text-black text-center">Total</th>
              </tr>
            </thead>
            
            <tbody className="text-[15px] text-black font-semibold bg-white">
              {currentData.map((item, index) => {
                const isLastDataRow = index === currentData.length - 1;
                
                return (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className={`border-r border-slate-800 px-6 py-4 text-center ${isLastDataRow ? '' : 'border-b'}`}>{item.id}</td>
                    <td className={`border-r border-slate-800 px-6 py-4 text-left ${isLastDataRow ? '' : 'border-b'}`}>{item.prodi}</td>
                    <td className={`border-r border-slate-800 px-6 py-4 text-center ${isLastDataRow ? '' : 'border-b'}`}>{item.dosen}</td>
                    <td className={`border-r border-slate-800 px-6 py-4 text-center ${isLastDataRow ? '' : 'border-b'}`}>{item.sks} SKS</td>
                    <td className={`px-6 py-4 text-center border-slate-800 ${isLastDataRow ? '' : 'border-b'}`}>
                      Rp {item.total.toLocaleString('id-ID')}
                    </td>
                  </tr>
                );
              })}
              
              {/* Grand Total Row */}
              <tr className="bg-slate-50">
                <td colSpan="2" className="border-t border-r border-slate-800 px-6 py-5 text-center font-extrabold text-black text-[18px]">
                  Grand Total :
                </td>
                <td className="border-t border-r border-slate-800 px-6 py-5 text-center font-extrabold text-black text-[16px]">{totalDosen}</td>
                <td className="border-t border-r border-slate-800 px-6 py-5 text-center font-extrabold text-black text-[16px]">{totalSks} SKS</td>
                <td className="border-t border-slate-800 px-6 py-5 text-center font-extrabold text-black text-[16px]">
                  Rp {grandTotal.toLocaleString('id-ID')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}