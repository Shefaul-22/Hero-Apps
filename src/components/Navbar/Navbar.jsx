import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png';


const Navbar = () => {

    const links = <>

        <li><NavLink to="/" className={`font-semibold text-[16px] nav-link`}>Home</NavLink></li>
        <li><NavLink to="/apps" className={`font-semibold text-[16px] nav-link`}>Apps</NavLink></li>
        <li><NavLink to="/installation" className={`font-semibold text-[16px] nav-link`}>Installation</NavLink></li>

    </>

    return (
        <div className="navbar bg-[#FFFFFF] shadow-sm px-5 md:px-12 py-3 md:py-5 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                        {
                            links
                        }

                    </ul>
                </div>


                <NavLink to="/" className='flex gap-1 items-center '>

                    <img className='w-11 h-11 ' src={logo} alt="" />

                    <h2 className=" text-2xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold ">AppVerse</h2>

                </NavLink>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end mr-3 md:mr-0">
                <NavLink to={`https://github.com/Shefaul-22?tab=repositories`} className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-semibold text-[#ffffff] py-5 text-[16px]'><img className='w-6 h-6' src="https://i.ibb.co.com/BK2S2CJL/image.png"></img> Contribute</NavLink>
            </div>
        </div>
    );
};

export default Navbar;