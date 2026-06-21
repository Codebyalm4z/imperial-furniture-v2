import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export function AdminLogin() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const success = login(email.trim(), password);
    if (success) {
      navigate('/admin/dashboard', { replace: true });
    } else {
      setError('Invalid Email or Password');
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 space-y-2">
          <h1 className="font-serif text-3xl text-[#C8A165] tracking-tight">Imperial Admin</h1>
          <p className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em]">
            Sign in to your account
          </p>
        </div>

        <div className="bg-[#0D0D0D] border border-gray-900 p-8 shadow-2xl">
          {error && (
            <div className="mb-6 bg-red-950/40 border border-red-900/60 text-red-400 px-4 py-3 text-sm text-center font-mono">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label
                htmlFor="admin-email"
                className="block text-[10px] font-mono uppercase tracking-widest text-gray-400"
              >
                Email
              </label>
              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full bg-[#050505] border border-gray-800 focus:border-[#C8A165] text-white px-4 py-3 text-sm focus:outline-none transition-colors"
                placeholder="admin@imperial.com"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="admin-password"
                className="block text-[10px] font-mono uppercase tracking-widest text-gray-400"
              >
                Password
              </label>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full bg-[#050505] border border-gray-800 focus:border-[#C8A165] text-white px-4 py-3 text-sm focus:outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#C8A165] text-black hover:bg-white font-mono text-xs uppercase tracking-widest py-3.5 transition-colors font-semibold mt-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
