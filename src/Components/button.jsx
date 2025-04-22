import React from "react";


const Button = ({handleClick}) => {

    return (
        <button
            onClick={handleClick}
            className="text-white font-murecho font-light cursor-pointer px-6 py-2 text-lg bg-[#5969FB] rounded-full shadow-lg shadow-indigo-400 mt-4"
        >
            Book a Demo
        </button>
    );
}
export default Button;