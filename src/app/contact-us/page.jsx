"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/component/header/header";
import Footer from "@/component/footer/footer";

const ContactUs = () => {
  // const ScrollToTop = () => {
  //     useEffect(() => {
  //         window.scrollTo(0, 0);
  //     }, []);

  //     return null;
  // };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      // lookingFor: '',
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.mixed(),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      mobile: Yup.string()
        .matches(/^\d{10}$/, "mobile number must be 10 digits")
        .required("mobile number is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { setSubmitting }, event) => {
      const { name, email, mobile, subject, message } = values;
      const formData = {
        name,
        email,
        mobile: mobile,
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
            position: "top-center",
            autoClose: 5000,
          });
          // Optionally reset form on success
          formik.resetForm();
        } else {
          toast.error("Error sending message", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
          });
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error sending message", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        });
      } finally {
        setSubmitting(false); // Optionally, stop the submitting indicator
      }
      event.preventDefault();
    },
  });
  return (
    <div>
      {/* <ScrollToTop /> */}
      <Header />
      {/* <div className="bg-white p-8 flex flex-col items-center ">
                <h2 className="text-3xl font-bold mb-6 text-left">Meet with us- Corporate Office</h2>
                <p className="text-center mb-4">
                    WZ-572P, First Floor, Naraina Vihar Club Road, Naraina, New Delhi 110028 (India)
                </p>
                <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                        <span className="text-red-600 text-xl">
                            📞
                        </span>
                        <span>8447012326, 9873664653</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-red-600 text-xl">
                            ✉️
                        </span>
                        <span>sales@jainsonsindia.net</span>
                    </div>
                </div>
                <div className="w-full   h-96 mt-10">
                    <iframe
                        title="Office Location"
                        className="w-full h-full border-0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28251.868388379474!2d77.09534446278843!3d28.61433254045798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0367924f98c5%3A0x3acb8b305aab4bfb!2sNaraina%20Vihar%2C%20New%20Delhi%2C%20Delhi%20110028!5e0!3m2!1sen!2sin!4v1693341926543!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div> */}
      <div className="bg-white p-8 flex flex-col md:flex-row items-center">
        <div className=" w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-left">
            Meet with us- Corporate Office
          </h2>
          <p className="text-left mb-4">
            C-5, Community Center, Naraina Vihar, New Delhi 110028 (India)
          </p>
          {/* Keep in a single row on mobile and desktop */}
          <div className="flex flex-wrap float-start items-center gap-4 mb-4 w-full">
            <div className="flex items-center gap-2">
              <span className="text-red-600 text-xl">📞</span>
              <span>8447012326, 9873664653</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-600 text-xl">✉️</span>
              <span>sales@jainsonsindia.net</span>
            </div>
          </div>
          <div className="flex flex-wrap float-start items-center gap-4 mb-4 w-full">
            <div className="flex items-center gap-2">
              <span className="text-red-600 text-xl">📞</span>
              <span>9599203236</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-600 text-xl">✉️</span>
              <span>sales@jainsonsindiaonline.com</span>
            </div>
          </div>
        </div>
        {/* <div className=" h-96 mt-10 w-full md:w-1/2">
          <iframe
            title="Office Location"
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28251.868388379474!2d77.09534446278843!3d28.61433254045798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0367924f98c5%3A0x3acb8b305aab4bfb!2sNaraina%20Vihar%2C%20New%20Delhi%2C%20Delhi%20110028!5e0!3m2!1sen!2sin!4v1693341926543!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div> */}
        <div className="h-96 mt-10 w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.127769903995!2d77.14055627495651!3d28.62593248438127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03cfd484abdf%3A0xf265aac4f7097c97!2sJainsons%20India%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1742704933776!5m2!1sen!2sin"
            title="Naraina Location"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          {/* <a
            href="https://www.google.com/maps/place/Naraina+Vihar/@28.624888,77.140489,14z/data=!4m6!3m5!1s0x390d0331d31f1913:0xdcb482919de49265!8m2!3d28.624125!4d77.136488!16s%2Fg%2F11c56rchvg?hl=en&entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <iframe
              title="Naraina Location"
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28251.868388379474!2d77.09534446278843!3d28.61433254045798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d032522603fb3%3A0xd5a6519cb7c6b589!2sNaraina%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1693341926543!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </a> */}
        </div>
      </div>

      <div className="min-h-screen flex justify-center items-center bg-white pb-10">
        <div className="w-full mx-auto md:w-1/2 px-10 py-10 shadow-lg my-10 border ">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">
              Connect With Us
            </h2>
            <form className="space-y-4" onSubmit={formik.handleSubmit}>
              <div>
                <label className="block text-left text-[#880909] font-bold mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 rounded-[40px] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#880909]"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    📝
                  </span>
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-red-500 text-xs mt-1">
                      {formik.errors.name}
                    </div>
                  ) : null}
                </div>
              </div>
              {/* Email and mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-left text-[#880909] font-bold mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full border border-gray-300 rounded-[40px] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#880909]"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      📧
                    </span>
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-500 text-xs mt-1">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div>
                  <label className="block text-left text-[#880909] font-bold mb-2">
                    Your mobile
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your mobile"
                      className="w-full border border-gray-300 rounded-[40px] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#880909]"
                      name="mobile"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.mobile}
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      📞
                    </span>

                    {formik.touched.mobile && formik.errors.mobile ? (
                      <div className="text-red-500 text-xs mt-1">
                        {formik.errors.mobile}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* <div>
                                <label className="block text-left text-[#880909] font-bold mb-2">Looking For</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Looking For"
                                        className="w-full border border-gray-300 rounded-[40px] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#880909]"
                                        name="lookingFor"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.lookingFor}

                                    />
                                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                        📝
                                    </span>
                                    {formik.touched.lookingFor && formik.errors.lookingFor ? (
                                            <div className="text-red-500 text-xs mt-1">{formik.errors.lookingFor}</div>
                                        ) : null}
                                </div>
                            </div> */}

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
                  {formik.touched.subject && formik.errors.subject ? (
                    <div className="text-red-500 text-xs mt-1">
                      {formik.errors.subject}
                    </div>
                  ) : null}
                </div>
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
                  {formik.touched.message && formik.errors.message ? (
                    <div className="text-red-500 text-xs mt-1">
                      {formik.errors.message}
                    </div>
                  ) : null}
                </div>
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
      <Footer />
    </div>
  );
};

export default ContactUs;
