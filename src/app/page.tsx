"use client"
import Head from 'next/head';
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
      <Head>
        <title>YouTube Management for SaaS Companies</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Yellowtail&display=swap" rel="stylesheet" />
      </Head>
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
