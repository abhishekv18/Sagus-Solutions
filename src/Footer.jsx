// import React from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   Phone, 
//   Mail, 
//   MapPin, 
//   Facebook, 
//   Twitter, 
//   Linkedin, 
//   Instagram,
//   Github,
//   Send,
//   Heart,
//   X
// } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   // Quick links
//   const quickLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Services', path: '/services' },
//     { name: 'Our Work', path: '/our-work' },
//     { name: 'About Us', path: '/about' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   // Services links
//   const services = [
//     { name: 'Web Development',  },
//     { name: 'Mobile Apps', },
//     { name: 'UI/UX Design',  },
//     { name: 'A.I Chatbot',  },
//     { name: 'Video Editing', },
//   ];

//   // Social media links
//   const socialLinks = [
//     { icon: <Facebook className="w-5 h-5" />, url: 'https://facebook.com/', name: 'Facebook' },
//     { icon: <X className="w-5 h-5" />, url: 'https://x.com/SagusSolut39764', name: 'Twitter' },
//     { icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/sagus-solutions-8030b0380/', name: 'LinkedIn' },
//     { icon: <Instagram className="w-5 h-5" />, url: 'https://www.instagram.com/sagus_solutions?igsh=cHBvNjV3NnpyN3U4', name: 'Instagram' },
//     // { icon: <Github className="w-5 h-5" />, url: 'https://github.com/sagussolutions', name: 'GitHub' },
//   ];

//   return (
//     <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
//           {/* Company Info */}
//           <div className="lg:col-span-1">
//             <Link to="/" className="flex items-center space-x-3 mb-6">
//               <img 
//                 src="/sagus[1].png" 
//                 alt="SAGUS SOLUTIONS" 
//                 className="h-10 w-auto"
//               />
//               <div className="flex flex-col">
//                 <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
//                   SAGUS
//                 </span>
//                 <span className="text-slate-400 text-sm">DIGITAL SOLUTIONS</span>
//               </div>
//             </Link>
            
//             <p className="text-slate-400 mb-6 leading-relaxed">
//               Transforming ideas into innovative digital solutions. We help businesses thrive in the digital world with cutting-edge technology and creative design.
//             </p>
            
//             <div className="flex space-x-4">
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 flex items-center justify-center bg-slate-800/50 hover:bg-teal-500/20 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/10"
//                   aria-label={social.name}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
//               <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
//               Quick Links
//             </h3>
//             <ul className="space-y-3">
//               {quickLinks.map((link, index) => (
//                 <li key={index}>
//                   <Link 
//                     to={link.path} 
//                     className="text-slate-400 hover:text-teal-400 transition-colors duration-300 flex items-center group"
//                   >
//                     <div className="w-1 h-1 bg-slate-600 rounded-full mr-3 group-hover:bg-teal-400 transition-colors duration-300"></div>
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
//               <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
//               Our Services
//             </h3>
//             <ul className="space-y-3">
//               {services.map((service, index) => (
//                 <li key={index}>
//                   <Link 
//                     to={service.path} 
//                     className="text-slate-400 hover:text-green-400 transition-colors duration-300 flex items-center group"
//                   >
//                     <div className="w-1 h-1 bg-slate-600 rounded-full mr-3 group-hover:bg-green-400 transition-colors duration-300"></div>
//                     {service.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info & Newsletter */}
//           <div>
//             <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
//               <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
//               Get In Touch
//             </h3>
            
//             <div className="space-y-4 mb-6">
//               <div className="flex items-start">
//                <a 
//   href="https://www.google.com/maps/place/Muradnagar,+Ghaziabad,+Uttar+Pradesh+201206" 
//   target="_blank" 
//   rel="noopener noreferrer"
//   className="flex items-center text-slate-400 hover:text-teal-400 transition-colors duration-300"
// >
//   <MapPin className="w-5 h-5 text-teal-400 mr-3 mt-1 flex-shrink-0" />
//   <span>Muradnagar, Ghaziabad, Uttar Pradesh 201206</span>
// </a>

//               </div>
              
//               <div className="flex items-center">
//                 <Phone className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
//                 <a href="tel:+918604050163" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
//                   +91 8604050163
//                 </a>
//               </div>
              
//               <div className="flex items-center">
//                 <Mail className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
//                 <a href="mailto:sagussolutions@gmail.com" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
//                   sagussolutions@gmail.com
//                 </a>
//               </div>
//             </div>

//             {/* Newsletter Subscription */}
//             {/* <div className="bg-slate-800/30 p-4 rounded-lg">
//               <h4 className="text-sm font-semibold mb-3 text-white">Subscribe to Newsletter</h4>
//               <div className="flex">
//                 <input 
//                   type="email" 
//                   placeholder="Your email" 
//                   className="flex-1 bg-slate-700/50 border border-slate-600 text-white text-sm rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                 />
//                 <button className="bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-400 hover:to-green-400 text-white p-2 rounded-r-lg transition-all duration-300">
//                   <Send className="w-5 h-5" />
//                 </button>
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </div>

