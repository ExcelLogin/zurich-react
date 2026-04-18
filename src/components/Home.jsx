import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/swiss.jpeg';
import woman from '../assets/woman.png';
import Hamburger from "./HomeComps/hamburgers";
import MobileMenu from "./HomeComps/MobileMenu";
import Footer from './HomeComps/Footer'
import { motion } from "framer-motion";

// ── Animation variants ──────────────────────────────────────────
const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};
const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 } }
};
const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 } }
};
const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};
const slideLeftDelay = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 } }
};
const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 } }
};

// ── Shared grid texture style ───────────────────────────────────
const gridBg = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
  backgroundSize: "44px 44px",
};

// ── FactCard ────────────────────────────────────────────────────
const FactCard = ({ stat, suffix, label, body, tag, icon }) => (
  <div className="relative rounded-2xl border border-white/10 bg-[#0a0a0a] hover:border-[#5B0F12]/50 hover:bg-[#5B0F12]/5 transition-all p-6 flex flex-col gap-3.5 overflow-hidden min-h-[200px] group">
    <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
    <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#5B0F12] opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="w-9 h-9 rounded-[10px] bg-[#5B0F12]/25 border border-[#5B0F12]/40 group-hover:bg-[#5B0F12] group-hover:border-[#5B0F12] flex items-center justify-center transition-all text-[#c05055] group-hover:text-white/90">
      {icon}
    </div>
    <div className="text-3xl font-black text-white leading-none" style={{ fontFamily: 'Georgia, serif' }}>
      {stat}{suffix && <span className="text-[#5B0F12]">{suffix}</span>}
    </div>
    <p className="text-[13px] font-black text-white leading-snug" style={{ fontFamily: 'Georgia, serif' }}>{label}</p>
    <p className="text-[12px] text-white/55 leading-relaxed font-light flex-1">{body}</p>
    <div className="flex items-center gap-1.5 mt-auto">
      <span className="w-[3px] h-[3px] rounded-full bg-[#5B0F12]" />
      <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-[#5B0F12]">{tag}</span>
    </div>
  </div>
);

// ── Section label ───────────────────────────────────────────────
const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#5B0F12] mb-5">
    <span className="w-5 h-px bg-[#5B0F12] block" /> {children}
  </div>
);


