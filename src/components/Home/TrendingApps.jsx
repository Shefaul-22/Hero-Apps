import React from 'react';
import AppCard from '../AppCard/AppCard';
import { Link } from 'react-router';

import Loading from '../Loading/Loading';


const TrendingApps = ({ appsData }) => {

    
    if(!appsData) {
        return <Loading></Loading>
    }

    const trendingAppsData = appsData.sort((a, b) => b.downloads - a.downloads).slice(0, 8);

    return (
        <div className='py-14 md:py-20 bg-[#F5F5F5] px-4'>
            <h2 className='font-bold text-center text-5xl mb-4'>Trending Apps</h2>
            <p className='text-center text-xs md:text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>

            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10'>

                {
                    trendingAppsData.map(app => <AppCard app={app} key={app.id}></AppCard>)
                }

            </div>
            <Link to="/apps" className=' flex justify-center px mt-10'>
                <span className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-9'>Show All</span>

            </Link>
        </div>
    );
};

export default TrendingApps;