import React from "react";
import FadeInImage from "./FadeInImage";
import HomeFeaturedSectionTag from "./HomeFeaturedSectionTag";
import Button from "./button";
import "../styles/animateImage.css"; // Assuming you have a CSS file for styles


const HomeFeatureSection = ({
    imageSrc,
    imageAlt,
    tag,
    title,
    highlight,
    description,
    reverse = false,
    background = "transparent",
    handleClick
}) => {
    const sectionClasses = `max-w-[1440px] py-6 lg:py-12 mx-auto grid grid-cols-1 xl:grid-cols-2 gap-7 px-2 md:px-16 xl:px-24 my-12 lg:my-20`;
    const contentOrder = reverse ? ["xl:order-2", "xl:order-1"] : ["xl:order-1", "xl:order-2"];
    const sectionStyle = background !== "transparent" ? { backgroundColor: background } : {};

    return (
        <section className={sectionClasses} style={sectionStyle}>
            {/* Image */}
            <div className={`order-2 ${contentOrder[0]}`}>
                <FadeInImage src={imageSrc} alt={imageAlt} />
            </div>
            {/* Content */}
            <div className={`order-1 ${contentOrder[1]}`}>
                <HomeFeaturedSectionTag label={tag} />
                <h2 className="font-murecho text-3xl md:text-6xl font-bold leading-9 md:leading-[4.5rem] text-[#363636] mt-6">
                    {title} <span className="text-[#5969FB]">{highlight}</span>
                </h2>
                <p className="text-lg font-monteserate font-extralight ml-2 mt-6">{description}</p>
                <Button handleClick={handleClick} />
            </div>
        </section>
    );
};

export default HomeFeatureSection;
