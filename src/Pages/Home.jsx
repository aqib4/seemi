import React, { useRef } from "react";
import Hero from '../Components/Hero'
import "../styles/animateImage.css";
import "../styles/animateSection.css"
import HomeFeatureSection from "../Components/HomeFeatureSection";
import HomeFeaturedSectionTag from "../Components/HomeFeaturedSectionTag";
import FeaturedSectionCard from "../Components/FeaturedSectionCard";
import FeaturedCTA from "../Components/FeaturedCTA";

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

    Keep a detailed record of every lesson with structured notes and progress reports, ensuring a clear 
    learning path for each student. Monitor attendance, track performance metrics, and provide valuable feedback to 
    both students and parents. With organized and data driven insights, you can enhance learning outcomes and foster 
    continuous improvement in an effective and transparent way.

`}
                reverse={false}
                handleClick={handleClick}
            />
            {/* third section */}
            <HomeFeatureSection
                imageSrc="/home1.webp"
                imageAlt="simplified management"
                tag="Centralized Profile Management"
                title="Simplified"
                highlight="Management"
                description={`Seemi efficiently manages the profiles and data of students, tutors, and staff 
        in one centralized platform. It allows administrators to create, update, and track individual
         profiles, ensuring that all relevant information—such as schedules, performance records, and 
         contact details—is easily accessible. Tutors can manage their availability and lesson plans, 
         while students can track their progress and assignments. The system also facilitates staff management,
          streamlining tasks, roles, and communications, making it easy to keep everything organized and running 
          smoothly.

`}
                reverse={true}
                background="#F7F7FE"
                handleClick={handleClick}
            />
            {/* fourth section */}
            <HomeFeatureSection
                imageSrc="/home2.webp"
                imageAlt="Automated Communication"
                tag="Automated Reminders & Updates"
                title="Automated"
                highlight="Communication"
                description={`
        Send automated email and SMS reminders for lessons and payments, ensuring timely notifications, while
        keeping parents informed with regular progress updates for better engagement.

        Enhance communication and engagement with automated email and SMS reminders for lessons and payments, 
        ensuring students and parents never miss important updates. Keep parents informed with regular progress 
        reports, fostering transparency and involvement in the learning journey. With timely notifications, you
         can reduce missed sessions, improve payment consistency, and create a seamless experience for everyone 
         involved.
        `}
                reverse={false}
                handleClick={handleClick}
            />
            {/* fifth section */}
            <HomeFeatureSection
                imageSrc="/home2.webp"
                imageAlt="Payroll Management"
                tag="Centralized Profile Management"
                title="Payroll"
                highlight="Management"
                description={`Calendar-based payroll management system simplifies the process for tutors, admin,
         and support staff by aligning payments with scheduled work hours. The platform automatically 
         tracks hours worked, assigns pay based on set rates, and integrates with the calendar for accurate 
         payroll calculation. This ensures timely and error-free payments while providing a clear, visual 
         overview of staff schedules and compensation, making payroll management more efficient and transparent.
`}
                reverse={true}
                background="#F7F7FE"
                handleClick={handleClick}
            />
            {/* sixth section */}
            <FeaturedCTA title={"Transform Your Tutoring Business with Seemi"}
                handleClick={handleClick}
                describtion={" Elevate your tutoring business with our all-in-one software. Simplify scheduling, manage students seamlessly, and deliver engaging lessons—all from a single, user-friendly platform."} />


            {/* seventh section */}
            <section className="max-w-[1440px] mx-auto flex flex-col items-center justify-center px-2 md:px-12 xl:px-20 my-12 lg:my-20">
                <HomeFeaturedSectionTag label="Who Can Use" />
                <h2 className="font-murecho max-w-[800px] text-center text-3xl md:text-6xl font-bold leading-9 md:leading-[4.5rem] text-[#363636] mt-6">
                    Designed To Support All Types Of <span className="text-[rgb(89,105,251)]"> Businesses</span>
                </h2>
                <p className="text-lg max-w-[600px] text-center font-monteserate font-extralight ml-2 mt-6">Designed for tutors of all backgrounds, Seemi simplifies student management, scheduling,
                    and lesson delivery perfect for any teaching style or subject.</p>
                <div className="max-w-[1050px] h- flex flex-wrap items-center justify-center gap-6 mt-12">
                    <FeaturedSectionCard imageSrc={'/tutot.png'} imageAlt={"tutor"} title={"Indvidual Tutors"}
                        description={"Looking to manage day to day tutoring tasks"} />
                    <FeaturedSectionCard imageSrc={'/tutot.png'} imageAlt={"tutor"} title={"Tutoring Starups"}
                        description={"Looking for advance tools to grow"} />
                    <FeaturedSectionCard imageSrc={'/tutot.png'} imageAlt={"tutor"} title={"Tutoring Scaleups"}
                        description={"Looking to grow exponential"} />
                </div>
            </section>

            {/* eighth section */}
            <FeaturedCTA title={"Start Your Journey With Seemi"}
                handleClick={handleClick}
                describtion={"Start your tutoring journey today and enjoy personalized learning, expert support, and the confidence to reach your academic goals!"} />
        </>

    )
}

export default Home