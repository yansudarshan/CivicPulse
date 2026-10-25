import React, { useState } from 'react';
import { Shield, X, HelpCircle, Info, Lock, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

type ModalType = 'about' | 'help' | 'privacy' | 'contact' | null;

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <>
      <footer className="bg-white border-t border-slate-200 mt-auto">
        {/* Subtle accent bar */}
        <div className="h-0.5 bg-gradient-to-r from-orange-500 via-slate-200 to-emerald-600"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Branding and Tagline */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-md bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-bold text-slate-900 tracking-tight">
                  CivicPulse — Municipal Civic Operations Platform
                </span>
              </div>
              <p className="text-xs text-slate-500">
                CivicPulse — Your City. Your Voice. Our Responsibility.
              </p>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-600">
              <button
                type="button"
                onClick={() => setActiveModal('about')}
                className="hover:text-orange-600 transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => setActiveModal('help')}
                className="hover:text-orange-600 transition-colors cursor-pointer"
              >
                Help &amp; Support
              </button>
              <button
                type="button"
                onClick={() => setActiveModal('privacy')}
                className="hover:text-orange-600 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setActiveModal('contact')}
                className="hover:text-orange-600 transition-colors cursor-pointer"
              >
                Contact Us
              </button>
            </nav>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2 text-center sm:text-left">
            <p>
              Official Public Service Portal for Municipal Citizen Engagement and Civic Grievance Resolution.
            </p>
            <p>
              Spot it. Snap it. Resolve it.
            </p>
          </div>
        </div>
      </footer>

      {/* Information Modals */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs transition-opacity"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === 'about' && (
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
                    <Info className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">About CivicPulse</h3>
                    <p className="text-xs text-slate-500">Municipal Civic Operations Platform</p>
                  </div>
                </div>
                <div className="text-xs text-slate-600 space-y-3 leading-relaxed">
                  <p>
                    CivicPulse is a dedicated citizen-first municipal governance initiative designed to bridge the gap between residents and city administration.
                  </p>
                  <p>
                    Built with modern digital infrastructure, CivicPulse enables citizens to report road hazards, waste management concerns, streetlighting failures, and water supply issues directly to their local municipal ward offices.
                  </p>
                  <div className="bg-orange-50/70 border border-orange-200/60 rounded-xl p-3 text-orange-900 text-xs">
                    <span className="font-semibold block mb-0.5">Core Objective:</span>
                    To create cleaner, safer, and smarter urban communities through transparency, speed, and public accountability.
                  </div>
                </div>
              </div>
            )}

            {activeModal === 'help' && (
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Help &amp; Support</h3>
                    <p className="text-xs text-slate-500">Citizen Assistance &amp; Usage Guide</p>
                  </div>
                </div>
                <div className="text-xs text-slate-600 space-y-3 leading-relaxed">
                  <p className="font-semibold text-slate-800">How to report an issue:</p>
                  <ol className="list-decimal list-inside space-y-1.5 pl-1 text-slate-600">
                    <li>Sign in with your mobile number and one-time password (OTP).</li>
                    <li>Click <strong>Report Issue</strong> and choose the relevant civic category.</li>
                    <li>Take a clear photo and permit GPS location access for precise tagging.</li>
                    <li>Submit your report to receive a trackable complaint ID.</li>
                  </ol>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-700">
                    <span className="font-semibold block mb-1">Municipal Citizen Helpline:</span>
                    Dial toll-free <strong>1913</strong> (Municipal Grievance Helpline) for urgent civic emergencies.
                  </div>
                </div>
              </div>
            )}

            {activeModal === 'privacy' && (
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Privacy Policy</h3>
                    <p className="text-xs text-slate-500">Citizen Data Protection Standards</p>
                  </div>
                </div>
                <div className="text-xs text-slate-600 space-y-3 leading-relaxed">
                  <p>
                    CivicPulse values citizen trust and upholds strict data protection practices for all public services.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                      <span><strong>Confidentiality:</strong> Your phone number and personal details are used solely to send complaint resolution status updates.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                      <span><strong>Location Data:</strong> Geolocation coordinates captured during issue reporting are strictly attached to the civic infrastructure site.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                      <span><strong>Zero Marketing:</strong> We never sell, monetize, or disclose citizen contact information to third-party commercial entities.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeModal === 'contact' && (
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Contact Us</h3>
                    <p className="text-xs text-slate-500">Municipal Civic Operations Cell</p>
                  </div>
                </div>
                <div className="text-xs text-slate-600 space-y-2.5">
                  <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <Phone className="w-4 h-4 text-orange-600 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-800 block">Citizen Grievance Helpline</span>
                      <span className="text-slate-600">1800-11-2026 / 1913 (Toll Free)</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <Mail className="w-4 h-4 text-orange-600 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-800 block">Email Inquiries</span>
                      <span className="text-slate-600">support@civicpulse.gov.in</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <MapPin className="w-4 h-4 text-orange-600 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-800 block">Municipal Operations Center</span>
                      <span className="text-slate-600">Civic Central Administrative Complex, Urban Governance Division</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

