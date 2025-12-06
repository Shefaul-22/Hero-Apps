import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from '../Loading/Loading';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import reviewIcon from '../../assets/icon-review.png';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { addInstallToLocalDB } from '../../Utility/addInstallAppsToLocalDB';


const AppDetails = () => {

    const { id } = useParams();
    // console.log(id);
    const appId = parseInt(id);

    const [appsData, setAppsData] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('/appsData.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setAppsData(data);
                setLoading(false);
            })
    }, []);

    const singleApp = appsData.find(app => app.id === appId);
    // console.log(singleApp);

    if (loading || !singleApp) {
        return <Loading></Loading>
    }
    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = singleApp;

    const [oneStar, twoStar, threeStar, fourStar, fiveStar] = ratings;

    const chartData = [
        { name: fiveStar.name, count: fiveStar.count },
        { name: fourStar.name, count: fourStar.count },
        { name: threeStar.name, count: threeStar.count },
        { name: twoStar.name, count: twoStar.count },
        { name: oneStar.name, count: oneStar.count }
    ];


    const handleInstall = (id) => {

        console.log(id);
        addInstallToLocalDB(id)
    }


    return (
        <div className=" bg-[#F5F5F5]">

            <div className='max-w-7xl mx-auto p-6'>

                <div className="flex flex-col md:flex-row gap-6 p-6 md:p-2">

                    <div className='flex justify-center items-center w-full md:w-80 h-80 bg-[#ffffff] rounded-md'>
                        <img className='w-72 h-72 ' src={image} alt={title} />
                    </div>

                    <div className='h-80'>
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">{title}</h1>
                        <p className="text-[#627382]">Developed by <span className='text-[#632EE3] font-medium'>{companyName}</span></p>
                        <div className="border-t border-gray-300 mt-8 w-full"></div>

                        <div className="flex  gap-10 md:gap-12 mt-5 md:mt-8">

                            <div>
                                <img className='w-6 h-6' src={downloadIcon} alt="" />
                                <p className="text-gray-500 text-sm my-2">Downloads</p>
                                <p className="text-[#001931] font-extrabold text-3xl md:text-4xl">{(downloads / 1000000).toFixed(1)}M</p>
                            </div>
                            <div>
                                <img className='w-6 h-6' src={ratingIcon} alt="" />
                                <p className="text-gray-500 text-sm my-2">Average Ratings</p>
                                <p className="text-[#001931] font-extrabold text-3xl md:text-4xl ">{ratingAvg}</p>
                            </div>
                            <div>
                                <img className='w-6 h-6' src={reviewIcon} alt="" />
                                <p className="text-gray-500 text-sm my-2">Total Reviews</p>
                                <p className="text-[#001931] font-extrabold text-3xl md:text-4xl">{(reviews / 1000).toFixed(1)}K</p>
                            </div>
                        </div>

                        <button onClick={()=> handleInstall(id)} className="mt-9 px-6 py-3 bg-[#29D390] text-white  rounded-lg font-bold cursor-pointer">
                            Install Now ({size} MB)
                        </button>
                    </div>
                </div>

                <div className="border-t border-gray-300 mt-4 md:mt-10 w-full"></div>


                {/* barchart */}
                <div className="mt-4 md:mt-10">

                    <div >
                        <h2 className="text-2xl font-semibold mb-3 ml-3 text-[#001931]">Ratings</h2>
                        <ResponsiveContainer width="100%" height={260}>
                            <BarChart
                                data={chartData}
                                layout="vertical"

                            >

                                <XAxis
                                    type="number"
                                    domain={[0, 12000]}
                                    ticks={[0, 3000, 6000, 9000, 12000]}
                                    axisLine={false}
                                    tickLine={false}
                                />
                                <YAxis
                                    type="category"
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}

                                />

                                <Bar
                                    dataKey="count"
                                    fill="#FF8811"

                                    barSize={25}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="border-t border-gray-300 mt-4 md:mt-10 w-full"></div>


                {/* description */}
                <div className="mt-4 md:mt-10   rounded-xl">
                    <h2 className="text-2xl font-semibold mb-4 text-[#001931]">Description</h2>

                    {
                        (() => {
                            const words = description.split(" "); 
                            const chunks = [];
                            let temp = [];

                            words.forEach((word) => {
                                temp.push(word);

                               
                                if (temp.length >= 80 && /[.!?]$/.test(word)) {
                                    chunks.push(temp.join(" "));
                                    temp = [];
                                }
                            });

                            
                            if (temp.length) chunks.push(temp.join(" "));

                            return chunks.map((part, i) => (
                                <p
                                    key={i}
                                    className="text-[#627382] leading-relaxed whitespace-pre-line mb-4"
                                >
                                    {part}
                                </p>
                            ));
                        }) ()
                    }


                    {/* <p className="text-[#627382] leading-relaxed whitespace-pre-line">
                        {description}
                    </p> */}

                </div>

            </div>
        </div>
    );
};

export default AppDetails;