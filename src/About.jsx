
// import React, { useState, useEffect } from 'react';
// import { 
//   Target, 
//   Users, 
//   Award, 
//   Globe, 
//   Heart, 
//   Zap, 
//   Lightbulb,
//   TrendingUp,
//   Shield,
//   Clock,
//   Code,
//   Palette,
//   Smartphone,
//   BarChart3,
//   MessageCircle,
//   Brain,
//   Video,
//   FileText,
//   Cloud,
//   Database,
//   Search,
//   Rocket,
//   Star,
//   ChevronRight,
//   ArrowRight,
//   Play,
//   Projector
// } from 'lucide-react';
// import Header from './Header';
// import Footer from './Footer';
// import { Link } from 'react-router-dom';

// const About = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [counters, setCounters] = useState({ 
//     projects: 0, 
//     satisfaction: 0, 
//     technologies: 0, 
//     users: 0 
//   });

//   useEffect(() => {
//     setIsVisible(true);
    
//     // Animated counters with Intersection Observer
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             // Start counting when stats section is visible
//             animateCounter(26, 'projects', 2000);
//             animateCounter(98, 'satisfaction', 2000);
//             animateCounter(50, 'technologies', 2000);
//             animateCounter(3, 'users', 2000);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     const statsSection = document.getElementById('stats-section');
//     if (statsSection) {
//       observer.observe(statsSection);
//     }

//     return () => {
//       if (statsSection) {
//         observer.unobserve(statsSection);
//       }
//     };
//   }, []);

//   const animateCounter = (target, key, duration = 2000) => {
//     const startTime = performance.now();
//     const startValue = 0;
    
//     const updateCounter = (currentTime) => {
//       const elapsedTime = currentTime - startTime;
//       const progress = Math.min(elapsedTime / duration, 1);
      
//       // Easing function for smooth animation
//       const easeOutQuart = 1 - Math.pow(1 - progress, 4);
//       const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);
      
//       setCounters(prev => ({ ...prev, [key]: currentValue }));
      
//       if (progress < 1) {
//         requestAnimationFrame(updateCounter);
//       } else {
//         // Ensure final value is exact
//         setCounters(prev => ({ ...prev, [key]: target }));
//       }
//     };
    
//     requestAnimationFrame(updateCounter);
//   };

//   const teamMembers = [
//     {
//       name: "Gaurav Mishra",
//       role: "CEO & Founder",
//       image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//       expertise: "Digital Strategy & Leadership",
//       bio: "3+ years transforming businesses through technology"
//     },
//     {
//       name: "Shrish Agrawal",
//       role: "A.I & ML Specialist",
//       image: "/WhatsApp Image 2025-08-24 at 00.47.03_dc1c7e13.jpg",
//       expertise: "Technology Architecture & Innovation",
//       bio: "Expert in scalable systems and emerging technologies"
//     },
//     {
//       name: "Abhishek Agrawal",
//       role: "Full Stack Developer",
//       image: "/WhatsApp Image 2024-04-27 at 17.33.55_b101b408.jpg",
//       expertise: "UI/UX Design & Brand Strategy",
//       bio: "Award-winning designer with global experience"
//     },
//     {
//       name: "Udit Mishra",
//       role: "Content Writer",
//       image: "/WhatsApp Image 2025-08-23 at 21.32.33_5288d819.jpg",
//       expertise: "Full-Stack Development & DevOps",
//       bio: "Building robust solutions with modern technologies"
//     },
//     {
//       name: "Sujal Mishra",
//       role: "Marketing Head",
//       image: "/WhatsApp Image 2025-08-24 at 00.44.42_92c0c5a0.jpg",
//       expertise: "Digital Marketing & Analytics",
//       bio: "Data-driven marketing strategies that deliver results"
//     }
//   ];

