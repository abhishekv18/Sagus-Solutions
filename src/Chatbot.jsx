// // src/Chatbot.jsx
// import React, { useState } from 'react';
// import './Chatbot.css';

// const Chatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       text: "Hi there! I'm the Sagus Solutions assistant. How can I help you?",
//       sender: "bot",
//       time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//     }
//   ]);
//   const [inputValue, setInputValue] = useState('');

//   // Knowledge base for the chatbot
// //   const knowledgeBase = {
// //     greeting: [
// //       "Hello! Welcome to Sagus Solutions. How can I assist you today?",
// //       "Hi there! How can I help you with your digital transformation needs?",
// //       "Welcome! I'm here to help you learn about Sagus Solutions and our services.",
// //     ],
// //     services: [
// //       "We offer a comprehensive range of digital services...",
// //       // Add all your services responses here
// //     ],
// //     // Add all other responses from the original chatbot
// //   };
//    const knowledgeBase = {
//             greeting: [
//                 "Hello! Welcome to Sagus Solutions. How can I assist you today?",
//                 "Hi there! How can I help you with your digital transformation needs?",
//                 "Welcome! I'm here to help you learn about Sagus Solutions and our services.",
//                 "Hey! Great to see you here. What can I do for you today?",
//                 "Hi! Thanks for stopping by. How can I help?"
//             ],
//             services: [
//                 "We offer a comprehensive range of digital services:\n\n" +
//                 "<div class='service-item'><span class='service-title'>Website Development</span> - Professional, responsive websites tailored to your business needs</div>\n" +
//                 "<div class='service-item'><span class='service-title'>App Development</span> - Cross-platform mobile applications for iOS and Android</div>\n" +
//                 "<div class='service-item'><span class='service-title'>UI/UX Design</span> - User-centered design that enhances user experience</div>\n" +
//                 "<div class='service-item'><span class='service-title'>AI Chatbot Integration</span> - Intelligent chatbots to automate customer interactions</div>\n" +
//                 "<div class='service-item'><span class='service-title'>Content Marketing</span> - Strategic content creation including social media posts and reels</div>\n" +
//                 "<div class='service-item'><span class='service-title'>Video Production</span> - Professional video content for marketing and engagement</div>"
//             ],
//             pricing: [
//                 "Our competitive pricing:\n\n" +
//                 "<div class='service-item'><span class='service-title'>Website Development:</span> <span class='service-price'>Starting at ₹4,499</span></div>\n" +
//                 "<div class='service-item'><span class='service-title'>App Development:</span> <span class='service-price'>Starting at ₹4,999</span></div>\n" +
//                 "<div class='service-item'><span class='service-title'>UI/UX Design:</span> <span class='service-price'>Starting at ₹2,499</span></div>\n" +
//                 "<div class='service-item'><span class='service-title'>AI Chatbot:</span> <span class='service-price'>Starting at ₹4,499</span></div>\n" +
//                 "<div class='service-item'><span class='service-title'>Content Marketing:</span> <span class='service-price'>₹2,499/month</span> (includes reels and posts)</div>\n\n" +
//                 "All projects are customized to your specific needs, so exact pricing may vary."
//             ],
//             websitePricing: [
//                 "For <span class='service-title'>Website Development</span>, our pricing starts at <span class='service-price'>₹4,499</span>.\n\n" +
//                 "This includes:\n" +
//                 "• Responsive design that works on all devices\n" +
//                 "• SEO-friendly structure\n" +
//                 "• Basic content management system\n" +
//                 "• Contact forms and integration\n\n" +
//                 "Premium packages with e-commerce functionality and advanced features are also available."
//             ],
//             appPricing: [
//                 "For <span class='service-title'>App Development</span>, our pricing starts at <span class='service-price'>₹4,999</span>.\n\n" +
//                 "This includes:\n" +
//                 "• Cross-platform compatibility (iOS & Android)\n" +
//                 "• User-friendly interface\n" +
//                 "• Basic functionality and features\n" +
//                 "• App store submission assistance\n\n" +
//                 "Advanced apps with complex features, APIs, and backend services are priced based on requirements."
//             ],
//             uiuxPricing: [
//                 "For <span class='service-title'>UI/UX Design</span>, our pricing starts at <span class='service-price'>₹2,499</span>.\n\n" +
//                 "This includes:\n" +
//                 "• User research and analysis\n" +
//                 "• Wireframing and prototyping\n" +
//                 "• Visual design creation\n" +
//                 "• Usability testing guidance\n\n" +
//                 "Complete design systems and brand identity packages are available at higher tiers."
//             ],
//             chatbotPricing: [
//                 "For <span class='service-title'>AI Chatbot Integration</span>, our pricing starts at <span class='service-price'>₹4,499</span>.\n\n" +
//                 "This includes:\n" +
//                 "• Basic conversational AI setup\n" +
//                 "• Integration with your website\n" +
//                 "• Training with your business knowledge\n" +
//                 "• Basic analytics dashboard\n\n" +
//                 "Advanced chatbots with CRM integration, multilingual support, and advanced AI capabilities are priced higher."
//             ],
//             contentPricing: [
//                 "For <span class='service-title'>Content Marketing</span>, our pricing starts at <span class='service-price'>₹2,499/month</span>.\n\n" +
//                 "This includes:\n" +
//                 "• 8 social media posts per month\n" +
//                 "• 2 reels/short videos per month\n" +
//                 "• Basic content strategy\n" +
//                 "• Performance analytics\n\n" +
//                 "Comprehensive packages with blog content, email marketing, and advanced analytics are available."
//             ],
//             servicesWithPricing: [
//                 "Here are our services with pricing details:\n\n" +
//                 "<div class='service-item'><span class='service-title'>Website Development:</span> Professional, responsive websites <span class='service-price'>Starting at ₹4,499</span></div>\n" +
//                 "<div class='service-item'><span class='service-title'>App Development:</span> Cross-platform mobile applications <span class='service-price'>Starting at ₹4,999</span></div>\n" +
//                 "<div class='service-item'><span class='service-title'>UI/UX Design:</span> User-centered design solutions <span class='service-price'>Starting at ₹2,499</span></div>\n" +
//                 "<div class='service-item'><span class='service-title'>AI Chatbot Integration:</span> Intelligent automation <span class='service-price'>Starting at ₹4,499</span></div>\n" +
//                 "<div class='service-item'><span class='service-title'>Content Marketing:</span> Strategic content including social media <span class='service-price'>₹2,499/month</span></div>\n\n" +
//                 "All projects are customized to your specific needs. Would you like to discuss a particular project?"
//             ],
//             contact: [
//                 "You can reach us through:\n\n" +
//                 "• <strong>Email:</strong> sagussolutions@gmail.com\n" +
//                 "• <strong>Phone:</strong> +91 8604050163\n" +
//                 "• <strong>Website:</strong> <a href='https://www.sagussolutions.info' target='_blank' class='url-link'>www.sagussolutions.info</a>\n\n" +
//                 "We'd be happy to discuss your project requirements! Feel free to reach out anytime."
//             ],
//             about: [
//                 "Sagus Solutions is your partner for digital transformation. We specialize in:\n\n" +
//                 "• Web Design & Development\n" +
//                 "• AI Solutions & Automation\n" +
//                 "• Mobile App Development\n" +
//                 "• Strategic Content Creation\n\n" +
//                 "Our mission is to simplify processes, boost engagement, and deliver measurable results for businesses."
//             ],
//             work: [
//                 "We have delivered multiple projects in areas like website development, mobile apps, content creation, and AI automation.\n\n" +
//                 "You can explore some of our live work here: <a href='https://sagussolutions.info/our-work' target='_blank' class='url-link'>sagussolutions.info/our-work</a>\n\n" +
//                 "Our portfolio showcases various projects we've created for our clients across different industries."
//             ],
//             howAreYou: [
//                 "I'm doing great, thanks for asking! Ready to help you with all your digital needs.",
//                 "I'm functioning perfectly! How can I assist you today?",
//                 "I'm doing well, thank you! How about you?",
//                 "All systems operational! What can I help you with?",
//                 "I'm excellent! Ready to help you with Sagus Solutions services."
//             ],
//             thanks: [
//                 "You're welcome! Happy to help.",
//                 "Anytime! Let me know if you need anything else.",
//                 "Glad I could assist! Feel free to ask if you have more questions.",
//                 "You're very welcome! Is there anything else you'd like to know?",
//                 "My pleasure! Don't hesitate to ask if you need more information."
//             ],
//             goodbye: [
//                 "Goodbye! Thanks for visiting Sagus Solutions.",
//                 "See you later! Feel free to come back if you have more questions.",
//                 "Have a great day! Remember we're here to help with your digital needs.",
//                 "Bye for now! Don't hesitate to reach out if you need anything.",
//                 "Talk to you soon! Good luck with your projects."
//             ],
//             default: [
//                 "I'm not sure I understand. Could you please rephrase your question?",
//                 "I'm still learning about Sagus Solutions. Could you try asking about our services, pricing, or how to contact us?",
//                 "I don't have information about that yet. Please feel free to ask about our services or contact us directly for specific queries.",
//                 "That's an interesting question! For detailed information, you might want to contact our team directly.",
//                 "I'm primarily focused on Sagus Solutions services. Could you ask about our web development, app creation, or other digital services?"
//             ]
//         };
//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       sendMessage();
//     }
//   };

