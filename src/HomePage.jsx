
// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   ArrowRight, 
//   Zap, 
//   Shield, 
//   Cpu, 
//   Globe, 
//   Rocket,
//   CheckCircle,
//   Star,
//   Users,
//   TrendingUp,
//   Code,
//   Database,
//   Smartphone,
//   Cloud,
//   Play,
//   Award,
//   Target,
//   Lightbulb,
//   BarChart3,
//   MessageSquare,
//   ChevronRight,
//   ArrowUpRight,
//   Calendar,
//   Clock,
//   Mail,
//   Quote,
//   ChevronLeft,
//   Trophy,
//   Eye,
//   Phone,
//   Brain
// } from 'lucide-react';
// import Header from './Header';
// import Footer from './Footer';
// import HomeProjects from './HomeProjects';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);
//   const testimonialRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);


// const services = [
//  {
//       icon: "Code",
//       title: "Web Development", 
//       description: "Cutting-edge websites and web applications that drive business growth and deliver exceptional user experiences.",
//       features: ["React & Next.js Development", "Full-Stack Solutions", "E-commerce Platforms", "Progressive Web Apps"],
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
//       gradient: "from-blue-500 to-purple-600",
//       bgGradient: "from-blue-50 to-purple-50"
//     },
//     {
//       icon: "Smartphone",
//       title: "Mobile Development",
//       description: "Native and cross-platform mobile applications that engage users and scale your business across all devices.", 
//       features: ["iOS & Android Native", "React Native & Flutter", "UI/UX Design", "App Store Optimization"],
//       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&auto=format",
//       gradient: "from-emerald-500 to-teal-600",
//       bgGradient: "from-emerald-50 to-teal-50"
//     },
//     {
//       icon: "Brain", 
//       title: "AI & Automation",
//       description: "Intelligent AI systems and automation solutions that streamline operations and unlock new possibilities.",
//       features: ["AI Chatbots & Virtual Assistants", "Machine Learning Models", "Process Automation", "Predictive Analytics"],
//       image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&auto=format", 
//       gradient: "from-violet-500 to-pink-600",
//       bgGradient: "from-violet-50 to-pink-50"
//     },
//     {
//       icon: "Video",
//       title: "Content Creation", 
//       description: "Professional video editing and content creation services that captivate audiences and amplify your brand.",
//       features: ["Video Production & Editing", "Motion Graphics & Animation", "Social Media Content", "Brand Storytelling"],
//       image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop&auto=format",
//     gradient: "from-orange-500 to-red-600", 
//       bgGradient: "from-orange-50 to-red-50"
//     }
// ];


//   // const testimonials = [
//   //   {
//   //     name: "Sarah Johnson",
//   //     role: "CEO, TechStart Inc",
//   //     content: "SAGUS Solutions transformed our digital presence completely. Their technical expertise and attention to detail is unmatched.",
//   //     rating: 5,
//   //     image: "https://images.unsplash.com/photo-1494790108755-2616b25fb8cd?w=80&h=80&fit=crop&crop=face"
//   //   },
//   //   {
//   //     name: "Michael Chen",
//   //     role: "CTO, InnovateCorp",
//   //     content: "Working with SAGUS was a game-changer. They delivered our mobile app ahead of schedule and exceeded all expectations.",
//   //     rating: 5,
//   //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
//   //   },
//   //   {
//   //     name: "Emily Rodriguez",
//   //     role: "Founder, DataFlow Solutions",
//   //     content: "The cloud infrastructure they built for us scales perfectly with our growth. Highly recommend their services!",
//   //     rating: 5,
//   //     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
//   //   },
//   //   {
//   //     name: "David Wilson",
//   //     role: "Product Manager, GrowthLabs",
//   //     content: "Their data analytics solutions helped us uncover insights we never knew existed. Revenue increased by 37% in just 3 months.",
//   //     rating: 5,
//   //     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
//   //   }
//   // ];
// const testimonials = [
//   {
//     name: "Ramesh Gupta",
//     role: "Owner, Pindichap Junction",
//     content: "SAGUS Solutions built a professional and engaging website for our restaurant. Online orders and customer engagement have doubled since launch.",
//     rating: 5,
//     image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // male icon
//   },
//   {
//     name: "Aditya P Nikam",
//     role: "Director, Adiyogi Foundation",
//     content: "Their team helped us design a platform that beautifully represents our vision and teachings. The website has attracted thousands of new visitors.",
//     rating: 5,
//     image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // male icon
//   },
//   {
//     name: "Deepak Doddamani",
//     role: "Coordinator, Ashwamedh Foundation",
//     content: "From event management tools to donor tracking, SAGUS delivered exactly what we needed. Their solutions help us run operations smoothly and reach more people.",
//     rating: 5,
//     image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // male icon
//   },
//   {
//     name: "Matiunina Natalia",
//     role: "President, International Laity Association",
//     content: "SAGUS Solutions provided us with a robust digital platform that connects our members globally. The ease of use and reliability are exceptional.",
//     rating: 5,
//     image: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png" // female icon
//   }
// ];


//   const recentProjects = [
//     {
//       title: "E-commerce Platform",
//       category: "Web Development",
//       image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
//       description: "Modern e-commerce solution with AI-powered recommendations"
//     },
//     {
//       title: "Healthcare Mobile App",
//       category: "Mobile Development",
//       image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
//       description: "Telemedicine app connecting patients with doctors"
//     },
//     {
//       title: "Analytics Dashboard",
//       category: "Data Analytics",
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
//       description: "Real-time business intelligence dashboard"
//     }
//   ];

//   const processSteps = [
//     {
//       title: "Discovery & Planning",
//       description: "We analyze your requirements and create a detailed project roadmap",
//       icon: <Lightbulb className="w-8 h-8" />,
//       image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=300&fit=crop"
//     },
//     {
//       title: "Design & Development",
//       description: "Our team creates stunning designs and implements robust solutions",
//       icon: <Code className="w-8 h-8" />,
//       image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=400&h=300&fit=crop"
//     },
//     {
//       title: "Testing & Deployment",
//       description: "Rigorous testing ensures quality before seamless deployment",
//       icon: <CheckCircle className="w-8 h-8" />,
//       image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=300&fit=crop"
//     },
//     {
//       title: "Support & Maintenance",
//       description: "Ongoing support keeps your solution running smoothly",
//       icon: <Shield className="w-8 h-8" />,
//       image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=400&h=300&fit=crop"
//     }
//   ];


// const technologies = [
//   { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
//   { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
//   { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
//   { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
//   { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
//   { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
//   { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
//   { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
//   { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
//   { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
//   { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
//   { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" }
// ];
//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden">
//       <Header />
      
//       {/* Mouse follower effect */}
//       <div 
//         className="fixed w-96 h-96 pointer-events-none z-0 opacity-5"
//         style={{
//           left: mousePosition.x - 192,
//           top: mousePosition.y - 192,
//           background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
//           transition: 'left 0.1s, top 0.1s'
//         }}
//       />

//       {/* Hero Section - Professional Split Layout */}
//      {/* Hero Section - Split Layout */}
     
