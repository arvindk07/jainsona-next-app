"use client";
import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
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
  console.log("Formik errors:", formik.errors);
  return (
    <div className="min-h-screen flex justify-center items-center bg-white px-4 py-10 md:px-10 md:py-20 ">
      <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-8  rounded-lg p-6">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-left">
            Corporate Office
          </h2>
          <p className="text-gray-700 mb-2 text-left">
            C-5, Community Center, Naraina Vihar, <br />
            New Delhi-110028 (India)
          </p>
          <p className="text-gray-700 font-medium text-left">
            sales@jainsonsindiaonline.com
          </p>
          <p className="text-gray-700 font-medium text-left">9599203236</p>
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
                    className="w-full border border-gray-300 rounded-[40px] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#880909]"
                    name="email"
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
                </div>

                {formik.touched.mobile && formik.errors.mobile && (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.mobile}
                  </div>
                )}
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
                <span className="absolute right-3 top-3 text-gray-400">✉️</span>
              </div>
              {formik.touched.subject && formik.errors.message && (
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
  );
};

export default Contact;
