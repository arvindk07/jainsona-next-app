"use-client"
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pathName,setPathName] = useState('')
  useEffect(()=>{
    const path = typeof window !== 'undefined' ? window.location.pathname : '';
    setPathName(path);
  },[])

  return (
    <header className="py-4 md:px-10 shadow-md bg-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-10" />
          </Link>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <i className="fa fa-times text-2xl"></i> : <i className="fa fa-bars text-2xl"></i>}
          </button>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex space-x-8">
            <li className={`hover:text-[#880909] cursor-pointer font-bold ${pathName === '/' ? 'text-[#880909]' : ""}`}>
              <Link href="/">Home</Link>
            </li>
            <li className={`hover:text-[#880909] cursor-pointer font-bold ${pathName === '/product' ? 'text-[#880909]' : ""}`}>
              <Link href="/product">Product & Services</Link>
            </li>
            <li className={`hover:text-[#880909] cursor-pointer font-bold ${pathName === '/collaborations' ? 'text-[#880909]' : ""}`}>
              <Link href="/collaborations">Our Collaborations</Link>
            </li>
            <li className={`hover:text-[#880909] cursor-pointer font-bold ${pathName === '/download' ? 'text-[#880909]' : ""}`}>
              <Link href="/download">Download</Link>
            </li>
            <li className={`hover:text-[#880909] cursor-pointer font-bold ${pathName === '/product-demo' ? 'text-[#880909]' : ""}`}>
              <Link href="/product-demo">Product Video & Demo</Link>
            </li>
            {/* <li className="hover:text-[#880909] cursor-pointer">
              <Link to={'/about'}>About Us</Link>
            </li> */}
            <li className={`hover:text-[#880909] cursor-pointer font-bold ${pathName === '/contact-us' ? 'text-[#880909]' : ""}`}>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Sidebar for mobile menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform lg:hidden`}
      >
        <div className="bg-white w-64 h-full shadow-md p-6">
          <div className='flex justify-between items-center mb-6'>
            <img src="/logo.png" alt="Logo" className="h-6" />
            <button onClick={() => setIsOpen(false)}>
              <i className="fa fa-times text-2xl"></i>
            </button>
          </div>
          <ul className="space-y-6">
            <li className="hover:text-[#880909] cursor-pointer">
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="hover:text-[#880909] cursor-pointer">
              <Link href="/product" onClick={() => setIsOpen(false)}>Product & Services</Link>
            </li>
            <li className="hover:text-[#880909] cursor-pointer">
              <Link href="/collaborations" onClick={() => setIsOpen(false)}>Our Collaborations</Link>
            </li>
            <li className="hover:text-[#880909] cursor-pointer">
              <Link href="/download" onClick={() => setIsOpen(false)}>Download</Link>
            </li>
            <li className="hover:text-[#880909] cursor-pointer">
              <Link href="/product-demo" onClick={() => setIsOpen(false)}>Product Video & Demo</Link>
            </li>
            {/* <li className="hover:text-[#880909] cursor-pointer">
              <Link to={'/about'} onClick={() => setIsOpen(false)}>About Us</Link>
            </li> */}
            <li className="hover:text-[#880909] cursor-pointer">
              <Link href="/contact-us" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;