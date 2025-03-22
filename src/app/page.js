"use client"

import { useEffect } from "react";
import HeroSection from "@/component/home/herosection";
import Products from "@/component/home/products";
import Contact from "@/component/home/contact";
import Clients from "@/component/home/clients";

import Collaborations from "@/component/home/collaborations";
import Stats from "@/component/home/stats";
import AboutUs from "@/component/home/About";
import Header from "@/component/header/header";
import Footer from "@/component/footer/footer";

import Head from 'next/head';

const ScrollToTop = () => {
  useEffect(() => {

    window.scrollTo(0, 0);
  }, []);

  return null;
};

const Home = () => {
  return (
    <div>
      <Head>
        {/* ✅ Load Font Awesome globally */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha384-XdS9HDbvxEsGdX90DQ6wsFXsmRbjZ0SwbM3Se1jpAzslU3H/6p2VdpWnCwAfcvQU"
          crossOrigin="anonymous"
        />
      </Head>
      <ScrollToTop />
      <Header />
      <HeroSection />
      <AboutUs />
      <Products />
      <Stats />
      <Collaborations />
      <Clients />
      <Contact />
      <section className=" text-black py-10 px-6 flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold mb-4">Employment</h2>
        <p className="text-lg max-w-2xl">
          To apply for a job with Jainsons, please send a cover letter together with your C.V.
        </p>
        <a
          href="mailto:web@jainsonsindia.net"
          className="text-black font-semibold hover:underline mt-2"
        >
          to:&nbsp;web@jainsonsindia.net
        </a>
      </section>
      <Footer />
      {/* Type-1-removebg-preview.png */}
      {/* Screenshot_2022-05-06_132134-removebg-preview1.png */}
    </div>
  );
};

export default Home;
