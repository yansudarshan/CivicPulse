import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { PlusCircle, FileText, LogOut, LayoutDashboard, Wrench, Menu, X, User } from 'lucide-react';
import { NotificationBell } from './NotificationBell';
import { GovernmentLogo } from './GovernmentLogo';

export const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
    setMobileMenuOpen(false);
  };

  const isCitizenLogin = location.pathname === '/login';

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      {/* Subtle public-service tricolor top accent band */}
      <div className="h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo & Portal Identity */}
          <Link
            to="/"
            className="flex items-center group py-1"
            onClick={() => setMobileMenuOpen(false)}
          >
            <GovernmentLogo size="md" />
          </Link>

          {/* Desktop Navigation & User Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <>
                {/* Officer Portal Shortcut */}
                {(user.role === 'officer' || user.role === 'admin') && (
                  <Link
                    to="/officer"
                    className="inline-flex items-center px-3 py-1.5 border border-slate-200 text-xs font-semibold rounded-lg text-slate-700 bg-slate-50 hover:bg-slate-100 hover:text-slate-900 transition-colors shadow-xs"
                  >
                    <LayoutDashboard className="w-3.5 h-3.5 mr-1.5 text-slate-600" />
                    <span>Officer Portal</span>
                  </Link>
                )}

                {/* Field Worker Portal Shortcut */}
                {user.role === 'field_worker' && (
                  <Link
                    to="/worker"
                    className="inline-flex items-center px-3 py-1.5 border border-emerald-200 text-xs font-semibold rounded-lg text-emerald-800 bg-emerald-50 hover:bg-emerald-100 transition-colors shadow-xs"
                  >
                    <Wrench className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                    <span>Field Tasks</span>
                  </Link>
                )}

                {/* Citizen Action: Report Issue */}
                <Link
                  to="/report"
                  className="inline-flex items-center px-3.5 py-1.5 border border-transparent text-xs font-semibold rounded-lg shadow-xs text-white bg-orange-600 hover:bg-orange-700 transition-colors"
                >
                  <PlusCircle className="w-3.5 h-3.5 mr-1.5" />
                  <span>Report Issue</span>
                </Link>

                <Link
                  to="/my-complaints"
                  className="inline-flex items-center px-3 py-1.5 border border-slate-200 text-xs font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-xs"
                >
                  <FileText className="w-3.5 h-3.5 mr-1.5 text-slate-500" />
                  <span>My Complaints</span>
                </Link>

                {/* Real-time Notification Bell */}
                <NotificationBell />

                {/* User Profile Pill */}
                <div className="flex items-center pl-3 border-l border-slate-200 space-x-3">
                  <div className="text-right">
                    <p className="text-xs font-semibold text-slate-800 leading-none">{user.name}</p>
                    <p className="text-[11px] text-slate-500 capitalize">{user.role.replace('_', ' ')}</p>
                  </div>

                  <button
                    onClick={handleLogout}
                    title="Sign Out"
                    className="p-1.5 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className={`inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    isCitizenLogin
                      ? 'bg-orange-50 text-orange-700 border border-orange-200'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <User className="w-3.5 h-3.5 mr-1.5 text-orange-600" />
                  Citizen Login
                </Link>
                <Link
                  to="/staff/login?portal=officer"
                  className="inline-flex items-center px-3 py-1.5 border border-slate-200 text-xs font-semibold rounded-lg text-slate-700 bg-slate-50 hover:bg-slate-100 hover:text-slate-900 transition-colors shadow-xs"
                >
                  <LayoutDashboard className="w-3.5 h-3.5 mr-1.5 text-slate-600" />
                  <span>Officer Portal</span>
                </Link>
                <Link
                  to="/staff/login?portal=worker"
                  className="inline-flex items-center px-3 py-1.5 border border-emerald-200 text-xs font-semibold rounded-lg text-emerald-800 bg-emerald-50 hover:bg-emerald-100 transition-colors shadow-xs"
                >
                  <Wrench className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                  <span>Field Worker</span>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-2">
            {user && <NotificationBell />}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-4 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-150">
          {user ? (
            <div className="space-y-2">
              <div className="px-3 py-2 bg-slate-50 rounded-lg flex items-center justify-between border border-slate-100">
                <div>
                  <p className="text-xs font-bold text-slate-800">{user.name}</p>
                  <p className="text-[11px] text-slate-500 capitalize">{user.role.replace('_', ' ')}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-xs text-rose-600 font-semibold flex items-center hover:underline"
                >
                  <LogOut className="w-3.5 h-3.5 mr-1" />
                  Sign Out
                </button>
              </div>

              <Link
                to="/report"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg text-white bg-orange-600 hover:bg-orange-700 transition-colors"
              >
                <PlusCircle className="w-4 h-4 mr-1.5" />
                Report New Issue
              </Link>

              <Link
                to="/my-complaints"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center px-3 py-2 text-xs font-medium rounded-lg text-slate-700 hover:bg-slate-50 transition-colors border border-slate-200"
              >
                <FileText className="w-4 h-4 mr-2 text-slate-500" />
                My Complaints
              </Link>

              {(user.role === 'officer' || user.role === 'admin') && (
                <Link
                  to="/officer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center px-3 py-2 text-xs font-semibold rounded-lg text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200"
                >
                  <LayoutDashboard className="w-4 h-4 mr-2 text-slate-600" />
                  Officer Portal
                </Link>
              )}

              {user.role === 'field_worker' && (
                <Link
                  to="/worker"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center px-3 py-2 text-xs font-semibold rounded-lg text-emerald-800 bg-emerald-50 hover:bg-emerald-100 transition-colors border border-emerald-200"
                >
                  <Wrench className="w-4 h-4 mr-2 text-emerald-600" />
                  Field Tasks
                </Link>
              )}
            </div>
          ) : (
            <div className="flex flex-col space-y-2 pt-1">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center px-3 py-2.5 text-xs font-semibold rounded-lg transition-colors ${
                  isCitizenLogin
                    ? 'bg-orange-50 text-orange-700 border border-orange-200'
                    : 'text-slate-700 bg-slate-50 hover:bg-slate-100'
                }`}
              >
                <User className="w-4 h-4 mr-2 text-orange-600" />
                Citizen Login
              </Link>
              <Link
                to="/staff/login?portal=officer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center px-3 py-2.5 text-xs font-semibold rounded-lg text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
              >
                <LayoutDashboard className="w-4 h-4 mr-2 text-slate-600" />
                Officer Portal
              </Link>
              <Link
                to="/staff/login?portal=worker"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center px-3 py-2.5 text-xs font-semibold rounded-lg text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
              >
                <Wrench className="w-4 h-4 mr-2 text-emerald-600" />
                Field Worker
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
