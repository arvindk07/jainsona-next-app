'use client';
import React, { useEffect } from 'react';
import { youtubeVideos } from '../../assets/youtube-videos/videos';
import Quote from '../../component/form/quote';
import Link from 'next/link';
import Header from '@/component/header/header';
import Footer from '@/component/footer/footer';
import { toast } from 'react-toastify';

const ProductDemoPage = () => {
	const ScrollToTop = () => {
		useEffect(() => {
			window.scrollTo(0, 0);
		}, []);

		return null;
	};
	const link = 'https://example.com';
	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(link);
			toast.success('Link copied to clipboard!', {
				autoClose: 5000,
				position: 'top-center',
			});
		} catch (err) {
			toast.error('Failed to copy the link!');
			console.error('Copy error:', err);
		}
	};

	return (
		<div className="bg-white">
			<ScrollToTop />
			<Header />
			{/* <header className="bg-red-600 text-white">
        <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-8">
          <img src="https://via.placeholder.com/150x50" alt="Logo" className="w-32" />
          <nav className="flex flex-wrap gap-4 justify-center">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">Product & Services</a>
            <a href="#" className="hover:text-gray-300">Our Collaborations</a>
            <a href="#" className="hover:text-gray-300">Download</a>
            <a href="#" className="hover:text-gray-300 font-semibold underline">
              Product Video & Demo
            </a>
            <a href="#" className="hover:text-gray-300">Contact Us</a>
          </nav>
        </div>
      </header> */}

			{/* Product Categories */}
			<div className="container mx-auto py-12 px-4 md:px-8">
				{/* Category 1 */}
				<div>
					<div className=" flex items-center gap-4">
						<button className=" bg-[#880909] text-white py-2 px-4 rounded-lg text-2xl mb-2">
							Panduit
						</button>
						<button
							className=" border py-2 px-4"
							onClick={copyToClipboard}
						>
							<i className="fa-solid fa-share"></i>
						</button>
						<button className=" border py-2 px-4">
							<i className="fa-solid fa-circle-info"></i>
						</button>
					</div>
					<div className="grid mt-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
						{youtubeVideos.panduit.map(
							({ title, description, videoId }) => (
								<div
									key={videoId}
									className="border rounded-lg hover:shadow-lg transition-shadow"
								>
									<div className="relative w-full h-32 sm:h-40 bg-gray-200 flex items-center justify-center">
										{/* <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded">
                    Demo
                  </span> */}
										<iframe
											width="100%"
											height="100%"
											src={`https://www.youtube.com/embed/${videoId}`}
											frameborder="0"
											allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowfullscreen
										></iframe>
									</div>
									<h3 className="px-2 py-3 text-sm font-medium">
										{title}
									</h3>
									{/* <p className="px-2 text-xs mt-1 text-gray-500">
                  {description}
                </p> */}
								</div>
							),
						)}
					</div>
				</div>

				{/* Category 2 */}
				<div className="mt-12">
					<div className=" flex items-center gap-4">
						<button className=" bg-[#880909] text-white py-2 px-4 rounded-lg text-2xl ">
							Vesda
						</button>
						<button
							className=" border py-2 px-4"
							onClick={copyToClipboard}
						>
							<i className="fa-solid fa-share"></i>
						</button>
						<button className=" border py-2 px-4">
							<i className="fa-solid fa-circle-info"></i>
						</button>
					</div>
					<div className="grid mt-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
						{youtubeVideos.vedsa.map(
							({ title, description, videoId }) => (
								<div
									key={videoId}
									className="border rounded-lg hover:shadow-lg transition-shadow"
								>
									<div className="relative w-full h-32 sm:h-40 bg-gray-200 flex items-center justify-center">
										{/* <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded">
                    Demo
                  </span> */}
										<iframe
											width="100%"
											height="100%"
											src={`https://www.youtube.com/embed/${videoId}`}
											frameborder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowfullscreen
										></iframe>
									</div>
									<h3 className="px-2 py-3 text-sm font-medium">
										{title}
									</h3>
									{/* <p className="text-xs px-2 mt-1 text-gray-500">
                  {description}
                </p> */}
								</div>
							),
						)}
					</div>
				</div>
			</div>

			{/* Workstation Essentials Section */}
			<div className="bg-[url('/wse2.png')]  bg-bottom bg-no-repeat bg-cover md:bg-contain min-h-[500px]  py-16 px-4 text-center">
				<div className="container mx-auto">
					<h2 className="text-3xl font-semibold text-red-600 mb-4">
						Wireless & Wired
					</h2>
					<p className="text-4xl font-bold mb-8">
						Workstation Essentials
					</p>
					<Link href="/product">
						<button className="bg-[#880909] text-white py-3 px-6 rounded-[40px] hover:bg-red-700 transition-colors">
							Know more
						</button>
					</Link>
				</div>
			</div>

			{/* Quote Form */}
			<Quote />
			{/* <div className="container mx-auto py-16 px-4 md:px-8">
        <div className=" flex justify-center items-center bg-white">
          <div className="w-full mx-auto md:w-1/2  p-8 shadow-lg border rounded-lg">
            <h3 className="text-xl font-bold text-center mb-6">
              Tell us what you need, and we'll help you get quotes
            </h3>
            <form className="space-y-4">
              <div className="flex items-center gap-10">
                <label htmlFor="product" className="text-sm font-medium min-w-32">I want quotes for</label>
                <select
                  id="product"
                  className="mt-2 border rounded-lg p-2 flex-1"
                >
                  <option>Cable Ties</option>
                  <option>Electrical Components</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="flex items-center gap-10">
                <label htmlFor="phone" className="text-sm font-medium min-w-32">Mobile Number</label>
                <input
                  id="phone"
                  type="tel"
                  className="mt-2 border rounded-lg p-2 flex-1"
                  placeholder="+91 Enter your mobile"
                />
              </div>
              <div className="flex items-center gap-10">
                <label htmlFor="email" className="text-sm font-medium min-w-32">Email ID</label>
                <input
                  id="email"
                  type="email"
                  className="mt-2 border rounded-lg p-2 flex-1"
                  placeholder="Enter your mail id"
                />
              </div>
              <div className=" flex justify-end w-full">
                <button
                  type="submit"
                  className="bg-[#880909] text-white max-w-max px-6 py-3 rounded-[40px] hover:bg-red-700 transition-colors"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}

			<Footer />
		</div>
	);
};

export default ProductDemoPage;
