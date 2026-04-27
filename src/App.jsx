import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import DoctorSection from './components/DoctorSection';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import VideoSection from './components/VideoSection';
import Journey from './components/Journey';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

function App() {
  useIntersectionObserver();
  
  const [urlParams, setUrlParams] = useState({
    city: 'Bhopal',
    doctorSlug: '',
    stage: 'first'
  });

  useEffect(() => {
    // Parse URL params
    const params = new URLSearchParams(window.location.search);
    const doctor = params.get('doctor') || 'dr-sample';
    const stage = params.get('stage') || 'first';
    
    setUrlParams({
      city: 'Bhopal',
      doctorSlug: doctor,
      stage: stage
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Navbar city={urlParams.city} />
      <main>
        <Hero city={urlParams.city} stage={urlParams.stage} />
        <TrustBar />
        <DoctorSection doctorSlug={urlParams.doctorSlug} city={urlParams.city} />
        <Stats />
        <Testimonials />
        <VideoSection />
        <Journey />
        <Reviews />
        <FAQ city={urlParams.city} />
        <CTA city={urlParams.city} />
      </main>
      <Footer city={urlParams.city} />
      <WhatsAppButton city={urlParams.city} />
    </div>
  );
}

export default App;
