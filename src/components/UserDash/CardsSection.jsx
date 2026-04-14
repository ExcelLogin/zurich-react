import { Link } from "react-router-dom";

const CardDots = () => (
  <div className="flex gap-1">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="w-1 h-1 rounded-full bg-red-200/40" />
    ))}
  </div>
);

const ChipIcon = () => (
  <div className="w-8 h-6 rounded-[5px] bg-amber-200/10 border border-amber-200/25 flex items-center justify-center">
    <div className="flex flex-col gap-[3px]">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="w-[18px] h-px bg-amber-200/45 rounded-full" />
      ))}
    </div>
  </div>
);

const MastercardLogo = () => (
  <svg width="40" height="26" viewBox="0 0 40 26">
    <circle cx="15" cy="13" r="12" fill="#EB001B" opacity="0.7" />
    <circle cx="25" cy="13" r="12" fill="#F79E1B" opacity="0.7" />
    <ellipse cx="20" cy="13" rx="5.5" ry="12" fill="#FF5F00" opacity="0.7" />
  </svg>
);

const AmexLogo = () => (
  <svg width="44" height="24" viewBox="0 0 60 24">
    <text x="0" y="19" fontFamily="Arial Black, sans-serif" fontSize="17"
      fontWeight="900" fill="rgba(255,255,255,0.65)" letterSpacing="0">
      AMEX
    </text>
  </svg>
);

const StatusBadge = ({ status }) => {
  const config = {
    pending: {
      dot: "bg-yellow-300",
      text: "text-yellow-300",
      style: "bg-yellow-400/10 border-yellow-400/25",
      label: "Pending approval",
    },
    active: {
      dot: "bg-emerald-300",
      text: "text-emerald-300",
      style: "bg-emerald-400/10 border-emerald-400/25",
      label: "Active",
    },
  };
  const c = config[status];
  return (
    <span className={`inline-flex items-center gap-1.5 text-[10px] font-medium tracking-wide px-2.5 py-1 rounded-full border ${c.style} ${c.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  );
};

const GlassCard = ({ networkLogo, status, lastDigits, holderName }) => (
  <div className="relative overflow-hidden rounded-md px-5 py-[22px] min-h-[200px] flex flex-col justify-between
    bg-white/[0.07] border border-red-300/20 backdrop-blur-xl
    before:absolute before:inset-0 before:rounded-[22px] before:pointer-events-none
    before:bg-gradient-to-br before:from-red-300/10 before:via-red-500/[0.03] before:to-red-900/[0.07]">

    {/* inner orbs */}
    <div className="absolute -top-14 -right-12 w-48 h-48 rounded-full bg-red-400/20 pointer-events-none
      [background:radial-gradient(circle,rgba(239,68,68,0.22)_0%,transparent_70%)]" />
    <div className="absolute -bottom-6 -left-5 w-28 h-28 rounded-full pointer-events-none
      [background:radial-gradient(circle,rgba(255,200,200,0.09)_0%,transparent_70%)]" />

    <div className="relative z-10 flex justify-between items-start">
      <div>
        <p className="text-[11px] font-medium text-red-100/70 tracking-[0.04em]">Western Zurich Bank</p>
        <p className="text-[10px] text-red-200/35 mt-0.5 tracking-[0.02em]">Virtual Banking</p>
      </div>
      <ChipIcon />
    </div>

    <StatusBadge status={status} />

    <div className="relative z-10 flex items-center gap-3">
      <CardDots /><CardDots /><CardDots />
      <span className="text-[13px] text-red-50/85 font-medium tracking-[0.14em]">
        {lastDigits === "hidden" ? "••••" : lastDigits}
      </span>
    </div>

    <div className="relative z-10 flex justify-between items-end">
      <div>
        <p className="text-[9px] uppercase tracking-[0.08em] text-red-200/35 mb-0.5">Card Holder</p>
        <p className="text-[12px] text-red-50/80 font-medium">{holderName}</p>
      </div>
      <div className="text-right">
        <p className="text-[9px] uppercase tracking-[0.08em] text-red-200/35 mb-0.5">Valid Thru</p>
        <p className="text-[12px] text-red-50/80 font-medium">— / —</p>
      </div>
      <div className="relative z-10">{networkLogo}</div>
    </div>
  </div>
);

const CardsSection = ({ usr }) => {
  const name = usr?.firstname ?? "Card Holder";

  return (
    <div className="mt-10 rounded-xl bg-[#5B0F12]  relative overflow-hidden px-5 py-8">

      {/* Background orbs */}
      {/* <div className="absolute -top-28 -left-24 w-[420px] h-[420px] rounded-full opacity-35 pointer-events-none
        [background:radial-gradient(circle,#e53e3e_0%,transparent_40%)]" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-30 pointer-events-none
        [background:radial-gradient(circle,#c53030_0%,transparent_40%)]" />
      <div className="absolute top-[40%] left-[55%] w-48 h-48 rounded-full opacity-12 pointer-events-none
        [background:radial-gradient(circle,#feb2b2_0%,transparent_40%)]" /> */}

      <div className="relative z-10 max-w-2xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Link to="/Userdashboard/virtualcards" className="flex items-center gap-2.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="rgba(255,200,200,0.8)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="5" width="20" height="14" rx="3"/>
              <line x1="2" y1="10" x2="22" y2="10"/>
            </svg>
            <div>
              <p className="text-[16px] font-medium text-white">Your Cards</p>
              <p className="text-[11px] text-red-300/50">2 virtual cards active</p>
            </div>
          </Link>
          <Link
            to="/Userdashboard/virtualcards"
            className="flex items-center gap-1.5 text-[12px] text-red-200/70 px-3.5 py-1.5 rounded-full
              bg-red-500/[0.08] border border-red-400/20 hover:bg-red-500/15 transition-colors"
          >
            View all
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Mastercard */}
          <div className="flex flex-col gap-3">
            <GlassCard
              networkLogo={<MastercardLogo />}
              status="pending"
              lastDigits="hidden"
              holderName={name}
            />
            <p className="text-[12px] text-red-300/55 px-0.5">Mastercard Platinum</p>
            <Link
              to="/Userdashboard/virtualcards/applycard"
              className="w-full text-center text-[13px] font-medium py-3 rounded-xl
                bg-white/[0.06] border border-red-300/25 text-red-100/85
                hover:bg-red-500/[0.14] hover:border-red-300/45 transition-all backdrop-blur-sm"
            >
              View Details
            </Link>
          </div>

          {/* Amex */}
          <div className="flex flex-col gap-3">
            <GlassCard
              networkLogo={<AmexLogo />}
              status="active"
              lastDigits="8906"
              holderName={name}
            />
            <div className="flex justify-between px-0.5">
              <p className="text-[12px] text-red-300/55">American Express Black</p>
              <p className="text-[12px] text-red-300/55">£0.00</p>
            </div>
            <Link
              to="/Userdashboard/virtualcards/applycard"
              className="w-full text-center text-[13px] font-medium py-3 rounded-xl
                bg-white/[0.06] border border-red-300/25 text-red-100/85
                hover:bg-red-500/[0.14] hover:border-red-300/45 transition-all backdrop-blur-sm"
            >
              View Details
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CardsSection;