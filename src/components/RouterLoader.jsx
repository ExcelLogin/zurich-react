// RouteLoader.jsx
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// export default function RouteLoader({ children }) {
//   const location = useLocation();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Show loader on route change
//     setLoading(true);

//     // Fake small delay so loader is visible
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 900); // adjust as needed

//     return () => clearTimeout(timer);
//   }, [location.pathname]);

//   return (
//     <>
//       {/* {loading && (
//         <div className="p-10">
//           <div className="spinner">Loading...</div>
//         </div>
//       )}
//       {children} */}
//        {loading ? (
//         <div className="p-10">
//           <div className="spinner">Loading...</div>
//         </div>
//       ) : (
//       children
//       )}
//     </>
//   );
// }
// import { useEffect, useState, useRef } from "react";
// import { useLocation } from "react-router-dom";

// export default function RouteLoader({ children }) {
//   const location = useLocation();
  
//   const [loading, setLoading] = useState(false);
//   const [displayChild, setDisplayChild] = useState(children); // freeze old page
//   const prevPath = useRef(location.pathname);

//   useEffect(() => {
//     // Only run on actual navigation
//     if (prevPath.current !== location.pathname) {
//       setLoading(true);

//       // Keep showing the *previous page* during loading
//       const timer = setTimeout(() => {
//         prevPath.current = location.pathname;
//         setDisplayChild(children);   // Swap page after loading completes
//         setLoading(false);
//       }, 500); // adjust

//       return () => clearTimeout(timer);
//     }
//   }, [location.pathname, children]);

//   return (
//     <div className="relative">
//       {/* Always render the DISPLAY CHILD (prev page until ready) */}
//       {displayChild}

//       {loading && (
//         <div className="absolute inset-0 bg-white/80 backdrop-blur-md flex items-center justify-center z-50">
//           <div className="spinner">Loading...</div>
//         </div>
//       )}
//     </div>
//   );
// }

