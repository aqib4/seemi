import React from "react";


const FeaturedSectionCard = ({ imageSrc, imageAlt, title , description }) => {
    return (
<div className="w-[300px] flex flex-col items-center justify-center bg-gradient-to-b from-[#F7F7FE] via-[#F7F7FE] to-white rounded-[1.2rem] border-4 border-[#f2f2ff] shadow-sm p-5">
<img src={imageSrc} alt={imageAlt} className="w-[138px] h-auto rounded-lg mb-4" />
            <h3 className="font-murecho text-center text-2xl md:text-3xl font-bold leading-4 md:leading-[2rem] text-[#363636]">{title}</h3>
            <p className="text-lg text-center font-monteserate font-extralight mt-2">{description}</p>
        </div>
    );
}
export default FeaturedSectionCard;