// ════════════════════════════════════════════════════════════════
const Home = () => {
  const tickerText = "SEAMLESS INFINITE SCROLL";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-black">

      {/* ── MOBILE SIDE MENU ── */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* ── TOP TICKER ── */}
      {/* <div className="text-xs text-center bg-white text-black py-1.5 tracking-wide px-4">
        Experience world-class banking services with Remedy Grand Chase Bank — Your trusted international bank
      </div> */}

      {/* ══════════════════════════════════════════
          SECTION 1: HERO
      ══════════════════════════════════════════ */}
      <div className="w-full bg-black relative overflow-hidden">

        {/* ── Navbar ── */}
        <header className="relative z-50 bg-black/80 backdrop-blur-md border-b border-white/[0.07] flex justify-between items-center py-1 px-5 sm:px-8 md:px-10 sticky top-0">
          <Link to="/">
            <img src={logo} className="w-20 h-9 object-contain" alt="logo" />
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {[
              { label: 'Personal',    to: '/personal' },
              { label: 'Business',    to: '/business' },
              { label: 'Investments', to: '/investments' },
              { label: 'About',       to: '/about' },
            ].map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="text-xs font-medium tracking-[0.12em] uppercase text-white/65 hover:text-white transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden md:inline-flex text-xs font-medium tracking-widest uppercase text-white/65 hover:text-white transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="hidden md:inline-flex items-center gap-2 bg-[#5B0F12] hover:bg-[#7a1519] text-white text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded-sm transition-all duration-200"
            >
              Open Account
            </Link>
            <div className="md:hidden">
              <Hamburger isOpen={menuOpen} onClick={() => setMenuOpen(prev => !prev)} />
            </div>
          </div>
        </header>

        {/* ── Hero ── */}
        <section className="relative min-h-[calc(100vh-49px)] flex flex-col md:flex-row overflow-hidden">

          {/* ── Background layers ── */}
          {/* Deep grid */}
          <div className="absolute inset-0 pointer-events-none z-0" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }} />
          {/* Radial glow bottom-left */}
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
            style={{ background: "radial-gradient(circle, rgba(91,15,18,0.18) 0%, transparent 70%)" }} />
          {/* Radial glow top-right (behind image) */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
            style={{ background: "radial-gradient(circle, rgba(91,15,18,0.12) 0%, transparent 65%)" }} />

          {/* ── LEFT: Copy ── */}
          <div className="relative z-10 flex-1 flex flex-col justify-center px-5 sm:px-10 md:px-12 lg:px-16 pt-16 pb-12 md:py-0 order-2 md:order-1">

            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-2.5 mb-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 border border-[#5B0F12]/50 bg-[#5B0F12]/10 rounded-full px-3.5 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B0F12] animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#5B0F12]">Trusted Banking Partner</span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-[clamp(2.4rem,5.5vw,4.2rem)] font-black leading-[1.08] tracking-[-0.02em] text-white mb-6"
              style={{ fontFamily: 'Georgia, serif' }}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            >
              Your money,<br />
              <em className="not-italic text-white/40">working</em><br />
              <span className="relative inline-block">
                harder for you.
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#5B0F12] rounded-full" />
              </span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              className="text-[15px] text-white/65 leading-relaxed font-light max-w-[420px] mb-9"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            >
              Simple, secure personal banking — available in person, online, or on your device. Zero fees, zero compromises.
            </motion.p>

            {/* CTA row */}
            <motion.div
              className="flex flex-wrap items-center gap-3 mb-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.26 }}
            >
              <Link
                to="/register"
                className="inline-flex items-center gap-2.5 bg-[#5B0F12] hover:bg-[#7a1519] text-white text-xs font-bold tracking-[0.14em] uppercase px-7 py-3.5 rounded-sm transition-all duration-200 shadow-[0_8px_32px_rgba(91,15,18,0.4)]"
              >
                Open Account
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-none stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs font-semibold tracking-[0.12em] uppercase px-5 py-3.5 rounded-sm border border-white/12 hover:border-white/30 transition-all duration-200"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="flex flex-wrap items-center gap-6 sm:gap-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.36 }}
            >
              {[
                { val: <><span>13</span><span className="text-[#5B0F12]">M+</span></>,  label: "Clients worldwide" },
                { val: <><span className="text-[#5B0F12]">0</span><span>%</span></>,      label: "Commission fees" },
                { val: <><span>25</span><span className="text-[#5B0F12]">+</span></>,    label: "Years of trust" },
              ].map(({ val, label }, i) => (
                <div key={label} className="flex items-center gap-6 sm:gap-8">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-2xl font-black text-white tracking-tight leading-none" style={{ fontFamily: 'Georgia, serif' }}>
                      {val}
                    </span>
                    <span className="text-[10px] text-white/45 tracking-[0.1em] uppercase">{label}</span>
                  </div>
                  {i < 2 && <span className="hidden sm:block w-px h-8 bg-white/[0.1]" />}
                </div>
              ))}

              {/* FDIC pill */}
              <div className="flex items-center gap-1.5 border border-white/10 rounded-full px-3 py-1.5 bg-white/[0.03]">
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-[#5B0F12]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span className="text-[9px] font-bold tracking-[0.12em] uppercase text-white/40">FDIC Insured</span>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Image ── */}
          <motion.div
            className="relative z-10 w-full md:w-[46%] lg:w-[44%] flex-shrink-0 order-1 md:order-2 min-h-[55vw] md:min-h-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {/* Crimson accent vertical bar */}
            <div className="hidden md:block absolute left-0 top-[10%] bottom-[10%] w-[2px] bg-gradient-to-b from-transparent via-[#5B0F12] to-transparent z-20" />

            {/* Image fills the container */}
            <div
              className="absolute inset-0 bg-cover bg-top bg-no-repeat"
              style={{ backgroundImage: `url(${woman})` }}
            />

            {/* Gradient fade — left edge blends into black */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent z-10" />
            {/* Gradient fade — bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent z-10" />
            {/* Gradient fade — top */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/60 to-transparent z-10" />

            {/* Floating card: Balance */}
            <motion.div
              className="absolute z-20 left-6 md:left-10 top-8 sm:top-12 bg-black/80 backdrop-blur-md border border-white/12 rounded-2xl px-4 py-3.5 flex flex-col gap-1 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            >
              <span className="text-[9px] text-white/40 uppercase tracking-[0.14em]">Total Balance</span>
              <span className="text-xl font-black text-white tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>$24,830<span className="text-[#5B0F12]">.</span>00</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-[9px] text-green-400 font-semibold tracking-wide">+2.4% this month</span>
              </div>
            </motion.div>

            {/* Floating card: Transfer sent */}
            <motion.div
              className="absolute z-20 right-4 sm:right-8 md:right-6 lg:right-10 bottom-24 sm:bottom-28 bg-black/80 backdrop-blur-md border border-white/12 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.72 }}
            >
              <div className="w-8 h-8 rounded-full bg-[#5B0F12] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-white">Transfer sent</p>
                <p className="text-[9px] text-white/50">$250.00 → John D.</p>
              </div>
            </motion.div>

            {/* Floating card: Security badge */}
            <motion.div
              className="absolute z-20 left-6 md:left-10 bottom-16 sm:bottom-20 bg-[#5B0F12]/20 backdrop-blur-md border border-[#5B0F12]/40 rounded-xl px-3.5 py-2.5 flex items-center gap-2 shadow-[0_4px_20px_rgba(91,15,18,0.3)]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.88 }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-[#5B0F12]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#5B0F12]">256-bit Secured</span>
            </motion.div>
          </motion.div>

        </section>

        {/* ── SCROLL TICKER ── */}
        <div className="relative z-10 overflow-hidden py-2.5 bg-[#0a0a0a] border-t border-white/[0.07]">
          <div className="flex animate-scroll whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="inline-flex items-center gap-5 px-6 text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">
                <span className="w-1 h-1 bg-[#5B0F12] rounded-full flex-shrink-0" />
                {tickerText}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* ══════════════════════════════════════════
          SECTION 2: MOBILE BANKING
      ══════════════════════════════════════════ */}
      <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 px-5 sm:px-8 lg:px-16 py-16 md:py-24 bg-slate-100 overflow-hidden">

        {/* Left: headline + copy */}
        <motion.div
          className="w-full lg:flex-1 flex flex-col gap-6 items-center lg:items-start text-center lg:text-left"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionLabel>Mobile App</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
            Bank anywhere,<br />
            <em className="font-bold italic text-slate-900">anytime</em><br />
            with our app
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed font-light max-w-sm">
            Install West Zurich Bank on your phone for instant access to your accounts, transfers, bill payments, and more.
          </p>
          <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
            <Link
              to="/download/ios"
              className="flex items-center gap-2 px-4 py-2.5 border border-slate-800 rounded-lg text-xs font-medium text-slate-800 bg-white hover:bg-[#5B0F12]/10 hover:border-[#5B0F12] transition-all"
            >
               App Store
            </Link>
            <Link
              to="/download/android"
              className="flex items-center gap-2 px-4 py-2.5 border border-slate-800 rounded-lg text-xs font-medium text-slate-800 bg-white hover:bg-[#5B0F12]/10 hover:border-[#5B0F12] transition-all"
            >
              ▶ Google Play
            </Link>
          </div>
        </motion.div>

        {/* Middle: feature cards */}
        <motion.div
          className="w-full lg:flex-1 flex flex-col gap-3"
          variants={slideLeftDelay}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            { title: "Instant transfers",     sub: "Send money locally or internationally in seconds" },
            { title: "Bill payments",         sub: "Schedule and automate your monthly bills" },
            { title: "Live balance tracking", sub: "Real-time view of all your accounts and activity" },
          ].map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-3 p-4 border border-slate-300 rounded-xl bg-white hover:border-[#5B0F12]/50 hover:bg-[#5B0F12]/5 transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-[#5B0F12] flex items-center justify-center flex-shrink-0">
                <span className="text-white/90 text-xs">✦</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 mb-0.5">{f.title}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{f.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right: phone mockup */}
        <motion.div
          className="hidden lg:flex flex-none justify-center"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative w-44">
            <div className="w-44 h-[365px] rounded-[32px] border border-white/10 bg-[#0d0d0d] p-3 flex flex-col gap-2">
              <div className="w-10 h-1.5 bg-white/10 rounded-full mx-auto mb-1" />
              <div className="bg-[#0a0a14] rounded-[22px] flex-1 p-3.5 flex flex-col gap-2.5 overflow-hidden">
                <p className="text-[9px] text-white/55">Good morning, Alex</p>
                <div>
                  <p className="text-[8px] text-white/45 uppercase tracking-widest">Total balance</p>
                  <p className="text-2xl font-black text-white tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>$24,830</p>
                </div>
                <div className="flex gap-1.5">
                  {['Send', 'Pay', 'Top up'].map(a => (
                    <div key={a} className="flex-1 bg-white/8 rounded-lg p-1.5 flex flex-col items-center gap-1 text-[7px] text-white/60">
                      <div className="w-4 h-4 rounded-full bg-[#5B0F12]/40 border border-[#5B0F12]/70" />
                      {a}
                    </div>
                  ))}
                </div>
                <div className="h-px bg-white/10" />
                <p className="text-[7px] text-white/45 uppercase tracking-widest">Recent</p>
                {[['Netflix', '-$15.99', false], ['Salary', '+$3,200', true], ['Amazon', '-$89.00', false]].map(([name, amt, pos]) => (
                  <div key={name} className="flex justify-between items-center py-0.5">
                    <span className="text-[8px] text-white/75">{name}</span>
                    <span className={`text-[8px] font-medium ${pos ? 'text-green-400' : 'text-[#c05055]'}`}>{amt}</span>
                  </div>
                ))}
                <div className="mt-auto h-9 rounded-lg bg-[#5B0F12] flex items-center px-2.5 justify-between">
                  <div className="w-3.5 h-2.5 bg-white/30 rounded-sm" />
                  <span className="text-[7px] text-white/80 tracking-widest">•••• 4821</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-10 -right-5 bg-[#111] border border-white/15 rounded-xl px-3 py-2 flex items-center gap-2 min-w-[130px]">
              <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
              <div>
                <p className="text-[10px] font-medium text-white">Transfer sent</p>
                <p className="text-[9px] text-white/55">$250 → John D.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </section>

      {/* ══════════════════════════════════════════
          SECTION 3: ABOUT US
      ══════════════════════════════════════════ */}
      <section className="bg-black px-5 sm:px-8 lg:px-16 py-16 sm:py-20 md:py-28 overflow-hidden">

        <motion.div
          className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16 mb-14 md:mb-20"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex-1">
            <SectionLabel>About us</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white" style={{ fontFamily: 'Georgia, serif' }}>
              Empowering businesses<br />
              <em className="text-white/45">and individuals</em><br />
              with experts
            </h2>
          </div>

          <div className="flex-1 flex flex-col gap-4 md:pt-1">
            <p className="text-sm text-white/65 leading-relaxed font-light">
              We are dedicated to helping businesses and individuals navigate the complexities of finance with confidence and clarity.
            </p>
            <p className="text-sm text-white/65 leading-relaxed font-light">
              With years of experience in financial planning, investment management, and business consulting — we deliver strategies that actually work.
            </p>
            <div className="w-10 h-px bg-white/15 my-1" />
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#5B0F12] hover:gap-3 transition-all w-fit"
            >
              Learn more about us →
            </Link>
          </div>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 rounded-2xl overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.06)', gap: '1px' }}
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              num: '01', title: 'Expertise you can trust',
              body: 'Our experienced team delivers reliable insights and strategies, ensuring your financial decisions are well-informed and secure.',
              icon: <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
            },
            {
              num: '02', title: 'Decades of experience',
              body: "We bring years of hands-on experience across markets, giving you the strategic edge needed to navigate today's financial landscape.",
              icon: <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
            },
            {
              num: '03', title: 'Client-first approach',
              body: 'Every solution we provide is tailored to your unique needs — we listen first, then build strategies designed around your goals.',
              icon: <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
            },
          ].map((card) => (
            <div key={card.num} className="bg-black hover:bg-[#0d0d0d] transition-colors p-6 sm:p-8 flex flex-col gap-4">
              <span className="text-[11px] font-bold tracking-[0.15em] text-white/35" style={{ fontFamily: 'Georgia, serif' }}>{card.num}</span>
              <div className="w-11 h-11 rounded-xl bg-[#5B0F12] flex items-center justify-center flex-shrink-0">{card.icon}</div>
              <h3 className="text-lg font-black text-white leading-snug" style={{ fontFamily: 'Georgia, serif' }}>{card.title}</h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">{card.body}</p>
              <div className="w-8 h-px bg-[#5B0F12] mt-auto pt-4" />
            </div>
          ))}
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-14 pt-8 border-t border-white/10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            { num: '25', suffix: '+', label: 'Years in business' },
            { num: '13', suffix: 'M', label: 'Clients worldwide' },
            { num: '98', suffix: '%', label: 'Client satisfaction' },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-6 sm:gap-10">
              <div className="flex flex-col gap-1 items-center sm:items-start">
                <div className="text-3xl md:text-4xl font-black text-white tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                  {stat.num}<span className="text-[#5B0F12]">{stat.suffix}</span>
                </div>
                <div className="text-[10px] text-white/55 tracking-[0.1em] uppercase">{stat.label}</div>
              </div>
              {i < 2 && <div className="hidden sm:block w-px h-12 bg-white/10" />}
            </div>
          ))}
          <Link
            to="/register"
            className="flex items-center gap-3 bg-[#5B0F12] hover:bg-[#7a1519] text-white text-xs font-semibold tracking-widest uppercase px-7 py-3.5 rounded-sm transition-all"
          >
            Get started →
          </Link>
        </motion.div>

      </section>

      {/* ══════════════════════════════════════════
          SECTION 4: OUR SERVICES
      ══════════════════════════════════════════ */}
      <section className="bg-black px-5 sm:px-8 lg:px-16 py-16 sm:py-20 md:py-28 overflow-hidden border-t border-white/[0.06]">

        <motion.div
          className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16 mb-14 md:mb-20"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex-1">
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white" style={{ fontFamily: 'Georgia, serif' }}>
              Expert financial<br />
              services for<br />
              <em className="text-white/45">your needs</em>
            </h2>
          </div>
          <div className="flex-1 flex flex-col gap-4 md:pt-1">
            <p className="text-sm text-white/65 leading-relaxed font-light max-w-md">
              Move funds between your accounts and schedule transfers with ease. View all your account activity and balances, pay bills automatically, set up alerts, and more.
            </p>
            <div className="w-10 h-px bg-white/20" />
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 rounded-2xl overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.06)', gap: '1px' }}
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              num: '01', title: 'Expertise you can trust',
              body: 'Our experienced team delivers reliable insights and strategies, ensuring your financial decisions are well-informed and secure.',
              icon: <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
            },
            {
              num: '02', title: 'Seamless transfers',
              body: 'Send money locally or internationally in seconds. Schedule one-time or recurring transfers across all your linked accounts.',
              icon: <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>,
            },
            {
              num: '03', title: 'Client-first approach',
              body: 'Every solution we provide is tailored to your unique needs — we listen first, then build strategies designed around your goals.',
              icon: <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
            },
          ].map((card) => (
            <div key={card.num} className="bg-black hover:bg-[#0d0d0d] transition-colors p-6 sm:p-8 flex flex-col gap-4">
              <span className="text-[11px] font-bold tracking-[0.15em] text-white/35" style={{ fontFamily: 'Georgia, serif' }}>{card.num}</span>
              <div className="w-11 h-11 rounded-xl bg-[#5B0F12] flex items-center justify-center flex-shrink-0">{card.icon}</div>
              <h3 className="text-lg font-black text-white leading-snug" style={{ fontFamily: 'Georgia, serif' }}>{card.title}</h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">{card.body}</p>
              <div className="w-8 h-px bg-[#5B0F12] mt-auto pt-4" />
            </div>
          ))}
        </motion.div>

      </section>

      {/* ══════════════════════════════════════════
          SECTION 5: OUR EXPERTISE
      ══════════════════════════════════════════ */}
      <section className="bg-black px-5 sm:px-8 lg:px-16 py-16 sm:py-20 md:py-28 overflow-hidden border-t border-white/[0.06]">

        <motion.div
          className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16 mb-14"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex-1">
            <SectionLabel>Our Expertise</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white" style={{ fontFamily: 'Georgia, serif' }}>
              Driving innovation<br />
              and success in<br />
              <em className="text-white/45">industry insights</em>
            </h2>
          </div>
          <div className="flex-1 flex flex-col gap-4 md:pt-1">
            <p className="text-sm text-white/65 leading-relaxed font-light max-w-md">
              West Zurich Bank Savings Invent is our enterprise approach to innovation and supports our business strategy as a forward-focused bank. It's about using emerging technology to engage with our customers and exceeding their rapidly evolving expectations.
            </p>
            <div className="w-10 h-px bg-white/15" />
          </div>
        </motion.div>

        {/* Tabs — horizontally scrollable on mobile */}
        <motion.div
          className="flex border border-white/10 rounded-lg overflow-hidden mb-8 overflow-x-auto"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {['Financial Planning', 'Business Consulting', 'Risk Management', 'Invest Management'].map((tab, i) => (
            <button
              key={tab}
              className={`flex-1 min-w-[120px] py-2.5 text-[11px] font-semibold tracking-[0.1em] uppercase transition-all border-r border-white/10 last:border-r-0 whitespace-nowrap px-3
                ${i === 0 ? 'bg-[#5B0F12] text-white' : 'text-white/55 hover:text-white/80 hover:bg-white/[0.04]'}`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Bottom grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left: benefit card */}
          <div className="border border-[#5B0F12]/50 rounded-2xl bg-[#0a0a0a] hover:bg-[#5B0F12]/5 transition-all p-6 sm:p-8 flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#5B0F12]">✦ &nbsp; Key benefits</span>
            <h3 className="text-xl sm:text-2xl font-black text-white leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
              Benefits of our<br />financial planning
            </h3>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              Empower your financial journey with expert advice, personalized strategies, and solutions designed to help you achieve long-term stability and growth.
            </p>
            <div className="flex flex-col gap-2.5 mt-1">
              {[
                'Tailored investment strategies for every life stage',
                'Tax-optimized savings and retirement planning',
                'Real-time portfolio monitoring and rebalancing',
                'Dedicated financial advisor on demand',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5B0F12] flex-shrink-0 mt-1" />
                  {item}
                </div>
              ))}
            </div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#5B0F12] mt-2">
              Explore planning tools →
            </div>
          </div>

          {/* Right: stats card */}
          <div className="border border-[#5B0F12]/50 rounded-2xl bg-[#0d0d0d] overflow-hidden flex flex-col justify-between min-h-[320px] relative">
            <div className="absolute inset-0 pointer-events-none" style={gridBg} />
            <div className="relative z-10 p-6 sm:p-7 flex flex-col gap-3">
              {[
                { label: 'Portfolio growth', pct: 82 },
                { label: 'Client retention',  pct: 98 },
                { label: 'Risk coverage',     pct: 74 },
                { label: 'ROI average',       pct: 67 },
              ].map(({ label, pct }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-[11px] text-white/55 w-28 flex-shrink-0">{label}</span>
                  <div className="flex-1 h-0.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#5B0F12] rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-[11px] text-white/55 w-7 text-right">{pct}%</span>
                </div>
              ))}
            </div>
            <div className="relative z-10 p-6 sm:p-7 border-t border-white/[0.08] bg-black/60 flex flex-col gap-1">
              <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/45">Assets under management</span>
              <div className="text-4xl font-black tracking-tight text-white" style={{ fontFamily: 'Georgia, serif' }}>
                $4.2<span className="text-[#5B0F12]">B</span>
              </div>
              <span className="text-[12px] text-white/55">Across 13M+ client portfolios worldwide</span>
            </div>
          </div>
        </motion.div>

      </section>

      {/* ══════════════════════════════════════════
          SECTION 6: WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section className="bg-black px-5 sm:px-8 lg:px-16 py-16 sm:py-20 md:py-28 overflow-hidden border-t border-white/[0.06]">

        <motion.div
          className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16 mb-14"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex-1">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white" style={{ fontFamily: 'Georgia, serif' }}>
              Expertise and<br />
              client-focused<br />
              <em className="text-white/45">solutions for you</em>
            </h2>
          </div>
          <div className="flex-1 flex flex-col gap-4 md:pt-1">
            <p className="text-sm text-white/65 leading-relaxed font-light max-w-md">
              Our team of experienced professionals delivers personalized, results-driven financial strategies tailored to your unique goals. We prioritize transparency, trust, and long-term success.
            </p>
            <div className="w-10 h-px bg-white/20" />
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              num: '01', tag: 'Proven track record',
              title: 'Consistent returns, year after year',
              body: 'Data-driven strategies that outperform market benchmarks through disciplined, research-backed investment decisions.',
              icon: <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white/90 fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
              visual: (
                <div className="absolute left-7 right-7 top-[72px] flex flex-col gap-3">
                  <div className="flex items-end gap-1.5 h-16">
                    {[30, 45, 38, 60, 50, 72, 88, 100].map((h, i) => (
                      <div key={i} className={`flex-1 rounded-t-sm ${i >= 6 ? 'bg-[#5B0F12]' : 'bg-[#5B0F12]/35'}`} style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <p className="text-[9px] text-white/35 tracking-[0.08em] uppercase">YOY Portfolio Growth</p>
                  <p className="text-3xl font-black text-white" style={{ fontFamily: 'Georgia, serif' }}>+34<span className="text-[#5B0F12]">%</span></p>
                </div>
              ),
            },
            {
              num: '02', tag: 'Trust & security',
              title: 'Your assets, fully protected',
              body: 'Enterprise-grade security and regulatory compliance — your funds and data are safeguarded at every level.',
              icon: <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white/90 fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
              visual: (
                <div className="absolute left-1/2 -translate-x-1/2 top-[72px] flex flex-col items-center gap-3 w-full">
                  <div className="w-20 h-20 rounded-full border border-[#5B0F12]/50 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[#5B0F12]" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <p className="text-3xl font-black text-white" style={{ fontFamily: 'Georgia, serif' }}>98<span className="text-[#5B0F12]">%</span></p>
                  <p className="text-[10px] text-white/45 text-center max-w-[120px] leading-relaxed">Client satisfaction rate across all service tiers</p>
                </div>
              ),
            },
            {
              num: '03', tag: 'Client first',
              title: 'Advisors who truly listen',
              body: 'Personalized guidance from dedicated experts who understand your goals and build strategies around your life, not templates.',
              icon: <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white/90 fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
              visual: (
                <div className="absolute left-7 right-7 top-[72px] flex flex-col gap-2.5">
                  {[['Response time', 92], ['Issue resolution', 96], ['Advisor rating', 99], ['Plan accuracy', 88]].map(([label, pct]) => (
                    <div key={label} className="flex items-center gap-2.5">
                      <span className="text-[9px] text-white/40 w-24 flex-shrink-0 tracking-[0.04em]">{label}</span>
                      <div className="flex-1 h-px bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#5B0F12] rounded-full" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-[9px] text-white/40 w-6 text-right">{pct}%</span>
                    </div>
                  ))}
                </div>
              ),
            },
          ].map((card) => (
            <div
              key={card.num}
              className="relative rounded-2xl overflow-hidden border border-[#5B0F12]/50 hover:border-[#5B0F12] transition-all min-h-[420px] flex flex-col justify-end group"
            >
              <div className="absolute inset-0 pointer-events-none" style={gridBg} />
              <div className="absolute top-7 left-7 w-12 h-12 rounded-[14px] bg-[#5B0F12] flex items-center justify-center z-10">{card.icon}</div>
              <span className="absolute top-8 right-7 text-[11px] font-bold tracking-[0.15em] text-white/25 z-10" style={{ fontFamily: 'Georgia, serif' }}>{card.num}</span>
              <div className="absolute inset-0">{card.visual}</div>
              <div className="relative z-10 p-7 border-t border-white/[0.08] bg-black/75 group-hover:bg-[#5B0F12]/15 group-hover:border-[#5B0F12]/35 transition-all flex flex-col gap-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#5B0F12]" />
                  <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-[#5B0F12]">{card.tag}</span>
                </div>
                <h3 className="text-[19px] font-black text-white leading-snug" style={{ fontFamily: 'Georgia, serif' }}>{card.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed font-light">{card.body}</p>
                <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#5B0F12] mt-1">Learn more →</span>
              </div>
            </div>
          ))}
        </motion.div>

      </section>

      {/* ══════════════════════════════════════════
          SECTION 7: OUR APPROACH
      ══════════════════════════════════════════ */}
      <section className="bg-black px-5 sm:px-8 lg:px-16 py-16 sm:py-20 md:py-28 overflow-hidden border-t border-white/[0.06]">

        <motion.div
          className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16 mb-14"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex-1">
            <SectionLabel>Our Approach</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white" style={{ fontFamily: 'Georgia, serif' }}>
              Client-centric strategy<br />
              for <em className="text-white/45">lasting success</em>
            </h2>
          </div>
          <div className="flex-1 flex flex-col gap-4 md:pt-1">
            <p className="text-sm text-white/65 leading-relaxed font-light max-w-md">
              We believe that a successful financial journey starts with understanding your unique needs and aspirations. Our approach is built on a foundation of collaboration, transparency, and expertise.
            </p>
            <div className="w-10 h-px bg-white/15" />
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              step: '01', label: 'Step one', tag: 'Discovery',
              title: 'Understanding your goals',
              body: 'We start by listening — deeply understanding your financial situation, life goals, and risk tolerance before recommending anything.',
              icon: <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white/90 fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>,
            },
            {
              step: '02', label: 'Step two', tag: 'Planning',
              title: 'Building your custom plan',
              body: 'Our advisors craft a tailored financial roadmap aligned with your objectives — from wealth building to retirement and beyond.',
              icon: <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white/90 fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
            },
            {
              step: '03', label: 'Step three', tag: 'Execution',
              title: 'Putting the plan to work',
              body: 'We implement your strategy with precision — deploying capital, managing risk, and activating the right financial instruments at the right time.',
              icon: <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white/90 fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
            },
            {
              step: '04', label: 'Step four', tag: 'Review',
              title: 'Ongoing support & growth',
              body: 'Financial success is a journey. We continuously review, rebalance, and refine your plan as your life and the markets evolve.',
              icon: <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white/90 fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
            },
          ].map((card) => (
            <div
              key={card.step}
              className="relative rounded-[18px] border border-[#5B0F12]/50 bg-[#0a0a0a] hover:border-[#5B0F12] hover:bg-[#5B0F12]/5 transition-all p-7 flex flex-col overflow-hidden min-h-[360px] group"
            >
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
              <div className="text-[56px] font-black leading-none tracking-[-0.04em] text-[#5B0F12]/25 group-hover:text-[#5B0F12]/40 transition-colors mb-5" style={{ fontFamily: 'Georgia, serif' }}>{card.step}</div>
              <div className="w-[42px] h-[42px] rounded-xl bg-[#5B0F12] flex items-center justify-center mb-4 flex-shrink-0 z-10">{card.icon}</div>
              <div className="flex items-center gap-1.5 mb-2.5 z-10">
                <span className="w-[3px] h-[3px] rounded-full bg-[#5B0F12]" />
                <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-[#5B0F12]">{card.tag}</span>
              </div>
              <h3 className="text-base font-black text-white leading-snug mb-3 z-10" style={{ fontFamily: 'Georgia, serif' }}>{card.title}</h3>
              <p className="text-[12px] text-white/60 leading-relaxed font-light flex-1 z-10">{card.body}</p>
              <div className="mt-5 pt-4 border-t border-white/[0.07] flex items-center justify-between z-10">
                <span className="text-[9px] font-bold tracking-[0.12em] uppercase text-white/30">{card.label}</span>
                <div className="w-[26px] h-[26px] rounded-full border border-[#5B0F12]/40 flex items-center justify-center group-hover:bg-[#5B0F12] group-hover:border-[#5B0F12] transition-all">
                  <svg viewBox="0 0 12 12" className="w-3 h-3 fill-none stroke-[#5B0F12] group-hover:stroke-white transition-colors" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 6h8M6 2l4 4-4 4"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </section>

      {/* ══════════════════════════════════════════
          SECTION 8: FINANCIAL WISDOM
      ══════════════════════════════════════════ */}
      <section className="bg-black px-5 sm:px-8 lg:px-16 py-16 sm:py-20 md:py-28 overflow-hidden border-t border-white/[0.06]">

        <motion.div
          className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16 mb-12"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex-1">
            <SectionLabel>Financial Wisdom</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white" style={{ fontFamily: 'Georgia, serif' }}>
              Fascinating facts that<br />
              shape your <em className="text-white/45">financial<br />knowledge</em>
            </h2>
          </div>
          <div className="flex-1 flex flex-col gap-4 md:pt-1">
            <p className="text-sm text-white/65 leading-relaxed font-light max-w-md">
              Explore fun and surprising facts about the financial world. Learn how history, trends, and innovations have shaped today's finance landscape, making it easier to navigate your financial journey.
            </p>
            <div className="w-10 h-px bg-white/15" />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-2.5"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {[
              {
                stat: '$100', suffix: 'T', label: 'Global financial assets', tag: 'Markets',
                body: 'The total value of global financial assets surpassed $100 trillion, reflecting decades of compounding market growth.',
                icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
              },
              {
                stat: '1694', suffix: '', label: 'Year of the first central bank', tag: 'History',
                body: "The Bank of England, founded in 1694, became the world's first central bank and model for modern monetary systems.",
                icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>,
              },
              {
                stat: '72', suffix: 'hr', label: 'Rule of 72 for doubling', tag: 'Investing',
                body: 'Divide 72 by your annual return to know how many years it takes to double your investment — a classic compounding shortcut.',
                icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
              },
              {
                stat: '8', suffix: 'th', label: 'Compound interest wonder', tag: 'Insight',
                body: 'Einstein reportedly called compound interest the "eighth wonder of the world" — those who understand it, earn it.',
                icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
              },
            ].map((card) => <FactCard key={card.label} {...card} />)}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-2.5">
            {/* Wide card */}
            <div className="lg:col-span-2 relative rounded-2xl border border-white/10 bg-[#0a0a0a] hover:border-[#5B0F12]/45 hover:bg-[#5B0F12]/5 transition-all p-6 overflow-hidden group">
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#5B0F12] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-1 flex flex-col gap-3.5">
                  <div className="w-9 h-9 rounded-[10px] bg-[#5B0F12]/25 border border-[#5B0F12]/40 group-hover:bg-[#5B0F12] group-hover:border-[#5B0F12] flex items-center justify-center transition-all">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-[#c05055] group-hover:stroke-white/90 transition-colors" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  </div>
                  <div className="text-3xl font-black text-white" style={{ fontFamily: 'Georgia, serif' }}>4<span className="text-[#5B0F12]">%</span></div>
                  <p className="text-[13px] font-black text-white" style={{ fontFamily: 'Georgia, serif' }}>The safe withdrawal rule</p>
                  <p className="text-[12px] text-white/60 leading-relaxed font-light">The 4% rule suggests retirees can withdraw 4% of savings annually without running out of money over a 30-year period.</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-[3px] h-[3px] rounded-full bg-[#5B0F12]" />
                    <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-[#5B0F12]">Retirement</span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-2 pt-0.5 w-full">
                  <p className="text-[9px] text-white/40 tracking-[0.1em] uppercase mb-1">Allocation breakdown</p>
                  {[['Equities', 60], ['Bonds', 30], ['Cash', 10], ['Withdrawal', 4]].map(([label, pct]) => (
                    <div key={label} className="flex items-center gap-2">
                      <span className="text-[10px] text-white/50 w-20 flex-shrink-0">{label}</span>
                      <div className="flex-1 h-px bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#5B0F12]" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-[10px] text-white/50 w-6 text-right">{pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {[
              {
                stat: '1.7', suffix: 'B', label: 'Unbanked adults worldwide', tag: 'Inclusion',
                body: 'Over 1.7 billion adults globally still lack access to a bank account, highlighting the role of fintech in financial inclusion.',
                icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
              },
              {
                stat: 'S&P', suffix: '', label: '10.5% avg annual return', tag: 'Performance',
                body: 'The S&P 500 has delivered an average annual return of ~10.5% since 1957 — making long-term investing one of the most reliable wealth builders.',
                icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
              },
            ].map((card) => <FactCard key={card.label} {...card} />)}
          </div>
        </motion.div>

      </section>

      {/* ══════════════════════════════════════════
          FDIC / CTA SECTION
      ══════════════════════════════════════════ */}
      <section className="bg-black px-5 sm:px-8 lg:px-16 py-16 sm:py-20 md:py-28 border-t border-white/[0.06]">
        <motion.div
          className="relative flex flex-col md:flex-row items-stretch border border-[#5B0F12]/60 rounded-3xl bg-[#0a0a0a] overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="absolute inset-0 pointer-events-none" style={gridBg} />

          {/* LEFT: FDIC */}
          <div className="flex-none md:w-72 lg:w-80 relative bg-[#0d0d0d] border-b md:border-b-0 md:border-r border-white/[0.08] flex items-center justify-center px-10 py-14">
            <div className="flex flex-col items-center gap-5 z-10">
              <div className="w-24 h-24 rounded-full border-2 border-[#5B0F12]/50 bg-[#5B0F12]/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-11 h-11 fill-none stroke-[#5B0F12]" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div className="text-3xl font-black tracking-[0.08em] text-white text-center" style={{ fontFamily: 'Georgia, serif' }}>
                FDIC<span className="text-[#5B0F12]">.</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-[#5B0F12]/15 border border-[#5B0F12]/35 rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B0F12]" />
                <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-[#5B0F12]/90">Insured</span>
              </div>
              <p className="text-[11px] text-white/55 text-center leading-relaxed max-w-[180px]">
                Backed by the full faith and credit of the U.S. Government
              </p>
            </div>
          </div>

          {/* RIGHT: content */}
          <div className="flex-1 relative z-10 flex flex-col justify-center gap-5 px-6 sm:px-10 md:px-12 py-14">
            <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#5B0F12]">
              <span className="w-5 h-px bg-[#5B0F12] block" /> Your security, guaranteed
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Government backed', icon: <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-[#5B0F12]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4"/><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
                { label: '256-bit encrypted', icon: <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-[#5B0F12]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> },
              ].map(({ label, icon }) => (
                <div key={label} className="inline-flex items-center gap-1.5 border border-[#5B0F12]/30 rounded-md px-2.5 py-1 bg-[#5B0F12]/7">
                  {icon}
                  <span className="text-[9px] font-bold tracking-[0.1em] uppercase text-[#5B0F12]/90">{label}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight text-white" style={{ fontFamily: 'Georgia, serif' }}>
              Take control of your<br />
              <em className="text-white/45">financial future</em> today
            </h2>

            <p className="text-sm text-white/65 leading-relaxed font-light max-w-lg">
              We've made it easy for wes zurich Bank customers to harness their financial potential, bring their goals to life, and solve everyday financial challenges with confidence.
            </p>

            <div className="w-8 h-px bg-white/15" />

            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {[
                { num: '$250', suffix: 'K', label: 'FDIC coverage limit' },
                { num: '13',   suffix: 'M', label: 'Insured clients' },
                { num: '25',   suffix: '+', label: 'Years of trust' },
              ].map(({ num, suffix, label }, i) => (
                <div key={i} className="flex items-center gap-4 sm:gap-6">
                  <div className="flex flex-col gap-0.5">
                    <div className="text-xl font-black text-white tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                      {num}<span className="text-[#5B0F12]">{suffix}</span>
                    </div>
                    <div className="text-[9px] text-white/45 tracking-[0.08em] uppercase">{label}</div>
                  </div>
                  {i < 2 && <div className="hidden sm:block w-px h-8 bg-white/10" />}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5 pt-1">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 bg-[#5B0F12] hover:bg-[#7a1519] text-white text-[11px] font-bold tracking-[0.12em] uppercase px-6 py-3 rounded-sm transition-all"
              >
                Get started today →
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-[11px] font-bold tracking-[0.12em] uppercase px-6 py-3 rounded-sm border border-white/15 hover:border-white/35 transition-all"
              >
                Explore our services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ / CONTACT SECTION
      ══════════════════════════════════════════ */}
      <section className="bg-black px-5 sm:px-8 lg:px-16 py-16 sm:py-20 md:py-28 overflow-hidden border-t border-white/[0.06]">

        <motion.div
          className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16 mb-12"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex-1">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white" style={{ fontFamily: 'Georgia, serif' }}>
              Common business &amp;<br />
              finance <em className="text-white/45">questions<br />answered</em>
            </h2>
          </div>
          <div className="flex-1 flex flex-col gap-4 md:pt-1">
            <p className="text-sm text-white/65 leading-relaxed font-light max-w-md">
              Can't find what you're looking for? Our support team is available around the clock to help with any banking questions or concerns you may have.
            </p>
            <div className="w-10 h-px bg-white/15" />
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.12em] uppercase text-[#5B0F12] hover:gap-3 transition-all w-fit"
            >
              Contact our team →
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              tag: 'Mobile banking',
              title: 'How do I register for mobile banking at West Zurich Bank?',
              footerTag: 'Getting started',
              icon: <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/><path d="M9 7h6M9 11h4"/></svg>,
              content: (
                <div className="flex flex-col gap-2.5">
                  {[
                    'If you are enrolled in Online Banking, use your existing username and password to log in through the West Zurich Bank Savings app.',
                    'Android® and iPhone® users may enroll in the Mobile Deposit service to deposit checks directly using the app.',
                    'To enroll, select Mobile Deposit from the Main Menu, then review and accept the terms.',
                    'If you are not currently registered for Online Banking, you can sign up securely online.',
                  ].map((item) => (
                    <div key={item.slice(0, 20)} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B0F12] flex-shrink-0 mt-[5px]" />
                      <span className="text-xs text-white/65 leading-relaxed font-light">{item}</span>
                    </div>
                  ))}
                </div>
              ),
            },
            {
              tag: 'Mobile deposit',
              title: 'How does Mobile Deposit work on the West Zurich Bank app?',
              footerTag: 'Deposits',
              icon: <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
              content: (
                <div className="flex flex-col gap-3">
                  <p className="text-xs text-white/65 leading-relaxed font-light">
                    Our Mobile Deposit allows you to deposit a check through the West Zurich Bank Savings mobile app using your internet-enabled iPhone® or Android™ device, provided your device has a camera.
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {[
                      'You must be an Online or Mobile banking customer and enrolled in the Mobile Deposit service.',
                      'In the app, select "Mobile Deposit" then follow the steps to enroll or deposit a check.',
                    ].map((item) => (
                      <div key={item.slice(0, 20)} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5B0F12] flex-shrink-0 mt-[5px]" />
                        <span className="text-xs text-white/65 leading-relaxed font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ),
            },
          ].map((card) => (
            <div
              key={card.tag}
              className="relative rounded-[18px] border border-white/10 hover:border-[#5B0F12]/50 bg-[#0a0a0a] overflow-hidden flex flex-col transition-all group"
            >
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#5B0F12] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 flex items-start gap-3.5 p-6 sm:p-7 pb-5">
                <div className="w-10 h-10 rounded-[11px] bg-[#5B0F12]/20 border border-[#5B0F12]/35 group-hover:bg-[#5B0F12] group-hover:border-[#5B0F12] flex items-center justify-center flex-shrink-0 transition-all text-[#c05055] group-hover:text-white/90">
                  {card.icon}
                </div>
                <div>
                  <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-[#5B0F12] mb-1.5">{card.tag}</p>
                  <h3 className="text-[15px] font-black text-white leading-snug" style={{ fontFamily: 'Georgia, serif' }}>{card.title}</h3>
                </div>
              </div>

              <div className="mx-6 sm:mx-7 h-px bg-white/[0.07]" />

              <div className="relative z-10 flex flex-col gap-3 p-6 sm:p-7 pt-5 flex-1">
                {card.content}
                <div className="mt-auto pt-4 border-t border-white/[0.07] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-[3px] h-[3px] rounded-full bg-white/30" />
                    <span className="text-[9px] font-bold tracking-[0.12em] uppercase text-white/35">{card.footerTag}</span>
                  </div>
                  <Link to="/faq" className="text-[9px] font-bold tracking-[0.1em] uppercase text-[#5B0F12] hover:gap-2 flex items-center gap-1 transition-all">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>


         <Footer/>

      </section>

    </main>
  );
};

export default Home;
























// import { Link } from "react-router-dom";
// import logo from '../assets/swiss.jpeg';
// import woman from '../assets/woman.png';
// import Hamburger from "./HomeComps/hamburger";
// import Footer from './HomeComps/Footer'
// import { motion } from "framer-motion";

// // Animation variants
// const fadeLeft = {
//   hidden: { opacity: 0, x: -60 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
// };
// const fadeRight = {
//   hidden: { opacity: 0, x: 60 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 } }
// };
// const fadeUp = {
//   hidden: { opacity: 0, y: 80 },
//   visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 } }
// };
// const slideLeft = {
//   hidden: { opacity: 0, x: -40 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
// };
// const slideLeftDelay = {
//   hidden: { opacity: 0, x: -40 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 } }
// };
// const slideUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 } }
// };



// const FactCard = ({ stat, suffix, label, body, tag, icon }) => (
//   <div className="relative rounded-2xl border border-white/[0.07] bg-[#0a0a0a] hover:border-[#5B0F12]/45 hover:bg-[#5B0F12]/5 transition-all p-6 flex flex-col gap-3.5 overflow-hidden min-h-[200px] group">
//     <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
//     <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#5B0F12] opacity-0 group-hover:opacity-100 transition-opacity" />
//     <div className="w-9 h-9 rounded-[10px] bg-[#5B0F12]/25 border border-[#5B0F12]/40 group-hover:bg-[#5B0F12] group-hover:border-[#5B0F12] flex items-center justify-center transition-all text-[#a04045] group-hover:text-white/90">
//       {icon}
//     </div>
//     <div className="text-3xl font-black text-white leading-none" style={{ fontFamily: 'Georgia, serif' }}>
//       {stat}{suffix && <span className="text-[#5B0F12]">{suffix}</span>}
//     </div>
//     <p className="text-[13px] font-black text-white leading-snug" style={{ fontFamily: 'Georgia, serif' }}>{label}</p>
//     <p className="text-[11px] text-white/35 leading-relaxed font-light flex-1">{body}</p>
//     <div className="flex items-center gap-1.5 mt-auto">
//       <span className="w-[3px] h-[3px] rounded-full bg-[#5B0F12]" />
//       <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-[#5B0F12]/80">{tag}</span>
//     </div>
//   </div>
// );






// const Home = () => {
//   const text = "SEAMLESS INFINITE SCROLL";

//   return (
//     <main className="bg-black">

//       {/* ── TOP TICKER ── */}
//       <div className="text-xs text-center bg-white text-black py-1.5 tracking-wide px-4">
//         Experience world-class banking services with Remedy Grand Chase Bank - Your trusted international bank
//       </div>

//       {/* ── SECTION 1: HERO ── */}
//       <div className="w-full bg-slate-200">

//         {/* Navbar */}
//         <header className="bg-black border-b border-white/10 flex justify-between items-center py-1 px-6 md:px-10 z-50 sticky top-0">
//           <Link to="/">
//             <img src={logo} className="w-20 h-9 object-contain" alt="logo" />
//           </Link>

//           {/* Nav links — hidden on mobile */}
//           <nav className="hidden md:flex items-center gap-8">
//             {[
//               { label: 'Personal',    to: '/personal' },
//               { label: 'Business',    to: '/business' },
//               { label: 'Investments', to: '/investments' },
//               { label: 'About',       to: '/about' },
//             ].map(({ label, to }) => (
//               <Link
//                 key={label}
//                 to={to}
//                 className="text-xs font-medium tracking-[0.12em] uppercase text-white/50 hover:text-white transition-colors duration-200"
//               >
//                 {label}
//               </Link>
//             ))}
//           </nav>

//           {/* Right side */}
//           <div className="flex items-center gap-3">
//             <Link
//               to="/login"
//               className="hidden md:inline-flex text-xs font-medium tracking-widest uppercase text-white/60 hover:text-white transition-colors duration-200"
//             >
//               Sign In
//             </Link>
//             <Link
//               to="/register"
//               className="hidden md:inline-flex items-center gap-2 bg-[#5B0F12] hover:bg-[#7a1519] text-white text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded-sm transition-all duration-200"
//             >
//               Open Account
//             </Link>
//             <div className="md:hidden">
//               <Hamburger />
//             </div>
//           </div>
//         </header>

//         {/* Hero content */}
//         <section className="relative flex flex-col md:flex-row justify-center gap-6 items-center md:items-end min-h-screen text-slate-950 text-center px-6 md:px-10 overflow-hidden pb-16 md:pb-0">

//           {/* Grid bg */}
//           <div className="absolute inset-0 pointer-events-none" style={{
//             backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
//             backgroundSize: "60px 60px"
//           }} />

//           {/* LEFT PANEL */}
//           <motion.div
//             className="w-full md:w-1/3 flex flex-col justify-center items-center md:items-start space-y-5 pt-10 md:pt-0 md:pb-16 z-10 order-2 md:order-1"
//             variants={fadeLeft}
//             initial="hidden"
//             animate="visible"
//           >
//             <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5B0F12] flex items-center gap-2">
//               <span className="w-6 h-px bg-[#5B0F12] block" /> Welcome
//             </span>
//             <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-center md:text-left" style={{ fontFamily: 'Georgia, serif' }}>
//               Empowering your<br />
//               <em className="text-slate-950">Day to Day</em><br />
//               Banking
//             </h1>
//             <p className="text-sm text-slate-950 leading-relaxed text-center md:text-left max-w-xs font-light">
//               Simple and secure personal banking available in person, online, or on your device.
//             </p>
//             <Link
//               to="/register"
//               className="flex items-center gap-2.5 bg-[#5B0F12] hover:bg-[#7a1519] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 transition-all rounded-sm"
//             >
//               Open Account <span>→</span>
//             </Link>
//           </motion.div>

//           {/* CENTER IMAGE */}
//           <motion.div
//             style={{ backgroundImage: `url(${woman})` }}
//             className="w-48 h-64 sm:w-56 sm:h-80 md:w-64 md:h-96 lg:w-1/4 lg:h-[90vh] rounded-t-full bg-cover bg-no-repeat bg-center z-10 border border-white/10 shadow-[0_0_60px_rgba(91,15,18,0.2)] order-1 md:order-2 flex-shrink-0 mt-8 md:mt-0"
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//           />

//           {/* RIGHT PANEL */}
//           <motion.div
//             className="w-full ml-20 md:w-1/3 flex flex-row md:flex-col justify-center gap-8 md:gap-0 md:justify-center items-center md:items-start md:space-y-5 md:pb-16 z-10 order-3"
//             variants={fadeRight}
//             initial="hidden"
//             animate="visible"
//           >
//             <div className="flex flex-col gap-1 items-center md:items-start">
//               <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
//                 13<span className="text-[#5B0F12]">M</span>
//               </h2>
//               <p className="text-xs text-slate-950 leading-relaxed max-w-[160px] text-center md:text-left">
//                 Customers trust us worldwide with their everyday banking needs
//               </p>
//             </div>
//             <div className="hidden md:block w-10 h-px bg-white/15" />
//             <div className="flex flex-col gap-1 items-center md:items-start">
//               <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
//                 <span className="text-[#5B0F12]">0</span>%
//               </h2>
//               <p className="text-xs text-slate-950 leading-relaxed max-w-[160px] text-center md:text-left">
//                 We believe you should keep more of what you earn — zero commission
//               </p>
//             </div>
//           </motion.div>

//         </section>
//       </div>

//       {/* ── SCROLL TICKER ── */}
//       <div className="relative overflow-hidden py-2 bg-[#0a0a0a] border-t border-white/8">
//         <div className="flex animate-scroll whitespace-nowrap">
//           {[...Array(8)].map((_, i) => (
//             <span key={i} className="inline-flex items-center gap-4 px-6 text-[10px] font-bold tracking-[0.18em] uppercase text-white/35">
//               <span className="w-1 h-1 bg-[#5B0F12] rounded-full flex-shrink-0" />
//               {text}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* ── SECTION 2: MOBILE BANKING ── */}
//       <section className="flex flex-co lg:flex-row items-center gap-10 lg:gap-12 px-6 sm:px-10 lg:px-16 py-16 md:py-24 bg-slate-100 overflow-hidden">

//         {/* Left: headline + copy */}
//         <motion.div
//           className="w-full lg:flex-1 flex flex-col gap-6 items-center lg:items-start text-center lg:text-left"
//           variants={slideLeft}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <span className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#5B0F12]">
//             <span className="w-5 h-px bg-[#5B0F12] block" /> Mobile App
//           </span>
//           <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-950" style={{ fontFamily: 'Georgia, serif' }}>
//             Bank anywhere,<br />
//             <em className="font-bold italic text-slate-950">anytime</em><br />
//             with our app
//           </h2>
//           <p className="text-sm text-slate-950 leading-relaxed font-light max-w-sm">
//             Install Remedy Grand Chase Bank on your phone for instant access to your accounts, transfers, bill payments, and more.
//           </p>
//           <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
//             <Link
//               to="/download/ios"
//               className="flex items-center gap-2 px-4 py-2.5 border border-slate-950 rounded-lg text-xs font-medium text-slate-950 bg-white/5 hover:bg-[#5B0F12]/30 hover:border-[#5B0F12]/60 transition-all"
//             >
//                App Store
//             </Link>
//             <Link
//               to="/download/android"
//               className="flex items-center gap-2 px-4 py-2.5 border border-slate-950 rounded-lg text-xs font-medium text-slate-950 bg-white/5 hover:bg-[#5B0F12]/30 hover:border-[#5B0F12]/60 transition-all"
//             >
//               ▶ Google Play
//             </Link>
//           </div>
//         </motion.div>

//         {/* Middle: feature cards */}
//         <motion.div
//           className="w-full lg:flex-1 flex flex-col gap-3"
//           variants={slideLeftDelay}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           {[
//             { title: "Instant transfers",     sub: "Send money locally or internationally in seconds" },
//             { title: "Bill payments",         sub: "Schedule and automate your monthly bills" },
//             { title: "Live balance tracking", sub: "Real-time view of all your accounts and activity" },
//           ].map((f) => (
//             <div
//               key={f.title}
//               className="flex items-start gap-3 p-4 border border-slate-950 rounded-xl bg-white/[0.03] hover:border-[#5B0F12]/50 hover:bg-[#5B0F12]/8 transition-all"
//             >
//               <div className="w-8 h-8 rounded-lg bg-[#5B0F12] flex items-center justify-center flex-shrink-0">
//                 <span className="text-white/90 text-xs">✦</span>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-slate-950 mb-0.5">{f.title}</p>
//                 <p className="text-xs text-slate-950 leading-relaxed">{f.sub}</p>
//               </div>
//             </div>
//           ))}
//         </motion.div>

//         {/* Right: phone mockup — hidden on small, visible md+ */}
//         <motion.div
//           className="hidden md:flex flex-none justify-center"
//           variants={slideUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <div className="relative w-44">
//             <div className="w-44 h-[365px] rounded-[32px] border border-white/10 bg-[#0d0d0d] p-3 flex flex-col gap-2">
//               <div className="w-10 h-1.5 bg-white/8 rounded-full mx-auto mb-1" />
//               <div className="bg-[#0a0a14] rounded-[22px] flex-1 p-3.5 flex flex-col gap-2.5 overflow-hidden">
//                 <p className="text-[9px] text-white/40">Good morning, Alex</p>
//                 <div>
//                   <p className="text-[8px] text-white/30 uppercase tracking-widest">Total balance</p>
//                   <p className="text-2xl font-black text-white tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>$24,830</p>
//                 </div>
//                 <div className="flex gap-1.5">
//                   {['Send', 'Pay', 'Top up'].map(a => (
//                     <div key={a} className="flex-1 bg-white/5 rounded-lg p-1.5 flex flex-col items-center gap-1 text-[7px] text-white/50">
//                       <div className="w-4 h-4 rounded-full bg-[#5B0F12]/40 border border-[#5B0F12]/70" />
//                       {a}
//                     </div>
//                   ))}
//                 </div>
//                 <div className="h-px bg-white/7" />
//                 <p className="text-[7px] text-white/30 uppercase tracking-widest">Recent</p>
//                 {[['Netflix', '-$15.99', false], ['Salary', '+$3,200', true], ['Amazon', '-$89.00', false]].map(([name, amt, pos]) => (
//                   <div key={name} className="flex justify-between items-center py-0.5">
//                     <span className="text-[8px] text-white/65">{name}</span>
//                     <span className={`text-[8px] font-medium ${pos ? 'text-green-400' : 'text-[#a04045]'}`}>{amt}</span>
//                   </div>
//                 ))}
//                 <div className="mt-auto h-9 rounded-lg bg-[#5B0F12] flex items-center px-2.5 justify-between">
//                   <div className="w-3.5 h-2.5 bg-white/25 rounded-sm" />
//                   <span className="text-[7px] text-white/70 tracking-widest">•••• 4821</span>
//                 </div>
//               </div>
//             </div>
//             {/* Floating badge */}
//             <div className="absolute bottom-10 -right-5 bg-[#111] border border-white/12 rounded-xl px-3 py-2 flex items-center gap-2 min-w-[130px]">
//               <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
//               <div>
//                 <p className="text-[10px] font-medium text-white">Transfer sent</p>
//                 <p className="text-[9px] text-white/40">$250 → John D.</p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//       </section>

//       {/* ── SECTION 3: ABOUT US ── */}
// <section className="bg-black px-6 sm:px-10 lg:px-16 py-20 md:py-28 overflow-hidden">

//   {/* Header row */}
//   <motion.div
//     className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16 mb-16 md:mb-20"
//     variants={fadeLeft}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.3 }}
//   >
//     {/* Left: headline */}
//     <div className="flex-1">
//       <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#5B0F12] mb-5">
//         <span className="w-5 h-px bg-[#5B0F12] block" /> About us
//       </div>
//       <h2
//         className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white"
//         style={{ fontFamily: 'Georgia, serif' }}
//       >
//         Empowering businesses<br />
//         <em className="text-white/30">and individuals</em><br />
//         with experts
//       </h2>
//     </div>

//     {/* Right: body copy */}
//     <div className="flex-1 flex flex-col gap-4 md:pt-1">
//       <p className="text-sm text-white/45 leading-relaxed font-light">
//         We are dedicated to helping businesses and individuals navigate the complexities of finance with confidence and clarity.
//       </p>
//       <p className="text-sm text-white/45 leading-relaxed font-light">
//         With years of experience in financial planning, investment management, and business consulting — we deliver strategies that actually work.
//       </p>
//       <div className="w-10 h-px bg-white/10 my-1" />
//       <Link
//         to="/about"
//         className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.12em] uppercase text-[#5B0F12] hover:gap-3 transition-all w-fit"
//       >
//         Learn more about us →
//       </Link>
//     </div>
//   </motion.div>

//   {/* Cards grid */}
//   <motion.div
//     className="grid grid-cols-1 md:grid-cols-3 border border-red rounded-2xl overflow-hidden"
//     style={{ background: 'rgba(255,255,255,0.06)', gap: '1px' }}
//     variants={slideUp}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.2 }}
//   >
//     {[
//       {
//         num: '01',
//         title: 'Expertise you can trust',
//         body: 'Our experienced team delivers reliable insights and strategies, ensuring your financial decisions are well-informed and secure.',
//         icon: (
//           <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//           </svg>
//         ),
//       },
//       {
//         num: '02',
//         title: 'Decades of experience',
//         body: 'We bring years of hands-on experience across markets, giving you the strategic edge needed to navigate today\'s financial landscape.',
//         icon: (
//           <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
//             <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
//           </svg>
//         ),
//       },
//       {
//         num: '03',
//         title: 'Client-first approach',
//         body: 'Every solution we provide is tailored to your unique needs — we listen first, then build strategies designed around your goals.',
//         icon: (
//           <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
//           </svg>
//         ),
//       },
//     ].map((card) => (
//       <div
//         key={card.num}
//         className="bg-black hover:bg-[#0d0d0d] transition-colors p-8 flex flex-col gap-4"
//       >
//         <span className="text-[11px] font-bold tracking-[0.15em] text-white/20" style={{ fontFamily: 'Georgia, serif' }}>
//           {card.num}
//         </span>
//         <div className="w-11 h-11 rounded-xl bg-[#5B0F12] flex items-center justify-center flex-shrink-0">
//           {card.icon}
//         </div>
//         <h3 className="text-lg font-black text-white leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
//           {card.title}
//         </h3>
//         <p className="text-xs text-white/40 leading-relaxed font-light">{card.body}</p>
//         <div className="w-8 h-px bg-[#5B0F12] mt-auto pt-4" />
//       </div>
//     ))}
//   </motion.div>

//   {/* Bottom stats strip */}
//   <motion.div
//     className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-14 pt-8 border-t border-white/[0.07]"
//     variants={fadeUp}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.3 }}
//   >
//     {[
//       { num: '25', suffix: '+', label: 'Years in business' },
//       { num: '13', suffix: 'M', label: 'Clients worldwide' },
//       { num: '98', suffix: '%', label: 'Client satisfaction' },
//     ].map((stat, i) => (
//       <div key={i} className="flex items-center gap-6 sm:gap-10">
//         <div className="flex flex-col gap-1 items-center sm:items-start">
//           <div className="text-3xl md:text-4xl font-black text-white tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
//             {stat.num}<span className="text-[#5B0F12]">{stat.suffix}</span>
//           </div>
//           <div className="text-[10px] text-white/35 tracking-[0.1em] uppercase">{stat.label}</div>
//         </div>
//         {i < 2 && <div className="hidden sm:block w-px h-12 bg-white/[0.08]" />}
//       </div>
//     ))}

//     <Link
//       to="/register"
//       className="flex items-center gap-3 bg-[#5B0F12] hover:bg-[#7a1519] text-white text-xs font-semibold tracking-widest uppercase px-7 py-3.5 rounded-sm transition-all"
//     >
//       Get started →
//     </Link>
//   </motion.div>

// </section>


// {/* ── SECTION 4: OUR SERVICES ── */}
// <section className="bg-black px-6 sm:px-10 lg:px-16 py-20 md:py-28 overflow-hidden">

//   {/* Header row */}
//   <motion.div
//     className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16 mb-16 md:mb-20"
//     variants={fadeLeft}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.3 }}
//   >
//     {/* Left: headline */}
//     <div className="flex-1">
//       <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#5B0F12] mb-5">
//         <span className="w-5 h-px bg-[#5B0F12] block" /> Our Services
//       </div>
//       <h2
//         className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white"
//         style={{ fontFamily: 'Georgia, serif' }}
//       >
//         Expert financial<br />
//         services for<br />
//         <em className="text-white/30">your needs</em>
//       </h2>
//     </div>

//     {/* Right: body copy */}
//     <div className="flex-1 flex flex-col gap-4 md:pt-1">
//       <p className="text-sm text-white/45 leading-relaxed font-light max-w-md">
//         Move funds between your accounts and schedule transfers with ease. View all your account activity and balances, pay bills automatically, set up alerts, and more.
//       </p>
//       <div className="w-10 h-px bg-white/50" />
//     </div>
//   </motion.div>

//   {/* Cards grid */}
//   <motion.div
//     className="grid grid-cols-1 md:grid-cols-3 border border-white/[50] rounded-2xl overflow-hidden"
//     style={{ background: 'rgba(255,255,255,0.06)', gap: '1px' }}
//     variants={slideUp}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.2 }}
//   >
//     {[
//       {
//         num: '01',
//         title: 'Expertise you can trust',
//         body: 'Our experienced team delivers reliable insights and strategies, ensuring your financial decisions are well-informed and secure.',
//         icon: (
//           <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//           </svg>
//         ),
//       },
//       {
//         num: '02',
//         title: 'Seamless transfers',
//         body: 'Send money locally or internationally in seconds. Schedule one-time or recurring transfers across all your linked accounts.',
//         icon: (
//           <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
//             <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>
//           </svg>
//         ),
//       },
//       {
//         num: '03',
//         title: 'Client-first approach',
//         body: 'Every solution we provide is tailored to your unique needs — we listen first, then build strategies designed around your goals.',
//         icon: (
//           <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
//             <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
//           </svg>
//         ),
//       },
//     ].map((card) => (
//       <div
//         key={card.num}
//         className="bg-black hover:bg-[#0d0d0d] transition-colors p-8 flex flex-col gap-4"
//       >
//         <span className="text-[11px] font-bold tracking-[0.15em] text-white/20" style={{ fontFamily: 'Georgia, serif' }}>
//           {card.num}
//         </span>
//         <div className="w-11 h-11 rounded-xl bg-[#5B0F12] flex items-center justify-center flex-shrink-0">
//           {card.icon}
//         </div>
//         <h3 className="text-lg font-black text-white leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
//           {card.title}
//         </h3>
//         <p className="text-xs text-white/40 leading-relaxed font-light">{card.body}</p>
//         <div className="w-8 h-px bg-[#5B0F12] mt-auto pt-4" />
//       </div>
//     ))}
//   </motion.div>

// </section>




// {/* ── SECTION 5: OUR EXPERTISE ── */}
// <section className="bg-black px-6 sm:px-10 lg:px-16 py-20 md:py-28 overflow-hidden">

//   {/* Header row */}
//   <motion.div
//     className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16 mb-14"
//     variants={fadeLeft}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.3 }}
//   >
//     <div className="flex-1">
//       <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#5B0F12] mb-5">
//         <span className="w-5 h-px bg-[#5B0F12] block" /> Our Expertise
//       </div>
//       <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white" style={{ fontFamily: 'Georgia, serif' }}>
//         Driving innovation<br />
//         and success in<br />
//         <em className="text-white/30">industry insights</em>
//       </h2>
//     </div>
//     <div className="flex-1 flex flex-col gap-4 md:pt-1">
//       <p className="text-sm text-white/45 leading-relaxed font-light max-w-md">
//         Remedy Grand Chase Bank Savings Invent is our enterprise approach to innovation and supports our business strategy as a forward-focused bank. It's about using emerging technology to engage with our customers and exceeding their rapidly evolving expectations.
//       </p>
//       <div className="w-10 h-px bg-white/10" />
//     </div>
//   </motion.div>

//   {/* Tabs */}
//   <motion.div
//     className="flex border border-white/[0.08] rounded-lg overflow-hidden mb-8"
//     variants={slideLeft}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.3 }}
//   >
//     {['Financial Planning', 'Business Consulting', 'Risk Management', 'Invest Management'].map((tab, i) => (
//       <button
//         key={tab}
//         className={`flex-1 py-2.5 text-[11px] font-semibold tracking-[0.12em] uppercase transition-all border-r border-white/[0.08] last:border-r-0
//           ${i === 0 ? 'bg-[#5B0F12] text-white' : 'text-white/35 hover:text-white/65 hover:bg-white/[0.04]'}`}
//       >
//         {tab}
//       </button>
//     ))}
//   </motion.div>

//   {/* Bottom grid */}
//   <motion.div
//     className="grid grid-cols-1 md:grid-cols-2 gap-4"
//     variants={slideUp}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.2 }}
//   >
//     {/* Left: benefit card */}
//     <div className="border border-[#5B0F12] rounded-2xl bg-[#0a0a0a] hover:border-[#5B0F12]/45 hover:bg-[#5B0F12]/5 transition-all p-8 flex flex-col gap-4">
//       <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#5B0F12]">✦ &nbsp; Key benefits</span>
//       <h3 className="text-2xl font-black text-white leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
//         Benefits of our<br />financial planning
//       </h3>
//       <p className="text-xs text-white/38 leading-relaxed font-light">
//         Empower your financial journey with expert advice, personalized strategies, and solutions designed to help you achieve long-term stability and growth.
//       </p>
//       <div className="flex flex-col gap-2.5 mt-1">
//         {[
//           'Tailored investment strategies for every life stage',
//           'Tax-optimized savings and retirement planning',
//           'Real-time portfolio monitoring and rebalancing',
//           'Dedicated financial advisor on demand',
//         ].map((item) => (
//           <div key={item} className="flex items-start gap-2.5 text-xs text-white/50 leading-relaxed">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#5B0F12] flex-shrink-0 mt-1" />
//             {item}
//           </div>
//         ))}
//       </div>
//       <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#5B0F12] mt-2">
//         Explore planning tools →
//       </div>
//     </div>

//     {/* Right: stats card */}
//     <div className="border border-[#5B0F12] rounded-2xl bg-[#0d0d0d] overflow-hidden flex flex-col justify-between min-h-[340px] relative">
//       {/* Grid bg */}
//       <div className="absolute inset-0 pointer-events-none" style={{
//         backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
//         backgroundSize: "40px 40px"
//       }} />
//       {/* Bar stats */}
//       <div className="relative z-10 p-7 flex flex-col gap-3">
//         {[
//           { label: 'Portfolio growth', pct: 82 },
//           { label: 'Client retention',  pct: 98 },
//           { label: 'Risk coverage',     pct: 74 },
//           { label: 'ROI average',       pct: 67 },
//         ].map(({ label, pct }) => (
//           <div key={label} className="flex items-center gap-3">
//             <span className="text-[10px] text-white/30 w-28 flex-shrink-0">{label}</span>
//             <div className="flex-1 h-0.5 bg-white/[0.06] rounded-full overflow-hidden">
//               <div className="h-full bg-[#5B0F12] rounded-full" style={{ width: `${pct}%` }} />
//             </div>
//             <span className="text-[10px] text-white/30 w-7 text-right">{pct}%</span>
//           </div>
//         ))}
//       </div>
//       {/* Bottom stat */}
//       <div className="relative z-10 p-7 border-t border-white/[0.06] bg-black/60 flex flex-col gap-1">
//         <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/30">Assets under management</span>
//         <div className="text-4xl font-black tracking-tight text-white" style={{ fontFamily: 'Georgia, serif' }}>
//           $4.2<span className="text-[#5B0F12]">B</span>
//         </div>
//         <span className="text-[11px] text-white/35">Across 13M+ client portfolios worldwide</span>
//       </div>
//     </div>

//   </motion.div>

// </section>





// {/* ── SECTION 6: WHY CHOOSE US ── */}
// <section className="bg-black px-6 sm:px-10 lg:px-16 py-20 md:py-28 overflow-hidden">

//   {/* Header row */}
//   <motion.div
//     className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16 mb-14"
//     variants={fadeLeft}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.3 }}
//   >
//     <div className="flex-1">
//       <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#5B0F12] mb-5">
//         <span className="w-5 h-px bg-[#5B0F12] block" /> Why Choose Us
//       </div>
//       <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white" style={{ fontFamily: 'Georgia, serif' }}>
//         Expertise and<br />
//         client-focused<br />
//         <em className="text-white/30">solutions for you</em>
//       </h2>
//     </div>
//     <div className="flex-1 flex flex-col gap-4 md:pt-1">
//       <p className="text-sm text-white/45 leading-relaxed font-light max-w-md">
//         Our team of experienced professionals delivers personalized, results-driven financial strategies tailored to your unique goals. We prioritize transparency, trust, and long-term success.
//       </p>
//       <div className="w-10 h-px bg-white/50" />
//     </div>
//   </motion.div>

//   {/* Cards */}
//   <motion.div
//     className="grid grid-cols-1 md:grid-cols-3 gap-4"
//     variants={slideUp}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.2 }}
//   >
//     {[
//       {
//         num: '01',
//         tag: 'Proven track record',
//         title: 'Consistent returns, year after year',
//         body: 'Data-driven strategies that outperform market benchmarks through disciplined, research-backed investment decisions.',
//         icon: (
//           <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white/90 fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//           </svg>
//         ),
//         visual: (
//           <div className="absolute left-7 right-7 top-[72px] flex flex-col gap-3">
//             <div className="flex items-end gap-1.5 h-16">
//               {[30, 45, 38, 60, 50, 72, 88, 100].map((h, i) => (
//                 <div key={i} className={`flex-1 rounded-t-sm ${i >= 6 ? 'bg-[#5B0F12]' : 'bg-[#5B0F12]/35'}`} style={{ height: `${h}%` }} />
//               ))}
//             </div>
//             <p className="text-[9px] text-white/22 tracking-[0.08em] uppercase">YOY Portfolio Growth</p>
//             <p className="text-3xl font-black text-white" style={{ fontFamily: 'Georgia, serif' }}>+34<span className="text-[#5B0F12]">%</span></p>
//           </div>
//         ),
//       },
//       {
//         num: '02',
//         tag: 'Trust & security',
//         title: 'Your assets, fully protected',
//         body: 'Enterprise-grade security and regulatory compliance — your funds and data are safeguarded at every level.',
//         icon: (
//           <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white/90 fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
//           </svg>
//         ),
//         visual: (
//           <div className="absolute left-1/2 -translate-x-1/2 top-[72px] flex flex-col items-center gap-3 w-full">
//             <div className="w-20 h-20 rounded-full border border-[#5B0F12]/50 flex items-center justify-center">
//               <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-[#5B0F12]" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
//               </svg>
//             </div>
//             <p className="text-3xl font-black text-white" style={{ fontFamily: 'Georgia, serif' }}>98<span className="text-[#5B0F12]">%</span></p>
//             <p className="text-[10px] text-white/28 text-center max-w-[120px] leading-relaxed">Client satisfaction rate across all service tiers</p>
//           </div>
//         ),
//       },
//       {
//         num: '03',
//         tag: 'Client first',
//         title: 'Advisors who truly listen',
//         body: 'Personalized guidance from dedicated experts who understand your goals and build strategies around your life, not templates.',
//         icon: (
//           <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white/90 fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
//             <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
//           </svg>
//         ),
//         visual: (
//           <div className="absolute left-7 right-7 top-[72px] flex flex-col gap-2.5">
//             {[['Response time', 92], ['Issue resolution', 96], ['Advisor rating', 99], ['Plan accuracy', 88]].map(([label, pct]) => (
//               <div key={label} className="flex items-center gap-2.5">
//                 <span className="text-[9px] text-white/22 w-24 flex-shrink-0 tracking-[0.04em]">{label}</span>
//                 <div className="flex-1 h-px bg-white/[0.05] rounded-full overflow-hidden">
//                   <div className="h-full bg-[#5B0F12] rounded-full" style={{ width: `${pct}%` }} />
//                 </div>
//                 <span className="text-[9px] text-white/22 w-6 text-right">{pct}%</span>
//               </div>
//             ))}
//           </div>
//         ),
//       },
//     ].map((card) => (
//       <div
//         key={card.num}
//         className="relative rounded-2xl overflow-hidden border border-[#5B0F12] hover:border-[#5B0F12]/45 transition-all min-h-[420px] flex flex-col justify-end group"
//       >
//         {/* Grid bg */}
//         <div className="absolute inset-0 pointer-events-none" style={{
//           backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
//           backgroundSize: "44px 44px"
//         }} />
//         {/* Icon */}
//         <div className="absolute top-7 left-7 w-12 h-12 rounded-[14px] bg-[#5B0F12] flex items-center justify-center z-10">
//           {card.icon}
//         </div>
//         {/* Card number */}
//         <span className="absolute top-8 right-7 text-[11px] font-bold tracking-[0.15em] text-white/15 z-10" style={{ fontFamily: 'Georgia, serif' }}>{card.num}</span>
//         {/* Visual */}
//         <div className="absolute inset-0">{card.visual}</div>
//         {/* Overlay */}
//         <div className="relative z-10 p-7 border-t border-white/[0.06] bg-black/75 group-hover:bg-[#5B0F12]/18 group-hover:border-[#5B0F12]/35 transition-all flex flex-col gap-2.5">
//           <div className="flex items-center gap-1.5">
//             <span className="w-1 h-1 rounded-full bg-[#5B0F12]" />
//             <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-[#5B0F12]">{card.tag}</span>
//           </div>
//           <h3 className="text-[19px] font-black text-white leading-snug" style={{ fontFamily: 'Georgia, serif' }}>{card.title}</h3>
//           <p className="text-xs text-white/40 leading-relaxed font-light">{card.body}</p>
//           <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#5B0F12] mt-1">Learn more →</span>
//         </div>
//       </div>
//     ))}
//   </motion.div>

// </section>


// {/* ── SECTION 7: OUR APPROACH ── */}
// <section className="bg-black px-6 sm:px-10 lg:px-16 py-20 md:py-28 overflow-hidden">

//   {/* Header row */}
//   <motion.div
//     className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16 mb-14"
//     variants={fadeLeft}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.3 }}
//   >
//     <div className="flex-1">
//       <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#5B0F12] mb-5">
//         <span className="w-5 h-px bg-[#5B0F12] block" /> Our Approach
//       </div>
//       <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white" style={{ fontFamily: 'Georgia, serif' }}>
//         Client-centric strategy<br />
//         for <em className="text-white/30">lasting success</em>
//       </h2>
//     </div>
//     <div className="flex-1 flex flex-col gap-4 md:pt-1">
//       <p className="text-sm text-white/45 leading-relaxed font-light max-w-md">
//         We believe that a successful financial journey starts with understanding your unique needs and aspirations. Our approach is built on a foundation of collaboration, transparency, and expertise.
//       </p>
//       <div className="w-10 h-px bg-white/10" />
//     </div>
//   </motion.div>

//   {/* Step cards */}
//   <motion.div
//     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
//     variants={slideUp}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.2 }}
//   >
//     {[
//       {
//         step: '01', label: 'Step one', tag: 'Discovery',
//         title: 'Understanding your goals',
//         body: 'We start by listening — deeply understanding your financial situation, life goals, and risk tolerance before recommending anything.',
//         icon: (
//           <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white/90 fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
//           </svg>
//         ),
//       },
//       {
//         step: '02', label: 'Step two', tag: 'Planning',
//         title: 'Building your custom plan',
//         body: 'Our advisors craft a tailored financial roadmap aligned with your objectives — from wealth building to retirement and beyond.',
//         icon: (
//           <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white/90 fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
//           </svg>
//         ),
//       },
//       {
//         step: '03', label: 'Step three', tag: 'Execution',
//         title: 'Putting the plan to work',
//         body: 'We implement your strategy with precision — deploying capital, managing risk, and activating the right financial instruments at the right time.',
//         icon: (
//           <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white/90 fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
//             <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
//           </svg>
//         ),
//       },
//       {
//         step: '04', label: 'Step four', tag: 'Review',
//         title: 'Ongoing support & growth',
//         body: 'Financial success is a journey. We continuously review, rebalance, and refine your plan as your life and the markets evolve.',
//         icon: (
//           <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white/90 fill-none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
//           </svg>
//         ),
//       },
//     ].map((card) => (
//       <div
//         key={card.step}
//         className="relative rounded-[18px] border border-[#5B0F12] bg-[#0a0a0a] hover:border-[#5B0F12]/45 hover:bg-[#5B0F12]/5 transition-all p-7 flex flex-col gap-0 overflow-hidden min-h-[360px] group"
//       >
//         {/* Grid bg */}
//         <div className="absolute inset-0 pointer-events-none" style={{
//           backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
//           backgroundSize: "36px 36px"
//         }} />
//         {/* Step number watermark */}
//         <div className="text-[56px] font-black leading-none tracking-[-0.04em] text-[#5B0F12]/18 group-hover:text-[#5B0F12]/32 transition-colors mb-5" style={{ fontFamily: 'Georgia, serif' }}>
//           {card.step}
//         </div>
//         {/* Icon */}
//         <div className="w-[42px] h-[42px] rounded-xl bg-[#5B0F12] flex items-center justify-center mb-4 flex-shrink-0 z-10">
//           {card.icon}
//         </div>
//         {/* Tag */}
//         <div className="flex items-center gap-1.5 mb-2.5 z-10">
//           <span className="w-[3px] h-[3px] rounded-full bg-[#5B0F12]" />
//           <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-[#5B0F12]">{card.tag}</span>
//         </div>
//         {/* Title */}
//         <h3 className="text-base font-black text-white leading-snug mb-3 z-10" style={{ fontFamily: 'Georgia, serif' }}>{card.title}</h3>
//         {/* Body */}
//         <p className="text-[11.5px] text-white/37 leading-relaxed font-light flex-1 z-10">{card.body}</p>
//         {/* Footer */}
//         <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center justify-between z-10">
//           <span className="text-[9px] font-bold tracking-[0.12em] uppercase text-white/20">{card.label}</span>
//           <div className="w-[26px] h-[26px] rounded-full border border-[#5B0F12]/40 flex items-center justify-center group-hover:bg-[#5B0F12] group-hover:border-[#5B0F12] transition-all">
//             <svg viewBox="0 0 12 12" className="w-3 h-3 fill-none stroke-[#5B0F12] group-hover:stroke-white transition-colors" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M2 6h8M6 2l4 4-4 4"/>
//             </svg>
//           </div>
//         </div>
//       </div>
//     ))}
//   </motion.div>

// </section>




// {/* ── SECTION 8: FINANCIAL WISDOM ── */}
// <section className="bg-black px-6 sm:px-10 lg:px-16 py-20 md:py-28 overflow-hidden">

//   {/* Header row */}
//   <motion.div
//     className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16 mb-12"
//     variants={fadeLeft}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.3 }}
//   >
//     <div className="flex-1">
//       <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#5B0F12] mb-5">
//         <span className="w-5 h-px bg-[#5B0F12] block" /> Financial Wisdom
//       </div>
//       <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white" style={{ fontFamily: 'Georgia, serif' }}>
//         Fascinating facts that<br />
//         shape your <em className="text-white/30">financial<br />knowledge</em>
//       </h2>
//     </div>
//     <div className="flex-1 flex flex-col gap-4 md:pt-1">
//       <p className="text-sm text-white/45 leading-relaxed font-light max-w-md">
//         Explore fun and surprising facts about the financial world. Learn how history, trends, and innovations have shaped today's finance landscape, making it easier to navigate your financial journey.
//       </p>
//       <div className="w-10 h-px bg-white/10" />
//     </div>
//   </motion.div>

//   {/* Grid */}
//   <motion.div
//     className="flex flex-col gap-2.5"
//     variants={slideUp}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.15 }}
//   >
//     {/* Row 1 — four equal cards */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
//       {[
//         {
//           stat: '$100', suffix: 'T', label: 'Global financial assets', tag: 'Markets',
//           body: 'The total value of global financial assets surpassed $100 trillion, reflecting decades of compounding market growth.',
//           icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
//         },
//         {
//           stat: '1694', suffix: '', label: 'Year of the first central bank', tag: 'History',
//           body: 'The Bank of England, founded in 1694, became the world\'s first central bank and model for modern monetary systems.',
//           icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>,
//         },
//         {
//           stat: '72', suffix: 'hr', label: 'Rule of 72 for doubling', tag: 'Investing',
//           body: 'Divide 72 by your annual return to know how many years it takes to double your investment — a classic compounding shortcut.',
//           icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
//         },
//         {
//           stat: '8', suffix: 'th', label: 'Compound interest wonder', tag: 'Insight',
//           body: 'Einstein reportedly called compound interest the "eighth wonder of the world" — those who understand it, earn it.',
//           icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
//         },
//       ].map((card) => (
//         <FactCard key={card.label} {...card} />
//       ))}
//     </div>

//     {/* Row 2 — wide + two equal */}
//     <div className="grid grid-cols-1 lg:grid-cols-4 gap-2.5">
//       {/* Wide card */}
//       <div className="lg:col-span-2 relative rounded-2xl border border-white/[0.9] bg-[#0a0a0a] hover:border-[#5B0F12]/45 hover:bg-[#5B0F12]/5 transition-all p-6 overflow-hidden group">
//         <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
//         <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#5B0F12] opacity-0 group-hover:opacity-100 transition-opacity" />
//         <div className="flex gap-6 items-start">
//           <div className="flex-1 flex flex-col gap-3.5">
//             <div className="w-9 h-9 rounded-[10px] bg-[#5B0F12]/25 border border-[#5B0F12]/40 group-hover:bg-[#5B0F12] group-hover:border-[#5B0F12] flex items-center justify-center transition-all">
//               <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-[#a04045] group-hover:stroke-white/90 transition-colors" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
//             </div>
//             <div className="text-3xl font-black text-white" style={{ fontFamily: 'Georgia, serif' }}>4<span className="text-[#5B0F12]">%</span></div>
//             <p className="text-[13px] font-black text-white" style={{ fontFamily: 'Georgia, serif' }}>The safe withdrawal rule</p>
//             <p className="text-[11px] text-white/35 leading-relaxed font-light">The 4% rule suggests retirees can withdraw 4% of savings annually without running out of money over a 30-year period.</p>
//             <div className="flex items-center gap-1.5">
//               <span className="w-[3px] h-[3px] rounded-full bg-[#5B0F12]" />
//               <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-[#5B0F12]/80">Retirement</span>
//             </div>
//           </div>
//           <div className="flex-1 flex flex-col gap-2 pt-0.5">
//             <p className="text-[9px] text-white/22 tracking-[0.1em] uppercase mb-1">Allocation breakdown</p>
//             {[['Equities', 60], ['Bonds', 30], ['Cash', 10], ['Withdrawal', 4]].map(([label, pct]) => (
//               <div key={label} className="flex items-center gap-2">
//                 <span className="text-[9px] text-white/25 w-20 flex-shrink-0">{label}</span>
//                 <div className="flex-1 h-px bg-white/[0.05] rounded-full overflow-hidden">
//                   <div className="h-full bg-[#5B0F12]" style={{ width: `${pct}%` }} />
//                 </div>
//                 <span className="text-[9px] text-white/22 w-6 text-right">{pct}%</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Two normal cards */}
//       {[
//         {
//           stat: '1.7', suffix: 'B', label: 'Unbanked adults worldwide', tag: 'Inclusion',
//           body: 'Over 1.7 billion adults globally still lack access to a bank account, highlighting the role of fintech in financial inclusion.',
//           icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
//         },
//         {
//           stat: 'S&P', suffix: '', label: '10.5% avg annual return', tag: 'Performance',
//           body: 'The S&P 500 has delivered an average annual return of ~10.5% since 1957 — making long-term investing one of the most reliable wealth builders.',
//           icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
//         },
//       ].map((card) => (
//         <FactCard key={card.label} {...card} />
//       ))}
//     </div>
//   </motion.div>

// </section>


// {/* ── FDIC / CTA SECTION ── */}
// <section className="bg-black px-6 sm:px-10 lg:px-16 py-20 md:py-28">
//   <motion.div
//     className="relative flex flex-col md:flex-row items-stretch border border-[#5B0F12] rounded-3xl bg-[#0a0a0a] overflow-hidden"
//     variants={fadeUp}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.3 }}
//   >
//     {/* Grid bg */}
//     <div className="absolute inset-0 pointer-events-none" style={{
//       backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
//       backgroundSize: "44px 44px"
//     }} />

//     {/* LEFT: FDIC visual */}
//     <div className="flex-none md:w-72 lg:w-80 relative bg-[#0d0d0d] border-b md:border-b-0 md:border-r border-white/[0.06] flex items-center justify-center px-10 py-14">
//       <div className="flex flex-col items-center gap-5 z-10">
//         <div className="w-24 h-24 rounded-full border-2 border-[#5B0F12]/50 bg-[#5B0F12]/10 flex items-center justify-center">
//           <svg viewBox="0 0 24 24" className="w-11 h-11 fill-none stroke-[#5B0F12]" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
//           </svg>
//         </div>
//         <div className="text-3xl font-black tracking-[0.08em] text-white text-center" style={{ fontFamily: 'Georgia, serif' }}>
//           FDIC<span className="text-[#5B0F12]">.</span>
//         </div>
//         <div className="inline-flex items-center gap-1.5 bg-[#5B0F12]/15 border border-[#5B0F12]/35 rounded-full px-3 py-1.5">
//           <span className="w-1.5 h-1.5 rounded-full bg-[#5B0F12]" />
//           <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-[#5B0F12]/90">Insured</span>
//         </div>
//         <p className="text-[10px] text-white/30 text-center leading-relaxed max-w-[180px]">
//           Backed by the full faith and credit of the U.S. Government
//         </p>
//       </div>
//     </div>

//     {/* RIGHT: content */}
//     <div className="flex-1 relative z-10 flex flex-col justify-center gap-5 px-8 sm:px-12 py-14">
//       <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#5B0F12]">
//         <span className="w-5 h-px bg-[#5B0F12] block" /> Your security, guaranteed
//       </div>

//       {/* Trust badges */}
//       <div className="flex flex-wrap gap-2">
//         {[
//           { label: 'Government backed', icon: <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-[#5B0F12]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4"/><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
//           { label: '256-bit encrypted', icon: <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-[#5B0F12]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> },
//         ].map(({ label, icon }) => (
//           <div key={label} className="inline-flex items-center gap-1.5 border border-[#5B0F12]/30 rounded-md px-2.5 py-1 bg-[#5B0F12]/7">
//             {icon}
//             <span className="text-[9px] font-bold tracking-[0.1em] uppercase text-[#5B0F12]/85">{label}</span>
//           </div>
//         ))}
//       </div>

//       <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-white" style={{ fontFamily: 'Georgia, serif' }}>
//         Take control of your<br />
//         <em className="text-white/30">financial future</em> today
//       </h2>

//       <p className="text-sm text-white/45 leading-relaxed font-light max-w-lg">
//         We've made it easy for Remedy Grand Chase Bank customers to harness their financial potential, bring their goals to life, and solve everyday financial challenges with confidence.
//       </p>

//       <div className="w-8 h-px bg-white/10" />

//       {/* Stat strip */}
//       <div className="flex flex-wrap items-center gap-6">
//         {[
//           { num: '$250', suffix: 'K', label: 'FDIC coverage limit' },
//           { num: '13',   suffix: 'M', label: 'Insured clients' },
//           { num: '25',   suffix: '+', label: 'Years of trust' },
//         ].map(({ num, suffix, label }, i) => (
//           <div key={i} className="flex items-center gap-6">
//             <div className="flex flex-col gap-0.5">
//               <div className="text-xl font-black text-white tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
//                 {num}<span className="text-[#5B0F12]">{suffix}</span>
//               </div>
//               <div className="text-[9px] text-white/28 tracking-[0.08em] uppercase">{label}</div>
//             </div>
//             {i < 2 && <div className="hidden sm:block w-px h-8 bg-white/[0.07]" />}
//           </div>
//         ))}
//       </div>

//       {/* Buttons */}
//       <div className="flex flex-wrap gap-2.5 pt-1">
//         <Link
//           to="/register"
//           className="inline-flex items-center gap-2 bg-[#5B0F12] hover:bg-[#7a1519] text-white text-[11px] font-bold tracking-[0.12em] uppercase px-6 py-3 rounded-sm transition-all"
//         >
//           Get started today →
//         </Link>
//         <Link
//           to="/services"
//           className="inline-flex items-center gap-2 text-white/55 hover:text-white text-[11px] font-bold tracking-[0.12em] uppercase px-6 py-3 rounded-sm border border-white/12 hover:border-white/30 transition-all"
//         >
//           Explore our services
//         </Link>
//       </div>
//     </div>
//   </motion.div>
// </section>


// {/* ── SECTION: FAQ / CONTACT ── */}
// <section className="bg-black px-6 sm:px-10 lg:px-16 py-20 md:py-28 overflow-hidden">

//   {/* Header row */}
//   <motion.div
//     className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16 mb-12"
//     variants={fadeLeft}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.3 }}
//   >
//     <div className="flex-1">
//       <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#5B0F12] mb-5">
//         <span className="w-5 h-px bg-[#5B0F12] block" /> FAQ
//       </div>
//       <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white" style={{ fontFamily: 'Georgia, serif' }}>
//         Common business &amp;<br />
//         finance <em className="text-white/30">questions<br />answered</em>
//       </h2>
//     </div>
//     <div className="flex-1 flex flex-col gap-4 md:pt-1">
//       <p className="text-sm text-white/45 leading-relaxed font-light max-w-md">
//         Can't find what you're looking for? Our support team is available around the clock to help with any banking questions or concerns you may have.
//       </p>
//       <div className="w-10 h-px bg-white/10" />
//       <Link
//         to="/contact"
//         className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.12em] uppercase text-[#5B0F12] hover:gap-3 transition-all w-fit"
//       >
//         Contact our team →
//       </Link>
//     </div>
//   </motion.div>

//   {/* FAQ cards grid */}
//   <motion.div
//     className="grid grid-cols-1 md:grid-cols-2 gap-3"
//     variants={slideUp}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.2 }}
//   >
//     {[
//       {
//         tag: 'Mobile banking',
//         title: 'How do I register for mobile banking at Remedy Grand Chase Bank?',
//         footerTag: 'Getting started',
//         icon: (
//           <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
//             <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/><path d="M9 7h6M9 11h4"/>
//           </svg>
//         ),
//         content: (
//           <div className="flex flex-col gap-2.5">
//             {[
//               'If you are enrolled in Online Banking, use your existing username and password to log in through the Remedy Grand Chase Bank Savings app.',
//               'Android® and iPhone® users may enroll in the Mobile Deposit service to deposit checks directly using the app.',
//               'To enroll, select Mobile Deposit from the Main Menu, then review and accept the terms.',
//               'If you are not currently registered for Online Banking, you can sign up securely online.',
//             ].map((item) => (
//               <div key={item.slice(0, 20)} className="flex items-start gap-2.5">
//                 <span className="w-1.5 h-1.5 rounded-full bg-[#5B0F12] flex-shrink-0 mt-[5px]" />
//                 <span className="text-xs text-white/45 leading-relaxed font-light">{item}</span>
//               </div>
//             ))}
//           </div>
//         ),
//       },
//       {
//         tag: 'Mobile deposit',
//         title: 'How does Mobile Deposit work on the Remedy Grand Chase Bank app?',
//         footerTag: 'Deposits',
//         icon: (
//           <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
//           </svg>
//         ),
//         content: (
//           <div className="flex flex-col gap-3">
//             <p className="text-xs text-white/45 leading-relaxed font-light">
//               Our Mobile Deposit allows you to deposit a check through the Remedy Grand Chase Bank Savings mobile app using your internet-enabled iPhone® or Android™ device, provided your device has a camera.
//             </p>
//             <div className="flex flex-col gap-2.5">
//               {[
//                 'You must be an Online or Mobile banking customer and enrolled in the Mobile Deposit service.',
//                 'In the app, select "Mobile Deposit" then follow the steps to enroll or deposit a check.',
//               ].map((item) => (
//                 <div key={item.slice(0, 20)} className="flex items-start gap-2.5">
//                   <span className="w-1.5 h-1.5 rounded-full bg-[#5B0F12] flex-shrink-0 mt-[5px]" />
//                   <span className="text-xs text-white/45 leading-relaxed font-light">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ),
//       },
//     ].map((card) => (
//       <div
//         key={card.tag}
//         className="relative rounded-[18px] border border-white/[0.07] hover:border-[#5B0F12]/45 bg-[#0a0a0a] overflow-hidden flex flex-col transition-all group"
//       >
//         {/* Grid bg */}
//         <div className="absolute inset-0 pointer-events-none" style={{
//           backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
//           backgroundSize: "36px 36px"
//         }} />
//         {/* Top accent */}
//         <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#5B0F12] opacity-0 group-hover:opacity-100 transition-opacity" />

//         {/* Header */}
//         <div className="relative z-10 flex items-start gap-3.5 p-7 pb-5">
//           <div className="w-10 h-10 rounded-[11px] bg-[#5B0F12]/20 border border-[#5B0F12]/35 group-hover:bg-[#5B0F12] group-hover:border-[#5B0F12] flex items-center justify-center flex-shrink-0 transition-all text-[#a04045] group-hover:text-white/90">
//             {card.icon}
//           </div>
//           <div>
//             <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-[#5B0F12] mb-1.5">{card.tag}</p>
//             <h3 className="text-[15px] font-black text-white leading-snug" style={{ fontFamily: 'Georgia, serif' }}>{card.title}</h3>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="mx-7 h-px bg-white/[0.05]" />

//         {/* Body */}
//         <div className="relative z-10 flex flex-col gap-3 p-7 pt-5 flex-1">
//           {card.content}
//           {/* Footer */}
//           <div className="mt-auto pt-4 border-t border-white/[0.05] flex items-center justify-between">
//             <div className="flex items-center gap-1.5">
//               <span className="w-[3px] h-[3px] rounded-full bg-white/20" />
//               <span className="text-[9px] font-bold tracking-[0.12em] uppercase text-white/20">{card.footerTag}</span>
//             </div>
//             <Link to="/faq" className="text-[9px] font-bold tracking-[0.1em] uppercase text-[#5B0F12] hover:gap-2 flex items-center gap-1 transition-all">
//               Learn more →
//             </Link>
//           </div>
//         </div>
//       </div>
//     ))}
//   </motion.div>

// </section>


// //footer section

// <Footer/>





// </main>
//   );
// }

// export default Home;




















// import { useNavigate, Link } from "react-router-dom";
// import logo from '../assets/swiss.jpeg';
// import bg2 from '../assets/bg2.jpeg';
// import bg from '../assets/bg.jpg';
// import woman from '../assets/woman.png';
// import Hamburger from "./HomeComps/hamburger";


// import { motion } from "framer-motion";

// // Animation variants
// const fadeLeft = {
//   hidden: { opacity: 0, x: -60 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
// };
// const fadeRight = {
//   hidden: { opacity: 0, x: 60 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 } }
// };
// const fadeUp = {
//   hidden: { opacity: 0, y: 80 },
//   visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 } }
// };


// const slideLeft = {
//   hidden: { opacity: 0, x: -40 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
// };
// const slideLeftDelay = {
//   hidden: { opacity: 0, x: -40 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 } }
// };
// const slideUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 } }
// };










// const Home = () => {
//  const text = "SEAMLESS INFINITE SCROLL";

//     return (
// <main className="pb-32">
// {/* Top ticker bar */}
// <div className="text-xs text-center bg-white text-black py-1.5 tracking-wide px-4">
//   Experience world-class banking services with Remedy Grand Chase Bank - Your trusted international bank
// </div>

// {/* ── SECTION 1: HERO ── */}
// <div style={{ backgroundColor: "black" }} className="w-full -z-10">







//   <section className="relative flex flex-col md:flex-row justify-center gap-6 items-center md:items-end min-h-screen text-white text-center px-6 md:px-10 overflow-hidden pb-16 md:pb-0">

//     {/* Grid bg */}
//     <div className="absolute inset-0 pointer-events-none" style={{
//       backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
//       backgroundSize: "60px 60px"
//     }} />

//     {/* LEFT PANEL */}
//     <motion.div
//       className="w-full md:w-1/3 flex flex-col justify-center items-center md:items-start space-y-5 pt-16 md:pt-0 md:pb-16 z-10 order-2 md:order-1"
//       variants={fadeLeft}
//       initial="hidden"
//       animate="visible"
//     >
//       <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5B0F12] flex items-center gap-2">
//         <span className="w-6 h-px bg-[#5B0F12] block" /> Welcome
//       </span>
//       <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-center md:text-left" style={{ fontFamily: 'Georgia, serif' }}>
//         Empowering your<br />
//         <em className="text-white/40">Day to Day</em><br />
//         Banking
//       </h1>
//       <p className="text-sm text-white/55 leading-relaxed text-center md:text-left max-w-xs font-light">
//         Simple and secure personal banking available in person, online, or on your device.
//       </p>
//       <button className="flex items-center gap-2.5 bg-[#5B0F12] hover:bg-[#7a1519] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 transition-all rounded-sm">
//         Open Account <span>→</span>
//       </button>
//     </motion.div>

//     {/* CENTER IMAGE */}
// {/* CENTER IMAGE */}
// <motion.div
//   style={{ backgroundImage: `url(${woman})` }}
//   className="
//     w-48 h-64
//     sm:w-56 sm:h-80
//     md:w-64 md:h-96
//     lg:w-1/4 lg:h-[75vh]
//     rounded-t-full bg-cover bg-no-repeat bg-center
//     z-10 border border-white/10
//     shadow-[0_0_60px_rgba(91,15,18,0.2)]
//     order-1 md:order-2
//     flex-shrink-0
//   "
//   variants={fadeUp}
//   initial="hidden"
//   animate="visible"
// />

//     {/* RIGHT PANEL */}
//     <motion.div
//       className="w-full md:w-1/3 flex flex-row md:flex-col justify-center gap-8 md:gap-0 md:justify-center items-center md:items-start md:space-y-5 md:pb-16 z-10 order-3"
//       variants={fadeRight}
//       initial="hidden"
//       animate="visible"
//     >
//       <div className="flex flex-col gap-1 items-center md:items-start">
//         <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
//           13<span className="text-[#5B0F12]">M</span>
//         </h2>
//         <p className="text-xs text-white/45 leading-relaxed max-w-[160px] text-center md:text-left">
//           Customers trust us worldwide with their everyday banking needs
//         </p>
//       </div>
//       <div className="hidden md:block w-10 h-px bg-white/15" />
//       <div className="flex flex-col gap-1 items-center md:items-start">
//         <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
//           <span className="text-[#5B0F12]">0</span>%
//         </h2>
//         <p className="text-xs text-white/45 leading-relaxed max-w-[160px] text-center md:text-left">
//           We believe you should keep more of what you earn — zero commission
//         </p>
//       </div>
//     </motion.div>
//   </section>
// </div>

// {/* Scroll ticker */}
// <section>
//   <div className="relative overflow-hidden py-4 bg-[#0a0a0a] border-t border-white/8">
//     <div className="flex animate-scroll whitespace-nowrap">
//       {[...Array(8)].map((_, i) => (
//         <span key={i} className="inline-flex items-center gap-4 px-6 text-[10px] font-bold tracking-[0.18em] uppercase text-white/35">
//           <span className="w-1 h-1 bg-[#5B0F12] rounded-full flex-shrink-0" />
//           {text}
//         </span>
//       ))}
//     </div>
//   </div>
// </section>

// {/* ── SECTION 2: MOBILE BANKING ── */}
// <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 px-6 sm:px-10 lg:px-16 py-16 md:py-24 bg-black overflow-hidden">

//   {/* Left: headline + copy */}
//   <motion.div
//     className="w-full lg:flex-1 flex flex-col gap-6 items-center lg:items-start text-center lg:text-left"
//     variants={slideLeft}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.3 }}
//   >
//     <span className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#5B0F12]">
//       <span className="w-5 h-px bg-[#5B0F12] block" /> Mobile App
//     </span>
//     <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-white" style={{ fontFamily: 'Georgia, serif' }}>
//       Bank anywhere,<br />
//       <em className="font-bold italic text-white/30">anytime</em><br />
//       with our app
//     </h2>
//     <p className="text-sm text-white/45 leading-relaxed font-light max-w-sm">
//       Install Remedy Grand Chase Bank on your phone for instant access to your accounts, transfers, bill payments, and more.
//     </p>
//     <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
//       <a href="#" className="flex items-center gap-2 px-4 py-2.5 border border-white/12 rounded-lg text-xs font-medium text-white/80 bg-white/5 hover:bg-[#5B0F12]/30 hover:border-[#5B0F12]/60 transition-all">
//          App Store
//       </a>
//       <a href="#" className="flex items-center gap-2 px-4 py-2.5 border border-white/12 rounded-lg text-xs font-medium text-white/80 bg-white/5 hover:bg-[#5B0F12]/30 hover:border-[#5B0F12]/60 transition-all">
//         ▶ Google Play
//       </a>
//     </div>
//   </motion.div>

//   {/* Middle: feature cards */}
//   <motion.div
//     className="w-full lg:flex-1 flex flex-col gap-3"
//     variants={slideLeftDelay}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.3 }}
//   >
//     {[
//       { title: "Instant transfers",      sub: "Send money locally or internationally in seconds" },
//       { title: "Bill payments",          sub: "Schedule and automate your monthly bills" },
//       { title: "Live balance tracking",  sub: "Real-time view of all your accounts and activity" },
//     ].map((f) => (
//       <div
//         key={f.title}
//         className="flex items-start gap-3 p-4 border border-white/8 rounded-xl bg-white/[0.03] hover:border-[#5B0F12]/50 hover:bg-[#5B0F12]/8 transition-all"
//       >
//         <div className="w-8 h-8 rounded-lg bg-[#5B0F12] flex items-center justify-center flex-shrink-0">
//           <span className="text-white/90 text-xs">✦</span>
//         </div>
//         <div>
//           <p className="text-sm font-medium text-white mb-0.5">{f.title}</p>
//           <p className="text-xs text-white/40 leading-relaxed">{f.sub}</p>
//         </div>
//       </div>
//     ))}
//   </motion.div>

//   {/* Right: phone mockup — hidden on small screens, visible md+ */}
//   <motion.div
//     className="hidden md:flex flex-none justify-center"
//     variants={slideUp}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.3 }}
//   >
//     <div className="relative w-44">
//       <div className="w-44 h-[365px] rounded-[32px] border border-white/10 bg-[#0d0d0d] p-3 flex flex-col gap-2">
//         <div className="w-10 h-1.5 bg-white/8 rounded-full mx-auto mb-1" />
//         <div className="bg-[#0a0a14] rounded-[22px] flex-1 p-3.5 flex flex-col gap-2.5 overflow-hidden">
//           <p className="text-[9px] text-white/40">Good morning, Alex</p>
//           <div>
//             <p className="text-[8px] text-white/30 uppercase tracking-widest">Total balance</p>
//             <p className="text-2xl font-black text-white tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>$24,830</p>
//           </div>
//           <div className="flex gap-1.5">
//             {['Send', 'Pay', 'Top up'].map(a => (
//               <div key={a} className="flex-1 bg-white/5 rounded-lg p-1.5 flex flex-col items-center gap-1 text-[7px] text-white/50">
//                 <div className="w-4 h-4 rounded-full bg-[#5B0F12]/40 border border-[#5B0F12]/70" />
//                 {a}
//               </div>
//             ))}
//           </div>
//           <div className="h-px bg-white/7" />
//           <p className="text-[7px] text-white/30 uppercase tracking-widest">Recent</p>
//           {[['Netflix', '-$15.99', false], ['Salary', '+$3,200', true], ['Amazon', '-$89.00', false]].map(([name, amt, pos]) => (
//             <div key={name} className="flex justify-between items-center py-0.5">
//               <span className="text-[8px] text-white/65">{name}</span>
//               <span className={`text-[8px] font-medium ${pos ? 'text-green-400' : 'text-[#a04045]'}`}>{amt}</span>
//             </div>
//           ))}
//           <div className="mt-auto h-9 rounded-lg bg-[#5B0F12] flex items-center px-2.5 justify-between">
//             <div className="w-3.5 h-2.5 bg-white/25 rounded-sm" />
//             <span className="text-[7px] text-white/70 tracking-widest">•••• 4821</span>
//           </div>
//         </div>
//       </div>
//       {/* Floating badge */}
//       <div className="absolute bottom-10 -right-5 bg-[#111] border border-white/12 rounded-xl px-3 py-2 flex items-center gap-2 min-w-[130px]">
//         <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
//         <div>
//           <p className="text-[10px] font-medium text-white">Transfer sent</p>
//           <p className="text-[9px] text-white/40">$250 → John D.</p>
//         </div>
//       </div>
//     </div>
//   </motion.div>

// </section>

  //  {/* about us */}

  //    <section className="flex flex-col justify-center items-center mt-20 px-10">
  //     <div className="flex justify-center items-center px-20">
  //           <span className="w-1/2 text-2xl font-extrabold">Empowering businesses and individuals with experts</span>
  //           <span className="1/2 text-wrap pl-40">We are dedicated to helping businesses and individuals navigate the complexities of finance with confidence and clarity.<br/> With years of experience in financial planning,<br/> investment management, business consulting.</span>
  //     </div>


  //     <div className="flex justify-center items-center px-24 pt-20">
  //       <div>
  //         <span>icon</span>
  //         <span><h1>expertise you can trust</h1></span>
  //          <span><p>Our experienced team delivers reliable insights and strategies, ensuring your financial decisions are well-informed and secure.</p></span>
  //       </div>
  //       <div>
  //         <span>icon</span>
  //         <span><h1>expertise you can trust</h1></span>
  //          <span><p>Our experienced team delivers reliable insights and strategies, ensuring your financial decisions are well-informed and secure.</p></span>
  //       </div>
  //       <div>
  //         <span>icon</span>
  //         <span><h1>expertise you can trust</h1></span>
  //          <span><p>Our experienced team delivers reliable insights and strategies, ensuring your financial decisions are well-informed and secure.</p></span>
  //       </div>
  //     </div>

  //     <div className="py-52 w-full border-2 border-red-950 mt-10">theg</div>
      
  //   </section> 
  
//     {/* our services */}

    //  <section className="flex flex-col justify-center items-center mt-20 px-10">
    //   <div className="flex justify-center items-center px-20">
    //         <span className="w-1/2 text-2xl font-extrabold">Expert financial services for your needs</span>
    //         <span className="1/2 text-wrap pl-40">Move funds between your accounts and schedule transfers with ease. View all your account activity and balances, pay bills automatically, set up e-mail alerts, and more.</span>
    //   </div>

    //   <div className="flex justify-center items-center px-24 pt-20">
    //     <div>
    //       <span>icon</span>
    //       <span><h1>expertise you can trust</h1></span>
    //        <span><p>Our experienced team delivers reliable insights and strategies, ensuring your financial decisions are well-informed and secure.</p></span>
    //     </div>
    //     <div>
    //       <span>icon</span>
    //       <span><h1>expertise you can trust</h1></span>
    //        <span><p>Our experienced team delivers reliable insights and strategies, ensuring your financial decisions are well-informed and secure.</p></span>
    //     </div>
    //     <div>
    //       <span>icon</span>
    //       <span><h1>expertise you can trust</h1></span>
    //        <span><p>Our experienced team delivers reliable insights and strategies, ensuring your financial decisions are well-informed and secure.</p></span>
    //     </div>
    //   </div>

    // </section> 

//     {/* our expertise*/}

    //  <section className="flex flex-col justify-center items-center mt-20 px-10">
    //   <div className="flex justify-center items-center px-20">
    //         <span className="w-1/2 text-2xl font-extrabold">Driving innovation and success in Industry Insights</span>
    //         <span className="1/2 text-wrap pl-40">Remedy Grand Chase Bank Savings Invent is our enterprise approach to innovation and supports our business strategy as a forward-focused bank. It's about using emerging technology to engage with our customers and exceeding their rapidly evolving expectations.</span>
    //   </div>

    //   <div className="flex justify-between items-center w-full px-10 mt-10">
    //       <span>Financial Planning</span>
    //       <span>Business consulting</span>
    //       <span>Risk management</span>
    //       <span> Invest management</span>
    //   </div>



    //   <div className="flex gap-5 mt-10">
    //      <div className="h-36 border border-gray-950 w-full">
    //         <div><h1>Benefits of our financial:</h1></div>
    //         <div>Empower your financial journey with expert advice, personalized strategies, and solutions designed to help you achieve long-term stability, growth, and peace of mind.</div>
    //      </div> 
    //      <div className="h-36 border border-gray-950 w-full">Image</div>

    //   </div>

    // </section> 


//     {/* why choose us */}

  // <section  className="flex flex-col justify-center items-center mt-20 px-10">
  //     <div className="flex justify-center items-center px-20">
  //           <span className="w-1/2 text-2xl font-extrabold">Expertise and client focused solutions for your success</span>
  //           <span className="1/2 text-wrap pl-40">Our team of experienced professionals delivers personalized, results-driven financial strategies tailored to your unique goals. We prioritize transparency, trust, and long-term success.</span>
  //     </div>

  //     <div className="flex gap-3">
  //         <div className="p-20">overlay1</div>
  //         <div className="p-20">overlay1</div>
  //         <div className="p-20">overlay1</div>
  //     </div>
  //   </section> 



//     {/* our pproach */}

    //  <section className="flex flex-col justify-center items-center mt-20 px-10">
    //   <div className="flex justify-center items-center px-20">
    //         <span className="w-1/2 text-2xl font-extrabold">Client centric strategy for lasting success</span>
    //         <span className="1/2 text-wrap pl-40">We believe that a successful financial journey starts with understanding your unique needs and aspirations Our approach is built on a foundation of collaboration, transparency, and expertise.</span>
    //   </div>

    //   <div className="flex gap-3">
    //       <div className="p-20">overlay1</div>
    //       <div className="p-20">overlay1</div>
    //       <div className="p-20">overlay1</div>
    //        <div className="p-20">overlay1</div>
    //   </div>


    // </section> 


//     {/* financial wisdom */}

    //  <section className="flex flex-col justify-center items-center mt-20 px-10">

    //   <div className="flex justify-center items-center px-20">
    //         <span className="w-1/2 text-2xl font-extrabold">Fascinating facts that shapeyour financial knowledge</span>
    //         <span className="1/2 text-wrap pl-40">Explore fun and surprising facts about the financial world. Learn how history, trends, and innovations have shaped today's finance landscape, making it easier to navigate your financial journey.</span>
    //  </div>

    //  <div className="flex flex-col w-full mt-10 gap-2">
    //     <div className="flex gap-2 border border-gray-950 w-full p-2">
    //         <div className="w-1/4 h-56 border border-gray-950">yudhjjodjfdovjodj</div>
    //         <div className="w-1/4 h-56 border border-gray-950">yudhjjodjfdovjodj</div>
    //         <div className="w-1/4 h-56 border border-gray-950">yudhjjodjfdovjodj</div>
    //         <div className="w-1/4 h-56 border border-gray-950">yudhjjodjfdovjodj</div>
    //     </div>

    //     <div className="flex gap-2 border border-gray-950 w-full p-2">
    //         <div className="w-1/4 h-56 border border-gray-950">yudhjjodjfdovjodj</div>
    //         <div className="w-1/4 h-56 border border-gray-950">yudhjjodjfdovjodj</div>
    //         <div className="w-1/4 h-56 border border-gray-950">yudhjjodjfdovjodj</div>
    //         <div className="w-1/4 h-56 border border-gray-950">yudhjjodjfdovjodj</div>
    //     </div>
    //  </div>
        
    // </section> 

//      {/* fdic section */}

      //  <section className="flex flex-row justify-center items-center mt-20 px-10 border border-slate-800">
         
      //    <div className="p-10">
      //     image
      //    </div>

      //    <div>
      //      <div><p>FDIC-Insured - Backed by the full faith and credit of the U.S. Government</p></div>
      //      <div><h1 className="font-bold text-xl">Take control of your financial future today!</h1></div>
      //      <div><p>We’ve made it easy for Remedy Grand Chase Bank employees to harness their creativity,<br/> bring their ideas to life, and solve customer and colleague problems.</p></div>
      //      <div><button>Get Started Today</button><button>Explore our services</button></div>
      //    </div>
          
      //  </section> 



//        {/* contact section */}
           
    // <section  className="flex flex-col justify-center items-center mt-20 px-10">
    //   <div className="flex justify-center items-center px-20">
    //         <span className="w-1/2 text-2xl font-extrabold">Common business & finance questions and answers</span>
    //         <span className="1/2 text-wrap pl-40">Contact now</span>
    //   </div>
       
    //   <div className="flex items-center gap-3 w-full mt-10">
    //       <div className="h-full w-1/2 border border-gray-950">
    //           <div><span>?icon</span><span>How do I register for mobile banking at Remedy Grand Chase Bank ?</span></div>
    //           <div className="pl-10">
    //             <ul>
    //                 <li>If you are enrolled in Online Banking, simply use your user name and password to log in to your accounts through the Remedy Grand Chase Bank Savings app.</li>
    //                 <li>After logging in, Android® and iPhone®</li>
    //                 <li>users may also enroll in the Remedy Grand Chase Bank Savings Mobile Deposit service to deposit checks using the mobile app.</li>
    //                 <li>To enroll, select Mobile Deposit from the Main Menu, then review and accept the If you are not currently registered for Online Banking, sign up online.</li>
    //             </ul>
    //           </div>
    //       </div>
    //       <div className="h-full w-1/2 border border-gray-950">
    //        <div><span>?icon</span><span>How do I register for mobile banking at Remedy Grand Chase Bank ?</span></div>
    //        <div><p>Our Mobile Deposit allows you to deposit a check through the Remedy Grand Chase Bank Savings mobile app using your internet-enabled iPhone® or Android™ mobile device, provided your device has a camera. You must be an Online or Mobile banking customer, and enrolled in the Remedy Grand Chase Bank Savings Mobile Deposit service. In the Remedy Grand Chase Bank Savings mobile app, select "Mobile Deposit," then follow the steps to enroll or deposit a check.</p></div>
        
    //       </div>
    //   </div>
    
    // </section> 
    

//     {/* footer */}

    <footer className="mt-10">
      <div className="flex  px-20">
        <div>
          <img src="" alt="" />
          <span>Our objective is to be a leading and trusted member of the diverse communities we serve. Our goal is to meet the consumer, commercial, and retail needs of individuals and businesses from all ethnic backgrounds. With a diverse team of dedicated professionals, we aim to offer personalized services in multiple languages, delivered in a friendly, efficient, and respectful manner. We uphold the highest standards of soundness, service, and integrity in everything we do.</span>
        </div>
         
        <div className="flex">
            <div className="flex flex-col">
              <span><h1>Solution</h1></span>
              <span>Quick Account Opening</span>
              <span>Contact Us</span>
              <span>Terms of Service</span>
            </div>
            <div className="flex flex-col">
              <span><h1>Loans & Insurance</h1></span>
              <span>Business Loan</span>
              <span>Automobile Refinancing</span>
              <span>Mortgage Plans</span>
              <span>Core Insurance Program</span>
            </div>
            <div className="flex flex-col">
              <span><h1>Solution</h1></span>
              <span>Quick Account Opening</span>
              <span>Contact Us</span>
              <span>Terms of Service</span>
            </div>
        </div>
      </div>
       <hr className="mx-20 border-0.5 border-stone-950" />

      <div className="">
        <span>Copyright © 2025 All Rights Reserved.</span>
      </div>
      
    </footer>  

   
    
         
// </main>
//     )
// }

// export default Home



    // <div className="hm">
    //       {/* <h1>Home</h1>
    //         <br />
    //         <p>You are logged in!</p>
    //         <br /> */}
    //         {/* <Link to="/Userdashboard">Go to the User dash board page</Link>
    //         <br />
    //           <Link to="/Admin">Go to the Admin page</Link> */}
    //         <br />
    //         <br/>
    //          <Link to="/login">Login</Link>
    //         <br />
    //         <br/>
    //            <Link to="/Register">Register</Link>
    //         <br />
    //         <br/>
    //           <Link to="/Adminlogin">Admin Login</Link>
    //         <br />
    //         <br/>
    //         {/* <Link to="/linkpage">Go to the link page</Link> */}
    //         <br/>
    //         <br/>
         
    //     </div>