
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { 
//   Home, 
//   Zap, 
//   Briefcase, 
//   Users, 
//   Phone, 
//   Menu, 
//   X,
//   ArrowRight,
//   Sparkles,
//   Cpu,
//   Globe
// } from 'lucide-react';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeHover, setActiveHover] = useState(null);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 10;
//       setScrolled(isScrolled);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   const isActive = (path) => {
//     return location.pathname === path;
//   };

//   const navItems = [
//     { path: '/services', label: 'Services', icon: <Zap className="w-4 h-4" /> },
//     { path: '/our-work', label: 'Our Work', icon: <Briefcase className="w-4 h-4" /> },
//     { path: '/about', label: 'About', icon: <Users className="w-4 h-4" /> },
//   ];

//   return (
//     <header 
//       className={`fixed w-full z-50 transition-all duration-500 ${
//         scrolled 
//           ? 'bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-blue-900/95 backdrop-blur-xl shadow-2xl border-b border-slate-700/30 py-2' 
//           : 'bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-blue-900/90 backdrop-blur-lg py-3 md:py-4'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
//         <div className="flex justify-between items-center">
          
//           {/* Enhanced Premium Logo */}
//           <Link 
//             to="/" 
//             className="flex items-center space-x-2 md:space-x-3 group relative"
//             onMouseEnter={() => setActiveHover('logo')}
//             onMouseLeave={() => setActiveHover(null)}
//           >
//             <div className="relative flex items-center">
//               {/* Main logo container with enhanced effects */}
//               <div className="relative">
//                 <div className="absolute -inset-2 md:-inset-3 bg-gradient-to-r from-teal-500/30 to-green-500/30 rounded-lg md:rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"></div>
                
//                 {/* Logo with tech-inspired border */}
//                 <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-1.5 md:p-2 rounded-lg md:rounded-xl border border-slate-700/50 group-hover:border-teal-500/30 transition-all duration-500 overflow-hidden">
//                   {/* Subtle grid pattern */}
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
//                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(94,234,212,0.05)_1px,transparent_1px)] bg-[length:10px_10px]"></div>
//                   </div>
                  
//  <img 
//   src="/sagus[1].png" 
//   alt="SAGUS SOLUTIONS" 
//   className="h-6 md:h-8 w-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-2 filter brightness-200 contrast-125"
// />


//                 </div>
//               </div>
//             </div>
            
//             {/* Enhanced text logo with tech-inspired design */}
//             <div className="flex flex-col relative">
//               <span className="text-slate-50 font-bold text-lg md:text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent group-hover:from-teal-300 group-hover:to-green-300 transition-all duration-500">
//                 SAGUS
//                 <span className="text-teal-400">.</span>
//               </span>
//               <span className="text-slate-400 font-medium text-xs tracking-wider uppercase mt-0.5 group-hover:text-slate-300 transition-colors duration-300 hidden sm:block">
//                 DIGITAL SOLUTIONS
//               </span>
              
//               {/* Animated tech underline */}
//               <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-green-400 group-hover:w-full transition-all duration-700"></div>
//             </div>
            
//             {/* Animated sparkle effects */}
//             <div className="absolute -right-2 -bottom-2 w-2 h-2 rounded-full bg-green-400 opacity-0 group-hover:opacity-70 transition-all duration-700 delay-200"></div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-1">
//             {navItems.map((item) => (
//               <Link 
//                 key={item.path}
//                 to={item.path} 
//                 className={`relative flex items-center px-4 py-2.5 md:px-5 md:py-3 rounded-xl text-sm font-medium transition-all duration-300 group ${
//                   isActive(item.path) 
//                     ? 'text-teal-400' 
//                     : 'text-slate-300 hover:text-slate-50'
//                 }`}
//                 onMouseEnter={() => setActiveHover(item.path)}
//                 onMouseLeave={() => setActiveHover(null)}
//               >
//                 <div className={`transition-transform duration-300 ${isActive(item.path) || activeHover === item.path ? 'scale-110' : ''}`}>
//                   {item.icon}
//                 </div>
//                 <span className="ml-2 md:ml-2.5 font-semibold tracking-wide">{item.label}</span>
                
//                 {/* Animated underline */}
//                 <div className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-teal-400 transition-all duration-300 ${
//                   isActive(item.path) || activeHover === item.path ? 'w-4/5 opacity-100' : 'w-0 opacity-0'
//                 }`}></div>
                
//                 {/* Hover background effect */}
//                 <div className={`absolute inset-0 bg-slate-800/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
//                   activeHover === item.path ? 'opacity-100' : ''
//                 }`}></div>
//               </Link>
//             ))}
//           </nav>

//           {/* Enhanced Desktop Contact Button */}
//           <div className="hidden lg:flex items-center">
//             <Link 
//               to="/contact" 
//               className="relative flex items-center px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-400 hover:to-green-400 text-white text-sm font-semibold rounded-xl transition-all duration-300 group shadow-lg shadow-teal-500/30 hover:shadow-teal-500/40 overflow-hidden"
//               onMouseEnter={() => setActiveHover('contact')}
//               onMouseLeave={() => setActiveHover(null)}
//             >
//               <Phone className="w-4 h-4 mr-2 md:mr-2.5" />
//               <span className="hidden md:inline">Get Proposal</span>
//               <span className="md:hidden">Contact</span>
//               <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              
//               {/* Shine effect */}
//               <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ${
//                 activeHover === 'contact' ? 'translate-x-full' : ''
//               }`}></div>
//             </Link>
//           </div>

//           {/* Enhanced Mobile menu button */}
//           <button
//             onClick={toggleMenu}
//             className="lg:hidden p-2 md:p-3 rounded-xl text-slate-300 hover:text-slate-50 hover:bg-slate-800/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? (
//               <X className="w-5 h-5 md:w-6 md:h-6" />
//             ) : (
//               <Menu className="w-5 h-5 md:w-6 md:h-6" />
//             )}
//           </button>
//         </div>

//         {/* Enhanced Mobile Navigation */}
//         <div className={`lg:hidden transition-all duration-500 ease-out overflow-hidden ${
//           isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
//         }`}>
//           <div className="py-3 border-t border-slate-700/30">
//             <nav className="space-y-2">
//               {navItems.map((item) => (
//                 <Link 
//                   key={item.path}
//                   to={item.path} 
//                   className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group ${
//                     isActive(item.path) 
//                       ? 'text-teal-400 bg-slate-800/40' 
//                       : 'text-slate-300 hover:text-slate-50 hover:bg-slate-800/30'
//                   }`}
//                   onClick={closeMenu}
//                 >
//                   <div className={`transition-transform duration-300 ${isActive(item.path) ? 'scale-110' : ''}`}>
//                     {item.icon}
//                   </div>
//                   <span className="ml-3 font-semibold">{item.label}</span>
                  
//                   {isActive(item.path) && (
//                     <div className="ml-auto w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
//                   )}
//                 </Link>
//               ))}
              
//               <div className="pt-3 border-t border-slate-700/30 mt-3">
//                 <Link 
//                   to="/contact" 
//                   className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/40 text-sm md:text-base"
//                   onClick={closeMenu}
//                 >
//                   <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
//                   Get Free Consultation
//                 </Link>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Zap, 
  Briefcase, 
  Users, 
  Phone, 
  Menu, 
  X,
  ArrowRight,
  Sparkles,
  Cpu,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return currentPath === path;
  };

  const handleNavClick = (path) => {
    setCurrentPath(path);
    closeMenu();
  };

  const navItems = [
    { path: '/services', label: 'Services', icon: <Zap className="w-4 h-4" /> },
    { path: '/our-work', label: 'Our Work', icon: <Briefcase className="w-4 h-4" /> },
    { path: '/about', label: 'About', icon: <Users className="w-4 h-4" /> },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-blue-900/95 backdrop-blur-xl shadow-2xl border-b border-slate-700/30 py-2' 
          : 'bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-blue-900/90 backdrop-blur-lg py-3 md:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Enhanced Premium Logo */}
                  {/* Enhanced Premium Logo */}
       <Link
            to="/" 
            className="flex items-center space-x-2 md:space-x-3 group relative"
            onMouseEnter={() => setActiveHover('logo')}
            onMouseLeave={() => setActiveHover(null)}
          >
            <div className="relative flex items-center">
              {/* Main logo container with enhanced effects */}
              <div className="relative">
                <div className="absolute -inset-2 md:-inset-3 bg-gradient-to-r from-teal-500/30 to-green-500/30 rounded-lg md:rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"></div>
                
                {/* Logo with tech-inspired border */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-1.5 md:p-2 rounded-lg md:rounded-xl border border-slate-700/50 group-hover:border-teal-500/30 transition-all duration-500 overflow-hidden">
                  {/* Subtle grid pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(94,234,212,0.05)_1px,transparent_1px)] bg-[length:10px_10px]"></div>
                  </div>
                  
 <img 
  src="/sagus[1].png" 
  alt="SAGUS SOLUTIONS" 
  className="h-6 md:h-8 w-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-2 filter brightness-200 contrast-125"
/>


                </div>
              </div>
            </div>
            
            {/* Enhanced text logo with tech-inspired design */}
            <div className="flex flex-col relative">
              <span className="text-slate-50 font-bold text-lg md:text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent group-hover:from-teal-300 group-hover:to-green-300 transition-all duration-500">
                SAGUS
                <span className="text-teal-400">.</span>
              </span>
              <span className="text-slate-400 font-medium text-xs tracking-wider uppercase mt-0.5 group-hover:text-slate-300 transition-colors duration-300 hidden sm:block">
                DIGITAL SOLUTIONS
              </span>
              
              {/* Animated tech underline */}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-green-400 group-hover:w-full transition-all duration-700"></div>
            </div>
            
            {/* Animated sparkle effects */}
            <div className="absolute -right-2 -bottom-2 w-2 h-2 rounded-full bg-green-400 opacity-0 group-hover:opacity-70 transition-all duration-700 delay-200"></div>
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link 
                key={item.path}
               to={item.path}
                className={`relative flex items-center px-4 py-2.5 md:px-5 md:py-3 rounded-xl text-sm font-medium transition-all duration-300 group ${
                  isActive(item.path) 
                    ? 'text-teal-400' 
                    : 'text-slate-300 hover:text-slate-50'
                }`}
                onMouseEnter={() => setActiveHover(item.path)}
                onMouseLeave={() => setActiveHover(null)}
              >
                <div className={`transition-transform duration-300 ${isActive(item.path) || activeHover === item.path ? 'scale-110' : ''}`}>
                  {item.icon}
                </div>
                <span className="ml-2 md:ml-2.5 font-semibold tracking-wide">{item.label}</span>
                
                {/* Animated underline */}
                <div className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-teal-400 transition-all duration-300 ${
                  isActive(item.path) || activeHover === item.path ? 'w-4/5 opacity-100' : 'w-0 opacity-0'
                }`}></div>
                
                {/* Hover background effect */}
                <div className={`absolute inset-0 bg-slate-800/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  activeHover === item.path ? 'opacity-100' : ''
                }`}></div>
              </Link>
            ))}
          </nav>

          {/* Enhanced Desktop Contact Button */}
          <div className="hidden lg:flex items-center">
            <Link 
              to="/contact" 
             
              className="relative flex items-center px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-400 hover:to-green-400 text-white text-sm font-semibold rounded-xl transition-all duration-300 group shadow-lg shadow-teal-500/30 hover:shadow-teal-500/40 overflow-hidden"
              onMouseEnter={() => setActiveHover('contact')}
              onMouseLeave={() => setActiveHover(null)}
            >
              <Phone className="w-4 h-4 mr-2 md:mr-2.5" />
              <span className="hidden md:inline">Get Proposal</span>
              <span className="md:hidden">Contact</span>
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              
              {/* Shine effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ${
                activeHover === 'contact' ? 'translate-x-full' : ''
              }`}></div>
            </Link>
          </div>

          {/* Mobile Contact Button and Menu Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Mobile Contact Button */}
            <Link 
              to="/contact" 
              
              className="relative flex items-center px-3 py-2 bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-400 hover:to-green-400 text-white text-sm font-semibold rounded-lg transition-all duration-300 group shadow-lg shadow-teal-500/30 hover:shadow-teal-500/40 overflow-hidden"
              onMouseEnter={() => setActiveHover('mobile-contact')}
              onMouseLeave={() => setActiveHover(null)}
            >
              <Phone className="w-4 h-4" />
              <span className="ml-1.5 hidden sm:inline">Start</span>
              
              {/* Shine effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ${
                activeHover === 'mobile-contact' ? 'translate-x-full' : ''
              }`}></div>
            </Link>

            {/* Enhanced Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="p-2 md:p-3 rounded-xl text-slate-300 hover:text-slate-50 hover:bg-slate-800/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 md:w-6 md:h-6" />
              ) : (
                <Menu className="w-5 h-5 md:w-6 md:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
      {/* Enhanced Mobile Navigation */}
<div className={`lg:hidden transition-all duration-500 ease-out overflow-hidden ${
  isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
}`}>
  <div className="py-3 border-t border-slate-700/30">
    <nav className="space-y-2">
      {navItems.map((item) => (
        <Link 
          key={item.path}
          to={item.path}
          onClick={() => handleNavClick(item.path)}   // ✅ Close menu on click
          className={`flex items-center w-full px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group ${
            isActive(item.path) 
              ? 'text-teal-400 bg-slate-800/40' 
              : 'text-slate-300 hover:text-slate-50 hover:bg-slate-800/30'
          }`}
        >
          <div className={`transition-transform duration-300 ${isActive(item.path) ? 'scale-110' : ''}`}>
            {item.icon}
          </div>
          <span className="ml-3 font-semibold">{item.label}</span>
          
          {isActive(item.path) && (
            <div className="ml-auto w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
          )}
        </Link>
      ))}
      
      <div className="pt-3 border-t border-slate-700/30 mt-3">
        <Link 
          to='/contact'
          onClick={() => handleNavClick('/contact')}   // ✅ Close menu on contact click
          className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/40 text-sm md:text-base"
        >
          Get Proposal
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </nav>
  </div>
</div>

      </div>
    </header>
  );
};

export default Header;