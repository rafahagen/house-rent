import React from 'react';
import R from '../../image/page/R.png';
import Gabriela from '../../image/page/Gabriela-Bitencourt-Ferreira.jpg';
import OIP from '../../image/page/R1.jpg';

const About = () => {
    return (
        <div className='pb-8 bg-gray-400'>
            <h1 className='text-5xl text-center	'>From the Coursera community</h1>
            <p className='text-center text-3xl'>107+ million people are already learning on Coursera</p>
            <div className="coruse-instractor grid grid-flow-col place-items-center mt-8">
                <div className="row-span-3">
                    <img src={R} className='rounded-full h-[250px]' alt="" />
                    <h1 className='text-center text-xl'>React faculty</h1>
                </div>
                <div className="row-span-3">
                    <img src={Gabriela} className='rounded-full h-[250px]' alt="" />
                    <h1 className='text-center text-xl'>Python faculty</h1>
                </div>
                <div className="row-span-3">
                    <img src={OIP} className='rounded-full h-[250px]' alt="" />
                    <h1 className='text-center text-xl'>Networking faculty</h1>
                </div>
            </div>
        </div>
    );
};

export default About;