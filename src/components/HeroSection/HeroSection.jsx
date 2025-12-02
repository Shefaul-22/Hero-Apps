import React from 'react';
import heroImage from "../../assets/hero.png"


const HeroSection = () => {
    return (
        <div className='bg-[#F5F5F5]'>
            <div>
                <h1 className='font-bold text-4xl md:text-5xl lg:text-7xl text-center pt-7 md:pt-18 mb-4'>We Build <br></br><span className='text-[#632EE3]'>Productive</span> Apps</h1>

                <p className='text-xl text-[#627382] text-center px-4 md:px-12 lg:px-60 mb-2 md:mb-8 '>At AppVerse, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='flex gap-3 justify-center items-center my-6 md:my-10'>
                    <p className='flex items-center btn bg-[#F5F5F5] rounded-md border-2'>

                        <img className='w-5 h-5 bg-[#F5F5F5]' src="https://i.ibb.co.com/spmbcz76/image.png" alt="" />
                        Google Play
                    </p>

                    <p className='flex items-center btn rounded-md  border-2'>
                        <img className='w-5 h-5' src="https://i.ibb.co.com/ZRdXJGWn/image.png" alt="" />
                        App Store
                    </p>

                </div>


                <div className='flex justify-center items-center px-6'>
                    <img src={heroImage} alt="" />
                </div>

                {/* Trusted for */}
                <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-20'>

                    <h2 className=' text-center font-bold text-3xl md:text-5xl   mb-10 text-white'>Trusted by Millions, Built for You</h2>

                    <div className='flex justify-between px-2 md:px-80'>
                        <div className='space-y-4'>
                            <p className='text-center text-[16px] text-white'>Total Downloads</p>
                            <h3 className='text-center  text-white font-extrabold text-4xl md:text-6xl'>29.6M</h3>
                            <p className='text-center text-xs md:text-[16px] text-white'>21% more than last month</p>

                        </div>
                        <div className='space-y-4'>
                            <p className='text-center text-[16px] text-white'>Total Reviews</p>
                            <h3 className='text-center  text-white font-extrabold text-4xl md:text-6xl'>906K</h3>
                            <p className='text-center text-xs md:text-[16px] text-white'>46% more than last month</p>

                        </div>
                        <div className='space-y-4'>
                            <p className='text-center text-[16px] text-white'>Active Apps</p>
                            <h3 className='text-center  text-white font-extrabold text-4xl md:text-6xl'>132+</h3>
                            <p className='text-center text-xs md:text-[16px] text-white'>31 more will Launch</p>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default HeroSection;