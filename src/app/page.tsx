"use client"
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhatYoullLearn from '../components/WhatYoullLearn';
import Testimonials from '../components/Testimonials';
import Enroll from '../components/Enroll';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Hero />
      <WhatYoullLearn />
      <Testimonials />
      <Enroll />
      <FAQ />
      <Footer />
    </div>
  );
}
