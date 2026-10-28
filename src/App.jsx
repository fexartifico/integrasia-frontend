import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/auth/LandingPage';
import Login from './pages/auth/Login';
import SelectRole from './pages/auth/SelectRole';

// Import Dashboard Pimpinan
import DashboardPengawasan from './pages/pimpinan/DashboardPengawasan';
import DataHonor from './pages/pimpinan/DataHonor';
import RekapHonor from './pages/pimpinan/RekapHonor';

// Import Dashboard & Verifikasi Keuangan
import DataVerifikasi from './pages/keuangan/DataVerifikasi';
import RekapHonorKeuangan from './pages/keuangan/RekapHonorKeuangan';

// Import Role superadmin
import DashboardSuperAdmin from './pages/superadmin/DashboardSuperAdmin';
import ManajemenRole from './pages/superadmin/ManajemenRole';

//import Role Admin Input
import DashboardAdminInput from './pages/admin_input/DashboardAdminInput';
import MasterData from './pages/admin_input/MasterData';


// Import Role Dosen
import DashboardDosen from './pages/dosen/DashboardDosen';
import HonorariumDosen from './pages/dosen/HonorariumDosen';
import DistribusiSks from './pages/dosen/DistribusiSks';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rute Tanpa Layout (Halaman Auth) */}
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/select-role" element={<SelectRole />} />

        {/* Rute Dengan Layout Utama (Mendapatkan Sidebar & Topbar) */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/landing" replace />} />
          
          {/* 1. Role Pimpinan */}
          <Route path="dashboard" element={<DashboardPengawasan />} />
          <Route path="data-honor" element={<DataHonor />} />
          <Route path="rekap-honor" element={<RekapHonor />} />
          
          {/* 2. Role Keuangan */}
          <Route path="keuangan/dashboard" element={<DashboardPengawasan />} />
          <Route path="keuangan/verifikasi" element={<DataVerifikasi />} />
          <Route path="keuangan/rekap-honor" element={<RekapHonorKeuangan />} />

          {/* 3. Role Super Admin */}
          <Route path="superadmin/dashboard" element={<DashboardSuperAdmin />} />
          <Route path="superadmin/manajemen-role" element={<ManajemenRole />} />

          {/* 4. Role Admin Input */}
          <Route path="admin-input/dashboard" element={<DashboardAdminInput />} />
          {/* ---> INILAH KEKUATAN RBAC: Kita daftarkan komponen Pimpinan untuk path Admin Input! <--- */}
          <Route path="admin-input/data-honor" element={<DataHonor />} />
          <Route path="admin-input/rekap-honor" element={<RekapHonor />} />
          
          {/* Menu Khusus Admin Input */}
          <Route path="admin-input/master-data" element={<MasterData />} />
         

          {/* 5. Role Dosen */}
          <Route path="dosen/dashboard" element={<DashboardDosen />} />
          <Route path="dosen/distribusi-sks" element={<DistribusiSks />} />
          <Route path="dosen/honorarium" element={<HonorariumDosen />} />
          
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;