//  <section className="relative min-h-screen flex bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 text-slate-900 overflow-hidden pt-20">
//         {/* Content Side */}
//    <div className="flex-1 flex items-center justify-center px-5 sm:px-6 lg:px-8">
//   <div className="max-w-2xl">

// <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight mt-12">
//   <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
//     Your Vision,
//   </span>
//   <br />
//   <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent relative">
//     Our Digital{' '}
//     <span className="relative inline-block">
//       <span className="text-slate-900">Expertise.</span>
//       <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-green-400 rounded-full"></div>
//     </span>
//   </span>
// </h2>
//     {/* Subtitle */}
//     <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-xl">
//       Full-service digital agency specializing in web development, mobile apps, UI/UX design, and digital marketing solutions.
//     </p>

//     {/* CTA Buttons */}
    
//     <div className="flex flex-col sm:flex-row gap-6 mb-10">
      
//       <button 
//         onClick={() => window.location.href = '/contact'}
//         className="group relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-400 hover:to-green-400 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105 cursor-pointer"
//       >
//         Get Free Consultation
//         <Phone className="w-5 h-5 ml-3 group-hover:scale-110 transition-transform duration-300" />
//       </button>
      
//       <button 
//         onClick={() => window.location.href = '/services'}
//         className="group relative inline-flex items-center justify-center px-10 py-4 border-2 border-slate-300 text-slate-700 hover:border-teal-400 hover:text-teal-600 font-semibold rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
//       >
//         Explore Services
//         <ChevronRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
//       </button>
//     </div>

//     {/* Service highlights */}
//     <div className="grid grid-cols-2 gap-6 text-slate-600">
//       <div className="flex items-center">
//         <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
//         <span className="text-sm">Web Development</span>
//       </div>
//       <div className="flex items-center">
//         <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
//         <span className="text-sm">UI/UX Design</span>
//       </div>
//       <div className="flex items-center">
//         <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
//         <span className="text-sm">Mobile Apps</span>
//       </div>
//       <div className="flex items-center">
//         <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
//         <span className="text-sm">Content Creation</span>
//       </div>
//     </div>
//   </div>
// </div>

//         {/* Image Side - 3D Isometric Illustration */}
//        <div className="hidden lg:flex flex-1 relative items-center justify-center">
//   {/* Main 3D Scene Container */}
//   <div className="relative w-full h-full flex items-center justify-center">
    
//     {/* Main Workspace Platform */}
//     <div className="absolute" style={{ transform: 'translateX(20px) translateY(50px)' }}>
//       <div 
//         className="w-40 h-28 bg-gradient-to-br from-slate-600 to-slate-700 shadow-2xl rounded-xl"
//         style={{ 
//           transform: 'perspective(1000px) rotateX(60deg) rotateY(-15deg)',
//           transformStyle: 'preserve-3d'
//         }}
//       >
//         <div className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-xl transform translateZ(-12px)"></div>
//       </div>
      
//       {/* Main monitor setup */}
//       <div className="absolute -top-10 left-8 w-20 h-14 bg-gradient-to-b from-slate-800 to-black rounded-lg shadow-xl transform perspective-1000 rotateX(75deg)">
//         <div className="absolute top-1 left-1 w-18 h-12 bg-gradient-to-br from-blue-100 to-teal-100 rounded-md"></div>
//         <div className="absolute top-4 left-7 w-6 h-1 bg-blue-400 rounded-full"></div>
//       </div>
      
//       {/* Developer at workstation */}
//       <div className="absolute -top-16 left-12 w-8 h-8 bg-gradient-to-b from-teal-200 to-teal-300 rounded-full shadow-lg"></div>
//       <div className="absolute -top-10 left-10 w-12 h-6 bg-gradient-to-b from-slate-600 to-slate-700 rounded-t-lg shadow-md"></div>
//       <div className="absolute top-2 left-14 w-4 h-10 bg-gradient-to-b from-slate-400 to-slate-500 rounded shadow-sm"></div>
//     </div>

//     {/* Design Platform */}
//     <div className="absolute animate-float" style={{ transform: 'translateX(-60px) translateY(10px)', animationDelay: '0.5s' }}>
//       <div 
//         className="w-32 h-24 bg-gradient-to-br from-teal-500 to-teal-600 shadow-xl rounded-lg"
//         style={{ 
//           transform: 'perspective(1000px) rotateX(60deg) rotateY(-15deg)',
//           transformStyle: 'preserve-3d'
//         }}
//       >
//         <div className="absolute top-0 left-0 w-full h-full bg-teal-400 rounded-lg transform translateZ(-10px)"></div>
//       </div>
      
//       {/* Design tablet */}
//       <div className="absolute -top-8 left-6 w-16 h-12 bg-gradient-to-b from-slate-800 to-black rounded-md shadow-lg">
//         <div className="absolute top-1 left-1 w-14 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-sm"></div>
//         <div className="absolute top-5 left-7 w-2 h-2 bg-pink-400 rounded-full"></div>
//       </div>
      
//       {/* Designer */}
//       <div className="absolute -top-16 right-4 w-7 h-7 bg-gradient-to-b from-pink-200 to-pink-300 rounded-full shadow-lg"></div>
//       <div className="absolute -top-10 right-2 w-10 h-5 bg-gradient-to-b from-teal-300 to-teal-400 rounded-t-lg shadow-md"></div>
//     </div>

//     {/* Mobile Development Platform */}
//     <div className="absolute animate-bounce-slow" style={{ transform: 'translateX(-100px) translateY(70px)', animationDelay: '1s' }}>
//       <div 
//         className="w-28 h-20 bg-gradient-to-br from-green-500 to-green-600 shadow-xl rounded-lg"
//         style={{ 
//           transform: 'perspective(1000px) rotateX(60deg) rotateY(-15deg)',
//           transformStyle: 'preserve-3d'
//         }}
//       >
//         <div className="absolute top-0 left-0 w-full h-full bg-green-400 rounded-lg transform translateZ(-8px)"></div>
//       </div>
      
//       {/* Mobile devices */}
//       <div className="absolute -top-6 left-5 w-5 h-10 bg-black rounded-lg shadow-md">
//         <div className="absolute top-1 left-0.5 w-4 h-8 bg-gradient-to-br from-blue-50 to-green-50 rounded"></div>
//       </div>
//       <div className="absolute -top-8 left-12 w-6 h-12 bg-black rounded-xl shadow-md">
//         <div className="absolute top-1 left-0.5 w-5 h-10 bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg"></div>
//       </div>
      
//       {/* Mobile developer */}
//       <div className="absolute -top-14 right-3 w-6 h-6 bg-gradient-to-b from-yellow-200 to-yellow-300 rounded-full shadow-lg"></div>
//       <div className="absolute -top-9 right-1 w-8 h-4 bg-gradient-to-b from-green-300 to-green-400 rounded-t-lg shadow-md"></div>
//     </div>

//     {/* Server/Cloud Platform */}
//     <div className="absolute animate-pulse-slow" style={{ transform: 'translateX(80px) translateY(20px)', animationDelay: '1.5s' }}>
//       <div 
//         className="w-36 h-22 bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl rounded-lg"
//         style={{ 
//           transform: 'perspective(1000px) rotateX(60deg) rotateY(-15deg)',
//           transformStyle: 'preserve-3d'
//         }}
//       >
//         <div className="absolute top-0 left-0 w-full h-full bg-blue-400 rounded-lg transform translateZ(-10px)"></div>
//       </div>
      