//   const sendMessage = (predefinedMessage = null) => {
//     const messageText = predefinedMessage || inputValue;
//     if (!messageText.trim()) return;

//     // Add user message
//     const newMessage = {
//       text: messageText,
//       sender: "user",
//       time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//     };

//     setMessages(prev => [...prev, newMessage]);
//     setInputValue('');

//     // Generate bot response after a delay
//     setTimeout(() => {
//       const botResponse = generateResponse(messageText);
//       const botMessage = {
//         text: botResponse,
//         sender: "bot",
//         time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       };
//       setMessages(prev => [...prev, botMessage]);
//     }, 1000);
//   };

//   function generateResponse(input) {
//             const lowerInput = input.toLowerCase();
            
//             // Greetings
//             if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey') || 
//                 lowerInput.includes('good morning') || lowerInput.includes('good afternoon') || lowerInput.includes('good evening')) {
//                 return getRandomResponse(knowledgeBase.greeting);
//             }
            
//             // How are you
//             if (lowerInput.includes('how are you') || lowerInput.includes('how do you do') || lowerInput.includes('how\'s it going')) {
//                 return getRandomResponse(knowledgeBase.howAreYou);
//             }
            
//             // Thanks
//             if (lowerInput.includes('thank') || lowerInput.includes('thanks') || lowerInput.includes('appreciate')) {
//                 return getRandomResponse(knowledgeBase.thanks);
//             }
            
