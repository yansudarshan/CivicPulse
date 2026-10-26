import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { authApi } from '../../services/api';
import { CivicHeroIllustration } from '../../components/CivicHeroIllustration';
import {
  Shield,
  ArrowRight,
  AlertCircle,
  CheckCircle,
  Lock,
  Eye,
  Camera,
  CheckCircle2,
  Smartphone,
  Activity,
  ShieldCheck,
  Building2,
  Wrench,
  Sparkles,
} from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { user, loginCitizen } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const [otpSent, setOtpSent] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [infoMsg, setInfoMsg] = useState<string | null>(null);

  // If already logged in, redirect
  useEffect(() => {
    if (user) {
      if (user.role === 'officer') navigate('/officer');
      else if (user.role === 'field_worker') navigate('/worker');
      else navigate('/dashboard');
    }
  }, [user, navigate]);

  // Cooldown countdown timer
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfoMsg(null);

    if (!phone || phone.trim().length < 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    setLoading(true);
    try {
      const cleanPhone = phone.trim();
      const res = await authApi.sendOtp(cleanPhone, 'citizen_login');
      setOtpSent(true);
      setCooldown(res.cooldownSeconds || 60);
      setInfoMsg(res.message || 'OTP dispatched to your mobile number.');
    } catch (err: any) {
      setError(err.response?.data?.error || err.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!otp || otp.length !== 6) {
      setError('Please enter the 6-digit OTP code');
      return;
    }

    setLoading(true);
    try {
      await loginCitizen(phone.trim(), otp.trim(), name.trim(), email.trim() || undefined);
      const from = (location.state as any)?.from?.pathname || '/dashboard';
      navigate(from, { replace: true });
    } catch (err: any) {
      setError(err.response?.data?.error || err.message || 'Invalid OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/60 text-slate-900 flex flex-col font-sans">
      {/* Main Hero & Login Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          
          {/* ======================================================== */}
          {/* 1. LEFT HERO CONTENT (Branding, Slogan & Civic Visual)  */}
          {/* Mobile: Order 1 (Branding & Slogan First)                */}
          {/* Desktop: Order 1, Left 7 Columns (approx 58% width)     */}
          {/* ======================================================== */}
          <div className="order-1 lg:order-1 lg:col-span-7 space-y-6">
            {/* Government Public Service Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-50 border border-amber-200/90 rounded-full text-xs font-semibold text-amber-900 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span>Official Public Service Grievance &amp; Resolution Portal</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Let's Make Our City Better, Together.
            </h1>

            {/* Slogan Prominently Highlighted */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-orange-50 via-amber-50/70 to-emerald-50/50 border border-orange-200/80 shadow-xs">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-orange-700 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>Citizen Action Directive</span>
              </div>
              <p className="text-2xl sm:text-3xl font-black text-orange-600 tracking-tight">
                "Spot it. Snap it. Resolve it."
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1.5">
                CivicPulse — Your City. Your Voice. Our Responsibility.
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Your city deserves better. Report civic issues, raise your voice, and help local authorities build a cleaner and safer community.
            </p>

            {/* Realistic Civic Urban Visual */}
            <div className="pt-2">
              <CivicHeroIllustration />
            </div>
          </div>

          {/* ======================================================== */}
          {/* 2. THREE-STEP PROCESS SECTION                             */}
          {/* Mobile: Order 2 (Steps right below branding & slogan)   */}
          {/* Desktop: Order 3, Spanning all 12 columns below Hero     */}
          {/* ======================================================== */}
          <div className="order-2 lg:order-3 lg:col-span-12 mt-4 lg:mt-6">
            <div className="border-t border-slate-200/80 pt-8 sm:pt-10">
              <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200/60 inline-block mb-2">
                  Three-Step Resolution
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  How CivicPulse Empowers Every Resident
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Transparent municipal action from incident identification to verified closure.
                </p>
              </div>

              {/* 3 Step Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* STEP 01 - Light Saffron */}
                <div className="bg-[#FFF7ED] border border-[#FDBA74]/60 rounded-2xl p-5 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                        STEP 01
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white border border-orange-200 flex items-center justify-center text-orange-600 shadow-xs">
                        <Eye className="w-5 h-5 text-orange-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Spot it</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Identify civic problems in your neighbourhood, such as potholes, garbage accumulation, broken streetlights, and water leakage.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-orange-200/50 text-[11px] font-medium text-orange-700 flex items-center">
                    <span>Neighbourhood Vigilance</span>
                  </div>
                </div>

                {/* STEP 02 - Light Blue */}
                <div className="bg-[#EFF6FF] border border-[#93C5FD]/60 rounded-2xl p-5 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                        STEP 02
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white border border-blue-200 flex items-center justify-center text-blue-600 shadow-xs">
                        <Camera className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Snap it</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Capture the problem, upload a photograph, and share its location.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-blue-200/50 text-[11px] font-medium text-blue-700 flex items-center">
                    <span>Geo-Tagged Evidence</span>
                  </div>
                </div>

                {/* STEP 03 - Light Green */}
                <div className="bg-[#F0FDF4] border border-[#86EFAC]/60 rounded-2xl p-5 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                        STEP 03
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-xs">
                        <ShieldCheck className="w-5 h-5 text-emerald-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Resolve it</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Your complaint reaches the responsible authorities. Track its progress until resolution.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-emerald-200/50 text-[11px] font-medium text-emerald-700 flex items-center">
                    <span>Accountable Municipal Closure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 3. CITIZEN LOGIN CARD                                     */}
          {/* Mobile: Order 3 (Below process steps)                    */}
          {/* Desktop: Order 2, Right 5 Columns (approx 42% width)    */}
          {/* ======================================================== */}
          <div className="order-3 lg:order-2 lg:col-span-5 w-full">
            <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 sm:p-8 relative">
              {/* Card Header with Small Saffron Shield Icon */}
              <div className="flex items-center space-x-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 shadow-xs shrink-0">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                    Welcome, Citizen!
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Your voice matters. Sign in to make a difference.
                  </p>
                </div>
              </div>

              {/* Status / Error Alerts */}
              {error && (
                <div className="p-3.5 mb-5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-start animate-in fade-in duration-200">
                  <AlertCircle className="w-4 h-4 mr-2.5 text-rose-600 shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">{error}</span>
                </div>
              )}

              {infoMsg && (
                <div className="p-3.5 mb-5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-start animate-in fade-in duration-200">
                  <CheckCircle className="w-4 h-4 mr-2.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">{infoMsg}</span>
                </div>
              )}

              {/* Form Mode 1: Request OTP */}
              {!otpSent ? (
                <form onSubmit={handleSendOtp} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:outline-hidden transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="flex rounded-xl overflow-hidden border border-slate-300 focus-within:ring-2 focus-within:ring-orange-500/20 focus-within:border-orange-500 transition-all">
                      <span className="inline-flex items-center px-3.5 bg-slate-50 border-r border-slate-300 text-slate-600 text-sm font-semibold select-none">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                        placeholder="9876543210"
                        className="w-full text-sm px-3.5 py-2.5 bg-white focus:outline-hidden placeholder:text-slate-400"
                      />
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">
                      We'll send a 6-digit one-time password (OTP) via SMS.
                    </p>
                  </div>

                  {/* Optional Email Address */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:outline-hidden transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Primary Orange Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-xs text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 transition-all duration-150 disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <span className="inline-flex items-center">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                        Sending OTP...
                      </span>
                    ) : (
                      <span className="inline-flex items-center">
                        Continue with OTP
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </span>
                    )}
                  </button>
                </form>
              ) : (
                /* Form Mode 2: Verify OTP */
                <form onSubmit={handleVerifyOtp} className="space-y-4 animate-in fade-in duration-200">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-600 flex justify-between items-center">
                    <div>
                      <span className="text-slate-500 block text-[11px]">OTP Sent to</span>
                      <span className="font-bold text-slate-900">+91 {phone}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setOtpSent(false)}
                      className="text-orange-600 hover:text-orange-700 hover:underline font-semibold text-xs cursor-pointer"
                    >
                      Change Number
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Enter 6-Digit OTP <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                      placeholder="123456"
                      className="w-full text-center tracking-[0.35em] text-xl font-bold px-3 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:outline-hidden transition-all bg-white"
                      autoFocus
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading || otp.length !== 6}
                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-xs text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 transition-all duration-150 disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <span className="inline-flex items-center">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                        Verifying OTP...
                      </span>
                    ) : (
                      'Verify OTP & Enter Portal'
                    )}
                  </button>

                  <div className="text-center pt-1">
                    <button
                      type="button"
                      disabled={cooldown > 0 || loading}
                      onClick={handleSendOtp}
                      className="text-xs text-slate-600 hover:text-slate-900 font-semibold disabled:opacity-40 cursor-pointer"
                    >
                      {cooldown > 0 ? `Resend OTP in ${cooldown}s` : 'Resend OTP code'}
                    </button>
                  </div>
                </form>
              )}

              {/* Security Assurance Label */}
              <div className="mt-4 pt-3 text-center">
                <p className="text-[11px] text-slate-500 flex items-center justify-center">
                  <Lock className="w-3.5 h-3.5 mr-1.5 text-slate-400 shrink-0" />
                  <span>Secure Citizen Access | Your Information is Protected</span>
                </p>
              </div>

              {/* Officer & Field Worker Navigation */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <p className="text-xs text-slate-500 text-center mb-2.5 font-medium">
                  Municipal Operations &amp; Maintenance Staff
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <Link
                    to="/staff/login?portal=officer"
                    className="flex items-center justify-center py-2 px-2.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold transition-colors text-center"
                  >
                    <Building2 className="w-3.5 h-3.5 mr-1.5 text-slate-500" />
                    Officer Portal &rarr;
                  </Link>
                  <Link
                    to="/staff/login?portal=worker"
                    className="flex items-center justify-center py-2 px-2.5 rounded-lg border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold transition-colors text-center"
                  >
                    <Wrench className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                    Field Worker &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. CITIZEN TRUST SECTION                                  */}
      {/* Light-background section with 3 trust-oriented highlights */}
      {/* ======================================================== */}
      <section className="bg-white border-t border-slate-200/80 py-14 sm:py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 inline-block mb-2">
              Public Service Transparency
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Together, We Build Better Communities.
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
              CivicPulse — Your City. Your Voice. Our Responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Highlight 1: Easy Issue Reporting */}
            <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 hover:bg-white hover:shadow-sm transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 mb-4 shadow-xs">
                <Smartphone className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Easy Issue Reporting
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Simple, accessible grievance registration with real-time GPS location pinning, clear photographic evidence uploads, and intuitive civic classification.
              </p>
            </div>

            {/* Highlight 2: Transparent Complaint Tracking */}
            <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 hover:bg-white hover:shadow-sm transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4 shadow-xs">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Transparent Complaint Tracking
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clear audit trails for every report. Monitor grievance progression from administrative verification through field team assignment to scheduled execution.
              </p>
            </div>

            {/* Highlight 3: Accountable Civic Resolution */}
            <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 hover:bg-white hover:shadow-sm transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4 shadow-xs">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Accountable Civic Resolution
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Grievance closure mandates geo-tagged before-and-after photo verification submitted by on-ground field personnel and verified by municipal officers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