//       {/* Server stack */}
//       <div className="absolute -top-8 left-8 w-20 h-6 bg-gradient-to-b from-slate-700 to-slate-800 rounded shadow-lg"></div>
//       <div className="absolute -top-2 left-6 w-24 h-6 bg-gradient-to-b from-slate-600 to-slate-700 rounded shadow-md"></div>
//       <div className="absolute top-4 left-10 w-16 h-6 bg-gradient-to-b from-slate-500 to-slate-600 rounded shadow-sm"></div>
      
//       {/* Cloud engineer */}
//       <div className="absolute -top-16 right-4 w-7 h-7 bg-gradient-to-b from-blue-200 to-blue-300 rounded-full shadow-lg"></div>
//       <div className="absolute -top-10 right-2 w-10 h-5 bg-gradient-to-b from-blue-300 to-blue-400 rounded-t-lg shadow-md"></div>
//     </div>

//     {/* Floating Digital Elements */}
//     <div className="absolute top-20 right-24 w-5 h-5 bg-gradient-to-br from-teal-300 to-teal-400 rounded-full shadow-lg animate-ping-slow" style={{ animationDelay: '2s' }}></div>
//     <div className="absolute bottom-28 left-20 w-4 h-4 bg-gradient-to-br from-green-300 to-green-400 rounded-full shadow-md animate-bounce-slow" style={{ animationDelay: '3s' }}></div>
//     <div className="absolute top-1/3 left-24 w-7 h-7 bg-gradient-to-br from-purple-300 to-purple-400 rounded-lg shadow-lg animate-pulse-slow" style={{ animationDelay: '2.5s' }}></div>

//     {/* Digital interface elements */}
//     <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-gradient-to-b from-blue-400 to-blue-500 rounded-full shadow-sm animate-pulse"></div>
//     <div className="absolute top-1/4 right-1/3 w-1.5 h-1.5 bg-white rounded-full transform translate-y-1 animate-ping" style={{ animationDelay: '1.2s' }}></div>
    
//     <div className="absolute bottom-1/4 left-1/4 w-4 h-3 bg-gradient-to-b from-teal-400 to-teal-500 rounded shadow-md"></div>
//     <div className="absolute bottom-1/4 left-1/4 w-1.5 h-5 bg-slate-400 rounded transform -translate-y-2 translate-x-1.5"></div>

//     {/* Data flow lines */}
//     <div className="absolute top-1/2 left-1/4 w-16 h-0.5 bg-gradient-to-r from-teal-400/50 to-transparent rounded-full animate-pulse" style={{ transform: 'rotate(45deg)' }}></div>
//     <div className="absolute top-2/5 right-1/4 w-12 h-0.5 bg-gradient-to-l from-green-400/50 to-transparent rounded-full animate-pulse" style={{ transform: 'rotate(-30deg)', animationDelay: '1.8s' }}></div>
//   </div>

//   {/* Animated background elements */}
//   <div className="absolute inset-0 opacity-15 pointer-events-none">
//     <div className="absolute top-1/4 left-12 w-10 h-10 border-2 border-teal-300/40 rounded-full animate-spin-slow"></div>
//     <div className="absolute bottom-1/3 right-20 w-8 h-8 border-2 border-green-300/40 rounded-lg animate-bounce-slow delay-1000"></div>
//     <div className="absolute top-2/3 left-1/3 w-6 h-6 bg-gradient-to-r from-teal-200/30 to-green-200/30 rounded-full animate-pulse-slow delay-1500"></div>
    
//     {/* Binary code animation */}
//     <div className="absolute top-1/5 right-20 text-teal-300/20 font-mono text-xs animate-pulse">
//       1010
//     </div>
//     <div className="absolute bottom-1/4 left-24 text-green-300/20 font-mono text-xs animate-pulse" style={{ animationDelay: '2s' }}>
//       1101
//     </div>
//   </div>
// </div>

//         {/* Custom CSS for animations */}
//         <style jsx>{`
//           @keyframes float {
//             0%, 100% { transform: translateY(0px) translateX(-40px); }
//             50% { transform: translateY(-15px) translateX(-40px); }
//           }
//           @keyframes spin-slow {
//             from { transform: rotate(0deg); }
//             to { transform: rotate(360deg); }
//           }
//           .animate-float {
//             animation: float 4s ease-in-out infinite;
//           }
//           .animate-spin-slow {
//             animation: spin-slow 15s linear infinite;
//           }
//           .perspective-1000 {
//             perspective: 1000px;
//           }
//         `}</style>
//       </section>
     
// <section className="relative py-24 px-5 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden" ref={sectionRef}>
//   {/* Background decorative elements */}
//   <div className="absolute inset-0 overflow-hidden">
//     <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-60 blur-3xl"></div>
//     <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full opacity-60 blur-3xl"></div>
//   </div>
  
//   <div className="relative max-w-7xl mx-auto">
//     <div className="text-center mb-20">
//       <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-100 to-green-100 text-slate-700 border border-blue-200/50 text-slate-700 rounded-full text-sm font-semibold mb-8 shadow-lg backdrop-blur-sm">
//         <Globe className="w-4 h-4 mr-2 text-teal-600" />
//         Our Expertise
//         {/* <div className="ml-2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div> */}
//       </div>
//       <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-slate-900 tracking-tight">
//         Services We Excel
//         {/* <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent"> Excel</span> */}
//       </h2>
//       <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
//         Comprehensive digital solutions engineered to transform your vision into reality
//       </p>
//     </div>

//     <div className="grid lg:grid-cols-2 gap-10">
//       {services.map((service, index) => (
//         <div 
//           key={index}
//           className={`group relative p-8 bg-white/70 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-700 hover:transform hover:-translate-y-3 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
//           }`}
//           style={{ transitionDelay: `${index * 150}ms` }}
//         >
//           {/* Animated gradient border */}
//           <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}></div>
          
//           {/* Content container */}
//           <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 h-full">
//             <div className="flex flex-col lg:flex-row gap-8">
//               <div className="flex-1">
//                 <div className={`inline-flex items-center justify-center w-18 h-18 bg-gradient-to-br ${service.bgGradient} rounded-2xl border border-white shadow-lg group-hover:scale-110 transition-all duration-500 mb-6`}>
//                   <div className={`text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text`}>
//                     {service.icon}
//                   </div>
//                 </div>
                
//                 <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-slate-800 group-hover:to-slate-600 transition-all duration-300">
//                   {service.title}
//                 </h3>
                
//                 <p className="text-slate-600 mb-6 leading-relaxed text-lg font-light">
//                   {service.description}
//                 </p>
                
//                 <ul className="space-y-3 mb-6">
//                   {service.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center text-slate-700">
//                       <CheckCircle className={`w-5 h-5 mr-3 flex-shrink-0 text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text`} />
//                       <span className="font-medium">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <Link to='/services'>
//                   <button className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
//                   Learn more
//                   <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//                 </button>
//                 </Link>
              
