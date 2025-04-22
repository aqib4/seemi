import React from "react";
import "../../src/index.css"
import logo from "../assets/logo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import "../styles/hero.css"; // Assuming you have a CSS file for styles

const Hero = () => {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      busines_name: "",
      busines_size: "",
      phone: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Minimum 8 characters, and include at least one uppercase letter, one lowercase letter, one number, and one special character."),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
         busines_name: Yup.string().required("Business name is required"),
      busines_size: Yup.string().required("Business size is required"),
      phone: Yup.string().required("Phone number is required"),
    }),

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const response = await axios.post(
          "https://seemii.mytutorpod.org/mtpsaas/public/api/v1/app/sign-up",
          values
        );
        console.log("API response:", response);
        alert("Form submitted successfully!");
        resetForm();
      } catch (error) {
        console.error("Submission error:", error);
        alert("Something went wrong. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section
      className="w-full mx-auto bg-no-repeat bg-[#F7F7FE] pb-8"
      style={{ backgroundImage: "url('/bg.png')", backgroundPosition:"top left", backgroundSize:"30% auto", backgroundColor:"#F7F7FE"}}
    >
      <div className="max-w-[1440px] mx-auto pt-20 md:px-12 2xl:px-[0rem] grid grid-cols-1 xl:grid-cols-2">
        {/* Left Side */}
        <div className="flex flex-col justify-center pt-10 items-start w-full px-2 sm:px-6 xl:px-[7rem] xl:pt-0 animate-fadeIn">
          <img src={logo} alt="Logo" className="w-[147px] h-[44px] md:w-[287px] md:h-[88px] xl:w-[147px] xl:h-[44px] " />
          <h1 className="font-murecho  text-3xl lg:text-5xl font-bold leading-[1.2] text-[#363636] max-w-[800px] mt-6">
            Smarter Way To Manage Your
            <span className="text-[#5969FB]"> Tutoring Business</span>
          </h1>
          <p className="font-monteserate text-lg font-extralight leading-[30px] text-[#404042] mt-5 mb-5">
            Organize lessons, teach online, get paid promptly, and explore more
            opportunities!
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center items-start w-full px-2 sm:px-6 h-full right-section-hero animate-fadeIn"> 
          <div
            className="w-full h-full bg-center bg-no-repeat  px-4 md:px-2 py-6 md:py-20 flex justify-center items-center"
            style={{ backgroundImage: "url('/hero.png')" }}
          >
            <form
              onSubmit={formik.handleSubmit}
              className="w-full h-full md:w-[80%] flex  flex-col items-center bg-white px-5 py-2  border-[3px] border-[#181C39] rounded-[20px] shadow-lg"
            >
              <h2 className="font-murecho text-3xl md:text-5xl font-bold text-center leading-9 md:leading-14 text-[#363636] mb-2 md:mb-6">
                Book Your <span className="text-[#5969FB]">Demo</span>
              </h2>

              {/* Form Fields */}
              {[
                { name: "first_name", type: "text", placeholder: "First Name" },
                { name: "last_name", type: "text", placeholder: "Last Name" },
                { name: "email", type: "email", placeholder: "Email" },
                { name: "password", type: "password", placeholder: "Password" },
                {
                  name: "confirm_password",
                  type: "password",
                  placeholder: "Confirm Password",
                },
                { name: "busines_name", type: "text", placeholder: "Business Name" },
                { name: "busines_size", type: "text", placeholder: "Business Size" },
              ].map((field) => (
                <div key={field.name} className="w-full mb-5">
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="w-full h-[45px] rounded-[10px] border-[2.5px] border-[#5969FB] pl-5 bg-[rgba(211,218,255,0.2)] text-gray-500 font-inter focus:outline-none focus:border-[4px]"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[field.name]}
                  />
                  {formik.touched[field.name] && formik.errors[field.name] && (
                    <div className="text-red-500 text-sm mt-1 font-medium">
                      {formik.errors[field.name]}
                    </div>
                  )}
                </div>
              ))}

              <PhoneInput
                country={'us'} // default country
                value={formik.values.phone}
                onChange={(phone) => formik.setFieldValue('phone', phone)}
                inputProps={{
                  name: 'phone',
                  onBlur: formik.handleBlur,
                }}
                inputClass="!w-full !h-[45px] !rounded-[10px] !pl-[50px] !border-[2.5px] !border-[#5969FB] !bg-[rgba(211,218,255,0.2)] !text-gray-500 !font-inter"
                buttonClass="!bg-transparent !border-none !outline-none !text-[#5969FB] !font-inter !text-[20px] !font-semibold !hover:border-[#5969FB]" 
                containerClass="!w-full !border-none"
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className="text-red-500 text-sm mt-1 font-medium">
                  {formik.errors.phone}
                </div>
              )}

              <input
                type="submit"
                value={formik.isSubmitting ? "Booking..." : "Book Now"}
                disabled={formik.isSubmitting}
                className="w-[150px] md:w-[200px] h-[40px] md:h-[60px] rounded-full bg-[#5969FB] text-white font-inter text-[14px] md:text-[20px] font-semibold mt-4 cursor-pointer transition-all duration-300 hover:opacity-90 disabled:opacity-60"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;