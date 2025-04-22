import React from "react";
import Hero from '../Components/Hero'


const Home = () => {

    return (
        <>
            <Hero />
            {/* second section */}
            <section className="max-w-[1440px]  mx-auto grid grid-cols-1 xl:grid-cols-2 gap-7 mt-[6rem] px-2 md:px-16 xl:px-24">
                {/* left col */}
                <div className="order-2 xl:order-1">
                    <img src="/home3.webp" alt="" className="w-full h-full" />
                </div>
                {/* right col */}
                <div className="order-1 xl:order-2">
                    <span className="shadow-lg p-2.5 rounded-full shadow-indigo-100 font-monteserate font-light text-sm">Performance Insights</span>
                    <h2 className="font-murecho text-3xl md:text-6xl font-bold leading-9 md:leading-18 text-[#363636] mt-6">
                        Student & Lesson
                        <span className="text-[#5969FB]"> Tracking</span>
                        <p className="text-lg font-monteserate font-extralight ml-2 mt-6">
                            Maintain detailed lesson notes and progress reports, track attendance and performance
                            metrics, and provide structured feedback to students and parents.<br></br><br></br>
                            Keep a detailed record of every lesson with structured notes and progress reports,
                            ensuring a clear learning path for each student. Monitor attendance, track performance
                            metrics, and provide valuable feedback to both students and parents. With organized and
                            data driven insights, you can enhance learning outcomes and foster continuous
                            improvement in an effective and transparent way.
                        </p>
                        <button className="text-white font-murecho font-light px-6 py-2 text-lg bg-[#5969FB] rounded-full shadow-lg  shadow-indigo-400 mt-4 ">Book a Demo</button>
                    </h2>
                </div>
            </section>

            {/* third section */}
            <section className="max-w-[1440px] bg-[#F7F7FE] py-12 mx-auto grid grid-cols-1 xl:grid-cols-2 gap-7 mt-[6rem] px-2 md:px-16 xl:px-24">
                {/* left col */}
                <div>
                    <span className="shadow-lg p-2.5 rounded-full shadow-indigo-100 font-monteserate font-light text-sm">Centralized Profile Management</span>
                    <h2 className="font-murecho text-3xl md:text-6xl font-bold leading-9 md:leading-18 text-[#363636] mt-6">
                        Simplified                  <span className="text-[#5969FB]"> Management</span>
                        <p className="text-lg font-monteserate font-extralight ml-2 mt-6">
                            Seemi efficiently manages the profiles and data of students, tutors, and staff
                            in one centralized platform. It allows administrators to create, update, and track
                            individual profiles, ensuring that all relevant information—such as schedules,
                            performance records, and contact details—is easily accessible. Tutors can manage
                            their availability and lesson plans, while students can track their progress and
                            assignments. The system also facilitates staff management, streamlining tasks, roles,
                            and communications, making it easy to keep everything organized and running smoothly.
                        </p>
                        <button className="text-white font-murecho font-light px-6 py-2 text-lg bg-[#5969FB] rounded-full shadow-lg  shadow-indigo-400    ">Book a Demo</button>
                    </h2>
                </div>
                {/* right col */}

                <div>
                    <img src="/home1.webp" alt="" className="w-full h-full" />
                </div>
            </section>
            {/* Fourth section */}
            <section className="max-w-[1440px]  mx-auto grid grid-cols-1 xl:grid-cols-2 gap-7 mt-[6rem] px-2 md:px-16 xl:px-24">
                {/* left col */}
                <div className="order-2 xl:order-1">
                    <img src="/home2.webp" alt="" className="w-full h-full" />
                </div>
                {/* right col */}
                <div className="order-1 xl:order-2">
                    <span className="shadow-lg p-2.5 rounded-full shadow-indigo-100 font-monteserate font-light text-sm">Performance Insights</span>
                    <h2 className="font-murecho text-3xl md:text-6xl font-bold leading-9 md:leading-18 text-[#363636] mt-6">
                        Automated                  <span className="text-[#5969FB]"> Communication</span>
                        <p className="text-lg font-monteserate font-extralight ml-2 mt-6">
                            Send automated email and SMS reminders for lessons and payments, ensuring timely notifications, while keeping parents informed with regular progress updates for better
                            engagement.<br></br><br></br>
                            Enhance communication and engagement with automated email and SMS reminders for lessons
                            and payments, ensuring students and parents never miss important updates. Keep parents
                            informed with regular progress reports, fostering transparency and involvement in the
                            learning journey. With timely notifications, you can reduce missed sessions, improve
                            payment consistency, and create a seamless experience for everyone involved.

                        </p>
                        <button className="text-white font-murecho font-light px-6 py-2 text-lg bg-[#5969FB] rounded-full shadow-lg  shadow-indigo-400 mt-4">Book a Demo</button>
                    </h2>
                </div>
            </section>

            {/* Fifth section */}
            <section className="max-w-[1440px] bg-[#F7F7FE] py-12 mx-auto grid grid-cols-1 xl:grid-cols-2 gap-7 mt-[6rem] px-2 md:px-16 xl:px-24">
                {/* left col */}
                <div>
                    <span className="shadow-lg p-2.5 rounded-full shadow-indigo-100 font-monteserate font-light text-sm">Centralized Profile Management</span>
                    <h2 className="font-murecho text-3xl md:text-6xl font-bold leading-9 md:leading-18 text-[#363636] mt-6">
                        Payroll<span className="text-[#5969FB]"> Management</span>
                        <p className="text-lg font-monteserate font-extralight ml-2 mt-6">
                            Calendar-based payroll management system simplifies the process for tutors, admin, and
                            support staff by aligning payments with scheduled work hours. The platform automatically
                            tracks hours worked, assigns pay based on set rates, and integrates with the calendar for
                            accurate payroll calculation. This ensures timely and error-free payments while
                            providing a clear, visual overview of staff schedules and compensation, making payroll
                            management more efficient and transparent.
                        </p>
                        <button className="text-white font-murecho font-light px-6 py-2 text-lg bg-[#5969FB] rounded-full shadow-lg  shadow-indigo-400    ">Book a Demo</button>
                    </h2>
                </div>
                {/* right col */}

                <div>
                    <img src="/home1.webp" alt="" className="w-full h-full" />
                </div>
            </section>

            <section style={{ backgroundImage: "url('/homebg.png')", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="w-full h-full py-12 mt-20 flex flex-col justify-center items-center">   
                <h2 className="font-murecho text-3xl md:text-6xl font-bold leading-9 md:leading-18 text-white mt-6">
                    Transform Your Tutoring Business with Seemi
                </h2>
                <p className="max-w-[800px] text-lg font-monteserate font-extralight ml-2 mt-6">
                Elevate your tutoring business with our all-in-one software. Simplify scheduling, manage students
                 seamlessly, and deliver engaging lessons—all from a single, user-friendly platform.

                </p>
            </section>
        </>

    )
}

export default Home