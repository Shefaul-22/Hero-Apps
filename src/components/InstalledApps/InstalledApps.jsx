import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import { useLoaderData } from "react-router";
import { getInstallApps, removeInstallAppsFromLocalDB } from "../../Utility/addInstallAppsToLocalDB";
import downloadIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png';



const InstalledApps = () => {

    const appsData = useLoaderData();
    // console.log(appsData);

    // const installedIds = getInstallApps();
    const installedIds = getInstallApps().map(id => Number(id));

    const installedAppsList = appsData.filter(app =>
        installedIds.includes(app.id)
    );

    const [sortBy, setSortBy] = useState("size");
    const [installedApps, setInstalledApps] = useState(installedAppsList);



    // sorting 
    const sortedApps = [...installedApps].sort((a, b) => {
        if (sortBy === "high-low") {
            return b.downloads - a.downloads;
        }
        if (sortBy === "low-high") {
            return a.downloads - b.downloads;
        }
        return 0;
    });


    const handleUninstall = (id) => {
        removeInstallAppsFromLocalDB(id);

        const updateInstalledApps = installedApps.filter(app => app.id !== id)
        setInstalledApps(updateInstalledApps);
        toast("App Uninstall Successfully!")
    };


    return (
        <div className="bg-[#F5F5F5] py-6 md:py-10">

            <div className=" max-w-7xl mx-auto p-6  ">

                <h1 className="text-3xl font-bold text-center mb-2">Your Installed Apps</h1>

                <p className="text-center text-[#627382] mb-8">Explore All Trending Apps on the Market developed by us
                </p>


                <div className="flex justify-between items-center mb-4">

                    <p className="font-semibold text-2xl text-[#001931]">
                        {sortedApps.length} Apps Found
                    </p>

                    {/*  sort dropdown  */}
                    <div className="relative w-44 shadow-sm ">
                        <select
                            className="  px-3 py-2 rounded-xs  cursor-pointer  appearance-none w-full text-[#627382] border border-[#D2D2D2]"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option >Sort By Size</option>
                            <option value="high-low"> High → Low</option>
                            <option value="low-high"> Low → High</option>

                        </select>

                        {/* SVG arrow */}
                        <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2">
                            <svg
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                fill="#6B7280"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7 10l5 5 5-5H7z" />
                            </svg>
                        </span>

                    </div>

                </div>


                <div className="space-y-4">
                    {sortedApps.map((app) => (
                        <div
                            key={app.id}
                            className="flex items-center justify-between p-4 bg-white shadow rounded-md"
                        >

                            <div className="flex items-center gap-4">
                                <img
                                    src={app.image}
                                    alt={app.title}
                                    className="w-16 h-16 rounded-lg bg-[#D9D9D9] object-cover"
                                />

                                <div>
                                    <h2 className="text-lg font-semibold">{app.title}</h2>

                                    <div className="flex items-center gap-4 text-sm mt-1">

                                        <div className="flex items-center gap-1 text-[#00D390]">
                                            <img className='w-4 h-4 mr-1' src={downloadIcon} alt="download icon" />
                                            <span>{((app.downloads) / 1000000).toFixed(1)}M</span>
                                        </div>

                                        <div className="flex items-center gap-1 text-[#FF8811]">

                                            <img className='w-4 h-4 mr-1' src={ratingIcon} alt="rating icon" />
                                            <span>{app.ratingAvg}</span>

                                        </div>

                                        <div className="text-[#627382]" >{app.size} MB</div>
                                    </div>
                                </div>
                            </div>

                            {/* Uninstall btn */}
                            <button onClick={() => handleUninstall(app.id)} className="bg-[#00D390] text-[#ffffff] px-4 py-2 rounded-md cursor-pointer">
                                Uninstall
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default InstalledApps;
