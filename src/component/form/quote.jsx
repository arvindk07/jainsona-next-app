"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quote = ({ id = "" }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch categories from API
  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const response = await axios.get(
          "https://api.jainsonsindiaonline.com/api/categories/showAll"
        );
        if (response.data?.data) {
          setCategories(response.data.data);
          if (id) {
            const defaultCategory = response.data.data.find(
              (cat) => cat._id === id
            );
            if (defaultCategory) {
              setSelectedCategory(defaultCategory.name);
            }
          }
        }
      } catch (error) {
        toast.error("Failed to fetch categories.");
      }
    };
    getAllCategories();
  }, [id]);

  const formik = useFormik({
    initialValues: {
      email: "",
      mobile: "",
      category: id ? id : "",
      categoryName: id ? selectedCategory : "", // Added field for custom category name
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      mobile: Yup.string()
        .matches(/^\d{10}$/, "Mobile number must be 10 digits")
        .required("Mobile number is required"),
      category: Yup.string().required("Please select a category"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);

      // If "Other" is selected, send the custom category name
      const finalCategory =
        selectedCategory.toLowerCase() === "other"
          ? `Other - ${values.categoryName}`
          : values.category;

      try {
        const response = await axios.post(
          "https://api.jainsonsindiaonline.com/api/quotes/add",
          { ...values, category: finalCategory } // Send the final category
        );
        if (response.status === 200) {
          toast.success("Request submitted successfully!", {
            position: "top-center",
            autoClose: 5000,
          });
          resetForm();
        } else {
          toast.error("Error submitting request");
        }
      } catch (error) {
        toast.error("Failed to submit request. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  // Handle category selection change
  const handleCategoryChange = (event) => {
    const selectedId = event.target.value;
    const selected = categories.find((cat) => cat._id === selectedId);
    setSelectedCategory(selected ? selected.name : "");
    formik.setFieldValue("category", selectedId);
  };

  return (
    <div className="container mx-auto py-16 px-4 md:px-8">
      <div className="flex justify-center items-center bg-white">
        <div className="w-full mx-auto md:w-5/12 p-8 shadow-lg border rounded-lg">
          <h3 className="text-xl font-bold text-center mb-6 text-[#880909]">
            Tell us what you need, and we'll help you get quotes
          </h3>
          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            {/* Category Selection */}
            <div className="flex flex-col md:flex-row md:items-center w-full md:gap-10">
              <label
                htmlFor="category"
                className="text-sm font-medium min-w-32 sm:flex-1 md:flex-initial"
              >
                I want quotes for
              </label>
              <select
                id="category"
                name="category"
                className="mt-2 border rounded-lg p-2 flex-1 w-full"
                onChange={handleCategoryChange}
                onBlur={formik.handleBlur}
                value={formik.values.category}
              >
                <option value="">Select a category</option>
                {categories.map((data) => (
                  <option key={data._id} value={data._id}>
                    {data.name}
                  </option>
                ))}
              </select>
            </div>
            {formik.touched.category && formik.errors.category && (
              <div className="text-red-500 text-xs mt-1 text-right">
                {formik.errors.category}
              </div>
            )}

            {/* Category Name Input (When "Other" is Selected) */}
            {selectedCategory.toLowerCase() === "other" && (
              <div className="flex flex-col md:flex-row md:items-center w-full md:gap-10">
                <label
                  htmlFor="categoryName"
                  className="text-sm font-medium min-w-32 sm:flex-1 md:flex-initial"
                >
                  Category Name
                </label>
                <input
                  id="categoryName"
                  name="categoryName"
                  type="text"
                  className="mt-2 border rounded-lg p-2 flex-1 w-full"
                  placeholder="Enter category name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.categoryName}
                />
              </div>
            )}

            {/* Mobile Number */}
            <div className="flex flex-col md:flex-row md:items-center w-full md:gap-10">
              <label
                htmlFor="mobile"
                className="text-sm font-medium min-w-32 sm:flex-1 md:flex-initial"
              >
                Mobile Number
              </label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                className="mt-2 border rounded-lg p-2 flex-1 w-full"
                placeholder="Enter your mobile"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mobile}
              />
            </div>
            {formik.touched.mobile && formik.errors.mobile && (
              <div className="text-red-500 text-xs mt-1 text-right">
                {formik.errors.mobile}
              </div>
            )}

            {/* Email */}
            <div className="flex flex-col md:flex-row md:items-center w-full md:gap-10">
              <label
                htmlFor="email"
                className="text-sm font-medium min-w-32 sm:flex-1 md:flex-initial"
              >
                Email ID
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-2 border rounded-lg p-2 flex-1 w-full"
                placeholder="Enter your mail id"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center md:justify-end w-full">
              <button
                type="submit"
                className="bg-[#880909] text-white text-sm md:text-lg max-w-max px-3 py-1 md:px-6 md:py-3 rounded-[40px] hover:bg-red-700 transition-colors"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;