//       {/* Bottom Footer */}
//       <div className="border-t border-slate-800/50">
//         <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-slate-500 text-sm mb-4 md:mb-0">
//               © {currentYear} SAGUS Solutions. All rights reserved.
//             </p>
            
//             <div className="flex items-center space-x-6 text-sm text-slate-500">
//               <a href="" className="hover:text-teal-400 transition-colors duration-300">
//                 Privacy Policy
//               </a>
//               <a href="" className="hover:text-teal-400 transition-colors duration-300">
//                 Terms of Service
//               </a>
//               <a href="" className="hover:text-teal-400 transition-colors duration-300">
//                 Cookie Policy
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Made with love */}
//       <div className="bg-slate-900/80 py-3 text-center">
//         <p className="text-slate-500 text-sm flex items-center justify-center">
//           Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by SAGUS Solutions Team
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Github,
  Send,
  Heart,
  X
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Quick links
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Services links
  const services = [
    { name: 'Web Development' },
    { name: 'Mobile Apps' },
    { name: 'UI/UX Design' },
    { name: 'A.I Chatbot' },
    { name: 'Video Editing' },
  ];

  // Social media links
  const socialLinks = [
    { icon: <Facebook className="w-4 h-4 md:w-5 md:h-5" />, url: 'https://www.facebook.com/share/1B6jEFiA1S/', name: 'Facebook' },
    { icon: <X className="w-4 h-4 md:w-5 md:h-5" />, url: 'https://x.com/SagusSolut39764', name: 'Twitter' },
    { icon: <Linkedin className="w-4 h-4 md:w-5 md:h-5" />, url: 'https://www.linkedin.com/in/sagus-solutions-8030b0380/', name: 'LinkedIn' },
    { icon: <Instagram className="w-4 h-4 md:w-5 md:h-5" />, url: 'https://www.instagram.com/sagus_solutions?igsh=cHBvNjV3NnpyN3U4', name: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 md:space-x-3 mb-4 md:mb-6">
              <img 
                src="/sagus[1].png" 
                alt="SAGUS SOLUTIONS" 
                className="h-8 md:h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
                  SAGUS
                </span>
                <span className="text-slate-400 text-xs md:text-sm">DIGITAL SOLUTIONS</span>
              </div>
            </Link>
            
            <p className="text-slate-400 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Transforming ideas into innovative digital solutions. We help businesses thrive in the digital world with cutting-edge technology and creative design.
            </p>
            
            <div className="flex space-x-3 md:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-slate-800/50 hover:bg-teal-500/20 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/10"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white flex items-center">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-teal-500 rounded-full mr-2 md:mr-3"></div>
              Quick Links
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-slate-400 hover:text-teal-400 transition-colors duration-300 flex items-center group text-sm md:text-base"
                  >
                    <div className="w-1 h-1 bg-slate-600 rounded-full mr-2 md:mr-3 group-hover:bg-teal-400 transition-colors duration-300"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white flex items-center">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full mr-2 md:mr-3"></div>
              Our Services
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/services" 
                    className="text-slate-400 hover:text-green-400 transition-colors duration-300 flex items-center group text-sm md:text-base"
                  >
                    <div className="w-1 h-1 bg-slate-600 rounded-full mr-2 md:mr-3 group-hover:bg-green-400 transition-colors duration-300"></div>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white flex items-center">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full mr-2 md:mr-3"></div>
              Get In Touch
            </h3>
            
            <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
              <div className="flex items-start">
                <a 
                  href="https://www.google.com/maps/place/Muradnagar,+Ghaziabad,+Uttar+Pradesh+201206" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-400 hover:text-teal-400 transition-colors duration-300 text-sm md:text-base"
                >
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-teal-400 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                  <span>Muradnagar, Ghaziabad, Uttar Pradesh 201206</span>
                </a>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-teal-400 mr-2 md:mr-3 flex-shrink-0" />
                <a href="tel:+918604050163" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 text-sm md:text-base">
                  +91 8604050163
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-teal-400 mr-2 md:mr-3 flex-shrink-0" />
                <a href="mailto:sagus.solutions@sagussolutions.info" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 text-sm md:text-base">
                  sagus.solutions@sagussolutions.info
                </a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            {/* <div className="bg-slate-800/30 p-3 md:p-4 rounded-lg">
              <h4 className="text-xs md:text-sm font-semibold mb-2 md:mb-3 text-white">Subscribe to Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 bg-slate-700/50 border border-slate-600 text-white text-xs md:text-sm rounded-l-lg px-3 md:px-4 py-1.5 md:py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-400 hover:to-green-400 text-white p-1.5 md:p-2 rounded-r-lg transition-all duration-300">
                  <Send className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-xs md:text-sm mb-3 md:mb-0 text-center md:text-left">
              © {currentYear} SAGUS Solutions. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4 md:space-x-6 text-xs md:text-sm text-slate-500">
              <a href="#" className="hover:text-teal-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Made with love */}
      <div className="bg-slate-900/80 py-2 md:py-3 text-center">
        <p className="text-slate-500 text-xs md:text-sm flex items-center justify-center">
          Made with <Heart className="w-3 h-3 md:w-4 md:h-4 text-red-500 mx-1" /> by SAGUS Solutions Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;