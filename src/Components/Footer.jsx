import React from 'react';
import "../styles/Footer.css";
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
        <footer >

            <div className="footer">
                {/* Column 1 - Logo and Contact */}
                <div className="footer-col footer-links">
                    <img src={logo} alt="Logo" className="w-[147px] h-[44px]" />
                    <ul className="social-media">
                        {socialMediaLinks.map((item, index) => (
                            <li key={index} className="flex items-center gap-2 mt-4">
                                {item.icon}
                                <span>{item.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 2 - Navigation Links */}
                <div className="footer-col footer-links">
                    <h3 className="footer-col-heading text-[#5969FB]">Links</h3>
                    <ul className="footer-list">
                        {links.map((item, index) => (
                            <li key={index} className="mt-2">
                                <a href={item.url} className="">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3 - Legal Links */}
                <div className="footer-col footer-links ">
                    <h3 className="footer-col-heading text-[#5969FB]">Legal</h3>
                    <ul>
                        {
                            legal.map((item, index) => (
                                <li key={index} className="mt-2">
                                    <a href={item.url} className="hover:text-[#5969FB] ">
                                        {item.name}
                                    </a>
                                </li>
                            ))}

                    </ul>
                </div>

                {/* Column 4 - Newsletter */}
                <div className='footer-col-newsletter'>
                    <h3 className="footer-col-heading text-[#5969FB]">Newslater</h3>
                    <p className="footer-paragraph">
                        Stay upto date
                    </p>
                    <div className="footer-email-box">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="footer-email-input"
                        />
                        <button className="footer-btn">Subscribe</button>
                    </div>
                </div>
            </div>
            {/* footer bottom */}
            <div className='footer-line'>
            </div>
            <div className="footer-bottom">
                <p>Copyright 2025 Seemi. All Rights Reserved</p>
                <span>
                <FaLink size={20}  color='#5969FB'/>
                Tailored by AQIB
                </span>
            </div>


        </footer>
    );
};

export default Footer;
