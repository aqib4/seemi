import React, { useRef } from "react";
import Hero from '../Components/Hero'
import "../styles/animateImage.css"; 
import "../styles/animateSection.css"
import HomeFeatureSection from "../Components/HomeFeatureSection";


const Home = () => {
    const ref = useRef(null);
    const handleScroll = () => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const handleClick = () => {
        handleScroll();
    }
    return (
        <>
            <section ref={ref} >
                <Hero />
            </section>
            {/* second section */}
             
            <HomeFeatureSection
    imageSrc="/home3.webp"
    imageAlt="performance Insights"
    tag="Performance Insights"
    title="Student & Lesson"
    highlight="Tracking"
    description={`Maintain detailed lesson notes and progress reports, track attendance and performance
    metrics, and provide structured feedback to students and parents.

    Keep a detailed record of every lesson with structured notes and progress reports,
    ensuring a clear learning path for each student. Monitor attendance, track performance
    metrics, and provide valuable feedback to both students and parents. With organized and
    data driven insights, you can enhance learning outcomes and foster continuous
    improvement in an effective and transparent way.`}
    reverse={false}
    handleClick={handleClick}
/>

<HomeFeatureSection
    imageSrc="/home1.webp"
    imageAlt="simplified management"
    tag="Centralized Profile Management"
    title="Simplified"
    highlight="Management"
    description={`Seemi efficiently manages the profiles and data of students, tutors, and staff
    in one centralized platform. It allows administrators to create, update, and track
    individual profiles, ensuring that all relevant information—such as schedules,
    performance records, and contact details—is easily accessible...`}
    reverse={true}
    background="#F7F7FE"
    handleClick={handleClick}
/>

<HomeFeatureSection
    imageSrc="/home2.webp"
    imageAlt="Automated Communication"
    tag="Automated Reminders & Updates"
    title="Automated"
    highlight="Communication"
    description={`Send automated email and SMS reminders for lessons and payments, ensuring timely notifications...`}
    reverse={false}
    handleClick={handleClick}
/>

<HomeFeatureSection
    imageSrc="/home2.webp"
    imageAlt="Payroll Management"
    tag="Centralized Profile Management"
    title="Payroll"
    highlight="Management"
    description={`Calendar-based payroll management system simplifies the process for tutors, admin, and
    support staff by aligning payments with scheduled work hours...`}
    reverse={true}
    background="#F7F7FE"
    handleClick={handleClick}
/>


            {/* third section */}
           
            {/* Fourth section */}
           

            {/* Fifth section */}
           
            {/* sixth section */}
            <section className="w-full flex justify-center fade-in rounded-2xl my-12 lg:my-20">
                <div
                    className="w-[90%] min-h-[300px] lg:min-h-[600px] flex flex-col items-start  md:justify-center md:items-center text-center px-8 py-12 fade-in bg-cover lg:bg-contain rounded-2xl"
                    style={{
                        backgroundImage: "url('/homebg.png')",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <h2 className="font-murecho text-left md:text-center text-3xl lg:text-6xl font-bold leading-9 lg:leading-[4.5rem] text-white ">
                        Transform Your Tutoring Business with Seemi
                    </h2>
                    <p className="max-w-[800px] text-lg text-left md:text-center font-monteserate font-extralight text-white mt-6">
                        Elevate your tutoring business with our all-in-one software. Simplify scheduling, manage students
                        seamlessly, and deliver engaging lessons—all from a single, user-friendly platform.
                    </p>
                    <button onClick={handleClick} className="text-[#5969FB] font-murecho font-light cursor-pointer px-6 py-2 text-lg bg-white rounded-full mt-8">Book a Demo</button>
                </div>
            </section>



            {/* seventh section */}

        </>

    )
}

export default Home