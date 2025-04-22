import React from 'react';
import "../styles/footer.css";
import logo from "../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi2";
import { FaLink } from "react-icons/fa";

const Footer = () => {
    const socialMediaLinks = [
        {
            icon: <MdEmail size={20} color="#5969FB" />,
            value: "info@samii.com",
        },
        {
            icon: <HiPhone size={20} color="#5969FB" />,
            value: "USA +1 948 4737 722",
        },
        {
            icon: <HiPhone size={20} color="#5969FB" />,
            value: "Canada +1 948 4737 722",
        },
    ];

    const links = [
        { name: "Home", url: "#" },
        { name: "Features", url: "#" },
        { name: "Integrations", url: "#" },
        { name: "Pricing", url: "#" },
        { name: "Tutorials", url: "#" },
    ];

    const legal = [
        { name: "Term Of Use", url: "#" },
        { name: "Privacy Policy", url: "#" },
        { name: "Cookie Policy", url: "#" }
    ];

    return (
        <footer 
        style={{ backgroundImage: "url('/footer.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition:"center" }}
        className="w-full mx-auto bg-no-repeat bg-cover mt-14 "
        >

            <div className="max-w-[1440px] mx-auto px-4 md:px-[2rem] lg:px-[4rem] xl:[7rem] 2xl:px-[0rem] flex flex-wrap lg:flex-nowrap gap-16 md:gap-12 lg:gap-4 md:items-start sm:items-center     md:justify-between  py-16">
                {/* Column 1 - Logo and Contact */}
                <div className="footer-col footer-links ">
                    <img src={logo} alt="Logo" className="w-[147px] h-[44px]" />
                    <ul className="social-media">
                        {socialMediaLinks.map((item, index) => (
                            <li key={index} className="flex items-center gap-2 mt-4">
                                {item.icon}
                                <span className='font-monteserate font-light text-md'>{item.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 2 - Navigation Links */}
                <div className="footer-col footer-links ">
                    <h3 className="footer-col-heading font-murecho font-bold text-2xl text-[#5969FB]">Links</h3>
                    <ul className="footer-list">
                        {links.map((item, index) => (
                            <li key={index} className="mt-2">
                                <a href={item.url} className='font-monteserate text-md font-extralight hover:text-[#5969FB]'>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3 - Legal Links */}
                <div className="footer-col footer-links  ">
                    <h3 className="footer-col-heading font-murecho font-bold text-2xl text-[#5969FB]">Legal</h3>
                    <ul>
                        {
                            legal.map((item, index) => (
                                <li key={index} className="mt-2">
                                    <a href={item.url} className="hover:text-[#5969FB] text-md font-monteserate font-extralight">
                                        {item.name}
                                    </a>
                                </li>
                            ))}

                    </ul>
                </div>

                {/* Column 4 - Newsletter */}
                <div className='footer-col-newsletter'>
                    <h3 className="footer-col-heading font-murecho font-bold text-2xl text-[#5969FB]">Newslater</h3>
                    <p className="footer-paragraph">
                        Stay upto date
                    </p>
                    <div className=" flex justify-center items-center w-100% h-15 bg-white border-2 border-[#b3b3b3] rounded-[50px] mt-4 p-2.5">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="font-monteserate font-light w-full h-full bg-transparent outline-none px-4 rounded-[50px] placeholder:text-[#404042]"
                        />
                        <button className=" font-monteserate font-light py-2.5 px-5 bg-[#5969FB] text-white border-none rounded-full outline-0 borde leading-8">Subscribe</button>
                    </div>
                </div>
            </div>
            {/* footer bottom */}
            <div className='footer-line'>
            </div>
            <div className="max-w-[1440px] mx-auto px-4 md:px-[4rem] xl:[7rem] 2xl:px-[10rem] font-monteserate font-light text-2xl flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between py-4 footer-bottom"
            >
                <p className='font-monteserate font-extralight text-xl sm:text-center'>Copyright 2025 Seemi. All Rights Reserved</p>
                <span className="flex items-center gap-2 font-monteserate font-extralight text-xl ">
                <FaLink size={20}  color='#5969FB'/>
                Tailored by AQIB
                </span>
            </div>


        </footer>
    );
};

export default Footer;
