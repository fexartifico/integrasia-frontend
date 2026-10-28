import React, { useState } from 'react';

export default function MasterData() {
  const [activeTab, setActiveTab] = useState('tarif');
  
  // State untuk mengontrol Modal Tambah Tarif
  const [isModalTarifOpen, setIsModalTarifOpen] = useState(false);

  // State Filter Jenis Tarif
  const [filterJenis, setFilterJenis] = useState('Semua');

  // Sample Data Tarif SKS
  const [dataTarif, setDataTarif] = useState([
    {
      id: 1,
      jenis: 'KERJA SAMA',
      ptKerjasama: 'PT CCIT',
      jabatan: 'Guru Besar IV/d-Pembina Utama Madya',
      honor: '300.000',
      expired: '2030-12-31'
    },
    {
      id: 2,
      jenis: 'KERJA SAMA',
      ptKerjasama: 'PT CCIT',
      jabatan: 'Lektor Kepala IV/a-Pembina',
      honor: '250.000',
      expired: '2030-12-31'
    },
    {
      id: 3,
      jenis: 'REGULER',
      ptKerjasama: '-',
      jabatan: 'Asisten Ahli ---',
      honor: '150.000',
      expired: '2030-12-31'
    },
    {
      id: 4,
      jenis: 'PASCASARJANA',
      ptKerjasama: '-',
      jabatan: 'Guru Besar IV/e',
      honor: '400.000',
      expired: '2030-12-31'
    }
  ]);

  // State Form Tambah Tarif (Jenis Kelas sudah dihapus)
  const [formTarif, setFormTarif] = useState({
    jenis: 'REGULER',
    ptKerjasama: '-',
    jabatan: 'Asisten Ahli ---',
    honor: '',
    tanggalExpired: ''
  });

  const handleSaveTarif = (e) => {
    e.preventDefault();
    const newEntry = {
      id: Date.now(),
      jenis: formTarif.jenis,
      ptKerjasama: formTarif.ptKerjasama,
      jabatan: formTarif.jabatan,
      honor: Number(formTarif.honor).toLocaleString('id-ID'),
      expired: formTarif.tanggalExpired
    };

    setDataTarif([newEntry, ...dataTarif]);
    alert("Tarif baru berhasil ditambahkan!");
    setIsModalTarifOpen(false);
    setFormTarif({
      jenis: 'REGULER',
      ptKerjasama: '-',
      jabatan: 'Asisten Ahli ---',
      honor: '',
      tanggalExpired: ''
    });
  };

  const handleDeleteTarif = (id) => {
    if (confirm("Apakah Anda yakin ingin menghapus data tarif ini?")) {
      setDataTarif(dataTarif.filter((item) => item.id !== id));
    }
  };

  // Logic Filtering Tabel
  const filteredTarifData = dataTarif.filter((item) => {
    if (filterJenis === 'Semua') return true;
    return item.jenis.toUpperCase() === filterJenis.toUpperCase();
  });

  return (
    <div className="flex-1 w-full bg-[#f8fafc] font-sans p-8 relative">
      <div className="w-full">
        
        {/* Header Halaman Utama */}
        <div className="mb-6">
          <h1 className="text-[28px] font-extrabold text-black mb-2">Master Data Sistem</h1>
          <p className="text-[15px] text-slate-500 font-medium">
            Kelola referensi tarif honorarium dan dokumen peraturan (Perdir) yang berlaku.
          </p>
        </div>

        {/* TABS NAVIGASI */}
        <div className="flex gap-4 border-b border-slate-200 mb-8">
          <button
            onClick={() => setActiveTab('tarif')}
            className={`pb-4 px-2 text-[15px] font-bold transition-all border-b-[3px] ${
              activeTab === 'tarif'
                ? 'border-[#1687F5] text-[#1687F5]'
                : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
            }`}
          >
            <i className="fa-solid fa-money-check-dollar mr-2"></i>
            Master Tarif SKS
          </button>
          
          <button
            onClick={() => setActiveTab('perdir')}
            className={`pb-4 px-2 text-[15px] font-bold transition-all border-b-[3px] ${
              activeTab === 'perdir'
                ? 'border-[#1687F5] text-[#1687F5]'
                : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
            }`}
          >
            <i className="fa-solid fa-file-contract mr-2"></i>
            Dokumen Perdir
          </button>
        </div>

        {/* TAB 1: MASTER TARIF SKS */}
        {activeTab === 'tarif' && (
          <div className="animate-fadeIn">
            {/* Action Bar & Dropdown Filtering */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              
              <div className="flex items-center gap-4">
                <h2 className="text-[18px] font-bold text-slate-800">Tabel Tarif Honorarium</h2>
                
                {/* Dropdown Filtering */}
                <div className="flex items-center bg-white border border-slate-300 rounded-xl px-3.5 py-2 shadow-sm">
                  <i className="fa-solid fa-filter text-slate-400 mr-2.5 text-[13px]"></i>
                  <select 
                    value={filterJenis}
                    onChange={(e) => setFilterJenis(e.target.value)}
                    className="bg-transparent text-[13.5px] font-bold text-slate-700 focus:outline-none cursor-pointer"
                  >
                    <option value="Semua">Semua Jenis</option>
                    <option value="REGULER">Reguler</option>
                    <option value="KERJA SAMA">Kerja Sama</option>
                    <option value="PASCASARJANA">Pasca Sarjana</option>
                  </select>
                </div>
              </div>

              <button 
                onClick={() => setIsModalTarifOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-[14px] bg-[#1687F5] hover:bg-blue-600 text-white transition-all shadow-sm active:scale-95"
              >
                <i className="fa-solid fa-plus"></i>
                Tambah Tarif Baru
              </button>
            </div>

            {/* Container Tabel Tarif (Tanpa Jenis Kelas) */}
            <div className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-max">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-[13px] font-bold text-slate-700">JENIS</th>
                      <th className="px-6 py-4 text-[13px] font-bold text-slate-700">PT KERJASAMA</th>
                      <th className="px-6 py-4 text-[13px] font-bold text-slate-700">JABATAN / GOLONGAN</th>
                      <th className="px-6 py-4 text-[13px] font-bold text-slate-700 text-right">HONOR (Rp)</th>
                      <th className="px-6 py-4 text-[13px] font-bold text-slate-700 text-center">TANGGAL EXPIRED</th>
                      <th className="px-6 py-4 text-[13px] font-bold text-slate-700 text-center">AKSI</th>
                    </tr>
                  </thead>
                  <tbody className="text-[14px] text-slate-700 font-medium divide-y divide-slate-100">
                    
                    {filteredTarifData.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="px-6 py-10 text-center text-slate-400">
                          <i className="fa-regular fa-folder-open text-3xl mb-2"></i>
                          <p className="font-bold">Tidak ada data tarif untuk filter ini.</p>
                        </td>
                      </tr>
                    ) : (
                      filteredTarifData.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-3 py-1 rounded border text-[11px] font-bold tracking-wide ${
                              item.jenis === 'KERJA SAMA' 
                                ? 'border-blue-200 text-blue-700 bg-blue-50'
                                : item.jenis === 'PASCASARJANA'
                                ? 'border-purple-200 text-purple-700 bg-purple-50'
                                : 'border-slate-300 text-slate-600 bg-white'
                            }`}>
                              {item.jenis}
                            </span>
                          </td>
                          <td className="px-6 py-4 font-bold text-slate-900">{item.ptKerjasama}</td>
                          <td className="px-6 py-4 text-slate-600">{item.jabatan}</td>
                          <td className="px-6 py-4 text-right font-extrabold text-[#1687F5]">{item.honor}</td>
                          <td className="px-6 py-4 text-center text-slate-500">
                            <i className="fa-regular fa-calendar mr-2"></i>{item.expired}
                          </td>
                          <td className="px-6 py-4 text-center">
                            <div className="flex items-center justify-center gap-1">
                              <button className="w-8 h-8 rounded-lg text-[#1687F5] hover:bg-blue-50 hover:text-blue-700 transition-all active:scale-95">        
                                <i className="fa-solid fa-pen"></i>
                              </button>
                              <button 
                                onClick={() => handleDeleteTarif(item.id)}
                                className="w-8 h-8 rounded-lg text-red-500 hover:bg-red-50 hover:text-red-700 transition-all active:scale-95"
                              >
                                <i className="fa-solid fa-trash-can"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DOKUMEN PERDIR */}
        {activeTab === 'perdir' && (
          <div className="animate-fadeIn">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[18px] font-bold text-slate-800">Daftar Dokumen Hukum</h2>
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-[14px] bg-[#1687F5] hover:bg-blue-600 text-white transition-all shadow-sm active:scale-95">
                <i className="fa-solid fa-cloud-arrow-up"></i>
                Upload Perdir Baru
              </button>
            </div>

            <div className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-max">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-[13px] font-bold text-slate-700">NOMOR PERATURAN</th>
                      <th className="px-6 py-4 text-[13px] font-bold text-slate-700">JUDUL DOKUMEN</th>
                      <th className="px-6 py-4 text-[13px] font-bold text-slate-700">TANGGAL PENETAPAN</th>
                      <th className="px-6 py-4 text-[13px] font-bold text-slate-700">FILE LAMPIRAN</th>
                      <th className="px-6 py-4 text-[13px] font-bold text-slate-700 text-center">STATUS</th>
                      <th className="px-6 py-4 text-[13px] font-bold text-slate-700 text-center">AKSI</th>
                    </tr>
                  </thead>
                  <tbody className="text-[14px] text-slate-700 font-medium divide-y divide-slate-100">
                    
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-extrabold text-slate-900">SK-DIR/023/2026</td>
                      <td className="px-6 py-4 text-slate-600">Standar Tarif Honorarium<br />SKS TA 2026/2027</td>
                      <td className="px-6 py-4 text-slate-500">01 Agustus 2026</td>
                      <td className="px-6 py-4">
                        <a href="#" className="inline-flex items-center gap-2 text-[#1687F5] font-bold hover:underline">
                          <i className="fa-solid fa-file-pdf text-red-500"></i>
                          SK_Tarif_2026.pdf
                        </a>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex px-3 py-1 rounded-full border border-green-200 text-green-700 bg-green-50 text-[12px] font-bold">
                          Berlaku
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="w-8 h-8 rounded-lg text-red-500 hover:bg-red-50 hover:text-red-700 transition-all active:scale-95">
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="px-6 py-4 font-extrabold text-slate-500">SK-DIR/023/2025</td>
                      <td className="px-6 py-4 text-slate-500">Standar Tarif Honorarium<br />SKS TA 2025/2026</td>
                      <td className="px-6 py-4 text-slate-500">01 Agustus 2025</td>
                      <td className="px-6 py-4">
                        <a href="#" className="inline-flex items-center gap-2 text-slate-500 font-bold hover:text-slate-800 hover:underline">
                          <i className="fa-solid fa-file-pdf text-slate-400"></i>
                          SK_Tarif_2025.pdf
                        </a>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex px-3 py-1 rounded-full border border-red-200 text-red-600 bg-red-50 text-[12px] font-bold">
                          Tidak Berlaku
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="w-8 h-8 rounded-lg text-red-500 hover:bg-red-50 hover:text-red-700  transition-all active:scale-95">
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* MODAL POP-UP TAMBAH TARIF BARU (Tanpa Jenis Kelas) */}
      {isModalTarifOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalTarifOpen(false)}
          ></div>
          
          <div className="bg-white rounded-[24px] shadow-2xl w-full max-w-[560px] relative z-10 overflow-hidden flex flex-col animate-fadeIn">
            
            {/* Header Modal */}
            <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-white">
              <div>
                <h2 className="text-[20px] font-extrabold text-slate-800">Tambah Tarif SKS Baru</h2>
                <p className="text-[14px] text-slate-500 font-medium mt-0.5">Isi rincian kategori dan besaran nominal honorarium.</p>
              </div>
              <button 
                onClick={() => setIsModalTarifOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-50 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors"
              >
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>

            {/* Form Input */}
            <form onSubmit={handleSaveTarif} className="p-8 space-y-5">
              
              {/* Dropdown 1: Jenis */}
              <div>
                <label className="block text-[13px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Jenis Perkuliahan
                </label>
                <select 
                  value={formTarif.jenis}
                  onChange={(e) => setFormTarif({...formTarif, jenis: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 font-semibold text-slate-800 focus:outline-none focus:border-[#1687F5] focus:bg-white transition-colors cursor-pointer text-[14px]"
                >
                  <option value="REGULER">REGULER</option>
                  <option value="KERJA SAMA">KERJA SAMA</option>
                  <option value="PASCASARJANA">PASCASARJANA</option>
                </select>
              </div>

              {/* Dropdown 2: PT Kerjasama */}
              <div>
                <label className="block text-[13px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                  PT Kerjasama
                </label>
                <select 
                  value={formTarif.ptKerjasama}
                  onChange={(e) => setFormTarif({...formTarif, ptKerjasama: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 font-semibold text-slate-800 focus:outline-none focus:border-[#1687F5] focus:bg-white transition-colors cursor-pointer text-[14px]"
                >
                  <option value="-">- (Tanpa Kerjasama / Reguler)</option>
                  <option value="PT CCIT">PT CCIT</option>
                  <option value="PT Astra">PT Astra International</option>
                  <option value="PT PLN">PT PLN (Persero)</option>
                </select>
              </div>

              {/* Dropdown 3: Jabatan / Golongan */}
              <div>
                <label className="block text-[13px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Jabatan / Golongan Dosen
                </label>
                <select 
                  value={formTarif.jabatan}
                  onChange={(e) => setFormTarif({...formTarif, jabatan: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 font-semibold text-slate-800 focus:outline-none focus:border-[#1687F5] focus:bg-white transition-colors cursor-pointer text-[14px]"
                >
                  <option value="Guru Besar IV/d-Pembina Utama Madya">Guru Besar IV/d-Pembina Utama Madya</option>
                  <option value="Lektor Kepala IV/a-Pembina">Lektor Kepala IV/a-Pembina</option>
                  <option value="Lektor III/c">Lektor III/c</option>
                  <option value="Asisten Ahli ---">Asisten Ahli ---</option>
                  <option value="Pengajar / Non-Jafung">Pengajar / Non-Jafung</option>
                </select>
              </div>

              {/* Honor & Expired Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Honor per SKS (Rp)
                  </label>
                  <input 
                    type="number" 
                    placeholder="Contoh: 250000"
                    value={formTarif.honor}
                    onChange={(e) => setFormTarif({...formTarif, honor: e.target.value})}
                    required
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 font-semibold text-slate-800 focus:outline-none focus:border-[#1687F5] focus:bg-white transition-colors text-[14px]"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Tanggal Expired
                  </label>
                  <input 
                    type="date" 
                    value={formTarif.tanggalExpired}
                    onChange={(e) => setFormTarif({...formTarif, tanggalExpired: e.target.value})}
                    required
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 font-semibold text-slate-800 focus:outline-none focus:border-[#1687F5] focus:bg-white transition-colors cursor-pointer text-[14px]"
                  />
                </div>
              </div>

              {/* Footer Modal */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button 
                  type="button"
                  onClick={() => setIsModalTarifOpen(false)}
                  className="px-6 py-3 rounded-xl font-bold text-[14px] text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Batal
                </button>
                <button 
                  type="submit"
                  className="px-6 py-3 rounded-xl font-bold text-[14px] bg-[#1687F5] hover:bg-blue-600 text-white transition-all shadow-md active:scale-95"
                >
                  Simpan Tarif
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}