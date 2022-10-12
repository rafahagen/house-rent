import React from 'react';
import { useNavigate } from 'react-router';

const NotFound = () => {
    let nevigate = useNavigate();
    const heandelBtn = () => {
        nevigate('/home')
    }
    return (
        <div>
            <div class="lg:flex flex flex-col items-center lg:h-screen justify-center ">
                <div class="lg:flex-none">
                    <p className='text-6xl text-blue-700 text-center'>404</p>
                </div>

                <div class=" lg:flex-initial">
                    <p className='text-6xl pl-2 text-center'>Page not found</p>
                </div> <br />
                <button onClick={heandelBtn} class="p-1 lg:ml-10 mx-6 rounded text-3xl bg-blue-500 shadow-lg shadow-blue-500/50">Home</button>
            </div>

        </div>
    );
};

export default NotFound;