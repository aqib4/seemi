import React from "react";

const HomeFeaturedSectionTag = ({ label }) => (
    <div className="shadow-lg px-3 md:px-4 py-2.5 rounded-full shadow-indigo-100 flex items-center gap-2 w-fit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="16"
        viewBox="0 0 1221 1622"
        fill="none"
        className="inline-block"
      >
        <path d="M1221 1584.24V258.453L0 1052.66V1584.24C0 1616.38 37.6485 1633.77 62.125 1612.94L559.02 1190.03C588.693 1164.77 632.307 1164.77 661.981 1190.03L1158.88 1612.94C1183.35 1633.77 1221 1616.38 1221 1584.24Z" fill="#9AA3F3" />
        <path d="M0.673098 84.805V920.74L1211.73 141.919C1217.51 138.203 1221 131.805 1221 124.936V82.1128C1221 36.7632 1184.23 0 1138.88 0H85.4835C38.644 0 0.673098 37.9685 0.673098 84.805Z" fill="#5969FB" />
      </svg>
      <span className="font-monteserate font-light text-[0.8rem]  md:text-[1.2rem] inline-block">{label}</span>
    </div>
  );

export default HomeFeaturedSectionTag;