//               </div>
              
//               <div className="flex-1">
//                 <div className="rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
//                   <div className="relative overflow-hidden">
//                     <img 
//                       src={service.image} 
//                       alt={service.title}
//                       className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                     {/* Image overlay effect */}
//                     <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
  
  
// </section>

    
// <section className="py-20 bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50">
//   <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
//     <div className="text-center mb-16">
//       <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-green-100 text-slate-700 rounded-full text-sm font-medium mb-6 shadow-sm">
//         <svg className="w-4 h-4 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//         </svg>
//         Our Tech Stack
//       </div>
//       <h3 className="text-4xl font-bold text-slate-900 mb-4">Cutting-Edge Technologies</h3>
//       <p className="text-xl text-slate-600 max-w-2xl mx-auto">We harness the power of modern technologies to build innovative and scalable solutions</p>
//     </div>

//     <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
//       {technologies.map((tech, index) => (
//         <div 
//           key={index} 
//           className="group relative flex flex-col items-center justify-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:border-teal-300/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
//         >
//           {/* Gradient border effect on hover */}
//           <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-green-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          
//           {/* Technology logo */}
//           <div className="relative mb-4">
//             <div className="absolute -inset-3 bg-gradient-to-r from-teal-400/20 to-green-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//             <img 
//               src={tech.logo} 
//               alt={tech.name} 
//               className="h-12 w-12 mx-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" 
//             />
//           </div>
          
//           {/* Technology name with subtle hover effect */}
//           <span className="text-sm font-medium text-slate-700 group-hover:text-teal-700 transition-colors duration-300 text-center">
//             {tech.name}
//           </span>
          
//           {/* Hover indicator */}
//           <div className="absolute bottom-3 w-6 h-0.5 bg-gradient-to-r from-teal-400 to-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//         </div>
//       ))}
//     </div>

//     {/* Tech categories */}
//     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
//       {[
//         { name: "Frontend", count: "12+", icon: "💻", color: "from-blue-500 to-cyan-500" },
//         { name: "Backend", count: "15+", icon: "⚡", color: "from-purple-500 to-pink-500" },
//         { name: "Database", count: "8+", icon: "🗄️", color: "from-green-500 to-teal-500" },
//         { name: "AI", count: "10+", icon: "🔧", color: "from-orange-500 to-red-500" }
//       ].map((category, index) => (
//         <div key={index} className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:shadow-lg transition-all duration-300">
//           <div className={`text-2xl mb-3 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${category.color} text-white rounded-full`}>
//             {category.icon}
//           </div>
//           <h4 className="text-lg font-semibold text-slate-900 mb-2">{category.name}</h4>
//           <p className="text-slate-600">{category.count} Technologies</p>
//         </div>
//       ))}
//     </div>
//   </div>

//   {/* Decorative elements */}
//   <div className="absolute left-20 mt-8 w-6 h-6 bg-gradient-to-br from-teal-300 to-teal-400 rounded-full shadow-lg animate-pulse opacity-60"></div>
//   <div className="absolute right-24 mt-16 w-4 h-4 bg-gradient-to-br from-green-300 to-green-400 rounded-full shadow-md animate-bounce opacity-60" style={{ animationDelay: '0.7s' }}></div>
//   <div className="absolute left-1/3 bottom-20 w-5 h-5 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full shadow-lg animate-ping opacity-40" style={{ animationDelay: '1.2s' }}></div>
// </section>
    
// <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
//   <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
//     <div className="text-center mb-16">
//       <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500/20 to-green-500/20 border border-teal-500/30 rounded-full text-teal-200 text-sm font-medium mb-6">
//         <BarChart3 className="w-4 h-4 mr-2" />
//         Our Process
//       </div>
//       <h2 className="text-4xl md:text-5xl font-bold mb-6">
//         How We Work
//       </h2>
//       <p className="text-xl text-slate-300 max-w-2xl mx-auto">
//         A structured approach to delivering exceptional results
//       </p>
//     </div>

//     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//       {processSteps.map((step, index) => (
//         <div 
//           key={index}
//           className="group text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-teal-400/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
//         >
//           {/* Gradient overlay on hover */}
//           <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
//           {/* Step number with animated border */}
//           <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-teal-500/20 rounded-full text-teal-300 text-sm font-bold group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
//             {index + 1}
//           </div>
          
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500/20 to-green-500/20 rounded-2xl mx-auto mb-6 text-teal-300 group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-green-500 group-hover:text-white transition-all duration-300 relative z-10">
//             {step.icon}
//           </div>
          
//           <div className="text-teal-400 font-semibold mb-2 relative z-10">Step {index + 1}</div>
//           <h3 className="text-xl font-bold text-white mb-4 relative z-10">{step.title}</h3>
//           <p className="text-slate-300 mb-6 relative z-10">{step.description}</p>
          
//           <div className="rounded-lg overflow-hidden relative z-10 group-hover:shadow-lg group-hover:shadow-teal-500/10 transition-all duration-500">
//             <div className="relative overflow-hidden">
//               <img 
//                 src={step.image} 
//                 alt={step.title}
//                 className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-700"
//               />
//               {/* Image overlay effect */}
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
    
//     {/* Decorative elements to match the banner style */}
//     <div className="absolute left-1/4 mt-16 w-5 h-5 bg-gradient-to-br from-teal-400/50 to-teal-500/50 rounded-full shadow-sm animate-pulse"></div>
//     <div className="absolute right-1/4 mt-24 w-4 h-4 bg-gradient-to-br from-green-400/50 to-green-500/50 rounded-full shadow-sm animate-bounce" style={{ animationDelay: '0.5s' }}></div>
//   </div>
// </section>
     
// <HomeProjects/>
     
// <section className="py-20 bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50">
//   <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
//     <div className="text-center mb-16">
//       <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-green-100 text-slate-700 rounded-full text-sm font-medium mb-6 shadow-sm">
//         <MessageSquare className="w-4 h-4 mr-2 text-teal-600" />
//         Client Testimonials
//       </div>
//       <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
//         What Our Clients Say
//       </h2>
//     </div>

//     <div className="relative overflow-hidden">
//       <div 
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
//       >
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className="w-full flex-shrink-0 px-4">
//             <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 border border-slate-100/50 relative">
//               {/* Gradient border effect */}
//               <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-green-400 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
//               <div className="flex items-start mb-6">
//                 <Quote className="w-8 h-8 text-teal-500/30 mr-4 flex-shrink-0" />
//                 <blockquote className="text-xl text-slate-700 leading-relaxed">
//                   "{testimonial.content}"
//                 </blockquote>
//               </div>
              
//               <div className="flex items-center">
//                 <img 
//                   src={testimonial.image} 
//                   alt={testimonial.name}
//                   className="w-16 h-16 rounded-full border-2 border-teal-100 mr-6 shadow-sm"
//                 />
//                 <div>
//                   <h4 className="text-lg font-bold text-slate-900">
//                     {testimonial.name}
//                   </h4>
//                   <p className="text-slate-600">
//                     {testimonial.role}
//                   </p>
//                 </div>
//                 <div className="ml-auto flex space-x-1">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                   ))}
//                 </div>
//               </div>
              