//             // Goodbye
//             if (lowerInput.includes('bye') || lowerInput.includes('goodbye') || lowerInput.includes('see you') || 
//                 lowerInput.includes('see ya') || lowerInput.includes('cya')) {
//                 return getRandomResponse(knowledgeBase.goodbye);
//             }
            
//             // Website pricing
//             if (lowerInput.includes('website') && (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('how much'))) {
//                 return getRandomResponse(knowledgeBase.websitePricing);
//             }
            
//             // App pricing
//             if ((lowerInput.includes('app') || lowerInput.includes('application')) && (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('how much'))) {
//                 return getRandomResponse(knowledgeBase.appPricing);
//             }
            
//             // UI/UX pricing
//             if ((lowerInput.includes('ui') || lowerInput.includes('ux') || lowerInput.includes('design')) && (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('how much'))) {
//                 return getRandomResponse(knowledgeBase.uiuxPricing);
//             }
            
//             // Chatbot pricing
//             if ((lowerInput.includes('chatbot') || lowerInput.includes('ai') || lowerInput.includes('bot')) && (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('how much'))) {
//                 return getRandomResponse(knowledgeBase.chatbotPricing);
//             }
            
//             // Content pricing
//             if ((lowerInput.includes('content') || lowerInput.includes('marketing')) && (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('how much'))) {
//                 return getRandomResponse(knowledgeBase.contentPricing);
//             }
            
