// import { useState } from 'react';



// const hamburger = () => {

//   const [isOpen, setIsOpen] = useState(false);

//   return (
 
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="relative w-12 h-12 focus:outline-none"
//         aria-label="Toggle menu"
//       >
//         <span className="sr-only">Open menu</span>
//         <div className="absolute w-8 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
//           <span
//             className={`block absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${
//               isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2.5'
//             }`}
//           />
//           <span
//             className={`block absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${
//               isOpen ? 'opacity-0' : 'opacity-100'
//             }`}
//           />
//           <span
//             className={`block absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${
//               isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2.5'
//             }`}
//           />
//         </div>
//       </button>

//   )
// }

// export default hamburger



// Hamburger.jsx
// Receives `isOpen` and `onClick` props from the parent (Home/navbar).
// Renders an animated hamburger → X toggle button.

const Hamburger = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] hover:border-[#5B0F12]/50 hover:bg-[#5B0F12]/10 transition-all group"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>

      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 fill-none stroke-white/60 group-hover:stroke-white transition-colors"
        strokeWidth="2"
        strokeLinecap="round"
      >
        {/* Top bar: slides up & rotates into X */}
        <line
          x1="3" y1="7" x2="21" y2="7"
          style={{
            transformOrigin: "12px 7px",
            transform: isOpen ? "rotate(45deg) translate(0px, 5px)" : "rotate(0deg) translate(0px, 0px)",
            transition: "transform 0.28s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
        {/* Middle bar: fades out */}
        <line
          x1="3" y1="12" x2="21" y2="12"
          style={{
            opacity: isOpen ? 0 : 1,
            transition: "opacity 0.18s ease",
          }}
        />
        {/* Bottom bar: slides down & rotates into X */}
        <line
          x1="3" y1="17" x2="21" y2="17"
          style={{
            transformOrigin: "12px 17px",
            transform: isOpen ? "rotate(-45deg) translate(0px, -5px)" : "rotate(0deg) translate(0px, 0px)",
            transition: "transform 0.28s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
      </svg>

      {/* Active dot indicator */}
      {isOpen && (
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#5B0F12] border border-black" />
      )}
    </button>
  );
};

export default Hamburger;