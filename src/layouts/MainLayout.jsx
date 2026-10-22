import Sidebar from '../components/layout/Sidebar';
import Topbar from '../components/layout/Topbar';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="flex w-full h-screen overflow-hidden bg-slate-50 font-sans zoom-dashboard">
      <Sidebar />
      <div className="flex flex-col flex-1 relative overflow-hidden">
        <Topbar />
        
        {/* Konten Halaman Akan Muncul di Sini */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
}