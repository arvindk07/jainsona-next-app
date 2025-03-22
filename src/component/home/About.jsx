import Link from "next/link";


const AboutUs = () => {

  return (
    <section className="px-4 py-10 md:px-10 md:py-20  bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Text Content */}
          <div className="flex-1 pr-10 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-left mb-4">About Us</h2>

            <h2 className="text-xl font-bold text-left mb-2">Leading the Industry in Electrical Component Distribution</h2>
            <p className="text-left text-lg sm:text-sm">
              Jainsons India Pvt. Ltd. is a trusted and authorized distributor of industrial electrical components, committed to delivering high-quality solutions to a diverse customer base. With decades of expertise, we cater to major sectors including Wiring Harness Industry, Railways, D.M.R.C., OEMs, and more. Our professional approach in sales, marketing, warehousing, and distribution ensures that we meet the evolving needs of our clients with efficiency and precision.
            </p>
            <br />
            <h2 className="text-xl font-bold text-left mb-2">A Legacy of Excellence</h2>
            <p className="text-left mb-6 text-lg sm:text-sm">
              Established in 1980 as a small family-run business, Jainsons India Pvt. Ltd. has grown into a leading distributor in the electrical industry. Under the visionary leadership of Sh. Shanti Lal Jain, who brings over 42 years of experience, we have expanded our operations, sourcing and supplying innovative products that shape the Indian market.
            </p>
            <div className="flex justify-start">
              <Link href={'/product'}>
                <button className="bg-[#880909] text-white px-6 py-3 rounded-[40px] shadow hover:bg-yellow-600 transition duration-300" >
                  Know More
                </button>
              </Link>
            </div>
          </div>

          {/* Image or Icon Section */}
          <div className="flex-1 relative bg-[url('/11111.png')] bg-no-repeat bg-cover rounded-lg p-6 flex justify-center items-center min-h-[300px]">
            <div className="absolute right-0 top-[90%] md:top-[80%] lg:top-[90%] rounded-full outline-4 outline-white outline bg-yellow-400 h-14 w-14 flex justify-center items-center">
              <Link href={'/product'}>
                <span class="text-[36px]">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
