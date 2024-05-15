import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import ServicesPage from './Pages/ServicesPage';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  const [darkMode, setDarkMode] = useState(null);
  const [showScroll, setShowScroll] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 560) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (

    <body className={`${darkMode ? '' : 'dark-theme'}`}>

      <NavBar onSelect={(d) => { setDarkMode(d) }} />

      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path="/services" element={<ServicesPage darkMode={darkMode} />} />
          <Route exact path='/contact' element={<ContactPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
      <Footer />

      {/*=============== SCROLL UP ===============*/}
      <a href='/' className={`scrollup ${showScroll ? 'show-scroll' : ''}`} id="scroll-up" onClick={scrollToTop}>
        <i className="bx bx-up-arrow-alt scrollup__icon" />
      </a>

    </body>


  );
}

export default App;