//             // Services with pricing
//             if ((lowerInput.includes('service') && lowerInput.includes('price')) || 
//                 (lowerInput.includes('what') && lowerInput.includes('offer') && lowerInput.includes('price')) ||
//                 lowerInput.includes('services and pricing') || lowerInput.includes('pricing and services')) {
//                 return getRandomResponse(knowledgeBase.servicesWithPricing);
//             }
            
//             // Services
//             if (lowerInput.includes('service') || lowerInput.includes('what do you offer') || lowerInput.includes('provide') || 
//                 lowerInput.includes('do for') || lowerInput.includes('website') || lowerInput.includes('app') || 
//                 lowerInput.includes('development') || lowerInput.includes('design') || lowerInput.includes('ai') || 
//                 lowerInput.includes('chatbot') || lowerInput.includes('content') || lowerInput.includes('video')) {
//                 return getRandomResponse(knowledgeBase.services);
//             }
            
//             // Pricing
//             if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('how much') || 
//                 lowerInput.includes('rate') || lowerInput.includes('charg') || lowerInput.includes('package')) {
//                 return getRandomResponse(knowledgeBase.pricing);
//             }
            
//             // Contact
//             if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone') || 
//                 lowerInput.includes('number') || lowerInput.includes('call') || lowerInput.includes('reach')) {
//                 return getRandomResponse(knowledgeBase.contact);
//             }
            
//             // About
//             if (lowerInput.includes('about') || lowerInput.includes('what is sagus') || lowerInput.includes('tell me about') || 
//                 lowerInput.includes('company') || lowerInput.includes('business')) {
//                 return getRandomResponse(knowledgeBase.about);
//             }
            
//             // Work
//             if (lowerInput.includes('work') || lowerInput.includes('portfolio') || lowerInput.includes('project') || 
//                 lowerInput.includes('example') || lowerInput.includes('sample') || lowerInput.includes('show me')) {
//                 return getRandomResponse(knowledgeBase.work);
//             }
            
//             // Default response
//             return getRandomResponse(knowledgeBase.default);
//         }
//  function getRandomResponse(responses) {
//             return responses[Math.floor(Math.random() * responses.length)];
//         }

//         // Function to get current time in HH:MM format
       
//   return (
//     <div className="chatbot-wrapper">
//       <div className={`chatbot-container ${isOpen ? 'active' : ''}`}>
//         <div className="chat-header">
//           <h3>Sagus Solutions Assistant</h3>
//           <p>How can I help you today?</p>
//           <button className="chat-close" onClick={toggleChat}>×</button>
//         </div>
//         <div className="chat-messages">
//           {messages.map((message, index) => (
//             <div key={index} className={`message ${message.sender}-message`}>
//               {message.text}
//               <div className="message-time">{message.time}</div>
//             </div>
//           ))}
//         </div>
//        <div className="suggestion-chips">
//   <div className="chip" onClick={() => sendMessage('What services do you offer?')}>Services</div>
//   <div className="chip" onClick={() => sendMessage('What are your prices?')}>Pricing</div>
//   <div className="chip" onClick={() => sendMessage('How can I contact you?')}>Contact</div>
//   <div className="chip" onClick={() => sendMessage('What is Sagus Solutions?')}>About Us</div>
//   <div className="chip" onClick={() => sendMessage('Show me your previous work')}>Portfolio</div>
// </div>
//         <div className="chat-input-container">
//           <input 
//             type="text" 
//             className="chat-input" 
//             value={inputValue}
//             onChange={handleInputChange}
//             onKeyPress={handleKeyPress}
//             placeholder="Type your message here..." 
//           />
//           <button className="send-button" onClick={() => sendMessage()}>Send</button>
//         </div>
//       </div>
//       <div className="floating-chat-btn" onClick={toggleChat}>
//         💬
//       </div>
//     </div>
//   );
// };

// export default Chatbot;



import React, { useState } from 'react';
import './Chatbot.css';

