import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'
import { Link } from 'react-router';

const AppCard = ({ app }) => {

    console.log(app);
    const { id } = app;
    

    return (
        <Link to={`appsDetails/${id}`} className='bg-[#F5F5F5]'>
            <div className='rounded-md shadow-md p-3 md:p-4 hover:scale-105 md:hover:scale-105 cursor-pointer transition-transform duration-500 ease-in-out'>

                <div className='rounded-xl flex justify-center bg-[#D9D9D9]'>
                    <img className='w-full h-auto md:w-72 md:h-68  rounded-md' src={app.image} alt="app image" />
                </div>

                <p className='font-medium  text-[#001931] my-4 h-10'>{app.title}</p>

                <div className='flex justify-between'>
                    <p className='flex items-center btn bg-[#F1F5E8] font-medium text-[#00D390]'> <img className='w-4 h-4 mr-1' src={downloadIcon} alt="download icon" /> {(app.downloads / 1000000).toFixed(1)}M</p>

                    <p className='flex items-center btn bg-[#FFF0E1] font-medium text-[#FF8811]'> <img className='w-4 h-4 mr-1' src={ratingIcon} alt="rating icon" /> {app.ratingAvg}</p>

                </div>
            </div>
        </Link>
    );
};

export default AppCard;