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
                imageSrc="/home5.png"
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

        </>

    )
}

export default Home