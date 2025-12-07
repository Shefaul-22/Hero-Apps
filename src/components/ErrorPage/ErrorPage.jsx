import React from 'react';
import errorPageImg from '../../assets/error-404.png';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='bg-white'>
            <div className="flex flex-col items-center justify-center text-center p-6 ">

                <img className='w-72 h-72 mb-8 pt-10' src={errorPageImg} alt="" />

                <h2 className="text-2xl md:text-5xl font-semibold mb-2 mt-6 text-[#001931]">Oops, page not found!</h2>

                <p className="text-[#627382] my-3 text-[14px] md:text-xl">The page you are looking for is not available.
                </p>

                <Link
                    to="/"
                    className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mt-2 text-white"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;