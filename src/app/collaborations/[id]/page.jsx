'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Quote from '../../../component/form/quote';
import { useParams } from 'next/navigation';
import Footer from '@/component/footer/footer';
import Header from '@/component/header/header';

const logos = [
	{
		src: 'panduit.png',
		alt: 'Panduit',
		content:
			'Panduit specializes in innovative network infrastructure and industrial electrical wiring solutions. Their products support data centers, enterprise networks, and automation, ensuring seamless connectivity and robust electrical systems. With a focus on high performance and durability, Panduit solutions are trusted worldwide. Jainsons India’s partnership with Panduit ensures access to top-tier networking and electrical solutions for our clients. Whether it’s structured cabling, industrial automation, or power distribution, our customers benefit from Panduit’s cutting-edge technologies combined with our trusted service and support.',
	},
	{
		src: 'xtralis.png',
		alt: 'Xtralis',
		content:
			'Xtralis is a global leader in early warning safety and security solutions, providing advanced smoke detection and security systems for critical infrastructure protection. Their innovative solutions help detect threats before they escalate. With Jainsons India’s collaboration with Xtralis, we bring world-class fire and security solutions to Indian businesses. Our customers benefit from early detection technology that enhances safety in commercial and industrial environments.',
	},
	{
		src: 'phoenix.png',
		alt: 'Phoenix Contact',
		content:
			'Phoenix Contact is a renowned name in industrial automation and connectivity. Their expertise spans terminal blocks, power supplies, and automation software, making them a critical player in improving operational efficiency and connectivity. Their solutions are widely adopted in smart factories and industrial automation applications. Through our collaboration with Phoenix Contact, Jainsons India brings cutting-edge automation and connectivity solutions to businesses across India. Our partnership enables us to deliver high-performance industrial components that optimize production processes, reduce downtime, and enhance efficiency in various industrial sectors.',
	},
	{
		src: 'partex.png',
		alt: 'Partex',
		content:
			'Partex specializes in marking systems for wires and cables, essential for efficient electrical installations. Their identification solutions improve organization and maintenance in industrial settings. Through our partnership with Partex, Jainsons India offers top-tier wire and cable marking solutions. Our collaboration ensures better cable identification and management, reducing errors and enhancing efficiency in industrial applications.',
	},
	{
		src: 'hellermann.png',
		alt: 'HellermannTyton',
		content:
			'HellermannTyton is a global leader in cable management solutions, offering innovative products that cater to the needs of various industries. Their portfolio includes fastening, routing, protecting, and identifying cables, ensuring efficiency and reliability in electrical systems. With a strong presence in the industrial and commercial sectors, their products enhance safety and organization in complex wiring setups. Jainsons India collaborates with HellermannTyton to provide state-of-the-art cable management solutions to the Indian market. By integrating their high-quality products with our extensive distribution network, we ensure that industries such as telecommunications, automotive, and construction benefit from the best in cable protection and organization.',
	},
	{
		src: 'ideal.png',
		alt: 'Ideal',
		content:
			'IDEAL Industries is known for its electrical tools and supplies, including wire connectors, testers, and hand tools. Their products are widely used by professionals for electrical installations and maintenance.Jainsons India works closely with IDEAL to bring world-class electrical tools to Indian markets. Our collaboration ensures that electricians and industries have access to reliable tools that enhance productivity and precision in their work.',
	},
	{
		src: 'app.png',
		alt: 'APP',
		content:
			'Anderson Power Products specializes in high-power interconnect solutions, including electrical connectors and accessories. Their innovative designs ensure efficient power distribution in various industrial applications. Jainsons India’s collaboration with APP enables us to provide businesses robust and reliable power connectivity solutions. Our clients benefit from APP’s high-quality connectors and our dedicated support in implementing efficient electrical systems.',
	},
	{
		src: 'hummel.png',
		alt: 'Hummel',
		content:
			'HUMMEL is known for its precision engineering in cable glands, circular connectors, and industrial components. Their products meet international quality standards and provide reliable solutions for secure cable management and electrical connections. As an authorized distributor of HUMMEL products, Jainsons India ensures that industries receive the best in connectivity solutions. From manufacturing plants to automation industries, our partnership helps businesses achieve seamless integration of electrical systems with long-lasting reliability.',
	},
	{
		src: 'allied.png',
		alt: 'Allied Connectors',
		content:
			'Allied provides a broad range of electrical components, catering to diverse industrial applications. Their high-quality products are designed for efficiency and durability in demanding environments. Jainsons India partners with Allied to supply a wide range of electrical components to various industries. Our strong distribution network ensures that businesses have access to premium electrical solutions tailored to their specific needs.',
	},
];
const CollaborationAbout = () => {
	const formik = useFormik({
		initialValues: {
			email: '',
			mobile: '',
			category: '',
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email('Invalid email format')
				.required('Email is required'),
			mobile: Yup.string()
				.matches(/^\d{10}$/, 'Mobile number must be 10 digits')
				.required('Mobile number is required'),
			category: Yup.string().required('Please select a category'),
		}),
		onSubmit: async (values, { setSubmitting, resetForm }, event) => {
			setSubmitting(true);
			try {
				const response = await axios.post(
					'https://jainsons-pvt.vercel.app/api/quotes/add',
					values,
				);

				if (response.status === 200) {
					toast.success('Request submitted successfully!', {
						position: toast.POSITION.TOP_RIGHT,
						autoClose: 5000,
					});
					resetForm();
				} else {
					toast.error('Error submitting request', {
						position: toast.POSITION.TOP_RIGHT,
						autoClose: 5000,
					});
				}
			} catch (error) {
				toast.error('Failed to submit request. Please try again.', {
					position: toast.POSITION.TOP_RIGHT,
					autoClose: 5000,
				});
			} finally {
				setSubmitting(false);
			}
			event.preventDefault();
		},
	});
	const id = useParams().id;
	const ScrollToTop = () => {
		useEffect(() => {
			window.scrollTo(0, 0);
		}, []);

		return null;
	};

	const router = useRouter();

	const handleExploreClick = () => {
		router.push('/product'); // Change "/new-page" to your actual route
	};
	return (
		<div className="font-sans text-gray-800">
			<ScrollToTop />
			<Header />
			{/* Collaboration Section */}
			<div className="bg-gray-50 py-12 px-6">
				<div className="container mx-auto text-left">
					<img
						src={`/${logos[id]?.src}`}
						alt="HellermannTyton"
						className="mb-6 w-64"
					/>
					<p className="text-lg leading-relaxed">
						{logos[id].content}
					</p>
					<button
						className="mt-6 px-6 py-2 bg-[#880909] text-white font-semibold rounded-full hover:bg-red-700 transition"
						onClick={handleExploreClick}
					>
						Know More
					</button>
				</div>
			</div>

			{/* Why Choose Us Section */}
			<div className=" py-6 md:py-12 bg-white px-6">
				<div className="container mx-auto text-left">
					<h2 className="text-2xl font-bold mb-3 md:mb-6">
						Why Choose Us
					</h2>
					<div className="mb-8 space-y-4 p-6 rounded-lg shadow">
						<p className="text-lg font-semibold text-gray-800">
							<span className="text-[#880909] ">
								Over 40 Years of Experience:
							</span>{' '}
							Established in 1980, Jainsons India has a proven
							track record in the electrical and networking
							industry.
						</p>
						<p className="text-lg font-semibold text-gray-800">
							<span className="text-[#880909] ">
								Strong Global Partnerships:
							</span>{' '}
							We work with top international brands to provide
							high-quality products and solutions.
						</p>
						<p className="text-lg font-semibold text-gray-800">
							<span className="text-[#880909] ">
								Extensive Product Range:
							</span>{' '}
							From industrial automation to power distribution, we
							offer a diverse range of components and tools.
						</p>
						<p className="text-lg font-semibold text-gray-800">
							<span className="text-[#880909] ">
								Reliable Distribution Network:
							</span>{' '}
							With a well-established supply chain, we ensure
							timely delivery across India.
						</p>
					</div>
					{/* <div className="grid grid-cols-3 gap-10 ">
            {[
              { title: "Convenience of Buying", icon: "🛒" },
              { title: "Competitive Quotes", icon: "💬" },
              { title: "1000+ Buyers", icon: "👥" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-[#880909]">{item.title}</h3>
              </div>
            ))}
          </div> */}
					<div className="bg-[url('/about-collab.png')] min-h-16 md:min-h-60   bg-contain bg-no-repeat bg-top"></div>
				</div>
			</div>

			{/* Call to Action */}
			<div className="py-12 bg-yellow-100 mx-6 px-6">
				<div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8">
					<div className="w-full lg:w-1/2 p-6 bg-[url('/oc-2.png')] h-[250px] lg:h-[500px] bg-cover bg-no-repeat  rounded-lg">
						<h3 className="text-xl font-semibold">
							Workstation Essentials
						</h3>
						<button
							className="mt-4 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700"
							onClick={handleExploreClick}
						>
							Explore Now
						</button>
					</div>
					<div className="w-full lg:w-1/2 text-white rounded-lg flex flex-col gap-4">
						<div className="bg-[#880909] flex items-center justify-center min-h-[240px] p-6 rounded-lg">
							<h3 className="text-2xl font-bold text-center">
								Powering Innovation,
								<br /> Electrifying Possibilities
							</h3>
						</div>
						<div className="bg-[url('/about-collaborations.png')] bg-cover bg-no-repeat h-[140px] md:h-[200px] rounded-lg  "></div>
					</div>
				</div>
			</div>

			{/* Contact Form */}
			{/* <div className="container mx-auto py-16 px-4 md:px-8">
        <div className=" flex justify-center items-center bg-white">
          <div className="w-full mx-auto md:w-1/2  p-8 shadow-lg border rounded-lg">
            <h3 className="text-xl font-bold text-center mb-6">
              Tell us what you need, and we'll help you get quotes
            </h3>
            <form className="space-y-4" onSubmit={formik.handleSubmit}>
              <div className="flex items-center gap-10">
                <label htmlFor="product" className="text-sm font-medium min-w-32">I want quotes for</label>
                <select
                  id="category"
                  name="category"
                  className="mt-2 border rounded-lg p-2 flex-1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.category}
                >
                  <option>Cable Ties</option>
                  <option>Electrical Components</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="flex items-center gap-10">
                <label htmlFor="phone" className="text-sm font-medium min-w-32">Mobile Number</label>
                <input
                  id="mobile"
                  type="tel"
                  name="mobile"
                  className="mt-2 border rounded-lg p-2 flex-1"
                  placeholder="+91 Enter your mobile"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobile}
                />
              </div>
              <div className="flex items-center gap-10">
                <label htmlFor="email" className="text-sm font-medium min-w-32">Email ID</label>
                <input
                  id="email"
                  type="email"
                  className="mt-2 border rounded-lg p-2 flex-1"
                  placeholder="Enter your mail id"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>
              <div className=" flex justify-end w-full">
                <button
                  type="submit"
                  className="bg-[#880909] text-white max-w-max px-6 py-3 rounded-[40px] hover:bg-red-700 transition-colors"
                  disabled={formik.isSubmitting}
                >

                  {formik.isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
			<Quote />
			<Footer />
		</div>
	);
};

export default CollaborationAbout;
