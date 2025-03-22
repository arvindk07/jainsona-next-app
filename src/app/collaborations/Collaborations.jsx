'use client';
import Link from 'next/link';

const logos = [
	{ src: 'panduit.png', alt: 'Panduit' },
	{ src: 'xtralis.png', alt: 'Xtralis' },
	{ src: 'phoenix.png', alt: 'Phoenix Contact' },
	{ src: 'partex.png', alt: 'Partex' },
	{ src: 'hellermann.png', alt: 'HellermannTyton' },
	{ src: 'ideal.png', alt: 'Ideal' },
	{ src: 'app.png', alt: 'APP' },
	{ src: 'allied.png', alt: 'Allied Connectors' },
];
///

function Collaborations() {
	return (
		<div className="p-6 bg-white">
			<h2 className="text-center text-3xl font-bold mb-6">
				Our Collaborations
			</h2>

			<div className="container mx-auto">
				<div className=" grid grid-cols-2 md:grid-cols-3 gap-4">
					{logos.map((logo, index) => (
						<Link href={`/collaborations/${index}`} key={logo.alt}>
							<div className="bg-[url('/collab-bg.png')] h-40   md:h-72  lg:bg-contain bg-no-repeat    py-4 flex justify-center items-center  ">
								<img
									src={`/${logo.src}`}
									alt={logo.alt}
									className="h-14 md:h-20  mx-auto"
								/>
							</div>
						</Link>
					))}
				</div>
			</div>
			{/* collab-bg.png */}
		</div>
	);
}

export default Collaborations;
