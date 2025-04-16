import React from "react";
import logo from "../assets/logo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Hero = () => {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      busines_name: "business",
      busines_size: "3",
      phone: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Minimum 6 characters"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
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
      className="w-full  mx-auto  bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/src/assets/bg.png')" }}
    >
     <div className="max-w-[1440px] mx-auto  md:px-12 xxl:px-[10rem] grid grid-cols-1 xl:grid-cols-2">
       {/* Left Side */}
       <div className="flex flex-col justify-center items-start w-full px-2 sm:px-6 pt-10 xl:pt-0 ">
        <img src={logo} alt="Logo" className="w-[147px] h-[44px]" />
        <h1 className="font-murecho text-[35px] md:text-[50px] font-bold leading-[1.2] text-[#181C39] max-w-[500px] mt-6">
          Smarter Way To Manage Your{" "}
          <span className="text-[#5969FB]">Tutoring Business</span>
        </h1>
        <p className="font-['just-sans'] text-[18px] font-light leading-[30px] text-[#404042] mt-5 mb-5">
          Organize lessons, teach online, get paid promptly, and explore more
          opportunities!
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center items-start w-full px-2 sm:px-6 h-full ">
        <div
          className="w-full h-full bg-center bg-no-repeat  px-4 md:px-14  py-20 flex justify-center items-center"
          style={{ backgroundImage: "url('/src/assets/hero.png')" }}
        >
          <form
            onSubmit={formik.handleSubmit}
            className="w-full h-full md:w-[90%] flex  flex-col items-center bg-white px-5 py-2  border-[3px] border-[#181C39] rounded-[20px] shadow-lg"
          >
            <h2 className="font-murecho text-[30px] md:text-[40px] font-bold leading-[60px] text-[#181C39] mb-6">
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
              { name: "phone", type: "text", placeholder: "Phone" },
            ].map((field) => (
              <div key={field.name} className="w-full mb-5">
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="w-full h-[60px] rounded-[10px] border-[2.5px] border-[#5969FB] pl-5 bg-[rgba(211,218,255,0.2)] text-gray-500 font-inter focus:outline-none focus:border-[4px]"
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

            <input
              type="submit"
              value={formik.isSubmitting ? "Booking..." : "Book Now"}
              disabled={formik.isSubmitting}
              className="w-[200px] h-[60px] rounded-full bg-[#5969FB] text-white font-inter text-[20px] font-semibold mt-4 cursor-pointer transition-all duration-300 hover:opacity-90 disabled:opacity-60"
            />
          </form>
        </div>
      </div>
     </div>
    </section>
  );
};

export default Hero;