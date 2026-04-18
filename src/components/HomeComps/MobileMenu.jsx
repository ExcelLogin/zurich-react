import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../../assets/swiss.jpeg';

const navLinks = [
  { label: "Personal",    to: "/personal",    icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
  { label: "Business",    to: "/business",    icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="12.01"/></svg> },
  { label: "Investments", to: "/investments", icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { label: "About",       to: "/about",       icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> },
  { label: "Contact",     to: "/contact",     icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
  { label: "FAQ",         to: "/faq",         icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> },
];

const quickLinks = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
  { label: "Security",        to: "/security" },
];

// Animation variants
const overlayVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit:    { opacity: 0, transition: { duration: 0.25, delay: 0.1 } },
};

const drawerVariants = {
  hidden:  { x: "100%" },
  visible: { x: 0, transition: { type: "spring", stiffness: 340, damping: 38 } },
  exit:    { x: "100%", transition: { type: "spring", stiffness: 380, damping: 40 } },
};

const itemVariants = {
  hidden:  { opacity: 0, x: 24 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { delay: 0.12 + i * 0.055, duration: 0.45, ease: [0.16, 1, 0.3, 1] }
  }),
};

// ─────────────────────────────────────────────────
const MobileMenu = ({ isOpen, onClose }) => {
  const location = useLocation();

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on route change
  useEffect(() => { onClose(); }, [location.pathname]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            className="fixed inset-0 z-[998] bg-black/70 backdrop-blur-sm"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          {/* ── Drawer ── */}
          <motion.aside
            className="fixed top-0 right-0 bottom-0 z-[999] w-[82vw] max-w-[340px] flex flex-col bg-[#050505] border-l border-white/[0.08] shadow-[−20px_0_60px_rgba(0,0,0,0.6)] overflow-hidden"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >

            {/* Grid texture */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />

            {/* Crimson left edge accent */}
            <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#5B0F12] to-transparent" />

            {/* ── Header ── */}
            <div className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-white/[0.07]">
              <Link to="/" onClick={onClose}>
                <img src={logo} alt="Remedy Grand Chase Bank" className="w-20 h-8 object-contain" />
              </Link>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-lg border border-white/10 bg-white/[0.04] hover:border-[#5B0F12]/50 hover:bg-[#5B0F12]/10 flex items-center justify-center transition-all group"
                aria-label="Close menu"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-white/50 group-hover:stroke-white transition-colors" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* ── Nav links ── */}
            <nav className="relative z-10 flex-1 flex flex-col px-4 pt-6 pb-4 overflow-y-auto">

              {/* Section label */}
              <div className="flex items-center gap-2 mb-4 px-2">
                <span className="w-3 h-px bg-[#5B0F12]" />
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#5B0F12]">Navigation</span>
              </div>

              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.to;
                return (
                  <motion.div
                    key={link.label}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      to={link.to}
                      onClick={onClose}
                      className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl mb-1 transition-all group
                        ${isActive
                          ? "bg-[#5B0F12]/20 border border-[#5B0F12]/40 text-white"
                          : "border border-transparent hover:bg-white/[0.04] hover:border-white/[0.07] text-white/60 hover:text-white"
                        }`}
                    >
                      <span className={`flex-shrink-0 transition-colors ${isActive ? "text-[#5B0F12]" : "text-white/35 group-hover:text-[#5B0F12]"}`}>
                        {link.icon}
                      </span>
                      <span className="text-[13px] font-semibold tracking-[0.04em]">{link.label}</span>
                      {isActive && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#5B0F12]" />
                      )}
                      {!isActive && (
                        <svg viewBox="0 0 12 12" className="w-3 h-3 ml-auto fill-none stroke-white/20 group-hover:stroke-white/45 transition-colors" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 6h8M6 2l4 4-4 4"/>
                        </svg>
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Divider */}
              <div className="mx-2 my-4 h-px bg-white/[0.07]" />

              {/* Stats strip */}
              <motion.div
                custom={navLinks.length + 1}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="mx-2 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 flex justify-between"
              >
                {[
                  { num: "13M+",  label: "Clients" },
                  { num: "25+",   label: "Years" },
                  { num: "98%",   label: "Satisfaction" },
                ].map(({ num, label }) => (
                  <div key={label} className="flex flex-col items-center gap-0.5">
                    <span className="text-base font-black text-white tracking-tight" style={{ fontFamily: "Georgia, serif" }}>{num}</span>
                    <span className="text-[9px] text-white/35 tracking-[0.1em] uppercase">{label}</span>
                  </div>
                ))}
              </motion.div>
            </nav>

            {/* ── Footer CTA ── */}
            <div className="relative z-10 px-4 pb-6 pt-3 border-t border-white/[0.07] flex flex-col gap-3">

              {/* Quick links */}
              <div className="flex items-center gap-3 flex-wrap px-1 pb-1">
                {quickLinks.map((ql, i) => (
                  <span key={ql.label} className="flex items-center gap-3">
                    <Link
                      to={ql.to}
                      onClick={onClose}
                      className="text-[10px] text-white/30 hover:text-white/60 transition-colors tracking-[0.04em]"
                    >
                      {ql.label}
                    </Link>
                    {i < quickLinks.length - 1 && (
                      <span className="w-px h-2.5 bg-white/[0.1]" />
                    )}
                  </span>
                ))}
              </div>

              {/* CTA buttons */}
              <Link
                to="/register"
                onClick={onClose}
                className="flex items-center justify-center gap-2 bg-[#5B0F12] hover:bg-[#7a1519] text-white text-xs font-bold tracking-[0.14em] uppercase px-5 py-3.5 rounded-sm transition-all"
              >
                Open Account →
              </Link>
              <Link
                to="/login"
                onClick={onClose}
                className="flex items-center justify-center gap-2 text-white/60 hover:text-white text-xs font-semibold tracking-[0.12em] uppercase px-5 py-3 rounded-sm border border-white/10 hover:border-white/25 transition-all"
              >
                Sign In
              </Link>

              {/* FDIC badge */}
              <div className="flex items-center justify-center gap-2 pt-1">
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-[#5B0F12]/60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span className="text-[9px] text-white/25 tracking-[0.1em] uppercase">FDIC Insured · Member FDIC</span>
              </div>
            </div>

          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;