import Link from "next/link";

const Products = () => {
  return (
    <section className="px-4 py-10 md:px-10 md:py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6  relative">
          <div className="bg-[url('/Frame-62336.jpg')] bg-cover bg-top p-6 rounded-2xl shadow text-left relative h-96">
            <h2 className="text-3xl font-bold text-left max-w-10 text-wrap mb-4">
              Networking Solution
            </h2>
            <Link href={"/product"}>
              <button className="bg-[#880909] text-white px-6 py-3 rounded-[40px] shadow hover:bg-yellow-600 ">
                Shop Now
              </button>
            </Link>
            {/* <img src="/Type-1-removebg-preview.png" className="absolute right-0 bottom-0 max-h-40 md:max-h-44 lg:max-h-60 rounded-tl-2xl h-full" /> */}
          </div>
          <div className="bg-[url('/Frame-62335.jpg')] bg-cover bg-top p-6 rounded-2xl shadow text-left h-96 relative">
            <h2 className="text-3xl font-bold text-left max-w-14 text-white text-wrap mb-4">
              <span className="text-nowrap">Cable & Wiring</span>
              <br /> Accessories
            </h2>
            <Link href={"/product"}>
              <button className="bg-[#EDCD1F] text-white px-6 py-3 rounded-[40px] shadow hover:bg-yellow-600 ">
                Shop Now
              </button>
            </Link>
            {/* <img src="/Screenshot_2022-05-06_132134-removebg-preview1.png" className="absolute right-0 bottom-0 max-h-40 md:max-h-44 lg:max-h-60 rounded-tl-2xl h-full" /> */}
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-1 gap-6 bg-[url('/wse4.png')] bg-bottom bg-no-repeat bg-cover md:bg-contain min-h-[400px] text-center">
          <div className=" p-6  rounded shadow flex  justify-start flex-col items-center">
            <h2 className="text-3xl  font-semibold text-red-600 mb-4">
              Wireless & Wired
            </h2>
            <p className="text-4xl font-bold mb-8">Workstation Essentials</p>
            <Link href={"/product"}>
              <button className="bg-[#880909] text-white py-3 px-6 rounded-[40px] hover:bg-red-700 transition-colors">
                Know more
              </button>
            </Link>
          </div>
        </div> */}
        <div className="min-h-[420px] bg-[#f0eaea] rounded-2xl relative mt-10 overflow-hidden">
          <img
            src="/wse4.png"
            alt=""
            className=" absolute w-full h-auto bottom-[-10px] z-10"
          />
          <div className="relative z-20 flex flex-col items-center mt-16">
            <h2 className="text-3xl  font-semibold text-red-600 mb-4 ">
              Wireless & Wired
            </h2>
            <p className="text-4xl font-bold mb-8">Workstation Essentials</p>
            <Link href={"/product"}>
              <button className="bg-[#880909] text-white py-3 px-6 rounded-[40px] hover:bg-red-700 transition-colors">
                Know more
              </button>
            </Link>
          </div>
          {/* <img
            src="/wse4.png"
            alt=""
            className=" absolute w-full h-auto bottom-[-10px]"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Products;
