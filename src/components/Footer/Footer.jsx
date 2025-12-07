import React from 'react';
import logo from '../../assets/logo.png';
import githubIcon from "../../assets/github.png";

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10">

              
                <div className='flex flex-col  gap-2'>
                    <div className='flex  gap-2'>
                        <img src={logo} alt="AppVerse Logo" className="w-7 h-7" />
                        <h2 className="text-xl font-bold text-[#632EE3]">AppVerse</h2>
                    </div>
                    <p className="text-gray-400 text-sm  max-w-xs">
                        Discover and manage the best apps in the market. We code for millions and make app experiences seamless.
                    </p>
                </div>

                {/* quick links */}
                <div className="flex flex-col items-start md:items-center">
                    <p className='font-semibold text-xl mb-2 text-white'>Quick Links</p>
                    <ul className="flex flex-col  gap-2 md:gap-3 text-white">
                        <li><a href="/" className="hover:text-[#632EE3]">Home</a></li>
                        <li><a href="/apps" className="hover:text-[#632EE3]">Apps</a></li>
                        <li><a href="/installation" className="hover:text-[#632EE3]">My Installation</a></li>
                    </ul>
                </div>

                {/* social icons */}
                <div className="flex flex-col  gap-2 md:gap-3 items-start md:items-center">
                    <a href="https://github.com/Shefaul-22" className='flex items-center gap-2 hover:text-[#632EE3]' target="_blank" rel="noopener noreferrer">
                        <img className="w-6 h-6" src={githubIcon} alt="GitHub" /> Github
                    </a>
                    <a href="https://twitter.com/" className='flex items-center gap-2 hover:text-[#632EE3]' target="_blank" rel="noopener noreferrer">
                        <img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" /> Twitter
                    </a>
                    <a href="https://linkedin.com/" className='flex items-center gap-2 hover:text-[#632EE3]' target="_blank" rel="noopener noreferrer">
                        <img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" /> LinkedIn
                    </a>
                </div>
            </div>

            
            <div className='border-t border-gray-700 mt-4 py-4'>
                <p className="text-gray-400 text-sm text-center">
                    &copy; {new Date().getFullYear()} AppVerse. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
