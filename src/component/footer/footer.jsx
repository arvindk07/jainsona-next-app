"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log(`Subscribed with: ${email}`);
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-screen-xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-4  max-w-max p-2">
              <Image
                src="/jainsons-red-white-logo.png"
                alt="Jain Sons Logo"
                width={100}
                height={50}
                className="h-12"
              />
            </div>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span>📞</span>
                <span>9599203236</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <span>sales@jainsonsindiaonline.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>📍</span>
                <span>
                  Corporate Office: C-5, Community Center, Naraina Vihar, New
                  Delhi 110028 (India)
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8 md:mt-0 text-left">
            <p className="text-sm">Subscribe to our newsletter</p>
            <div className="flex mt-2 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 w-full rounded-l-lg border-0 focus:ring-2 text-black focus:ring-red-400"
                placeholder="Enter Your Email"
              />
              <button
                onClick={handleSubscribe}
                className="bg-gray-800 text-white px-4 rounded-r-lg hover:bg-black"
              >
                Subscribe
              </button>
            </div>
            <div className="mt-4 flex space-x-4 justify-start">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 flex justify-center flex-col md:flex-row items-center">
          <ul className="flex flex-wrap justify-center space-x-4 mt-4 md:mt-0">
            <li className="text-gray-400 hover:text-white">
              <Link href="/">Home</Link>
            </li>
            <li className="text-gray-400 hover:text-white">
              <Link href="/product">Product & Services</Link>
            </li>
            <li className="text-gray-400 hover:text-white">
              <Link href="/collaborations">Our Collaborations</Link>
            </li>
            <li className="text-gray-400 hover:text-white">
              <Link href="/download">Download</Link>
            </li>
            <li className="text-gray-400 hover:text-white">
              <Link href="/product-demo">Product Video & Demo</Link>
            </li>
            <li className="text-gray-400 hover:text-white">
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#880909] w-full py-3">
        <p className="text-center text-sm">
          © Jain Sons India - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
