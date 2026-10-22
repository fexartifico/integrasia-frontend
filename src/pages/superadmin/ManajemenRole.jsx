import { useState } from 'react';

export default function ManajemenRole() {
  // 1. Data Dummy dipindah ke dalam State agar bisa dimanipulasi (dihapus/diedit)
  const [users, setUsers] = useState([
    {
      id: 1,
      nama: "Dr. Budi Santoso, M.T.",
      nip: "198001012005011001",
      roles: ["Dosen", "Pimpinan"],
      lastLogin: "2 Jam yang lalu",
      status: "Aktif"
    },
    {
      id: 2,
      nama: "Siti Aminah, S.E., M.Ak.",
      nip: "198505152010122003",
      roles: ["Keuangan"],
      lastLogin: "Hari ini, 08:15",
      status: "Nonaktif"
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null); // State untuk menampung data yang mau diedit

  // --- FUNGSI AKSI ---

  // Buka modal untuk Tambah Baru (kosongkan data edit)
  const handleOpenAdd = () => {
    setEditData(null);
    setIsModalOpen(true);
  };

  // Buka modal untuk Edit (bawa data user ke modal)
  const handleOpenEdit = (user) => {
    setEditData(user);
    setIsModalOpen(true);
  };

  // Hapus Data
  const handleDelete = (id, nama) => {
    // Tampilkan konfirmasi bawaan browser
    if (window.confirm(`Apakah Anda yakin ingin menghapus akun ${nama}?`)) {
      // Filter array: simpan yang ID-nya tidak sama dengan ID yang dihapus
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  // Fungsi Helper untuk render warna badge role
  const renderRoleBadge = (role, index) => {
    if (role === "Dosen") return <span key={index} className="px-3 py-1 border border-slate-300 rounded-md bg-slate-50 text-slate-600 text-[13px] font-bold">Dosen</span>;
    if (role === "Pimpinan") return <span key={index} className="px-3 py-1 border border-pink-200 rounded-md bg-pink-50 text-pink-600 text-[13px] font-bold">Pimpinan</span>;
    if (role === "Keuangan") return <span key={index} className="px-3 py-1 border border-blue-200 rounded-md bg-blue-50 text-blue-600 text-[13px] font-bold">Keuangan</span>;
    return null;
  };

  return (
    <div className="flex-1 w-full bg-[#f8fafc] font-sans p-8 relative">
      <div className="w-full">
        
        {/* Header & Tombol Tambah Akun */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-[28px] font-extrabold text-black mb-2">Manajemen Pengguna</h1>
            <p className="text-[16px] text-slate-600 font-medium">Tambahkan, ubah, atau nonaktifkan hak akses (role) pengguna sistem.</p>
          </div>
          <button 
            onClick={handleOpenAdd}
            className="bg-[#1687F5] hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold text-[14px] flex items-center gap-2 shadow-sm transition-all"
          >
            <i className="fa-solid fa-user-plus text-sm"></i>
            Tambah Akun
          </button>
        </div>
        
        {/* Tabel Data Pengguna Dinamis */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-8 py-5 text-[15px] font-bold text-black">No</th>
                <th className="px-8 py-5 text-[15px] font-bold text-black">Informasi Pengguna</th>
                <th className="px-8 py-5 text-[15px] font-bold text-black">Role Akses</th>
                <th className="px-8 py-5 text-[15px] font-bold text-black">Terakhir Login</th>
                <th className="px-8 py-5 text-[15px] font-bold text-black text-center">Status Akun</th>
                <th className="px-8 py-5 text-[15px] font-bold text-black text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-[15px] text-slate-700 font-medium">
              
              {users.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-8 py-10 text-center text-slate-400 font-bold">
                    Tidak ada data pengguna.
                  </td>
                </tr>
              ) : (
                users.map((user, index) => (
                  <tr key={user.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-8 py-5">{index + 1}</td>
                    <td className="px-8 py-5">
                      <div className="font-bold text-black mb-0.5">{user.nama}</div>
                      <div className="text-[13px] text-slate-500">NIP. {user.nip}</div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex flex-wrap gap-2">
                        {user.roles.map((role, rIndex) => renderRoleBadge(role, rIndex))}
                      </div>
                    </td>
                    <td className="px-8 py-5 text-slate-500">{user.lastLogin}</td>
                    <td className="px-8 py-5 text-center">
                      {user.status === "Aktif" ? (
                        <span className="inline-flex px-4 py-1.5 rounded-full border border-green-300 bg-green-50 text-green-700 text-[13px] font-bold">Aktif</span>
                      ) : (
                        <span className="inline-flex px-4 py-1.5 rounded-full border border-red-200 bg-red-50 text-red-600 text-[13px] font-bold">Nonaktif</span>
                      )}
                    </td>
                    <td className="px-8 py-5 text-center">
                      <div className="flex justify-center gap-4">
                        {/* Tombol Edit */}
                        <button 
                          onClick={() => handleOpenEdit(user)}
                          className="text-[#1687F5] hover:text-blue-700 transition-colors"
                          title="Edit Pengguna"
                        >
                          <i className="fa-solid fa-pen"></i>
                        </button>
                        {/* Tombol Hapus */}
                        <button 
                          onClick={() => handleDelete(user.id, user.nama)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                          title="Hapus Pengguna"
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

      {/* =========================================
          MODAL TAMBAH / EDIT PENGGUNA
      ========================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div className="bg-white rounded-[24px] shadow-2xl w-full max-w-[650px] relative z-10 overflow-hidden animate-fade-in-down border border-slate-100">
            
            <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
              <div>
                {/* Judul dinamis: Edit atau Tambah berdasarkan state editData */}
                <h2 className="text-[22px] font-extrabold text-slate-800">
                  {editData ? "Edit Pengguna" : "Tambah Pengguna Baru"}
                </h2>
                <p className="text-[14px] text-slate-500 font-medium mt-1">
                  {editData ? "Perbarui informasi dan hak akses pengguna." : "Lengkapi informasi untuk mendaftarkan akun."}
                </p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors"
              >
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>

            <div className="p-8 flex flex-col gap-6">
              
              <div className="flex flex-col gap-2.5">
                <label className="text-[15px] font-bold text-slate-800">Nama Lengkap</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <i className="fa-regular fa-user text-slate-400"></i>
                  </div>
                  {/* Gunakan defaultValue agar terisi jika sedang mode Edit */}
                  <input 
                    type="text" 
                    defaultValue={editData ? editData.nama : ""}
                    placeholder="Contoh: Dr. Budi Santoso, M.T." 
                    className="w-full bg-white border-2 border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-[15px] text-slate-800 focus:outline-none focus:border-[#1687F5] focus:ring-4 focus:ring-blue-50 transition-all placeholder:text-slate-400 font-medium" 
                  />
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-1 flex flex-col gap-2.5">
                  <label className="text-[15px] font-bold text-slate-800">NIP / NIDN</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <i className="fa-regular fa-id-card text-slate-400"></i>
                    </div>
                    <input 
                      type="text" 
                      defaultValue={editData ? editData.nip : ""}
                      placeholder="Masukkan 18 digit NIP" 
                      className="w-full bg-white border-2 border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-[15px] text-slate-800 focus:outline-none focus:border-[#1687F5] focus:ring-4 focus:ring-blue-50 transition-all placeholder:text-slate-400 font-medium" 
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-2.5">
                  <label className="text-[15px] font-bold text-slate-800">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <i className="fa-solid fa-lock text-slate-400"></i>
                    </div>
                    {/* Kalau edit, anggap aja password nggak ditampilkan/kosong untuk diisi ulang jika mau diganti */}
                    <input 
                      type="password" 
                      placeholder={editData ? "Kosongkan jika tidak diganti" : "Minimal 8 karakter"} 
                      className="w-full bg-white border-2 border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-[15px] text-slate-800 focus:outline-none focus:border-[#1687F5] focus:ring-4 focus:ring-blue-50 transition-all placeholder:text-slate-400 font-medium" 
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                <div className="flex justify-between items-center">
                  <label className="text-[15px] font-bold text-slate-800">Hak Akses (Role)</label>
                  <span className="text-[13px] font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Bisa pilih lebih dari 1</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <label className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border-2 border-slate-200 cursor-pointer hover:border-[#1687F5] hover:shadow-md transition-all group">
                    <input type="checkbox" defaultChecked={editData?.roles.includes("Dosen")} className="w-5 h-5 rounded border-slate-300 text-[#1687F5] focus:ring-[#1687F5]" />
                    <span className="text-[15px] font-bold text-slate-700 group-hover:text-blue-700">Dosen</span>
                  </label>
                  <label className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border-2 border-slate-200 cursor-pointer hover:border-[#1687F5] hover:shadow-md transition-all group">
                    <input type="checkbox" defaultChecked={editData?.roles.includes("Keuangan")} className="w-5 h-5 rounded border-slate-300 text-[#1687F5] focus:ring-[#1687F5]" />
                    <span className="text-[15px] font-bold text-slate-700 group-hover:text-blue-700">Keuangan</span>
                  </label>
                  <label className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border-2 border-slate-200 cursor-pointer hover:border-[#1687F5] hover:shadow-md transition-all group">
                    <input type="checkbox" defaultChecked={editData?.roles.includes("Pimpinan")} className="w-5 h-5 rounded border-slate-300 text-[#1687F5] focus:ring-[#1687F5]" />
                    <span className="text-[15px] font-bold text-slate-700 group-hover:text-blue-700">Pimpinan</span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 w-1/2 mt-1">
                <label className="text-[15px] font-bold text-slate-800">Status Akun</label>
                <div className="relative">
                  <select 
                    defaultValue={editData ? (editData.status === "Aktif" ? "aktif" : "nonaktif") : "aktif"}
                    className="w-full bg-white border-2 border-slate-200 rounded-xl pl-4 pr-10 py-3.5 text-[15px] font-bold text-slate-800 focus:outline-none focus:border-[#1687F5] focus:ring-4 focus:ring-blue-50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="aktif">🟢 Aktif</option>
                    <option value="nonaktif">🔴 Nonaktif</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-500">
                    <i className="fa-solid fa-chevron-down text-[13px]"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-8 py-6 bg-slate-50 border-t border-slate-200 flex justify-end gap-4 rounded-b-[24px]">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-7 py-3 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl text-[15px] hover:bg-slate-100 hover:border-slate-300 transition-all"
              >
                Batal
              </button>
              <button 
                onClick={() => {
                  alert(editData ? "Data pengguna berhasil diperbarui!" : "Data pengguna baru berhasil disimpan!");
                  setIsModalOpen(false);
                }}
                className="px-7 py-3 bg-gradient-to-r from-[#30AFFF] to-[#1687F5] hover:from-[#1687F5] hover:to-[#0A66C2] text-white font-bold rounded-xl text-[15px] flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all transform hover:scale-105"
              >
                <i className="fa-solid fa-save"></i> Simpan Data
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}