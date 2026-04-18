import { Link } from "react-router-dom";
import logo from '../../assets/swiss.jpeg';
import { motion } from "framer-motion";

const Footer = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
  };

  const fadeItem = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <footer className="bg-black mt-20 border-t border-white/[0.07] relative overflow-hidden">

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Crimson top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#5B0F12] to-transparent" />

      {/* ── MAIN FOOTER CONTENT ── */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16 pt-16 pb-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* ── BRAND COLUMN ── */}
          <motion.div className="md:col-span-4 flex flex-col gap-5" variants={fadeItem}>
            <Link to="/">
              <img src={logo} alt="Remedy Grand Chase Bank" className="w-24 h-10 object-contain" />
            </Link>
            <p className="text-[12px] text-white/38 leading-relaxed font-light max-w-sm">
              Our objective is to be a leading and trusted member of the diverse communities we serve — offering personalized services delivered with the highest standards of soundness, service, and integrity.
            </p>

            {/* Trust badge */}
            <div className="flex items-center gap-2 mt-1">
              <div className="inline-flex items-center gap-1.5 border border-[#5B0F12]/35 rounded-md px-2.5 py-1.5 bg-[#5B0F12]/8">
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-[#5B0F12]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span className="text-[9px] font-bold tracking-[0.12em] uppercase text-[#5B0F12]/90">FDIC Insured</span>
              </div>
              <div className="inline-flex items-center gap-1.5 border border-white/10 rounded-md px-2.5 py-1.5 bg-white/[0.03]">
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-white/40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <span className="text-[9px] font-bold tracking-[0.12em] uppercase text-white/35">256-bit SSL</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2 mt-1">
              {[
                { label: 'X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                { label: 'Li', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
                { label: 'Fb', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
              ].map(({ label, path }) => (
                <button
                  key={label}
                  className="w-8 h-8 rounded-lg border border-white/[0.08] bg-white/[0.03] hover:border-[#5B0F12]/50 hover:bg-[#5B0F12]/10 flex items-center justify-center transition-all group"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-white/35 group-hover:stroke-[#5B0F12] transition-colors" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={path} />
                  </svg>
                </button>
              ))}
            </div>
          </motion.div>

          {/* ── SOLUTIONS COLUMN ── */}
          <motion.div className="md:col-span-2 flex flex-col gap-4" variants={fadeItem}>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-3 h-px bg-[#5B0F12] block" />
              <h3 className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#5B0F12]">Solutions</h3>
            </div>
            {[
              { label: 'Quick Account Opening', to: '/register' },
              { label: 'Personal Banking',       to: '/personal' },
              { label: 'Business Banking',       to: '/business' },
              { label: 'Contact Us',             to: '/contact' },
              { label: 'Terms of Service',       to: '/terms' },
            ].map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="text-[12px] text-white/40 hover:text-white transition-colors duration-200 font-light leading-snug w-fit"
              >
                {label}
              </Link>
            ))}
          </motion.div>

          {/* ── LOANS & INSURANCE COLUMN ── */}
          <motion.div className="md:col-span-3 flex flex-col gap-4" variants={fadeItem}>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-3 h-px bg-[#5B0F12] block" />
              <h3 className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#5B0F12]">Loans &amp; Insurance</h3>
            </div>
            {[
              { label: 'Business Loan',          to: '/loans/business' },
              { label: 'Automobile Refinancing', to: '/loans/auto' },
              { label: 'Mortgage Plans',         to: '/loans/mortgage' },
              { label: 'Core Insurance Program', to: '/insurance' },
              { label: 'Investment Plans',       to: '/investments' },
            ].map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="text-[12px] text-white/40 hover:text-white transition-colors duration-200 font-light leading-snug w-fit"
              >
                {label}
              </Link>
            ))}
          </motion.div>

          {/* ── COMPANY COLUMN ── */}
          <motion.div className="md:col-span-3 flex flex-col gap-4" variants={fadeItem}>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-3 h-px bg-[#5B0F12] block" />
              <h3 className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#5B0F12]">Company</h3>
            </div>
            {[
              { label: 'About Us',       to: '/about' },
              { label: 'Investments',    to: '/investments' },
              { label: 'Careers',        to: '/careers' },
              { label: 'Privacy Policy', to: '/privacy' },
              { label: 'FAQ',            to: '/faq' },
            ].map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="text-[12px] text-white/40 hover:text-white transition-colors duration-200 font-light leading-snug w-fit"
              >
                {label}
              </Link>
            ))}

            {/* CTA */}
            <Link
              to="/register"
              className="mt-3 inline-flex items-center gap-2 bg-[#5B0F12] hover:bg-[#7a1519] text-white text-[10px] font-bold tracking-[0.14em] uppercase px-4 py-2.5 rounded-sm transition-all w-fit"
            >
              Open Account →
            </Link>
          </motion.div>

        </motion.div>
      </div>

      {/* ── DIVIDER ── */}
      <div className="relative z-10 mx-6 sm:mx-10 lg:mx-16">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* ── BOTTOM BAR ── */}
      <motion.div
        className="relative z-10 px-6 sm:px-10 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-3"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2">
          <span className="w-[3px] h-[3px] rounded-full bg-[#5B0F12]" />
          <span className="text-[10px] text-white/25 tracking-[0.08em]">
            Copyright © {new Date().getFullYear()} Remedy Grand Chase Bank. All Rights Reserved.
          </span>
        </div>

        <div className="flex items-center gap-5">
          {['Privacy', 'Terms', 'Security', 'Accessibility'].map((item, i) => (
            <span key={item} className="flex items-center gap-5">
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-[10px] text-white/25 hover:text-white/55 transition-colors tracking-[0.06em]"
              >
                {item}
              </Link>
              {i < 3 && <span className="w-px h-2.5 bg-white/[0.08]" />}
            </span>
          ))}
        </div>
      </motion.div>

    </footer>
  );
};

export default Footer;