//   const values = [
//     {
//       icon: <Target className="w-8 h-8" />,
//       title: "Excellence",
//       description: "We strive for perfection in every project, delivering exceptional quality that exceeds expectations.",
//       color: "from-teal-500 to-green-500"
//     },
//     {
//       icon: <Lightbulb className="w-8 h-8" />,
//       title: "Innovation",
//       description: "We embrace cutting-edge technologies and creative approaches to solve complex business challenges.",
//       color: "from-green-500 to-teal-500"
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: "Growth",
//       description: "We're committed to driving sustainable growth for our clients through strategic digital transformation.",
//       color: "from-teal-500 to-green-500"
//     },
//     {
//       icon: <Heart className="w-8 h-8" />,
//       title: "Partnership",
//       description: "We build lasting relationships by deeply understanding our clients' unique needs and challenges.",
//       color: "from-green-500 to-teal-500"
//     },
//     {
//       icon: <Award className="w-8 h-8" />,
//       title: "Results",
//       description: "We measure success by the tangible impact and measurable results we deliver for our clients.",
//       color: "from-teal-500 to-green-500"
//     },
//     {
//       icon: <Globe className="w-8 h-8" />,
//       title: "Impact",
//       description: "We leverage our expertise to create positive change in businesses and communities worldwide.",
//       color: "from-green-500 to-teal-500"
//     }
//   ];

//   const stats = [
//     { number: counters.projects, suffix: "+", color: "teal", label: "Projects Delivered", icon: <Rocket className="w-6 h-6" /> },
//     { number: counters.satisfaction, suffix: "%", color: "green", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
//     { number: counters.technologies, suffix: "+", color: "blue", label: "Technologies", icon: <Code className="w-6 h-6" /> },
//     { number: counters.users, suffix: "K+", color: "purple", label: "Users Reached", icon: <Users className="w-6 h-6" /> }
//   ];

//   const approach = [
//     {
//       step: "01",
//       color: "teal",
//       title: "Discovery & Strategy",
//       description: "We dive deep into understanding your business goals, challenges, and target audience to craft the perfect strategy.",
//       icon: <Search className="w-8 h-8" />
//     },
//     {
//       step: "02", 
//       color: "green",
//       title: "Design & Planning",
//       description: "Our creative team designs intuitive experiences while our technical team plans the robust architecture.",
//       icon: <Palette className="w-8 h-8" />
//     },
//     {
//       step: "03",
//       color: "blue",
//       title: "Development & Testing",
//       description: "We build your solution using best practices, with rigorous testing to ensure quality and performance.",
//       icon: <Code className="w-8 h-8" />
//     },
//     {
//       step: "04",
//       color: "purple",
//       title: "Launch & Support",
//       description: "We handle the launch seamlessly and provide ongoing support to ensure continued success.",
//       icon: <Rocket className="w-8 h-8" />
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
//       {/* Hero Section */}
    
//       <section className="pt-32 pb-20 px-5 sm:px-6 lg:px-8 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 via-green-600/5 to-teal-600/5"></div>
//         <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-teal-400/10 to-green-400/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-teal-400/10 to-green-400/10 rounded-full blur-3xl"></div>
        
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-100 via-green-100 to-teal-100 text-slate-700 rounded-full text-sm font-semibold mb-8 shadow-lg backdrop-blur-sm border border-white/20">
//               <Users className="w-4 h-4 mr-2 text-teal-600" />
//               Meet the Team Behind Innovation
//             </div>
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-slate-900 leading-tight">
//               About{' '}
//               <span className="bg-gradient-to-r from-teal-600 via-green-600 to-teal-600 bg-clip-text text-transparent relative">
//                 SAGUS Solutions
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
//               Pioneering digital transformation with innovative solutions that drive measurable business growth
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
//               <div className="relative group">
//                 <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 via-green-600/20 to-teal-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
//                 <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//                   <img 
//                     src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop" 
//                     alt="SAGUS Solutions Team Collaboration" 
//                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
//                   <div className="absolute bottom-6 left-6 right-6">
//                     <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
//                       <p className="text-slate-800 font-semibold">Innovation in Action</p>
//                       <p className="text-slate-600 text-sm">Our collaborative approach drives exceptional results</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
//               <h2 className="text-4xl font-bold text-slate-900 mb-8">Crafting Digital Excellence</h2>
//               <p className="text-lg text-slate-600 mb-6 leading-relaxed">
//                 SAGUS Solutions stands at the forefront of digital innovation, transforming businesses through strategic technology implementation. We are a collective of visionary developers, creative designers, and strategic thinkers who believe in technology's power to revolutionize how businesses connect with their audiences.
//               </p>
//               <p className="text-lg text-slate-600 mb-8 leading-relaxed">
//                 Our foundation rests on five core pillars that define our identity: <span className="font-semibold text-teal-600">S</span>trategy, <span className="font-semibold text-green-600">A</span>gility, <span className="font-semibold text-teal-600">G</span>rowth, <span className="font-semibold text-green-600">U</span>nderstanding, and <span className="font-semibold text-teal-600">S</span>uccess.
//               </p>
              
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300">
//                   <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl flex items-center justify-center text-white shadow-lg">
//                     <Zap className="w-6 h-6" />
//                   </div>
//                   <span className="text-slate-700 font-semibold">Innovation-Driven Solutions</span>
//                   <ChevronRight className="w-5 h-5 text-slate-400 ml-auto" />
//                 </div>
                
