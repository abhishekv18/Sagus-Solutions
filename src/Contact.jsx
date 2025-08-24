
// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   MapPin, 
//   Phone, 
//   Mail, 
//   Clock, 
//   Send,
//   MessageCircle,
//   Facebook,
//   Twitter,
//   Linkedin,
//   Instagram,
//   Github,
//   Youtube,
//   Calendar,
//   User,
//   ArrowRight,
//   X,
//   CheckCircle
// } from 'lucide-react';
// import Footer from './Footer';
// import Header from './Header';
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   });

//   const [contentLoaded, setContentLoaded] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const contactInfoRef = useRef(null);
//   const [animatedItems, setAnimatedItems] = useState({});
//   const formRef = useRef();

//   useEffect(() => {
//     // Set content as loaded after 100ms to trigger animations
//     const timer = setTimeout(() => {
//       setContentLoaded(true);
//     }, 100);
    
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setAnimatedItems(prev => ({
//               ...prev,
//               [entry.target.id]: true
//             }));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll('[data-animate]').forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Send email using EmailJS
//     emailjs.sendForm(
//       'service_m64jifi', // Your service ID
//       'template_wxdncds', // Your template ID
//       formRef.current,
//       'WePl4NHpOqHd1Rf02' // Replace with your EmailJS public key
//     )
//     .then((result) => {
//       console.log('Email sent successfully:', result.text);
//       setSubmitSuccess(true);
      
//       // Reset form after 2 seconds
//       setTimeout(() => {
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           subject: '',
//           message: ''
//         });
//         setIsSubmitting(false);
//          setSubmitSuccess(false);
//       }, 2000);
      
//     })
   
//     .catch((error) => {
//       console.error('Error sending email:', error);
//       setIsSubmitting(false);
//       // Handle error state here if needed
//     });
//   };

//   const contactInfo = [
//     {
//       icon: <MapPin className="w-6 h-6 text-teal-600" />,
//       title: "Our Location",
//       details: "Muradnagar, Ghaziabad, Uttar Pradesh 201206",
//       description: "Visit our office for a face-to-face consultation"
//     },
//     {
//       icon: <Phone className="w-6 h-6 text-teal-600" />,
//       title: "Phone Number",
//       details: "+91 8604050163",
//       description: "Mon-Fri from 8am to 6pm"
//     },
//     {
//       icon: <Mail className="w-6 h-6 text-teal-600" />,
//       title: "Email Address",
//       details: "sagussolutions@gmail.com",
//       description: "Send us an email anytime"
//     },
//     {
//       icon: <Clock className="w-6 h-6 text-teal-600" />,
//       title: "Working Hours",
//       details: "Mon - Fri: 9:00 - 18:00",
//       description: "Weekends: By appointment"
//     }
//   ];

//   const socialLinks = [
//     {
//       icon: <Facebook className="w-5 h-5" />,
//       url: "https://facebook.com/",
//       name: "Facebook"
//     },
//     {
//       icon: <X className="w-5 h-5" />,
//       url: "https://x.com/SagusSolut39764",
//       name: "Twitter"
//     },
//     {
//       icon: <Linkedin className="w-5 h-5" />,
//       url: "https://www.linkedin.com/in/sagus-solutions-8030b0380/",
//       name: "LinkedIn"
//     },
//     {
//       icon: <Instagram className="w-5 h-5" />,
//       url: "https://www.instagram.com/sagus_solutions?igsh=cHBvNjV3NnpyN3U4",
//       name: "Instagram"
//     },
//   ];

//   return (
//     <div>
    
//       <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50">
//         {/* Header Section */}
//         <section className="py-20 px-5 sm:px-6 lg:px-8" data-animate>
//           <div className="max-w-7xl mx-auto text-center">
//             <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-green-100 text-slate-700 rounded-full text-sm font-medium mb-6 shadow-sm transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
//               <MessageCircle className="w-4 h-4 mr-2 text-teal-600" />
//               Get In Touch
//             </div>
//             <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
//               Let's <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">Connect</span>
//             </h1>
//             <p className={`text-xl text-slate-600 max-w-3xl mx-auto transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
//               Ready to start your next project? Get in touch with us today and let's create something amazing together.
//             </p>
//           </div>
//         </section>

//         {/* Main Content */}
//         <section className="py-10 px-5 sm:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto">
//             <div className="grid lg:grid-cols-2 gap-12">
//               {/* Contact Information */}
//               <div className="space-y-8">
//                 <div>
//                   <h2 className={`text-3xl font-bold text-slate-900 mb-6 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '300ms' }}>Get in Touch</h2>
//                   <p className={`text-slate-600 mb-8 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
//                     We're here to help you with your digital transformation journey. Whether you have a question about our services, 
//                     need a quote, or want to discuss a potential project, our team is ready to assist you.
//                   </p>
//                 </div>

//                 {/* Contact Info Cards */}
//                 <div className="grid md:grid-cols-2 gap-6" ref={contactInfoRef}>
//                   {contactInfo.map((item, index) => (
//                     <div 
//                       key={index} 
//                       className={`bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-100/50 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
//                       style={{ transitionDelay: `${500 + index * 100}ms` }}
//                     >
//                       <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
//                         {item.icon}
//                       </div>
//                       <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
//                       <p className="text-slate-700 font-medium mb-2">{item.details}</p>
//                       <p className="text-slate-500 text-sm">{item.description}</p>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Social Media Links */}
//                 <div className={`bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl p-6 text-white transition-all  duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '900ms' }}>
//                   <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
//                   <p className="mb-6 opacity-90">Stay updated with our latest projects and insights</p>
//                   <div className="flex flex-wrap gap-3">
//                     {socialLinks.map((social, index) => (
//                       <a
//                         key={index}
//                         href={social.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30  transition-all duration-300 hover:scale-110"
//                         aria-label={social.name}
//                         style={{ transitionDelay: `${1000 + index * 100}ms` }}
//                       >
//                         {social.icon}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Contact Form */}
//               <div className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-slate-100/50 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1100ms' }}>
//                 <div className="text-center mb-8">
//                   <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h2>
//                   <p className="text-slate-600">We'll get back to you within 24 hours</p>
//                 </div>

//                 <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div className={`transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1200ms' }}>
//                       <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
//                         Full Name *
//                       </label>
//                       <div className="relative">
//                         <User className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//                         <input
//                           type="text"
//                           id="name"
//                           name="name"
//                           required
//                           value={formData.name}
//                           onChange={handleInputChange}
//                           className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
//                           placeholder="Your full name"
//                         />
//                       </div>
//                     </div>

//                     <div className={`transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1300ms' }}>
//                       <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
//                         Email Address *
//                       </label>
//                       <div className="relative">
//                         <Mail className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//                         <input
//                           type="email"
//                           id="email"
//                           name="email"
//                           required
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
//                           placeholder="your.email@example.com"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div className={`transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1400ms' }}>
//                       <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
//                         Phone Number *
//                       </label>
//                       <div className="relative">
//                         <Phone className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//                         <input
//                           type="tel"
//                           id="phone"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleInputChange}
//                           className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
//                           placeholder="+91 8765432100"
//                         />
//                       </div>
//                     </div>

//                     <div className={`transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1500ms' }}>
//                       <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
//                         Subject *
//                       </label>
//                       <div className="relative">
//                         <MessageCircle className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//                         <select
//                           id="subject"
//                           name="subject"
//                           required
//                           value={formData.subject}
//                           onChange={handleInputChange}
//                           className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 appearance-none"
//                         >
//                           <option value="">Select a subject</option>
//                           <option value="web-development">Web Development</option>
//                           <option value="mobile-apps">Mobile Applications</option>
//                           <option value="ui-ux-design">UI/UX Design</option>
//                           <option value="ai chatbot">A.I Chatbot</option>
//                           <option value="video editing">Video Editing</option>
//                           <option value="other">Other</option>
//                         </select>
//                       </div>
//                     </div>
//                   </div>

//                   <div className={`transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1600ms' }}>
//                     <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
//                       Message *
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       required
//                       rows="5"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
//                       placeholder="Tell us about your project..."
//                     />
//                   </div>

//                   <div className={`transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1700ms' }}>
//                     <button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="w-full bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold py-4 px-6 rounded-xl hover:from-teal-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
//                     >
//                       {isSubmitting ? (
//                         <>
//                           <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                           Sending...
//                         </>
//                       ) : (
//                         <>
//                           <Send className="w-5 h-5 mr-2" />
//                           Send Message
//                           <ArrowRight className="w-5 h-5 ml-2" />
//                         </>
//                       )}
//                     </button>
//                   </div>

//                   {/* Success Message */}
//                   {submitSuccess && (
//                     <div className={`bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center transition-all duration-500 ${submitSuccess ? 'opacity-100' : 'opacity-0'}`}>
//                       <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
//                       <span>Message sent successfully! We'll get back to you soon.</span>
//                     </div>
//                   )}
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Google Maps Section */}
//         <section className="py-16 px-5 sm:px-6 lg:px-8" data-animate>
//           <div className="max-w-7xl mx-auto">
//             <div className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-slate-100/50 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1900ms' }}>
//               <div className="grid lg:grid-cols-2">
//                 {/* Map */}
//                 <div className="h-96 lg:h-auto">
//                   <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.123456789!2d77.6523!3d28.7465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c123456789%3A0xabcdef1234567890!2sMuradnagar%2C+Ghaziabad%2C+Uttar+Pradesh+201206!5e0!3m2!1sen!2sin!4v0000000000000!5m2!1sen!2sin"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     allowFullScreen=""
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                     title="SAGUS Solutions Location"
//                     className="w-full h-96 lg:h-full"
//                   ></iframe>
//                 </div>

//                 {/* Map Info */}
//                 <div className="p-8 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
//                   <h3 className="text-2xl font-bold mb-6">Visit Our Office</h3>

//                   <div className="space-y-4 mb-8">
//                     {/* Location */}
//                     <div className="flex items-start">
//                       <MapPin className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
//                       <div>
//                         <p className="font-semibold">Our Location</p>
//                         <a
//                           href="https://www.google.com/maps/place/Muradnagar,+Ghaziabad,+Uttar+Pradesh+201206"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-slate-300 hover:text-teal-400 transition-colors duration-300"
//                         >
//                           Muradnagar, Ghaziabad, Uttar Pradesh 201206
//                         </a>
//                         <p className="text-slate-300 text-sm">Visit our office for a face-to-face consultation</p>
//                       </div>
//                     </div>

//                     {/* Phone */}
//                     <div className="flex items-center">
//                       <Phone className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0" />
//                       <div>
//                         <p className="font-semibold">Phone Number</p>
//                         <a href="tel:+918604050163" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">
//                           +91 8604050163
//                         </a>
//                         <p className="text-slate-300 text-sm">Mon-Fri from 8am to 6pm</p>
//                       </div>
//                     </div>

//                     {/* Email */}
//                     <div className="flex items-center">
//                       <Mail className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0" />
//                       <div>
//                         <p className="font-semibold">Email Address</p>
//                         <a href="mailto:sagussolutions@gmail.com" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">
//                           sagussolutions@gmail.com
//                         </a>
//                         <p className="text-slate-300 text-sm">Send us an email anytime</p>
//                       </div>
//                     </div>

//                     {/* Working Hours */}
//                     <div className="flex items-center">
//                       <Clock className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0" />
//                       <div>
//                         <p className="font-semibold">Working Hours</p>
//                         <p className="text-slate-300">Mon - Fri: 9:00 - 18:00</p>
//                         <p className="text-slate-300 text-sm">Weekends: By appointment</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20 px-5 sm:px-6 lg:px-8" data-animate>
//           <div className="max-w-4xl mx-auto text-center">
//             <div className={`bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl p-12 text-white relative overflow-hidden transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '2000ms' }}>
//               <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
//               <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-20 translate-y-20"></div>
              
//               <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Schedule a Free Consultation</h2>
//               <p className="text-xl mb-8 opacity-90 relative z-10">
//                 Let's discuss your project and explore how we can help you achieve your goals
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
//                 <a href="tel:8604050163">
//                   <button className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg flex items-center">
//                     <Calendar className="w-5 h-5 mr-2" />
//                     Book a Meeting
//                   </button>
//                 </a>
//                 <a href="tel:8604050163">
//                   <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center">
//                     <Phone className="w-5 h-5 mr-2" />
//                     Call Now
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
    
//       <style jsx>{`
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fade-in-up {
//           animation: fade-in-up 0.6s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Contact;
import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  Youtube,
  Calendar,
  User,
  ArrowRight,
  X,
  CheckCircle
} from 'lucide-react';
import Footer from './Footer';
import Header from './Header';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [contentLoaded, setContentLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const contactInfoRef = useRef(null);
  const [animatedItems, setAnimatedItems] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);
  const formRef = useRef();

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
    // Set content as loaded after 100ms to trigger animations
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedItems(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Send email using EmailJS
    emailjs.sendForm(
      'service_m64jifi', // Your service ID
      'template_wxdncds', // Your template ID
      formRef.current,
      'WePl4NHpOqHd1Rf02' // Replace with your EmailJS public key
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setSubmitSuccess(true);
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setIsSubmitting(false);
         setSubmitSuccess(false);
      }, 2000);
      
    })
   
    .catch((error) => {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      // Handle error state here if needed
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />,
      title: "Our Location",
      details: "Muradnagar, Ghaziabad, Uttar Pradesh 201206",
      description: "Visit our office for a face-to-face consultation"
    },
    {
      icon: <Phone className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />,
      title: "Phone Number",
      details: "+91 8604050163",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: <Mail className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />,
      title: "Email Address",
      details: "sagussolutions@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Clock className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />,
      title: "Working Hours",
      details: "Mon - Fri: 9:00 - 18:00",
      description: "Weekends: By appointment"
    }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-4 h-4 md:w-5 md:h-5" />,
      url: "https://facebook.com/",
      name: "Facebook"
    },
    {
      icon: <X className="w-4 h-4 md:w-5 md:h-5" />,
      url: "https://x.com/SagusSolut39764",
      name: "Twitter"
    },
    {
      icon: <Linkedin className="w-4 h-4 md:w-5 md:h-5" />,
      url: "https://www.linkedin.com/in/sagus-solutions-8030b0380/",
      name: "LinkedIn"
    },
    {
      icon: <Instagram className="w-4 h-4 md:w-5 md:h-5" />,
      url: "https://www.instagram.com/sagus_solutions?igsh=cHBvNjv3NnpyN3U4",
      name: "Instagram"
    },
  ];

  return (
    <div>
      <Header />
      <div className="min-h-screen pt-16 md:pt-20 bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50">
        {/* Header Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" data-animate>
          <div className="max-w-7xl mx-auto text-center">
            <div className={`inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-gradient-to-r from-teal-100 to-green-100 text-slate-700 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 shadow-sm transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-teal-600" />
              Get In Touch
            </div>
            <h1 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-slate-900 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
              Let's <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">Connect</span>
            </h1>
            <p className={`text-lg md:text-xl text-slate-600 max-w-3xl mx-auto transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
              Ready to start your next project? Get in touch with us today and let's create something amazing together.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
              {/* Contact Information */}
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h2 className={`text-2xl md:text-3xl text-center font-bold text-slate-900 mb-4 md:mb-6 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '300ms' }}>Get in Touch</h2>
                  <p className={`text-slate-600 mb-6 md:mb-8 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
                    We're here to help you with your digital transformation journey. Whether you have a question about our services, 
                    need a quote, or want to discuss a potential project, our team is ready to assist you.
                  </p>
                </div>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6" ref={contactInfoRef}>
                  {contactInfo.map((item, index) => (
                    <div 
                      key={index} 
                      className={`bg-white/80 backdrop-blur-sm p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl shadow-lg border border-slate-100/50 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                      style={{ transitionDelay: `${500 + index * 100}ms` }}
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-100 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-1 md:mb-2">{item.title}</h3>
                      <p className="text-slate-700 font-medium mb-1 md:mb-2 text-sm md:text-base">{item.details}</p>
                      <p className="text-slate-500 text-xs md:text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>

                {/* Social Media Links */}
                <div className={`bg-gradient-to-br from-teal-500 to-green-500 rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 text-white transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '900ms' }}>
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Follow Us</h3>
                  <p className="mb-4 md:mb-6 opacity-90 text-sm md:text-base">Stay updated with our latest projects and insights</p>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-lg md:rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        aria-label={social.name}
                        style={{ transitionDelay: `${1000 + index * 100}ms` }}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className={`bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-xl p-4 md:p-6 lg:p-8 border border-slate-100/50 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1100ms' }}>
                <div className="text-center mb-6 md:mb-8">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-1 md:mb-2">Send us a Message</h2>
                  <p className="text-slate-600 text-sm md:text-base">We'll get back to you within 24 hours</p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className={`transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1200ms' }}>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1 md:mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 md:w-5 md:h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-9 md:pl-10 pr-3 md:pr-4 py-2 md:py-3 border border-slate-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>

                    <div className={`transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1300ms' }}>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1 md:mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 md:w-5 md:h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-9 md:pl-10 pr-3 md:pr-4 py-2 md:py-3 border border-slate-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className={`transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1400ms' }}>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1 md:mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 md:w-5 md:h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-9 md:pl-10 pr-3 md:pr-4 py-2 md:py-3 border border-slate-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                          placeholder="+91 8765432100"
                        />
                      </div>
                    </div>

                    <div className={`transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1500ms' }}>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1 md:mb-2">
                        Subject *
                      </label>
                      <div className="relative">
                        <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full pl-9 md:pl-10 pr-3 md:pr-4 py-2 md:py-3 border border-slate-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 appearance-none text-sm md:text-base"
                        >
                          <option value="">Select a subject</option>
                          <option value="web-development">Web Development</option>
                          <option value="mobile-apps">Mobile Applications</option>
                          <option value="ui-ux-design">UI/UX Design</option>
                          <option value="ai chatbot">A.I Chatbot</option>
                          <option value="video editing">Video Editing</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className={`transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1600ms' }}>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1 md:mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-slate-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <div className={`transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1700ms' }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold py-3 md:py-4 px-4 md:px-6 rounded-lg md:rounded-xl hover:from-teal-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed text-sm md:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                          Send Message
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-1 md:ml-2" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Success Message */}
                  {submitSuccess && (
                    <div className={`bg-green-50 border border-green-200 text-green-700 px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl flex items-center transition-all duration-500 ${submitSuccess ? 'opacity-100' : 'opacity-0'} text-sm md:text-base`}>
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-600" />
                      <span>Message sent successfully! We'll get back to you soon.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8" data-animate>
          <div className="max-w-7xl mx-auto">
            <div className={`bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-xl overflow-hidden border border-slate-100/50 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1900ms' }}>
              <div className="grid lg:grid-cols-2">
                {/* Map */}
                <div className="h-80 md:h-96 lg:h-auto">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.123456789!2d77.6523!3d28.7465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c123456789%3A0xabcdef1234567890!2sMuradnagar%2C+Ghaziabad%2C+Uttar+Pradesh+201206!5e0!3m2!1sen!2sin!4v0000000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SAGUS Solutions Location"
                    className="w-full h-full"
                  ></iframe>
                </div>

                {/* Map Info */}
                <div className="p-4 md:p-6 lg:p-8 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Visit Our Office</h3>

                  <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    {/* Location */}
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-teal-600 mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm md:text-base">Our Location</p>
                        <a
                          href="https://www.google.com/maps/place/Muradnagar,+Ghaziabad,+Uttar+Pradesh+201206"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-300 hover:text-teal-400 transition-colors duration-300 text-sm md:text-base"
                        >
                          Muradnagar, Ghaziabad, Uttar Pradesh 201206
                        </a>
                        <p className="text-slate-300 text-xs md:text-sm">Visit our office for a face-to-face consultation</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-teal-600 mr-2 md:mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm md:text-base">Phone Number</p>
                        <a href="tel:+918604050163" className="text-slate-300 hover:text-teal-400 transition-colors duration-300 text-sm md:text-base">
                          +91 8604050163
                        </a>
                        <p className="text-slate-300 text-xs md:text-sm">Mon-Fri from 8am to 6pm</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-teal-600 mr-2 md:mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm md:text-base">Email Address</p>
                        <a href="mailto:sagussolutions@gmail.com" className="text-slate-300 hover:text-teal-400 transition-colors duration-300 text-sm md:text-base">
                          sagussolutions@gmail.com
                        </a>
                        <p className="text-slate-300 text-xs md:text-sm">Send us an email anytime</p>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 md:w-6 md:h-6 text-teal-600 mr-2 md:mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm md:text-base">Working Hours</p>
                        <p className="text-slate-300 text-sm md:text-base">Mon - Fri: 9:00 - 18:00</p>
                        <p className="text-slate-300 text-xs md:text-sm">Weekends: By appointment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" data-animate>
          <div className="max-w-4xl mx-auto text-center">
            <div className={`bg-gradient-to-br from-teal-500 to-green-500 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 xl:p-12 text-white relative overflow-hidden transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '2000ms' }}>
              <div className="absolute top-0 left-0 w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-white/10 rounded-full -translate-x-8 -translate-y-8 md:-translate-x-10 md:-translate-y-10 lg:-translate-x-12 lg:-translate-y-12"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 md:w-28 md:h-28 lg:w-40 lg:h-40 bg-white/10 rounded-full translate-x-8 translate-y-8 md:translate-x-10 md:translate-y-10 lg:translate-x-16 lg:translate-y-16"></div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 relative z-10">Schedule a Free Consultation</h2>
              <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 relative z-10">
                Let's discuss your project and explore how we can help you achieve your goals
              </p>
             <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center relative z-10">
  <a
    href="https://wa.me/918604050163?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20meeting%20to%20discuss%20your%20services%20and%20explore%20how%20we%20can%20work%20together.%20Please%20let%20me%20know%20a%20suitable%20time."
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-teal-600 font-semibold rounded-lg md:rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg flex items-center text-sm md:text-base">
      <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
      Book a Meeting
    </button>
  </a>

  <a href="tel:8604050163">
    <button className="px-6 py-3 md:px-8 md:py-4 border-2 border-white text-white font-semibold rounded-lg md:rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center text-sm md:text-base">
      <Phone className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
      Call Now
    </button>
  </a>
</div>

            </div>
          </div>
        </section>
      </div>
      <Footer />
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Contact;