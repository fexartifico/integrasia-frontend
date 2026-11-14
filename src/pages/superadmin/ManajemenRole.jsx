import { useState, useRef, useEffect } from 'react';

// =========================================
// KOMPONEN DROPDOWN DENGAN FITUR SEARCH
// =========================================
function SearchableDropdown({ label, placeholder, options, value, onChange, required = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  // Tutup dropdown saat klik di luar area
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleClear = (e) => {
    e.stopPropagation();
    onChange('');
    setSearchTerm('');
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-[14px] font-bold text-slate-900 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {/* Trigger Box */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full bg-white border rounded-xl px-4 py-3 text-[14px] flex items-center justify-between cursor-pointer transition-all ${
          isOpen
            ? 'border-[#1687F5] ring-2 ring-blue-500/10'
            : 'border-slate-300 hover:border-slate-400'
        }`}
      >
        <span className={`truncate pr-2 font-medium ${value ? 'text-slate-800' : 'text-slate-400'}`}>
          {value || placeholder}
        </span>

        <div className="flex items-center gap-2 shrink-0 text-slate-400">
          {value && (
            <button
              type="button"
              onClick={handleClear}
              title="Hapus pilihan"
              className="hover:text-red-500 transition-colors px-1"
            >
              <i className="fa-solid fa-xmark text-[12px]"></i>
            </button>
          )}
          <i className={`fa-solid fa-chevron-down text-[12px] transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#1687F5]' : ''}`}></i>
        </div>
      </div>

      {/* Menu Dropdown + Input Search */}
      {isOpen && (
        <div className="absolute left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl z-50 overflow-hidden">
          <div className="p-2.5 border-b border-slate-100 bg-slate-50/70">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fa-solid fa-magnifying-glass text-slate-400 text-[12px]"></i>
              </div>
              <input
                type="text"
                autoFocus
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={`Cari ${label.toLowerCase()}...`}
                className="w-full pl-8 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-[13px] text-slate-800 focus:outline-none focus:border-[#1687F5] placeholder:text-slate-400 font-medium"
              />
            </div>
          </div>

          <ul className="max-h-52 overflow-y-auto py-1 divide-y divide-slate-50">
            {filteredOptions.length === 0 ? (
              <li className="px-4 py-3 text-[13px] text-slate-400 text-center font-medium">
                Data tidak ditemukan
              </li>
            ) : (
              filteredOptions.map((option, idx) => {
                const isSelected = value === option;
                return (
                  <li
                    key={idx}
                    onClick={() => handleSelect(option)}
                    className={`px-4 py-2.5 text-[13px] cursor-pointer flex items-center justify-between transition-colors ${
                      isSelected
                        ? 'bg-blue-50 text-[#1687F5] font-bold'
                        : 'text-slate-700 font-medium hover:bg-slate-50'
                    }`}
                  >
                    <span>{option}</span>
                    {isSelected && <i className="fa-solid fa-check text-[12px] text-[#1687F5]"></i>}
                  </li>
                );
              })
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

// =========================================
// KOMPONEN UTAMA MANAJEMEN ROLE
// =========================================
export default function ManajemenRole() {
  // Daftar Opsi Dropdown
  const prodiOptions = [
    "Teknik Informatika",
    "Teknik Multimedia dan Jaringan",
    "Teknik Komputer dan Jaringan"
  ];

  const jafungOptions = [
    "Lektor —",
    "Asisten Ahli —",
    "Lektor Kepala —",
    "Guru Besar —",
    "Lektor III/d-Penata Tingkat I",
    "Lektor Kepala IV/a-Pembina",
    "Lektor III/c-Penata",
    "Asisten Ahli III/b-Penata Muda Tingkat I",
    "Lektor Kepala IV/b-Pembina Tingkat I",
    "Lektor Kepala IV/c-Pembina Utama Muda",
    "Guru Besar IV/d-Pembina Utama Madya",
    "Lektor Kepala III/d-Penata Tingkat I",
    "Asisten Ahli X-PPPK",
    "Guru Besar IV/e-Pembina Utama",
    "Guru Besar IV/c-Pembina Utama Muda",
    "Lektor IV/a-Pembina",
    "Guru Besar IV/b-Pembina Tingkat I",
    "Lektor III/b-Penata Muda Tingkat I",
    "Lektor Kepala IV/d-Pembina Utama Madya",
    "Asisten Ahli III/c-Penata",
    "Asisten Ahli III/a-Penata Muda",
    "Lektor Kepala III/b-Penata Muda Tingkat I",
    "Asisten Ahli IV/e-Pembina Utama",
    "Asisten Ahli IV/b-Pembina Tingkat I",
    "Staff Pengajar III/b-Penata Muda Tingkat I",
    "Lektor Kepala III/a-Penata Muda",
    "Asisten Ahli IV/a-Pembina",
    "Lektor XI-PPPK",
    "Asisten Ahli II/a-Pengatur Muda"
  ];

  const tugasTambahanOptions = [
    "Kepala Unit Kerja",
    "Kaprodi",
    "Ketua Jurusan",
    "Kepala Laboratorium",
    "Lainnya",
    "Sekretaris Lembaga",
    "Kepala UPT",
    "Ketua Badan",
    "Sekretaris Departemen",
    "Sekretaris Bagian",
    "Sekretaris Prodi",
    "Pembantu Direktur IV",
    "Wakil Ketua",
    "Ketua Bagian",
    "Wakil Direktur Politeknik",
    "Ketua Lembaga",
    "Ketua Departemen",
    "Pembantu Direktur I",
    "Wakil Rektor III",
    "Direktur Politeknik",
    "Pembantu Direktur II",
    "Wakil Ketua Jurusan"
  ];

  const [users, setUsers] = useState([
    {
      id: 1,
      nama: "Dr. Budi Santoso, M.T.",
      nip: "198001012005011001",
      nidn: "0001018001",
      prodi: "Teknik Informatika",
      jafung: "Lektor Kepala IV/a-Pembina",
      tugasTambahan: "Kaprodi",
      roles: ["Dosen", "Pimpinan"],
      lastLogin: "2 Jam yang lalu",
      status: "Aktif"
    },
    {
      id: 2,
      nama: "Siti Aminah, S.E., M.Ak.",
      nip: "198505152010122003",
      nidn: "0015058502",
      prodi: "Teknik Multimedia dan Jaringan",
      jafung: "Lektor III/c-Penata",
      tugasTambahan: "",
      roles: ["Keuangan"],
      lastLogin: "Hari ini, 08:15",
      status: "Nonaktif"
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  // State khusus untuk form modal
  const [formData, setFormData] = useState({
    nama: '',
    nip: '',
    nidn: '',
    prodi: '',
    jafung: '',
    tugasTambahan: '',
    password: '',
    roles: [],
    status: 'Aktif'
  });

  // --- FUNGSI AKSI ---
  const handleOpenAdd = () => {
    setEditData(null);
    setFormData({
      nama: '',
      nip: '',
      nidn: '',
      prodi: '',
      jafung: '',
      tugasTambahan: '',
      password: '',
      roles: [],
      status: 'Aktif'
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (user) => {
    setEditData(user);
    setFormData({
      nama: user.nama || '',
      nip: user.nip || '',
      nidn: user.nidn || '',
      prodi: user.prodi || '',
      jafung: user.jafung || '',
      tugasTambahan: user.tugasTambahan || '',
      password: '',
      roles: [...user.roles],
      status: user.status
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id, nama) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus akun ${nama}?`)) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const toggleRole = (role) => {
    setFormData((prev) => {
      const hasRole = prev.roles.includes(role);
      if (hasRole) {
        return { ...prev, roles: prev.roles.filter((r) => r !== role) };
      } else {
        return { ...prev, roles: [...prev.roles, role] };
      }
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (editData) {
      setUsers((prev) =>
        prev.map((u) =>
          u.id === editData.id
            ? {
                ...u,
                nama: formData.nama,
                nip: formData.nip,
                nidn: formData.nidn,
                prodi: formData.prodi,
                jafung: formData.jafung,
                tugasTambahan: formData.tugasTambahan,
                roles: formData.roles,
                status: formData.status
              }
            : u
        )
      );
      alert("Data pengguna berhasil diperbarui!");
    } else {
      const newUser = {
        id: Date.now(),
        nama: formData.nama,
        nip: formData.nip,
        nidn: formData.nidn,
        prodi: formData.prodi,
        jafung: formData.jafung,
        tugasTambahan: formData.tugasTambahan,
        roles: formData.roles,
        lastLogin: "Belum pernah login",
        status: formData.status
      };
      setUsers((prev) => [...prev, newUser]);
      alert("Data pengguna baru berhasil disimpan!");
    }

    setIsModalOpen(false);
  };

  // Filter pencarian
  const filteredUsers = users.filter(
    (user) =>
      user.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.nip.includes(searchQuery) ||
      (user.nidn && user.nidn.includes(searchQuery))
  );

  // Render Badge Role
  const renderRoleBadge = (role, index) => {
    if (role === "Dosen")
      return (
        <span
          key={index}
          className="px-3 py-1 border border-slate-300 rounded-md bg-white text-slate-700 text-[12px] font-bold shadow-sm"
        >
          Dosen
        </span>
      );
    if (role === "Pimpinan")
      return (
        <span
          key={index}
          className="px-3 py-1 rounded-md bg-pink-100 text-pink-600 text-[12px] font-bold"
        >
          Pimpinan
        </span>
      );
    if (role === "Keuangan")
      return (
        <span
          key={index}
          className="px-3 py-1 rounded-md bg-indigo-100 text-indigo-600 text-[12px] font-bold"
        >
          Keuangan
        </span>
      );
    return null;
  };

  return (
    <div className="flex-1 w-full bg-[#f8fafc] font-sans p-8 relative">
      <div className="w-full">
        {/* Header & Tombol Tambah Akun */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-[28px] font-extrabold text-black mb-2">Manajemen Pengguna</h1>
            <p className="text-[16px] text-slate-600 font-medium">
              Tambahkan, ubah, atau nonaktifkan hak akses (role) pengguna sistem.
            </p>
          </div>
          <button
            onClick={handleOpenAdd}
            className="bg-[#1687F5] hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold text-[14px] flex items-center gap-2 shadow-sm transition-all active:scale-95"
          >
            <i className="fa-solid fa-user-plus"></i>
            Tambah Akun
          </button>
        </div>

        {/* Container Utama Tabel */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          {/* Header Tabel (Daftar Pengguna & Search) */}
          <div className="flex justify-between items-center p-6 border-b border-slate-200">
            <div className="flex items-center gap-4">
              <h2 className="text-[18px] font-bold text-slate-800">Daftar Pengguna</h2>
              <span className="text-slate-400 font-medium text-[14px]">{filteredUsers.length} akun</span>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <i className="fa-solid fa-magnifying-glass text-slate-400 text-[14px]"></i>
              </div>
              <input
                type="text"
                placeholder="Cari nama, NIP, atau NIDN"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-[14px] w-[260px] focus:outline-none focus:border-[#1687F5] transition-colors font-medium placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Tabel Data Pengguna */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#F8FAFC] border-b border-slate-200">
                <tr>
                  <th className="px-8 py-4 text-[14px] font-bold text-slate-700 w-[60px]">No</th>
                  <th className="px-8 py-4 text-[14px] font-bold text-slate-700">Informasi Pengguna</th>
                  <th className="px-8 py-4 text-[14px] font-bold text-slate-700">Jabatan & Prodi</th>
                  <th className="px-8 py-4 text-[14px] font-bold text-slate-700">Role Akses</th>
                  <th className="px-8 py-4 text-[14px] font-bold text-slate-700">Terakhir Login</th>
                  <th className="px-8 py-4 text-[14px] font-bold text-slate-700 text-center">Status Akun</th>
                  <th className="px-8 py-4 text-[14px] font-bold text-slate-700 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="text-[14px] text-slate-700 font-medium">
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-8 py-10 text-center text-slate-400 font-bold">
                      Tidak ada data pengguna.
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user, index) => (
                    <tr key={user.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="px-8 py-5 font-bold text-slate-900">{index + 1}</td>
                      <td className="px-8 py-5">
                        <div className="font-bold text-black mb-1">{user.nama}</div>
                        <div className="text-[12px] text-slate-500 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                          <span>NIP. {user.nip}</span>
                          {user.nidn && (
                            <>
                              <span className="text-slate-300">|</span>
                              <span>NIDN. {user.nidn}</span>
                            </>
                          )}
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <div className="font-bold text-slate-800 text-[13px]">{user.prodi || '-'}</div>
                        <div className="text-[12px] text-slate-500 mt-0.5">
                          {user.jafung || '-'}
                          {user.tugasTambahan && (
                            <span className="ml-1.5 px-2 py-0.5 rounded bg-blue-50 text-[#1687F5] font-bold text-[11px]">
                              {user.tugasTambahan}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <div className="flex flex-wrap gap-2">
                          {user.roles.map((role, rIndex) => renderRoleBadge(role, rIndex))}
                        </div>
                      </td>
                      <td className="px-8 py-5 text-slate-600">{user.lastLogin}</td>
                      <td className="px-8 py-5 text-center">
                        {user.status === "Aktif" ? (
                          <span className="inline-flex px-3 py-1 rounded-full border border-green-200 bg-green-50 text-green-600 text-[12px] font-bold">
                            Aktif
                          </span>
                        ) : (
                          <span className="inline-flex px-3 py-1 rounded-full border border-red-200 bg-red-50 text-red-500 text-[12px] font-bold">
                            Nonaktif
                          </span>
                        )}
                      </td>
                      <td className="px-8 py-5 text-center">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => handleOpenEdit(user)}
                            className="w-8 h-8 rounded-lg text-[#1687F5] bg-blue-50 hover:bg-blue-100 transition-colors flex items-center justify-center"
                          >
                            <i className="fa-solid fa-pen text-[13px]"></i>
                          </button>
                          <button
                            onClick={() => handleDelete(user.id, user.nama)}
                            className="w-8 h-8 rounded-lg text-red-500 bg-red-50 hover:bg-red-100 transition-colors flex items-center justify-center"
                          >
                            <i className="fa-solid fa-trash-can text-[13px]"></i>
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

      {/* =========================================
          MODAL TAMBAH / EDIT PENGGUNA
      ========================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>

          <div className="bg-white rounded-[24px] shadow-2xl w-full max-w-[760px] relative z-10 overflow-hidden animate-fadeIn flex flex-col max-h-[90vh]">
            {/* Header Modal */}
            <div className="px-8 py-6 flex justify-between items-start border-b border-slate-100 shrink-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1687F5] text-white flex items-center justify-center text-[20px] shadow-md shadow-blue-500/20">
                  <i className={`fa-solid ${editData ? 'fa-user-pen' : 'fa-user-plus'}`}></i>
                </div>
                <div>
                  <h2 className="text-[20px] font-extrabold text-slate-900">
                    {editData ? "Edit Pengguna" : "Tambah Pengguna Baru"}
                  </h2>
                  <p className="text-[13px] text-slate-500 font-medium mt-0.5">
                    Lengkapi informasi untuk mendaftarkan atau memperbarui akun.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors"
              >
                <i className="fa-solid fa-xmark text-[15px]"></i>
              </button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSave} className="p-8 overflow-y-auto flex flex-col gap-5">
              {/* Nama Lengkap */}
              <div>
                <label className="block text-[14px] font-bold text-slate-900 mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  placeholder="Masukan nama lengkap beserta gelar"
                  required
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-[14px] text-slate-800 focus:outline-none focus:border-[#1687F5] transition-all placeholder:text-slate-400 font-medium"
                />
              </div>

              {/* NIP & NIDN */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[14px] font-bold text-slate-900 mb-2">NIP</label>
                  <input
                    type="text"
                    value={formData.nip}
                    onChange={(e) => setFormData({ ...formData, nip: e.target.value })}
                    placeholder="Masukan NIP"
                    required
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-[14px] text-slate-800 focus:outline-none focus:border-[#1687F5] transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-bold text-slate-900 mb-2">NIDN</label>
                  <input
                    type="text"
                    value={formData.nidn}
                    onChange={(e) => setFormData({ ...formData, nidn: e.target.value })}
                    placeholder="Masukan NIDN"
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-[14px] text-slate-800 focus:outline-none focus:border-[#1687F5] transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>
              </div>

              {/* Program Studi & Jafung/Pangkat (Searchable Dropdown) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <SearchableDropdown
                  label="Program Studi"
                  placeholder="Pilih Program Studi"
                  options={prodiOptions}
                  value={formData.prodi}
                  onChange={(val) => setFormData({ ...formData, prodi: val })}
                />

                <SearchableDropdown
                  label="Jafung / Pangkat"
                  placeholder="Pilih Jafung / Pangkat"
                  options={jafungOptions}
                  value={formData.jafung}
                  onChange={(val) => setFormData({ ...formData, jafung: val })}
                />
              </div>

              {/* Tugas Tambahan (Searchable Dropdown) & Password */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <SearchableDropdown
                  label="Tugas Tambahan"
                  placeholder="Pilih Tugas Tambahan"
                  options={tugasTambahanOptions}
                  value={formData.tugasTambahan}
                  onChange={(val) => setFormData({ ...formData, tugasTambahan: val })}
                />

                <div>
                  <label className="block text-[14px] font-bold text-slate-900 mb-2">Password</label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder={editData ? "Kosongkan jika tidak diubah" : "Masukan Password"}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-[14px] text-slate-800 focus:outline-none focus:border-[#1687F5] transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>
              </div>

              {/* Hak Akses Cards */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-[14px] font-bold text-slate-900">Hak akses</label>
                  <span className="text-[11px] font-bold text-[#1687F5] bg-blue-50 px-3 py-1 rounded-full">
                    Bisa Pilih lebih dari satu
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Card Dosen */}
                  <div
                    onClick={() => toggleRole('Dosen')}
                    className={`cursor-pointer rounded-2xl border-2 p-4 transition-all ${
                      formData.roles.includes('Dosen')
                        ? 'border-[#1687F5] bg-blue-50/30'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center mb-3">
                      <i className="fa-solid fa-person-chalkboard text-[14px]"></i>
                    </div>
                    <div className="font-bold text-slate-900 text-[15px] mb-1">Dosen</div>
                    <div className="text-[12px] text-slate-500 leading-snug">Mengelola kegiatan akademik</div>
                  </div>

                  {/* Card Keuangan */}
                  <div
                    onClick={() => toggleRole('Keuangan')}
                    className={`cursor-pointer rounded-2xl border-2 p-4 transition-all ${
                      formData.roles.includes('Keuangan')
                        ? 'border-[#1687F5] bg-blue-50/30'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center mb-3">
                      <i className="fa-solid fa-wallet text-[14px]"></i>
                    </div>
                    <div className="font-bold text-slate-900 text-[15px] mb-1">Keuangan</div>
                    <div className="text-[12px] text-slate-500 leading-snug">Mengelola Keuangan Honor</div>
                  </div>

                  {/* Card Pimpinan */}
                  <div
                    onClick={() => toggleRole('Pimpinan')}
                    className={`cursor-pointer rounded-2xl border-2 p-4 transition-all ${
                      formData.roles.includes('Pimpinan')
                        ? 'border-[#1687F5] bg-blue-50/30'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center mb-3">
                      <i className="fa-solid fa-user-tie text-[14px]"></i>
                    </div>
                    <div className="font-bold text-slate-900 text-[15px] mb-1">Pimpinan</div>
                    <div className="text-[12px] text-slate-500 leading-snug">Memantau data</div>
                  </div>
                </div>
              </div>

              {/* Status Akun */}
              <div className="w-full md:w-1/2">
                <label className="block text-[14px] font-bold text-slate-900 mb-2">Status Akun</label>
                <div className="relative">
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl pl-4 pr-10 py-3 text-[14px] font-medium text-slate-800 focus:outline-none focus:border-[#1687F5] transition-all appearance-none cursor-pointer"
                  >
                    <option value="Aktif">Aktif</option>
                    <option value="Nonaktif">Nonaktif</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-500">
                    <i className="fa-solid fa-chevron-down text-[12px]"></i>
                  </div>
                </div>
              </div>

              {/* Footer Tombol Aksi */}
              <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-100 mt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 bg-white border border-slate-300 text-slate-700 font-bold rounded-xl text-[14px] hover:bg-slate-50 transition-all"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#1687F5] hover:bg-blue-600 text-white font-bold rounded-xl text-[14px] flex items-center gap-2 shadow-sm transition-all active:scale-95"
                >
                  <i className="fa-solid fa-save text-[13px]"></i> Simpan Data
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}