import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import TrendingApps from './TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {

    const appsData = useLoaderData();
    // console.log(appsData);

    return (
        <div>
            
            <HeroSection></HeroSection>
            <TrendingApps appsData={appsData}></TrendingApps>


        </div>
    );
};

export default Home;