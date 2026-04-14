import { FaCircleInfo } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
import { LuHistory, LuChevronRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const actions = [
  {
    icon: FaCircleInfo,
    label: "Account info",
    desc: "View your account details",
    dark: true,
    onClick: "acc",
    to: null,
  },
  {
    icon: IoIosSend,
    label: "Send money",
    desc: "Transfer to any account",
    dark: false,
    onClick: "tf",
    to: null,
  },
  {
    icon: IoAddCircleOutline,
    label: "Deposit",
    desc: "Fund your account",
    dark: false,
    onClick: null,
    to: "/Userdashboard/deposit",
  },
  {
    icon: LuHistory,
    label: "History",
    desc: "See past transactions",
    dark: false,
    onClick: null,
    to: "/Userdashboard/accounthistory",
  },
];

const QuickActions = ({ handleOpenAcc, handleOpenTf }) => {
  const getHandler = (key) =>
    key === "acc" ? handleOpenAcc : key === "tf" ? handleOpenTf : undefined;

  const darkRow = `
    flex items-center gap-3 px-3.5 py-3 rounded-[14px] cursor-pointer w-full text-left
    bg-black/35 border border-red-400/[0.18]
    hover:bg-black/50 active:scale-[0.98] transition-all
  `;
  const lightRow = `
    flex items-center gap-3 px-3.5 py-3 rounded-[14px] cursor-pointer w-full text-left
    bg-white/[0.08] border border-red-300/[0.18]
    hover:bg-white/[0.14] active:scale-[0.98] transition-all
  `;

  const darkIconBox = `
    w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0
    bg-red-400/10 border border-red-400/20
  `;
  const lightIconBox = `
    w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0
    bg-white/10 border border-red-200/15
  `;

  return (
    <div className="relative w-full  mt-10 overflow-hidden bg-[#5B0F12]  rounded-xl  px-5 py-3">

      {/* Background orbs */}
      {/* <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full pointer-events-none
        [background:radial-gradient(circle,rgba(239,68,68,0.35)_0%,transparent_30%)]" />
      <div className="absolute -bottom-14 -left-10 w-44 h-44 rounded-full pointer-events-none
        [background:radial-gradient(circle,rgba(185,28,28,0.4)_0%,transparent_70%)]" /> */}

      <div className="relative z-10 max-w-2xl mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between text-center  mb-5">
          <div className="text-center">
            <h5 className="text-sm font-medium text-red-100/95">
              What would you like to do?
            </h5>
            <p className="text-[11px] text-red-300/50 mt-0.5">Choose from popular actions</p>
          </div>
        </div>

        {/* Grid — 2 cols on sm+, 1 col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {actions.map(({ icon: Icon, label, desc, dark, onClick, to }) => {
            const rowClass = dark ? darkRow : lightRow;
            const iconBoxClass = dark ? darkIconBox : lightIconBox;

            const inner = (
              <div className={rowClass}>
                <div className={iconBoxClass}>
                  <Icon size={13} className="text-red-200/70" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-medium text-red-50/90">{label}</p>
                  <p className="text-[11px] text-red-200/45 mt-0.5">{desc}</p>
                </div>
                <LuChevronRight size={13} className="text-red-200/30 flex-shrink-0" />
              </div>
            );

            return to ? (
              <Link key={label} to={to} className="block">{inner}</Link>
            ) : (
              <button key={label} onClick={getHandler(onClick)} className="text-left w-full">
                {inner}
              </button>
            );
          })}
        </div>

        {/* Wave divider */}
        <div className="mt-6 opacity-[0.18]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1340 120" className="w-full">
            <path
              fill="rgba(255,80,80,0.5)"
              d="M0,64L48,90.7C96,117,192,107,288,90.7C384,75,480,53,576,42.7C672,32,768,32,864,48C960,64,1056,96,1152,101.3C1248,107,1344,85,1392,74.7L1440,64L1440,120L0,120Z"
            />
          </svg>
        </div>

      </div>
    </div>
  );
};

export default QuickActions;