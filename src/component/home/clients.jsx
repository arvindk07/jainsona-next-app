import React from 'react';
const Clients = () => {
	return (
		<section className="py-12 bg-gray-50">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
					Our Clients
				</h2>
				<div className="overflow-hidden relative whitespace-nowrap group">
					<div className="inline-flex animate-marquee space-x-10 group-hover:animate-marquee-paused">
						{/* Duplicating the logos for seamless scrolling */}
						{[
							{ src: 'isro.png', alt: 'Panduit' },
							{ src: 'minda.png', alt: 'Xtralis' },
							{ src: 'motherson.png', alt: 'Phoenix Contact' },
							{ src: 'bharat.png', alt: 'Partex' },
							{ src: 'Adani_logo.png', alt: 'Panduit' },
							{ src: 'delhi-metro.png', alt: 'Xtralis' },
							{
								src: 'General_Electric_logo.png',
								alt: 'Phoenix Contact',
							},
							{ src: 'knorr-bremse.svg', alt: 'Partex' },
							{ src: 'indian-rail.png', alt: 'Panduit' },
							{ src: 'ltgrouplogo.webp', alt: 'Xtralis' },
							{
								src: 'Maruti-Suzuki-Logo-2000.png',
								alt: 'Phoenix Contact',
							},
							{
								src: 'MindaIndustrieanlagenGmbH-2017-08-18-Logo.png',
								alt: 'Partex',
							},
							{
								src: 'motherson-sumi-systems-limited-mssl-logo-vector.png',
								alt: 'Partex',
							},
							{
								src: 'rockwellautomation-logo-16x9.2550.webp',
								alt: 'Partex',
							},
							{ src: 'Siemens-logo.jpg', alt: 'Partex' },
							//  Siemens-logo.jpg
						].map((item, index) => (
							<React.Fragment key={index}>
								<div className="border-2 border-gray-300 h-32 w-48 flex justify-center items-center shadow-lg rounded-lg bg-white">
									<img
										src={`/${item.src}`}
										alt="Collaboration 1"
										className="h-20 w-auto object-contain  px-4"
									/>
								</div>
							</React.Fragment>
						))}
					</div>
				</div>
			</div>

			{/* CSS Animation */}
			<style>
				{`
             @keyframes marquee {
               0% { transform: translateX(0); }
               100% { transform: translateX(-50%); }
             }
             .animate-marquee {
               animation: marquee 20s linear infinite;
             }
             .animate-marquee-paused {
               animation-play-state: paused;
             }
           `}
			</style>
		</section>
	);
};

export default Clients;
