import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../AppCard/AppCard';

const Apps = () => {

    const appsData = useLoaderData();
    // console.log(appsData);

    const [search, setSearch] = useState("")

    const filteredApps = appsData.filter(app =>

        app.title.replace(':', '').toLowerCase().includes(search.toLowerCase())
    );




    return (
        <div className='py-14 md:py-20 bg-[#F5F5F5] px-3'>
            <h2 className='font-bold text-center text-5xl mb-4'>Our All Applications</h2>
            <p className='text-center text-xs md:text-xl text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='flex justify-between mx-2 md:mx-6 mt-11'>
                <p className='font-semibold text-2xl text-[#001931]'> ({appsData.length}) Apps Found</p>

                {/* search apps */}
                <div className="relative w-full max-w-md">

                    <span className="absolute z-10 left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                            />
                        </svg>
                    </span>


                    <input
                        type="text"
                        placeholder="Search Apps"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="input input-bordered w-full rounded-md px-4 py-2 pl-10"
                    />
                </div>


            </div>

            {/* All apps   */}
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10'>

                {
                    filteredApps.length > 0 ? (
                        filteredApps.map(app => (
                            <AppCard app={app} key={app.id} />
                        ))
                    ) : (
                        
                            <p className="text-center text-red-400 font-medium text-2xl col-span-full"> No App Found
                            </p>
                        
                    )
                }

            </div>
        </div>
    );
};

export default Apps;