//               {/* Decorative corner elements */}
//               <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-teal-400/50 rounded-tr-lg"></div>
//               <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-teal-400/50 rounded-bl-lg"></div>
//             </div>
//           </div>
//         ))}
//       </div>
      
//       <div className="flex justify-center space-x-2 mt-8">
//         {testimonials.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentTestimonial(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               index === currentTestimonial 
//                 ? 'bg-gradient-to-r from-teal-500 to-green-500' 
//                 : 'bg-slate-300 hover:bg-slate-400'
//             }`}
//           />
//         ))}
//       </div>
      
//       {/* Navigation arrows (optional) */}
//       <button 
//         onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-slate-200 hover:bg-white transition-all duration-300"
//       >
//         <ChevronLeft className="w-5 h-5 text-slate-700" />
//       </button>
//       <button 
//         onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-slate-200 hover:bg-white transition-all duration-300"
//       >
//         <ChevronRight className="w-5 h-5 text-slate-700" />
//       </button>
//     </div>
//   </div>
  
//   {/* Decorative elements to match the banner style */}
//   <div className="absolute left-1/4 mt-16 w-5 h-5 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full shadow-sm animate-pulse opacity-50"></div>
//   <div className="absolute right-1/4 mt-24 w-4 h-4 bg-gradient-to-br from-green-200 to-green-300 rounded-full shadow-sm animate-bounce opacity-50" style={{ animationDelay: '0.5s' }}></div>
// </section>
    
//       <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white mb-0.5">
//   <div className="max-w-4xl mx-auto text-center px-5 sm:px-6 lg:px-8">
//     <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500/20 to-green-500/20 border border-teal-500/30 rounded-full text-teal-200 text-sm font-medium mb-8 shadow-sm">
//       <TrendingUp className="w-4 h-4 mr-2" />
//       Ready to Get Started?
//     </div>
    
//     <h2 className="text-4xl md:text-5xl font-bold mb-6">
//       Let's Build Something
//       <br />
//       <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
//         Amazing Together
//       </span>
//     </h2>
    
//     <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
//       Transform your ideas into powerful digital solutions. Our team is ready to help you achieve your goals with cutting-edge technology and innovative design.
//     </p>
    
//     <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//       <button 
//         onClick={() => window.location.href = '/contact'}
//         className="group relative inline-flex items-center px-10 py-4 bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-400 hover:to-green-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105 cursor-pointer overflow-hidden"
//       >
//         <Rocket className="w-5 h-5 mr-3" />
//         Start Your Project Today
//         <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
        
//         {/* Shine effect */}
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//       </button>
      
//       <button 
//         onClick={() => window.location.href = '/about'}
//         className="group relative inline-flex items-center px-10 py-4 border-2 border-teal-400/30 hover:border-teal-400 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-teal-500/10 cursor-pointer overflow-hidden"
//       >
//         Learn More About Us
//         <ChevronRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
        
//         {/* Subtle background effect on hover */}
//         <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//       </button>
//     </div>
//   </div>
  

