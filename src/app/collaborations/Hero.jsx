function Hero() {
	return (
		<div className="relative bg-[url('/js-banner2.jpg')]   bg-cover bg-top lg:h-[400px] flex  sm:items-center justify-center flex-col text-center md:text-left pl-4 md:pl-8 sm:pl-0 py-5">
			<div className="relative flex flex-col justify-center items-center py-4   px-4 md:px-10">
				<h1 className="text-3xl md:text-6xl font-bold text-shadow-lg text-center">
					<span className=' text-white'>CONNECTING</span> <br /><span className="text-yellow-400">QUALITY,</span>
				</h1>
				<p className="text-lg md:text-[42px] mt-2 text-shadow-md   text-center text-white">With Performance</p>
			</div>
		</div>
	);
}

export default Hero;
