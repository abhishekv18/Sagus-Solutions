import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './HomePage';
import Services from './Services';
import OurWork from './OurWork';
import About from './About';
import Contact from './Contact';
import ScrollToTop from './ScrollToTop';
import ScrollToTopButton from './ScrollToTopButton';
import Layout from './Layout';




function App() {
 

  return (
    <Router>
      <Layout>
           <ScrollToTop/>
        {/* <ScrollToTop/> */}
        <Routes>
         
          {/* <Route path="/" element={<Header />} /> */}
     <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<Services />} />
          <Route path="/our-work" element={<OurWork/>} />
  <Route path="/about" element={<About/>} />
<Route path="/contact" element={<Contact/>} />

        </Routes>
   {/* <ScrollToTopButton/> */}
      </Layout>
   
    </Router>
  );
}

export default App;