// </section>
// <Footer/>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Cpu, 
  Globe, 
  Rocket,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Code,
  Database,
  Smartphone,
  Cloud,
  Play,
  Award,
  Target,
  Lightbulb,
  BarChart3,
  MessageSquare,
  ChevronRight,
  ArrowUpRight,
  Calendar,
  Clock,
  Mail,
  Quote,
  ChevronLeft,
  Trophy,
  Eye,
  Phone,
  Brain
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import HomeProjects from './HomeProjects';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: "Code",
      title: "Web Development", 
      description: "Cutting-edge websites and web applications that drive business growth and deliver exceptional user experiences.",
      features: ["React & Next.js Development", "Full-Stack Solutions", "E-commerce Platforms", "Progressive Web Apps"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50"
    },
    {
      icon: "Mobile",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that engage users and scale your business across all devices.", 
      features: ["iOS & Android Native", "React Native & Flutter", "UI/UX Design", "App Store Optimization"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&auto=format",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      icon: "Brain", 
      title: "AI & Automation",
      description: "Intelligent AI systems and automation solutions that streamline operations and unlock new possibilities.",
      features: ["AI Chatbots & Virtual Assistants", "Machine Learning Models", "Process Automation", "Predictive Analytics"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&auto=format", 
      gradient: "from-violet-500 to-pink-600",
      bgGradient: "from-violet-50 to-pink-50"
    },
    {
      icon: "Video",
      title: "Content Creation", 
      description: "Professional video editing and content creation services that captivate audiences and amplify your brand.",
      features: ["Video Production & Editing", "Motion Graphics & Animation", "Social Media Content", "Brand Storytelling"],
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop&auto=format",
      gradient: "from-orange-500 to-red-600", 
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  const testimonials = [
    {
      name: "Ramesh Gupta",
      role: "Owner, Pindichap Junction",
      content: "SAGUS Solutions built a professional and engaging website for our restaurant. Online orders and customer engagement have doubled since launch.",
      rating: 5,
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    },
    {
      name: "Aditya P Nikam",
      role: "Director, Adiyogi Foundation",
      content: "Their team helped us design a platform that beautifully represents our vision and teachings. The website has attracted thousands of new visitors.",
      rating: 5,
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    },
    {
      name: "Deepak Doddamani",
      role: "Coordinator, Ashwamedh Foundation",
      content: "From event management tools to donor tracking, SAGUS delivered exactly what we needed. Their solutions help us run operations smoothly and reach more people.",
      rating: 5,
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    },
    {
      name: "Matiunina Natalia",
      role: "President, International Laity Association",
      content: "SAGUS Solutions provided us with a robust digital platform that connects our members globally. The ease of use and reliability are exceptional.",
      rating: 5,
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
    }
  ];

  const recentProjects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      description: "Modern e-commerce solution with AI-powered recommendations"
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      description: "Telemedicine app connecting patients with doctors"
    },
    {
      title: "Analytics Dashboard",
      category: "Data Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      description: "Real-time business intelligence dashboard"
    }
  ];

  const processSteps = [
    {
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap",
      icon: <Lightbulb className="w-6 h-6 md:w-8 md:h-8" />,
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=300&fit=crop"
    },
    {
      title: "Design & Development",
      description: "Our team creates stunning designs and implements robust solutions",
      icon: <Code className="w-6 h-6 md:w-8 md:h-8" />,
      image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=400&h=300&fit=crop"
    },
    {
      title: "Testing & Deployment",
      description: "Rigorous testing ensures quality before seamless deployment",
      icon: <CheckCircle className="w-6 h-6 md:w-8 md:h-8" />,
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=300&fit=crop"
    },
    {
      title: "Support & Maintenance",
      description: "Ongoing support keeps your solution running smoothly",
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
      image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=400&h=300&fit=crop"
    }
  ];

  const technologies = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "AWS",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"},
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" }
  ];

  return (
    <>
   
<Helmet>
  <title>Sagus Solutions | Innovative Digital Solutions for Your Business</title>
  <meta name="title" content="Sagus Solutions | Innovative Digital Solutions for Your Business" />
  <meta name="description" content="Sagus Solutions is a full-service digital agency offering website development, AI automation, content creation, app development, and chatbot integration to help your business grow." />
  <meta name="keywords" content="Sagus Solutions, Website Development, AI Automation, App Development, Chatbot Integration, Digital Marketing, Content Creation, Business Solutions" />
  <link rel="canonical" href="https://www.sagussolutions.info/" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.sagussolutions.info/" />
  <meta property="og:title" content="Sagus Solutions | Innovative Digital Solutions for Your Business" />
  <meta property="og:description" content="Sagus Solutions provides cutting-edge digital solutions including websites, apps, AI automation, content creation, and chatbot integration to grow your business." />
  <meta property="og:image" content="https://www.sagussolutions.info/sagus[1].png" />
  <meta property="og:image:alt" content="Sagus Solutions Logo" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Sagus Solutions | Innovative Digital Solutions for Your Business" />
  <meta name="twitter:description" content="Grow your business with Sagus Solutions – expert website development, AI automation, app development, content creation, and chatbot integration." />
  <meta name="twitter:image" content="https://www.sagussolutions.info/sagus[1].png" />
</Helmet>

     <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden">
     
      
      {/* Mouse follower effect */}
      <div 
        className="fixed w-96 h-96 pointer-events-none z-0 opacity-5 hidden md:block"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          transition: 'left 0.1s, top 0.1s'
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 text-slate-900 overflow-hidden pt-20">
        {/* Content Side */}
        <div className="flex-1 flex items-center justify-center px-5 sm:px-6 lg:px-8 py-12 lg:py-0">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                Your Vision,
              </span>
              <br />
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent relative">
                Our Digital{' '}
                <span className="relative inline-block">
                  <span className="text-slate-900">Expertise.</span>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-green-400 rounded-full"></div>
                </span>
              </span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 mb-8 lg:mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Full-service digital agency specializing in web development, mobile apps, UI/UX design, and digital marketing solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 lg:mb-10 justify-center lg:justify-start">
              <button 
                onClick={() => window.location.href = '/contact'}
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-400 hover:to-green-400 text-white font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105 cursor-pointer text-sm sm:text-base"
              >
                Get Free Consultation
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:scale-110 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => window.location.href = '/services'}
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-300 text-slate-700 hover:border-teal-400 hover:text-teal-600 font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer text-sm sm:text-base"
              >
                Explore Services
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Service highlights */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 text-slate-600 text-xs sm:text-sm">
              <div className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500 mr-1 sm:mr-2" />
                <span>Web Development</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500 mr-1 sm:mr-2" />
                <span>UI/UX Design</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500 mr-1 sm:mr-2" />
                <span>Mobile Apps</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500 mr-1 sm:mr-2" />
                <span>Content Creation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image Side - 3D Isometric Illustration - Hidden on mobile */}
        <div className="hidden lg:flex flex-1 relative items-center justify-center">
          {/* Main 3D Scene Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* Main Workspace Platform */}
            <div className="absolute" style={{ transform: 'translateX(20px) translateY(50px)' }}>
              <div 
                className="w-40 h-28 bg-gradient-to-br from-slate-600 to-slate-700 shadow-2xl rounded-xl"
                style={{ 
                  transform: 'perspective(1000px) rotateX(60deg) rotateY(-15deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-xl transform translateZ(-12px)"></div>
              </div>
              
              {/* Main monitor setup */}
              <div className="absolute -top-10 left-8 w-20 h-14 bg-gradient-to-b from-slate-800 to-black rounded-lg shadow-xl transform perspective-1000 rotateX(75deg)">
                <div className="absolute top-1 left-1 w-18 h-12 bg-gradient-to-br from-blue-100 to-teal-100 rounded-md"></div>
                <div className="absolute top-4 left-7 w-6 h-1 bg-blue-400 rounded-full"></div>
              </div>
              
              {/* Developer at workstation */}
              <div className="absolute -top-16 left-12 w-8 h-8 bg-gradient-to-b from-teal-200 to-teal-300 rounded-full shadow-lg"></div>
              <div className="absolute -top-10 left-10 w-12 h-6 bg-gradient-to-b from-slate-600 to-slate-700 rounded-t-lg shadow-md"></div>
              <div className="absolute top-2 left-14 w-4 h-10 bg-gradient-to-b from-slate-400 to-slate-500 rounded shadow-sm"></div>
            </div>

            {/* Design Platform */}
            <div className="absolute animate-float" style={{ transform: 'translateX(-60px) translateY(10px)', animationDelay: '0.5s' }}>
              <div 
                className="w-32 h-24 bg-gradient-to-br from-teal-500 to-teal-600 shadow-xl rounded-lg"
                style={{ 
                  transform: 'perspective(1000px) rotateX(60deg) rotateY(-15deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-teal-400 rounded-lg transform translateZ(-10px)"></div>
              </div>
              
              {/* Design tablet */}
              <div className="absolute -top-8 left-6 w-16 h-12 bg-gradient-to-b from-slate-800 to-black rounded-md shadow-lg">
                <div className="absolute top-1 left-1 w-14 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-sm"></div>
                <div className="absolute top-5 left-7 w-2 h-2 bg-pink-400 rounded-full"></div>
              </div>
              
              {/* Designer */}
              <div className="absolute -top-16 right-4 w-7 h-7 bg-gradient-to-b from-pink-200 to-pink-300 rounded-full shadow-lg"></div>
              <div className="absolute -top-10 right-2 w-10 h-5 bg-gradient-to-b from-teal-300 to-teal-400 rounded-t-lg shadow-md"></div>
            </div>

            {/* Mobile Development Platform */}
            <div className="absolute animate-bounce-slow" style={{ transform: 'translateX(-100px) translateY(70px)', animationDelay: '1s' }}>
              <div 
                className="w-28 h-20 bg-gradient-to-br from-green-500 to-green-600 shadow-xl rounded-lg"
                style={{ 
                  transform: 'perspective(1000px) rotateX(60deg) rotateY(-15deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-green-400 rounded-lg transform translateZ(-8px)"></div>
              </div>
              
              {/* Mobile devices */}
              <div className="absolute -top-6 left-5 w-5 h-10 bg-black rounded-lg shadow-md">
                <div className="absolute top-1 left-0.5 w-4 h-8 bg-gradient-to-br from-blue-50 to-green-50 rounded"></div>
              </div>
              <div className="absolute -top-8 left-12 w-6 h-12 bg-black rounded-xl shadow-md">
                <div className="absolute top-1 left-0.5 w-5 h-10 bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg"></div>
              </div>
              
              {/* Mobile developer */}
              <div className="absolute -top-14 right-3 w-6 h-6 bg-gradient-to-b from-yellow-200 to-yellow-300 rounded-full shadow-lg"></div>
              <div className="absolute -top-9 right-1 w-8 h-4 bg-gradient-to-b from-green-300 to-green-400 rounded-t-lg shadow-md"></div>
            </div>

            {/* Server/Cloud Platform */}
            <div className="absolute animate-pulse-slow" style={{ transform: 'translateX(80px) translateY(20px)', animationDelay: '1.5s' }}>
              <div 
                className="w-36 h-22 bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl rounded-lg"
                style={{ 
                  transform: 'perspective(1000px) rotateX(60deg) rotateY(-15deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-blue-400 rounded-lg transform translateZ(-10px)"></div>
              </div>
              
              {/* Server stack */}
              <div className="absolute -top-8 left-8 w-20 h-6 bg-gradient-to-b from-slate-700 to-slate-800 rounded shadow-lg"></div>
              <div className="absolute -top-2 left-6 w-24 h-6 bg-gradient-to-b from-slate-600 to-slate-700 rounded shadow-md"></div>
              <div className="absolute top-4 left-10 w-16 h-6 bg-gradient-to-b from-slate-500 to-slate-600 rounded shadow-sm"></div>
              
              {/* Cloud engineer */}
              <div className="absolute -top-16 right-4 w-7 h-7 bg-gradient-to-b from-blue-200 to-blue-300 rounded-full shadow-lg"></div>
              <div className="absolute -top-10 right-2 w-10 h-5 bg-gradient-to-b from-blue-300 to-blue-400 rounded-t-lg shadow-md"></div>
            </div>

            {/* Floating Digital Elements */}
            <div className="absolute top-20 right-24 w-5 h-5 bg-gradient-to-br from-teal-300 to-teal-400 rounded-full shadow-lg animate-ping-slow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-28 left-20 w-4 h-4 bg-gradient-to-br from-green-300 to-green-400 rounded-full shadow-md animate-bounce-slow" style={{ animationDelay: '3s' }}></div>
            <div className="absolute top-1/3 left-24 w-7 h-7 bg-gradient-to-br from-purple-300 to-purple-400 rounded-lg shadow-lg animate-pulse-slow" style={{ animationDelay: '2.5s' }}></div>

            {/* Digital interface elements */}
            <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-gradient-to-b from-blue-400 to-blue-500 rounded-full shadow-sm animate-pulse"></div>
            <div className="absolute top-1/4 right-1/3 w-1.5 h-1.5 bg-white rounded-full transform translate-y-1 animate-ping" style={{ animationDelay: '1.2s' }}></div>
            
            <div className="absolute bottom-1/4 left-1/4 w-4 h-3 bg-gradient-to-b from-teal-400 to-teal-500 rounded shadow-md"></div>
            <div className="absolute bottom-1/4 left-1/4 w-1.5 h-5 bg-slate-400 rounded transform -translate-y-2 translate-x-1.5"></div>

            {/* Data flow lines */}
            <div className="absolute top-1/2 left-1/4 w-16 h-0.5 bg-gradient-to-r from-teal-400/50 to-transparent rounded-full animate-pulse" style={{ transform: 'rotate(45deg)' }}></div>
            <div className="absolute top-2/5 right-1/4 w-12 h-0.5 bg-gradient-to-l from-green-400/50 to-transparent rounded-full animate-pulse" style={{ transform: 'rotate(-30deg)', animationDelay: '1.8s' }}></div>
          </div>

          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute top-1/4 left-12 w-10 h-10 border-2 border-teal-300/40 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-1/3 right-20 w-8 h-8 border-2 border-green-300/40 rounded-lg animate-bounce-slow delay-1000"></div>
            <div className="absolute top-2/3 left-1/3 w-6 h-6 bg-gradient-to-r from-teal-200/30 to-green-200/30 rounded-full animate-pulse-slow delay-1500"></div>
            
            {/* Binary code animation */}
            <div className="absolute top-1/5 right-20 text-teal-300/20 font-mono text-xs animate-pulse">
              1010
            </div>
            <div className="absolute bottom-1/4 left-24 text-green-300/20 font-mono text-xs animate-pulse" style={{ animationDelay: '2s' }}>
              1101
            </div>
          </div>
        </div>

        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(-40px); }
            50% { transform: translateY(-15px) translateX(-40px); }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          .animate-spin-slow {
            animation: spin-slow 15s linear infinite;
          }
          .perspective-1000 {
            perspective: 1000px;
          }
        `}</style>
      </section>
     
      {/* Services Section */}
      <section className="relative py-16 md:py-24 px-5 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden" ref={sectionRef}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-60 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full opacity-60 blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-teal-100 to-green-100 text-slate-700 border border-blue-200/50 rounded-full text-xs md:text-sm font-semibold mb-6 md:mb-8 shadow-lg backdrop-blur-sm">
              <Globe className="w-3 h-3 md:w-4 md:h-4 mr-2 text-teal-600" />
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 md:mb-8 text-slate-900 tracking-tight">
              Services We Excel
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive digital solutions engineered to transform your vision into reality
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-10">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group relative p-6 md:p-8 bg-white/70 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/20 shadow-lg md:shadow-xl hover:shadow-2xl transition-all duration-700 hover:transform hover:-translate-y-2 md:hover:-translate-y-3 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Animated gradient border */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}></div>
                
                {/* Content container */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 h-full">
                  <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                    <div className="flex-1">
                      <div className={`inline-flex items-center justify-center w-14 h-14 md:w-18 md:h-18 bg-gradient-to-br ${service.bgGradient} rounded-xl md:rounded-2xl border border-white shadow-lg group-hover:scale-110 transition-all duration-500 mb-4 md:mb-6`}>
                        <div className={`text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text`}>
                          {service.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-3 md:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-slate-800 group-hover:to-slate-600 transition-all duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-4 md:mb-6 leading-relaxed text-base md:text-lg font-light">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-slate-700 text-sm md:text-base">
                           <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 flex-shrink-0 text-green-500" />
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to='/services'>
                        <button className={`inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-lg md:rounded-xl hover:shadow-xl transition-all duration-300 group-hover:scale-105 text-sm md:text-base`}>
                          Learn more
                          <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </Link>
                    
                    </div>
                    
                    <div className="flex-1 mt-6 lg:mt-0">
                      <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                        <div className="relative overflow-hidden">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          {/* Image overlay effect */}
                          <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
      {/* Technologies Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-green-100 text-slate-700 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 shadow-sm">
              <svg className="w-3 h-3 md:w-4 md:h-4 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Our Tech Stack
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4">Cutting-Edge Technologies</h3>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">We harness the power of modern technologies to build innovative and scalable solutions</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mb-12 md:mb-16">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="group relative flex flex-col items-center justify-center p-4 md:p-6 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl border border-slate-200/50 hover:border-teal-300/50 transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-lg"
              >
                {/* Gradient border effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-green-400 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                {/* Technology logo */}
                <div className="relative mb-3 md:mb-4">
                  <div className="absolute -inset-2 md:-inset-3 bg-gradient-to-r from-teal-400/20 to-green-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    className="h-8 w-8 md:h-12 md:w-12 mx-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" 
                  />
                </div>
                
                {/* Technology name with subtle hover effect */}
                <span className="text-xs md:text-sm font-medium text-slate-700 group-hover:text-teal-700 transition-colors duration-300 text-center">
                  {tech.name}
                </span>
                
                {/* Hover indicator */}
                <div className="absolute bottom-2 md:bottom-3 w-4 md:w-6 h-0.5 bg-gradient-to-r from-teal-400 to-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Tech categories */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-center">
            {[
              { name: "Frontend", count: "12+", icon: "💻", color: "from-blue-500 to-cyan-500" },
              { name: "Backend", count: "15+", icon: "⚡", color: "from-purple-500 to-pink-500" },
              { name: "Database", count: "8+", icon: "🗄️", color: "from-green-500 to-teal-500" },
              { name: "AI", count: "10+", icon: "🔧", color: "from-orange-500 to-red-500" }
            ].map((category, index) => (
              <div key={index} className="p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl border border-slate-200/50 hover:shadow-lg transition-all duration-300">
                <div className={`text-xl md:text-2xl mb-2 md:mb-3 inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${category.color} text-white rounded-full`}>
                  {category.icon}
                </div>
                <h4 className="text-base md:text-lg font-semibold text-slate-900 mb-1 md:mb-2">{category.name}</h4>
                <p className="text-slate-600 text-sm md:text-base">{category.count} Technologies</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        {/* <div className="absolute left-10 md:left-20 mt-8 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-br from-teal-300 to-teal-400 rounded-full shadow-lg animate-pulse opacity-60"></div>
        <div className="absolute right-12 md:right-24 mt-12 md:mt-16 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-green-300 to-green-400 rounded-full shadow-md animate-bounce opacity-60" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute left-1/3 bottom-16 md:bottom-20 w-4 h-4 md:w-5 md:h-5 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full shadow-lg animate-ping opacity-40" style={{ animationDelay: '1.2s' }}></div> */}
      </section>
    
      {/* Process Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500/20 to-green-500/20 border border-teal-500/30 rounded-full text-teal-200 text-xs md:text-sm font-medium mb-4 md:mb-6">
              <BarChart3 className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              How We Work
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              A structured approach to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="group text-center bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl md:rounded-2xl border border-white/10 hover:border-teal-400/30 transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Step number with animated border */}
                <div className="absolute top-3 md:top-4 right-3 md:right-4 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-teal-500/20 rounded-full text-teal-300 text-xs md:text-sm font-bold group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                  {index + 1}
                </div>
                
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-teal-500/20 to-green-500/20 rounded-xl md:rounded-2xl mx-auto mb-4 md:mb-6 text-teal-300 group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-green-500 group-hover:text-white transition-all duration-300 relative z-10">
                  {step.icon}
                </div>
                
                <div className="text-teal-400 font-semibold mb-2 text-sm md:text-base relative z-10">Step {index + 1}</div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 relative z-10">{step.title}</h3>
                <p className="text-slate-300 mb-4 md:mb-6 text-sm md:text-base relative z-10">{step.description}</p>
                
                <div className="rounded-lg overflow-hidden relative z-10 group-hover:shadow-lg group-hover:shadow-teal-500/10 transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-32 md:h-40 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Image overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Decorative elements to match the banner style */}
          {/* <div className="absolute left-1/4 mt-12 md:mt-16 w-4 h-4 md:w-5 md:h-5 bg-gradient-to-br from-teal-400/50 to-teal-500/50 rounded-full shadow-sm animate-pulse"></div>
          <div className="absolute right-1/4 mt-16 md:mt-24 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-green-400/50 to-green-500/50 rounded-full shadow-sm animate-bounce" style={{ animationDelay: '0.5s' }}></div> */}
        </div>
      </section>
     
      <HomeProjects/>
     
      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-green-100 text-slate-700 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 shadow-sm">
              <MessageSquare className="w-3 h-3 md:w-4 md:h-4 mr-2 text-teal-600" />
              Client Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-slate-900">
              What Our Clients Say
            </h2>
          </div>

          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-3 md:px-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg p-6 md:p-8 lg:p-12 border border-slate-100/50 relative">
                    {/* Gradient border effect */}
                    {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-green-400 rounded-xl md:rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></div> */}
                    
                    <div className="flex items-start mb-4 md:mb-6">
                      <Quote className="w-6 h-6 md:w-8 md:h-8 text-teal-500/30 mr-3 md:mr-4 flex-shrink-0" />
                      <blockquote className="text-base md:text-lg lg:text-xl text-slate-700 leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                    </div>
                    
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-teal-100 mr-4 md:mr-6 shadow-sm"
                      />
                      <div className="flex-1">
                        <h4 className="text-base md:text-lg font-bold text-slate-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-slate-600 text-sm md:text-base">
                          {testimonial.role}
                        </p>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    {/* Decorative corner elements */}
                    {/* <div className="absolute top-3 md:top-4 right-3 md:right-4 w-2 h-2 md:w-3 md:h-3 border-t-2 border-r-2 border-teal-400/50 rounded-tr-lg"></div>
                    <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 w-2 h-2 md:w-3 md:h-3 border-b-2 border-l-2 border-teal-400/50 rounded-bl-lg"></div> */}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center space-x-2 mt-6 md:mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-gradient-to-r from-teal-500 to-green-500' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
            
            {/* Navigation arrows (optional) */}
            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-white/80 backdrop-blur-sm p-2 md:p-3 rounded-full shadow-lg border border-slate-200 hover:bg-white transition-all duration-300 hidden sm:block"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-slate-700" />
            </button>
            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 md:translate-x-4 bg-white/80 backdrop-blur-sm p-2 md:p-3 rounded-full shadow-lg border border-slate-200 hover:bg-white transition-all duration-300 hidden sm:block"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-slate-700" />
            </button>
          </div>
        </div>
        
        {/* Decorative elements to match the banner style */}
        {/* <div className="absolute left-1/4 mt-12 md:mt-16 w-4 h-4 md:w-5 md:h-5 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full shadow-sm animate-pulse opacity-50"></div>
        <div className="absolute right-1/4 mt-16 md:mt-24 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-green-200 to-green-300 rounded-full shadow-sm animate-bounce opacity-50" style={{ animationDelay: '0.5s' }}></div> */}
      </section>
    
      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white mb-0.5">
        <div className="max-w-4xl mx-auto text-center px-5 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500/20 to-green-500/20 border border-teal-500/30 rounded-full text-teal-200 text-xs md:text-sm font-medium mb-6 md:mb-8 shadow-sm">
            <TrendingUp className="w-3 h-3 md:w-4 md:h-4 mr-2" />
            Ready to Get Started?
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Transform your ideas into powerful digital solutions. Our team is ready to help you achieve your goals with cutting-edge technology and innovative design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => window.location.href = '/contact'}
              className="group relative inline-flex items-center px-6 py-3 md:px-10 md:py-4 bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-400 hover:to-green-400 text-white font-semibold rounded-lg md:rounded-xl transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105 cursor-pointer overflow-hidden text-sm md:text-base"
            >
              <Rocket className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
              Start Your Project Today
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            
            <button 
              onClick={() => window.location.href = '/about'}
              className="group relative inline-flex items-center px-6 py-3 md:px-10 md:py-4 border-2 border-teal-400/30 hover:border-teal-400 text-white font-semibold rounded-lg md:rounded-xl transition-all duration-300 hover:bg-teal-500/10 cursor-pointer overflow-hidden text-sm md:text-base"
            >
              Learn More About Us
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              
              {/* Subtle background effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>
     
    
    </div>
    </>
   
  );
};

export default Home;