// Safe HTML component
const SafeHTML = ({ html }) => {
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi there! I'm the Sagus Solutions assistant. How can I help you?",
      sender: "bot",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  // Knowledge base for the chatbot
  const knowledgeBase = {
    greeting: [
      "Hello! Welcome to Sagus Solutions. How can I assist you today?",
      "Hi there! How can I help you with your digital transformation needs?",
      "Welcome! I'm here to help you learn about Sagus Solutions and our services.",
    ],
    services: [
      "We offer a comprehensive range of digital services:\n\n" +
      "<div class='service-item'><span class='service-title'>Website Development</span> - Professional, responsive websites tailored to your business needs</div>\n" +
      "<div class='service-item'><span class='service-title'>App Development</span> - Cross-platform mobile applications for iOS and Android</div>\n" +
      "<div class='service-item'><span class='service-title'>UI/UX Design</span> - User-centered design that enhances user experience</div>\n" +
      "<div class='service-item'><span class='service-title'>AI Chatbot Integration</span> - Intelligent chatbots to automate customer interactions</div>\n" +
      "<div class='service-item'><span class='service-title'>Content Marketing</span> - Strategic content creation including social media posts and reels</div>\n" +
      "<div class='service-item'><span class='service-title'>Video Production</span> - Professional video content for marketing and engagement</div>"
    ],
    contact: [
      "You can reach us through:\n\n" +
      "• <strong>Email:</strong> sagussolutions@gmail.com\n" +
      "• <strong>Phone:</strong> +91 8604050163\n" +
      "• <strong>Website:</strong> <a href='https://www.sagussolutions.info' target='_blank' class='url-link'>www.sagussolutions.info</a>\n\n" +
      "We'd be happy to discuss your project requirements! Feel free to reach out anytime."
    ],
     pricing: [
                "Our competitive pricing:\n\n" +
                "<div class='service-item'><span class='service-title'>Website Development:</span> <span class='service-price'>Starting at ₹4,499</span></div>\n" +
                "<div class='service-item'><span class='service-title'>App Development:</span> <span class='service-price'>Starting at ₹4,999</span></div>\n" +
                "<div class='service-item'><span class='service-title'>UI/UX Design:</span> <span class='service-price'>Starting at ₹2,499</span></div>\n" +
                "<div class='service-item'><span class='service-title'>AI Chatbot:</span> <span class='service-price'>Starting at ₹4,499</span></div>\n" +
                "<div class='service-item'><span class='service-title'>Content Marketing:</span> <span class='service-price'>₹2,499/month</span> (includes reels and posts)</div>\n\n" +
                "All projects are customized to your specific needs, so exact pricing may vary."
            ],
            websitePricing: [
                "For <span class='service-title'>Website Development</span>, our pricing starts at <span class='service-price'>₹4,499</span>.\n\n" +
                "This includes:\n" +
                "• Responsive design that works on all devices\n" +
                "• SEO-friendly structure\n" +
                "• Basic content management system\n" +
                "• Contact forms and integration\n\n" +
                "Premium packages with e-commerce functionality and advanced features are also available."
            ],
            appPricing: [
                "For <span class='service-title'>App Development</span>, our pricing starts at <span class='service-price'>₹4,999</span>.\n\n" +
                "This includes:\n" +
                "• Cross-platform compatibility (iOS & Android)\n" +
                "• User-friendly interface\n" +
                "• Basic functionality and features\n" +
                "• App store submission assistance\n\n" +
                "Advanced apps with complex features, APIs, and backend services are priced based on requirements."
            ],
            uiuxPricing: [
                "For <span class='service-title'>UI/UX Design</span>, our pricing starts at <span class='service-price'>₹2,499</span>.\n\n" +
                "This includes:\n" +
                "• User research and analysis\n" +
                "• Wireframing and prototyping\n" +
                "• Visual design creation\n" +
                "• Usability testing guidance\n\n" +
                "Complete design systems and brand identity packages are available at higher tiers."
            ],
            chatbotPricing: [
                "For <span class='service-title'>AI Chatbot Integration</span>, our pricing starts at <span class='service-price'>₹4,499</span>.\n\n" +
                "This includes:\n" +
                "• Basic conversational AI setup\n" +
                "• Integration with your website\n" +
                "• Training with your business knowledge\n" +
                "• Basic analytics dashboard\n\n" +
                "Advanced chatbots with CRM integration, multilingual support, and advanced AI capabilities are priced higher."
            ],
            contentPricing: [
                "For <span class='service-title'>Content Marketing</span>, our pricing starts at <span class='service-price'>₹2,499/month</span>.\n\n" +
                "This includes:\n" +
                "• 8 social media posts per month\n" +
                "• 2 reels/short videos per month\n" +
                "• Basic content strategy\n" +
                "• Performance analytics\n\n" +
                "Comprehensive packages with blog content, email marketing, and advanced analytics are available."
            ],
            servicesWithPricing: [
                "Here are our services with pricing details:\n\n" +
                "<div class='service-item'><span class='service-title'>Website Development:</span> Professional, responsive websites <span class='service-price'>Starting at ₹4,499</span></div>\n" +
                "<div class='service-item'><span class='service-title'>App Development:</span> Cross-platform mobile applications <span class='service-price'>Starting at ₹4,999</span></div>\n" +
                "<div class='service-item'><span class='service-title'>UI/UX Design:</span> User-centered design solutions <span class='service-price'>Starting at ₹2,499</span></div>\n" +
                "<div class='service-item'><span class='service-title'>AI Chatbot Integration:</span> Intelligent automation <span class='service-price'>Starting at ₹4,499</span></div>\n" +
                "<div class='service-item'><span class='service-title'>Content Marketing:</span> Strategic content including social media <span class='service-price'>₹2,499/month</span></div>\n\n" +
                "All projects are customized to your specific needs. Would you like to discuss a particular project?"
            ],
            contact: [
                "You can reach us through:\n\n" +
                "• <strong>Email:</strong> sagussolutions@gmail.com\n" +
                "• <strong>Phone:</strong> +91 8604050163\n" +
                "• <strong>Website:</strong> <a href='https://www.sagussolutions.info' target='_blank' class='url-link'>www.sagussolutions.info</a>\n\n" +
                "We'd be happy to discuss your project requirements! Feel free to reach out anytime."
            ],
            about: [
                "Sagus Solutions is your partner for digital transformation. We specialize in:\n\n" +
                "• Web Design & Development\n" +
                "• AI Solutions & Automation\n" +
                "• Mobile App Development\n" +
                "• Strategic Content Creation\n\n" +
                "Our mission is to simplify processes, boost engagement, and deliver measurable results for businesses."
            ],
            work: [
                "We have delivered multiple projects in areas like website development, mobile apps, content creation, and AI automation.\n\n" +
                "You can explore some of our live work here: <a href='https://sagussolutions.info/our-work' target='_blank' class='url-link'>sagussolutions.info/our-work</a>\n\n" +
                "Our portfolio showcases various projects we've created for our clients across different industries."
            ],
            howAreYou: [
                "I'm doing great, thanks for asking! Ready to help you with all your digital needs.",
                "I'm functioning perfectly! How can I assist you today?",
                "I'm doing well, thank you! How about you?",
                "All systems operational! What can I help you with?",
                "I'm excellent! Ready to help you with Sagus Solutions services."
            ],
            thanks: [
                "You're welcome! Happy to help.",
                "Anytime! Let me know if you need anything else.",
                "Glad I could assist! Feel free to ask if you have more questions.",
                "You're very welcome! Is there anything else you'd like to know?",
                "My pleasure! Don't hesitate to ask if you need more information."
            ],
            goodbye: [
                "Goodbye! Thanks for visiting Sagus Solutions.",
                "See you later! Feel free to come back if you have more questions.",
                "Have a great day! Remember we're here to help with your digital needs.",
                "Bye for now! Don't hesitate to reach out if you need anything.",
                "Talk to you soon! Good luck with your projects."
            ],
            default: [
                "I'm not sure I understand. Could you please rephrase your question?",
                "I'm still learning about Sagus Solutions. Could you try asking about our services, pricing, or how to contact us?",
                "I don't have information about that yet. Please feel free to ask about our services or contact us directly for specific queries.",
                "That's an interesting question! For detailed information, you might want to contact our team directly.",
                "I'm primarily focused on Sagus Solutions services. Could you ask about our web development, app creation, or other digital services?"
            ]
    // Add other responses from your knowledge base
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const sendMessage = (predefinedMessage = null) => {
    const messageText = predefinedMessage || inputValue;
    if (!messageText.trim()) return;

    // Add user message
    const newMessage = {
      text: messageText,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');

    // Generate bot response after a delay
    setTimeout(() => {
      const botResponse = generateResponse(messageText);
      const botMessage = {
        text: botResponse,
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const generateResponse = (input) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('hi') || lowerInput.includes('hello')) {
      return getRandomResponse(knowledgeBase.greeting);
    }
    
    if (lowerInput.includes('service')) {
      return getRandomResponse(knowledgeBase.services);
    }
    
    if (lowerInput.includes('contact')) {
      return getRandomResponse(knowledgeBase.contact);
    }
    
    return "I'm not sure I understand. Could you please rephrase your question?";
  };

  const getRandomResponse = (responses) => {
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    // <div className="chatbot-wrapper">
    //   <div className={`chatbot-container ${isOpen ? 'active' : ''}`}>
    //     <div className="chat-header">
    //       <h3>Sagus Solutions Assistant</h3>
    //       <p>How can I help you today?</p>
    //       <button className="chat-close" onClick={toggleChat}>×</button>
    //     </div>
    //     <div className="chat-messages">
    //       {messages.map((message, index) => (
    //         <div key={index} className={`message ${message.sender}-message`}>
    //           <SafeHTML html={message.text} />
    //           <div className="message-time">{message.time}</div>
    //         </div>
    //       ))}
    //     </div>
    //     <div className="suggestion-chips">
    //       <div className="chip" onClick={() => sendMessage('What services do you offer?')}>Services</div>
    //       <div className="chip" onClick={() => sendMessage('What are your prices?')}>Pricing</div>
    //       <div className="chip" onClick={() => sendMessage('How can I contact you?')}>Contact</div>
    //     </div>
    //     <div className="chat-input-container">
    //       <input 
    //         type="text" 
    //         className="chat-input" 
    //         value={inputValue}
    //         onChange={handleInputChange}
    //         onKeyPress={handleKeyPress}
    //         placeholder="Type your message here..." 
    //       />
    //       <button className="send-button" onClick={() => sendMessage()}>Send</button>
    //     </div>
    //   </div>
    //   <div className="floating-chat-btn" onClick={toggleChat}>
    //     💬
    //   </div>
    // </div>
     <div className="chatbot-wrapper">
      <div className={`chatbot-container ${isOpen ? 'active' : ''}`}>
        <div className="chat-header">
          <div className="header-content">
            <div className="chatbot-avatar">S</div>
            <div className="header-text">
              <h3>Sagus Solutions Assistant</h3>
              <p>Online • Ready to help</p>
            </div>
          </div>
          <button className="chat-close" onClick={() => setIsOpen(false)} aria-label="Close chat">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}-message`}>
              <div className="message-content">
                <SafeHTML html={message.text} />
              </div>
              <div className="message-time">{message.time}</div>
            </div>
          ))}
        </div>
        
        <div className="suggestion-chips">
          <div className="chip" onClick={() => sendMessage('What services do you offer?')}>
            <span className="chip-icon">💼</span>
            Services
          </div>
          <div className="chip" onClick={() => sendMessage('What are your prices?')}>
            <span className="chip-icon">💰</span>
            Pricing
          </div>
          <div className="chip" onClick={() => sendMessage('How can I contact you?')}>
            <span className="chip-icon">📞</span>
            Contact
          </div>
        </div>
        
        <div className="chat-input-container">
          <input 
            type="text" 
            className="chat-input" 
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Type your message here..." 
          />
          <button className="send-button" onClick={() => sendMessage()} aria-label="Send message">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
            </svg>
          </button>
        </div>
      </div>
      
      <div className={`floating-chat-btn ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span className="pulse-dot"></span>
          </>
        )}
      </div>
    </div>
  );
};

export default Chatbot;