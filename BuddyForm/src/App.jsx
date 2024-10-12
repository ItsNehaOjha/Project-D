import { Routes, Route } from "react-router-dom";
import Complain from './pages/Complain';
import Contact from './pages/Contact';
import DashBoard from './pages/DashBoard'; 
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from './component/Header';
import Hero from './component/Hero';
import Benefits from './component/Benefits';
import Collaboration from './component/Collaboration';
import Roadmap from './component/Roadmap';
import Footer from './component/Footer';

const App = () => {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25] overflow-hidden'>
        {/* Header will remain on all pages */}
        <Header />

        {/* Routes handle different pages */}
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Benefits />
              <Collaboration />
              <Roadmap />
            </>
          } /> {/* Home page */}

          <Route path="/complain" element={<Complain />} /> {/* Complain page */}
          <Route path="/dashboard" element={<DashBoard />} /> {/* DashBoard page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        </Routes>

        {/* Footer will remain on all pages */}
        <Footer />
      </div>
      
      {/* Gradient button that remains on all pages */}
      <ButtonGradient />
    </>
  );
};

export default App;