//                 <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300">
//                   <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl flex items-center justify-center text-white shadow-lg">
//                     <Target className="w-6 h-6" />
//                   </div>
//                   <span className="text-slate-700 font-semibold">Results-Focused Approach</span>
//                   <ChevronRight className="w-5 h-5 text-slate-400 ml-auto" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section id="stats-section" className="py-20 bg-white/50 backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className={`text-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100/50 group`}>
//                 <div className={`w-20 h-20 bg-${stat.color}-100 rounded-2xl flex items-center justify-center text-${stat.color}-600 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
//                   {stat.icon}
//                 </div>
//                 <div className={`text-4xl font-bold text-${stat.color}-600 mb-2`}>
//                   {stat.number}{stat.suffix}
//                 </div>
//                 <div className="text-slate-700 font-semibold">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
//         <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-100 to-green-100 text-slate-700 rounded-full text-sm font-semibold mb-8 shadow-lg">
//               <Heart className="w-4 h-4 mr-2 text-teal-600" />
//               Our DNA
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Core Values That Drive Us</h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//               The fundamental principles that shape our culture and guide every decision we make
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {values.map((value, index) => (
//               <div 
//                 key={index}
//                 className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-white/20 overflow-hidden"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
//                 <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
//                   {value.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">{value.title}</h3>
//                 <p className="text-slate-600 leading-relaxed">{value.description}</p>
//                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Approach Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Our Proven Process</h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//               A methodical approach that ensures exceptional results every time
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-8">
//             {approach.map((step, index) => (
//               <div key={index} className="group relative">
//                 <div className="flex items-start space-x-6 p-8 bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100/50">
//                   <div className="flex-shrink-0">
//                     <div className={`w-16 h-16 bg-${step.color}-100 text-${step.color}-600 rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                       {step.step}
//                     </div>
//                   </div>
//                   <div className="flex-grow">
//                     <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">{step.title}</h3>
//                     <p className="text-slate-600 leading-relaxed mb-4">{step.description}</p>
//                     <div className={`w-12 h-12 bg-${step.color}-100 rounded-xl flex items-center justify-center text-${step.color}-600`}>
//                       {step.icon}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
//         <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-100 to-green-100 text-slate-700 rounded-full text-sm font-semibold mb-8 shadow-lg">
//               <Users className="w-4 h-4 mr-2 text-teal-600" />
//               Our Dream Team
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Meet Our Visionaries</h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//               The brilliant minds driving innovation and excellence at SAGUS Solutions
//             </p>
//           </div>

//          <div className="space-y-16">

//   {/* First member centered */}
//   <div className="flex justify-center">
//     <div className="group text-center">
//       <div className="relative mb-6 mx-auto w-fit">
//         <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 via-green-600/20 to-teal-600/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
//         <img 
//           src={teamMembers[0].image} 
//           alt={teamMembers[0].name}
//           className="relative w-40 h-40 rounded-full object-cover shadow-2xl group-hover:scale-105 transition-all duration-500 border-4 border-white"
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-green-400/20 to-teal-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//       </div>
//       <div className="space-y-2">
//         <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors duration-300">{teamMembers[0].name}</h3>
//         <p className="text-teal-600 font-semibold">{teamMembers[0].role}</p>
//         <p className="text-slate-600 font-medium text-sm">{teamMembers[0].expertise}</p>
//         <p className="text-slate-500 text-sm italic">{teamMembers[0].bio}</p>
//       </div>
//     </div>
//   </div>

//   {/* Next four members in grid */}
//   <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
//     {teamMembers.slice(1).map((member, index) => (
//       <div key={index} className="group text-center">
//         <div className="relative mb-6 mx-auto w-fit">
//           <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 via-green-600/20 to-teal-600/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
//           <img 
//             src={member.image} 
//             alt={member.name}
//             className="relative w-40 h-40 rounded-full object-cover shadow-2xl group-hover:scale-105 transition-all duration-500 border-4 border-white"
//           />
//           <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-green-400/20 to-teal-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//         </div>
//         <div className="space-y-2">
//           <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors duration-300">{member.name}</h3>
//           <p className="text-teal-600 font-semibold">{member.role}</p>
//           <p className="text-slate-600 font-medium text-sm">{member.expertise}</p>
//           <p className="text-slate-500 text-sm italic">{member.bio}</p>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>

//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-5 sm:px-6 lg:px-8">
//         <div className="max-w-5xl mx-auto relative">
//           <div className="bg-gradient-to-r from-teal-600 via-green-600 to-teal-600 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden shadow-2xl">
//             <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
//             <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-20 translate-y-20"></div>
            
//             <div className="text-center relative z-10">
//               <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Transform Your Vision?</h2>
//               <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
//                 Let's collaborate to turn your digital dreams into reality with cutting-edge solutions
//               </p>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center">
//                 <Link to='/contact'>
//                  <button className="group px-10 py-4 bg-white text-teal-600 font-bold rounded-2xl hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center">
//                   <span>Start Your Journey</span>
//                   <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//                 </button>
//                 </Link>
//                <Link to='/our-work'>
//                 <button className="group px-10 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center justify-center">
//                   <Projector className="w-5 h-5 mr-2" />
//                   <span>View Projects</span>
//                 </button>
//                </Link>
               
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
     
//     </div>
//   );
// };

// export default About;


import React, { useState, useEffect } from 'react';
import { 
  Target, 
  Users, 
  Award, 
  Globe, 
  Heart, 
  Zap, 
  Lightbulb,
  TrendingUp,
  Shield,
  Clock,
  Code,
  Palette,
  Smartphone,
  BarChart3,
  MessageCircle,
  Brain,
  Video,
  FileText,
  Cloud,
  Database,
  Search,
  Rocket,
  Star,
  ChevronRight,
  ArrowRight,
  Play,
  Projector
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ 
    projects: 0, 
    satisfaction: 0, 
    technologies: 0, 
    users: 0 
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    
    // Animated counters with Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start counting when stats section is visible
            animateCounter(50, 'projects', 2000);
            animateCounter(98, 'satisfaction', 2000);
            animateCounter(50, 'technologies', 2000);
            animateCounter(10, 'users', 2000);
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, []);

  const animateCounter = (target, key, duration = 2000) => {
    const startTime = performance.now();
    const startValue = 0;
    
    const updateCounter = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);
      
      setCounters(prev => ({ ...prev, [key]: currentValue }));
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        // Ensure final value is exact
        setCounters(prev => ({ ...prev, [key]: target }));
      }
    };
    
    requestAnimationFrame(updateCounter);
  };

  // const teamMembers = [
  //   {
  //     name: "Gaurav Mishra",
  //     role: "CEO & Founder",
  //     image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  //     expertise: "Digital Strategy & Website Developer",
  //     bio: "3+ years transforming businesses through technology"
  //   },
  //   {
  //     name: "Shrish Agrawal",
  //     role: "A.I & ML Specialist",
  //     image: "/WhatsApp Image 2025-08-24 at 00.47.03_dc1c7e13.jpg",
  //     expertise: "Technology Architecture & Innovation",
  //     bio: "Expert in scalable systems and emerging technologies"
  //   },
  //   {
  //     name: "Abhishek Agrawal",
  //     role: "Full Stack Developer",
  //     image: "/WhatsApp Image 2024-04-27 at 17.33.55_b101b408.jpg",
  //     expertise: "UI/UX Design & Brand Strategy",
  //     bio: "Award-winning designer with global experience"
  //   },
  //   {
  //     name: "Udit Mishra",
  //     role: "Content Creator & No Code Developer",
  //     image: "/WhatsApp Image 2025-08-23 at 21.32.33_5288d819.jpg",
  //     expertise: "Full-Stack Development & DevOps",
  //     bio: "Building robust solutions with modern technologies"
  //   },
  //   {
  //     name: "Sujal Mishra",
  //     role: "Marketing Head & App Developer",
  //     image: "/WhatsApp Image 2025-08-24 at 00.44.42_92c0c5a0.jpg",
  //     expertise: "Digital Marketing & Analytics",
  //     bio: "Data-driven marketing strategies that deliver results"
  //   }
  // ];
 const teamMembers = [
    {
      name: "Gaurav Mishra",
    role: "Certified Market Analyst & Client Relations",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      expertise: "Digital Strategy & Website Developer",
      bio: "5+ years transforming businesses through technology"
    },
    {
      name: "Shrish Agrawal",
      role: "A.I & ML Specialist",
      image: "/WhatsApp Image 2025-08-24 at 00.47.03_dc1c7e13.jpg",
      expertise: "Technology Architecture & Innovation",
      bio: "Expert in scalable systems and emerging technologies"
    },
    {
      name: "Abhishek Agrawal",
      role: "Full Stack Developer",
      image: "/WhatsApp Image 2024-04-27 at 17.33.55_b101b408.jpg",
      expertise: "UI/UX Design & Brand Strategy",
      bio: "Award-winning designer with global experience"
    },
    {
      name: "Udit Mishra",
      role: "Content Creator & No Code Developer",
      image: "/WhatsApp Image 2025-08-23 at 21.32.33_5288d819.jpg",
      expertise: "Full-Stack Development & DevOps",
      bio: "Building robust solutions with modern technologies"
    },
    {
      name: "Sujal Mishra",
      role: "Marketing Head & App Developer",
      image: "/WhatsApp Image 2025-08-24 at 00.44.42_92c0c5a0.jpg",
      expertise: "Digital Marketing & Analytics",
      bio: "Data-driven marketing strategies that deliver results"
    }
  ];
  const values = [
    {
      icon: <Target className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Excellence",
      description: "We strive for perfection in every project, delivering exceptional quality that exceeds expectations.",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: <Lightbulb className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative approaches to solve complex business challenges.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Growth",
      description: "We're committed to driving sustainable growth for our clients through strategic digital transformation.",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Partnership",
      description: "We build lasting relationships by deeply understanding our clients' unique needs and challenges.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Award className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Results",
      description: "We measure success by the tangible impact and measurable results we deliver for our clients.",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: <Globe className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Impact",
      description: "We leverage our expertise to create positive change in businesses and communities worldwide.",
      color: "from-green-500 to-teal-500"
    }
  ];

  const stats = [
    { number: counters.projects, suffix: "+", color: "teal", label: "Projects Delivered", icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" /> },
    { number: counters.satisfaction, suffix: "%", color: "green", label: "Client Satisfaction", icon: <Star className="w-5 h-5 md:w-6 md:h-6" /> },
    { number: counters.technologies, suffix: "+", color: "blue", label: "Technologies", icon: <Code className="w-5 h-5 md:w-6 md:h-6" /> },
    { number: counters.users, suffix: "K+", color: "purple", label: "Users Reached", icon: <Users className="w-5 h-5 md:w-6 md:h-6" /> }
  ];

  const approach = [
    {
      step: "01",
      color: "teal",
      title: "Discovery & Strategy",
      description: "We dive deep into understanding your business goals, challenges, and target audience to craft the perfect strategy.",
      icon: <Search className="w-6 h-6 md:w-8 md:h-8" />
    },
    {
      step: "02", 
      color: "green",
      title: "Design & Planning",
      description: "Our creative team designs intuitive experiences while our technical team plans the robust architecture.",
      icon: <Palette className="w-6 h-6 md:w-8 md:h-8" />
    },
    {
      step: "03",
      color: "blue",
      title: "Development & Testing",
      description: "We build your solution using best practices, with rigorous testing to ensure quality and performance.",
      icon: <Code className="w-6 h-6 md:w-8 md:h-8" />
    },
    {
      step: "04",
      color: "purple",
      title: "Launch & Support",
      description: "We handle the launch seamlessly and provide ongoing support to ensure continued success.",
      icon: <Rocket className="w-6 h-6 md:w-8 md:h-8" />
    }
  ];

  return (
    <>
    <Helmet>
  <title>Sagus Solutions | About Us – Innovative Digital Agency</title>
  <meta name="title" content="Sagus Solutions | About Us – Innovative Digital Agency" />
  <meta name="description" content="Learn about Sagus Solutions, a creative digital agency providing web development, AI automation, app development, content creation, and chatbot integration to help businesses thrive." />
  <link rel="canonical" href="https://www.sagussolutions.info/about" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.sagussolutions.info/about" />
  <meta property="og:title" content="Sagus Solutions | About Us – Innovative Digital Agency" />
  <meta property="og:description" content="Discover Sagus Solutions – a digital agency delivering web, app, AI, and content solutions to help businesses succeed online." />
  <meta property="og:image" content="https://www.sagussolutions.info/sagus[1].png" />
  <meta property="og:image:alt" content="Sagus Solutions Logo" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Sagus Solutions | About Us – Innovative Digital Agency" />
  <meta name="twitter:description" content="Get to know Sagus Solutions, the digital agency offering websites, apps, AI automation, content creation, and chatbot integration." />
  <meta name="twitter:image" content="https://www.sagussolutions.info/sagus[1].png" />
</Helmet>

    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
   
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 via-green-600/5 to-teal-600/5"></div>
        <div className="absolute top-10 md:top-20 left-4 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-teal-400/10 to-green-400/10 rounded-full blur-2xl md:blur-3xl"></div>
        <div className="absolute bottom-10 md:bottom-20 right-4 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-teal-400/10 to-green-400/10 rounded-full blur-2xl md:blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-teal-100 via-green-100 to-teal-100 text-slate-700 rounded-full text-xs md:text-sm font-semibold mb-6 md:mb-8 shadow-lg backdrop-blur-sm border border-white/20">
              <Users className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-teal-600" />
              Meet the Team Behind Innovation
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 text-slate-900 leading-tight">
              About{' '}
              <span className="bg-gradient-to-r from-teal-600 via-green-600 to-teal-600 bg-clip-text text-transparent relative">
                SAGUS Solutions
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Pioneering digital transformation with innovative solutions that drive measurable business growth
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 via-green-600/20 to-teal-600/20 rounded-2xl md:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop" 
                    alt="SAGUS Solutions Team Collaboration" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-slate-800 font-semibold text-sm md:text-base">Innovation in Action</p>
                      <p className="text-slate-600 text-xs md:text-sm">Our collaborative approach drives exceptional results</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 md:mb-8">Crafting Digital Excellence</h2>
              <p className="text-base md:text-lg text-slate-600 mb-4 md:mb-6 leading-relaxed">
                SAGUS Solutions stands at the forefront of digital innovation, transforming businesses through strategic technology implementation. We are a collective of visionary developers, creative designers, and strategic thinkers who believe in technology's power to revolutionize how businesses connect with their audiences.
              </p>
              <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
                Our foundation rests on five core pillars that define our identity: <span className="font-semibold text-teal-600">S</span>trategy, <span className="font-semibold text-green-600">A</span>gility, <span className="font-semibold text-teal-600">G</span>rowth, <span className="font-semibold text-green-600">U</span>nderstanding, and <span className="font-semibold text-teal-600">S</span>uccess.
              </p>
              
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg md:rounded-xl flex items-center justify-center text-white shadow-lg">
                    <Zap className="w-4 h-4 md:w-6 md:h-6" />
                  </div>
                  <span className="text-slate-700 font-semibold text-sm md:text-base">Innovation-Driven Solutions</span>
                  {/* <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-slate-400 ml-auto" /> */}
                </div>
                
                <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg md:rounded-xl flex items-center justify-center text-white shadow-lg">
                    <Target className="w-4 h-4 md:w-6 md:h-6" />
                  </div>
                  <span className="text-slate-700 font-semibold text-sm md:text-base">Results-Focused Approach</span>
                  {/* <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-slate-400 ml-auto" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-12 md:py-16 lg:py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center p-4 md:p-6 lg:p-8 bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 border border-slate-100/50 group`}>
                <div className={`w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-${stat.color}-100 rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center text-${stat.color}-600 mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md md:shadow-lg`}>
                  {stat.icon}
                </div>
                <div className={`text-2xl md:text-3xl lg:text-4xl font-bold text-${stat.color}-600 mb-1 md:mb-2`}>
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-slate-700 font-semibold text-xs md:text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-teal-100 to-green-100 text-slate-700 rounded-full text-xs md:text-sm font-semibold mb-6 md:mb-8 shadow-lg">
              <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-teal-600" />
              Our DNA
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-6 md:mb-8">Core Values That Drive Us</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              The fundamental principles that shape our culture and guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-700 hover:-translate-y-1 md:hover:-translate-y-2 lg:hover:-translate-y-3 border border-white/20 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className={`w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${value.color} rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md md:shadow-lg`}>
                  {value.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3 lg:mb-4 group-hover:text-teal-600 transition-colors duration-300">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">{value.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-6 md:mb-8">Our Proven Process</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              A methodical approach that ensures exceptional results every time
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {approach.map((step, index) => (
              <div key={index} className="group relative">
                <div className="flex items-start space-x-4 md:space-x-6 p-4 md:p-6 lg:p-8 bg-gradient-to-br from-slate-50 to-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100/50">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-${step.color}-100 text-${step.color}-600 rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center font-bold text-base md:text-lg lg:text-xl shadow-md md:shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mb-2 md:mb-3 lg:mb-4 group-hover:text-teal-600 transition-colors duration-300">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-3 md:mb-4">{step.description}</p>
                    <div className={`w-10 h-10 md:w-12 md:h-12 bg-${step.color}-100 rounded-lg md:rounded-xl flex items-center justify-center text-${step.color}-600`}>
                      {step.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-teal-100 to-green-100 text-slate-700 rounded-full text-xs md:text-sm font-semibold mb-6 md:mb-8 shadow-lg">
              <Users className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-teal-600" />
              Our Dream Team
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-6 md:mb-8">Meet Our Visionaries</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              The brilliant minds driving innovation and excellence at SAGUS Solutions
            </p>
          </div>

          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            {/* First member centered */}
            <div className="flex justify-center">
              <div className="group text-center">
                <div className="relative mb-4 md:mb-6 mx-auto w-fit">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 via-green-600/20 to-teal-600/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <img 
                    src={teamMembers[0].image} 
                    alt={teamMembers[0].name}
                    className="relative w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full object-cover shadow-xl md:shadow-2xl group-hover:scale-105 transition-all duration-500 border-4 border-white"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-green-400/20 to-teal-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors duration-300">{teamMembers[0].name}</h3>
                  <p className="text-teal-600 font-semibold text-sm md:text-base">{teamMembers[0].role}</p>
                  <p className="text-slate-600 font-medium text-xs md:text-sm">{teamMembers[0].expertise}</p>
                  <p className="text-slate-500 text-xs md:text-sm italic">{teamMembers[0].bio}</p>
                </div>
              </div>
            </div>

            {/* Next four members in grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10 justify-items-center">
              {teamMembers.slice(1).map((member, index) => (
                <div key={index} className="group text-center">
                  <div className="relative mb-4 md:mb-6 mx-auto w-fit">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 via-green-600/20 to-teal-600/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="relative w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full object-cover shadow-xl md:shadow-2xl group-hover:scale-105 transition-all duration-500 border-4 border-white"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-green-400/20 to-teal-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors duration-300">{member.name}</h3>
                    <p className="text-teal-600 font-semibold text-xs md:text-sm">{member.role}</p>
                    <p className="text-slate-600 font-medium text-xs md:text-sm">{member.expertise}</p>
                    <p className="text-slate-500 text-xs md:text-sm italic">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto relative">
          <div className="bg-gradient-to-r from-teal-600 via-green-600 to-teal-600 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 xl:p-12 text-white relative overflow-hidden shadow-xl md:shadow-2xl">
            <div className="absolute top-0 left-0 w-20 h-20 md:w-32 md:h-32 bg-white/10 rounded-full -translate-x-8 -translate-y-8 md:-translate-x-12 md:-translate-y-12"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 md:w-40 md:h-40 bg-white/10 rounded-full translate-x-8 translate-y-8 md:translate-x-16 md:translate-y-16"></div>
            
            <div className="text-center relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">Ready to Transform Your Vision?</h2>
              <p className="text-lg md:text-xl mb-8 md:mb-10 opacity-90 max-w-3xl mx-auto">
                Let's collaborate to turn your digital dreams into reality with cutting-edge solutions
              </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
  <Link to='/contact'>
    <button className="group px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 bg-white text-teal-600 font-bold rounded-xl md:rounded-2xl hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center text-sm md:text-base">
      <span>Start Your Journey</span>
      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
    </button>
  </Link>
  <Link to='/our-work'>
    <button className="group px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 border-2 border-white text-white font-bold rounded-xl md:rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center justify-center text-sm md:text-base">
      <Projector className="w-4 h-4 md:w-5 md:h-5 mr-2" />
      <span>View Projects</span>
    </button>
  </Link>
</div>

            </div>
          </div>
        </div>
      </section>
      
    
    </div>
    </>
    
  );
};

export default About;