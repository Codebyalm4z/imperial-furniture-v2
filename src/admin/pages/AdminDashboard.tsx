import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export function AdminDashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <header className="border-b border-gray-900 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-serif text-xl text-[#C8A165]">Imperial Admin</h1>
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-0.5">
              Dashboard
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-white border border-gray-800 hover:border-[#C8A165] px-4 py-2.5 transition-colors"
          >
            <LogOut size={14} />
            <span>Logout</span>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-[#0D0D0D] border border-gray-900 p-8 space-y-3">
          <h2 className="font-serif text-2xl text-white">Welcome to the Admin Panel</h2>
          <p className="text-sm text-gray-400">
            You are signed in. Additional admin features can be added here.
          </p>
        </div>
      </main>
    </div>
  );
}
