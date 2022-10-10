import React from 'react';
import { useNavigate } from 'react-router';

const NotFound = () => {
    let nevigate = useNavigate();
    const heandelBtn = () => {
        nevigate('/home')
    }
    return (
        <div>
            <div class="flex items-center h-screen justify-center ">
                <div class="flex-none border-r-2 border-indigo-500">
                    <span className='text-6xl text-blue-700'>404</span>
                </div>

                <div class=" flex-initial">
                    <p className='text-6xl pl-2'>Page not found</p>
                </div> <br />
                <button onClick={heandelBtn} class="p-1 ml-10 rounded text-3xl bg-blue-500 shadow-lg shadow-blue-500/50">Home</button>
            </div>

        </div>
    );
};

export default NotFound;