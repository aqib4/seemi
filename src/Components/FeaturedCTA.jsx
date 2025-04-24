import React from "react";


const FeaturedCTA = ({title , describtion,handleClick}) => {

    return (
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
                {title}
            </h2>
            <p className="max-w-[600px] text-lg text-left md:text-center font-monteserate font-extralight text-white mt-6">
       {describtion}
            </p>
            <button onClick={handleClick} className="text-[#5969FB] font-murecho font-light cursor-pointer px-6 py-2 text-lg bg-white rounded-full mt-8 lg:mt-2 xl:mt-8">Book a Demo</button>
        </div>
    </section>
    );
}
export default FeaturedCTA;