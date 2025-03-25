"use client";

import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/component/header/header";
import Footer from "@/component/footer/footer";
import Quote from "@/component/form/quote";
import { useParams } from "next/navigation";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="w-16 h-16 border-4 border-t-transparent border-white border-solid rounded-full animate-spin"></div>
    </div>
  );
};

const ProductDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const { id } = params;

  console.log("productId==>", id);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      mobile: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be 10 digits")
        .required("Phone number is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
      name: Yup.mixed(),
    }),
    onSubmit: async (values, { setSubmitting }, event) => {
      setSubmitting(true);

      const { email, mobile, subject, message } = values;
      const formData = {
        email,
        mobile,
        subject,
        message,
      };

      try {
        // Send data to the API
        const response = await axios.post(
          "https://api.jainsonsindiaonline.com/api/contactUs",
          formData
        );
        // Success message
        if (response.status === 200 || response.status === 201) {
          toast.success("Message sent successfully!", {
            autoClose: 5000,
            position: "top-center",
          });
          formik.resetForm();
        } else {
          toast.error("Error sending message", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
          });
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error sending message");
      } finally {
        setSubmitting(false); // Optionally, stop the submitting indicator
      }
      event.preventDefault();
    },
  });

  const scrollToSection = () => {
    const section = document.getElementById("next-section");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* <ScrollToTop /> */}
      <Header />

      <div className="relative bg-[url('/product-banner.png')] md:bg-[url('/product-banner.png')]  bg-cover bg-top lg:h-[400px] flex  sm:items-center justify-center flex-col text-center md:text-left pl-4 md:pl-8 sm:pl-0 py-5">
        <div className="relative flex flex-col justify-center items-center py-4   px-4 md:px-10">
          <h1 className="text-3xl md:text-6xl font-bold text-shadow-lg text-center">
            <span className=" text-white">POWERING</span> <br />
            <span className="text-yellow-400">INNOVATION</span>
          </h1>
          <p className="text-lg md:text-[42px] mt-2 text-shadow-md   text-center text-white">
            Electrifying Possibilities
          </p>
        </div>
      </div>

      <div id="next-section">
        <Quote id={id} />
      </div>

      <div className="container mx-auto px-4  pb-12">
        <div className="relative pt-7 rounded-lg bg-[to-100%,to-100%] bg-cover bg-bottom bg-no-repeat bg-[url('/product-bottom-banner.png')]  h-[400px] flex flex-col md:flex-row items-center justify-center text-center">
          <div className=" w-full md:w-1/2  text-center md:text-center">
            <h2 className="text-2xl md:text-4xl  leading-tight text-white  ">
              Electrical
              <br />
            </h2>
            <span className="text-yellow-400 text-4xl font-bold">
              COMPONENTS
            </span>
            <p className="mt-3 text-gray-300 italic text-sm md:text-lg">
              All Needed Components in one place
            </p>
            <button
              className="mt-4 bg-[#880909] rounded-full text-white px-4 py-2"
              onClick={scrollToSection}
            >
              Shop Now
            </button>
          </div>
          <div className=" w-full md:w-1/2 flex justify-center mt-6 md:mt-0 relative">
            <img
              src="/semiconductor-collection-electrical-components-chip-capacitor-microchip-processor-battery-resistor-vector.jpg"
              alt="Arduino"
              className="w-60 md:w-60 lg:w-96 h-56 transform rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="min-h-screen flex justify-center items-center bg-white">
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-8  rounded-lg p-6">
          {/* Left Side */}
          <div className="md:pl-200">
            <h2 className="text-3xl font-bold mb-6 text-left">
              Corporate Office
            </h2>
            <p className="text-gray-700 mb-2 text-left">
              C-5, Community Center, Naraina Vihar, <br />
              New Delhi-110028 (India)
            </p>
            <p className="text-gray-700 font-medium text-left">
              sales@jainsonsindia.net
            </p>
          </div>

          {/* Right Side - Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-left">Contact Us</h2>
            <form className="space-y-4" onSubmit={formik.handleSubmit}>
              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-left text-[#880909] font-bold mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      className="w-full border border-gray-300 rounded-[40px] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#880909]"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      📧
                    </span>
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-500 text-xs mt-1">
                      {formik.errors.email}
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-left text-[#880909] font-bold mb-2">
                    Your Phone
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your Phone"
                      className="w-full border border-gray-300 rounded-[40px] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#880909]"
                      name="mobile"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.mobile}
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      📞
                    </span>
                    {formik.touched.mobile && formik.errors.mobile && (
                      <div className="text-red-500 text-xs mt-1">
                        {formik.errors.mobile}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-left text-[#880909] font-bold mb-2">
                  Subject
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Write Subject"
                    className="w-full border border-gray-300 rounded-[40px] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#880909]"
                    name="subject"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    📝
                  </span>
                </div>
                {formik.touched.subject && formik.errors.subject && (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.subject}
                  </div>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-left text-[#880909] font-bold mb-2">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    placeholder="Write Message.."
                    className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#880909]"
                    rows="4"
                    name="message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  />
                  <span className="absolute right-3 top-3 text-gray-400">
                    ✉️
                  </span>
                </div>
                {formik.touched.message && formik.errors.message && (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.message}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#880909] text-white font-bold py-3 px-4 rounded-[40px] hover:bg-red-700 transition duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <section className=" text-black py-10 px-6 flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold mb-4">Employment</h2>
        <p className="text-lg max-w-2xl">
          To apply for a job with Jainsons, please send a cover letter together
          with your C.V.
        </p>
        <a
          href="mailto:web@jainsonsindia.net"
          className="text-black font-semibold hover:underline mt-2"
        >
          to:&nbsp;web@jainsonsindia.net
        </a>
      </section>
      <Footer />
      {isLoading && <Loader />}
    </div>
  );
};

export default ProductDetails;
