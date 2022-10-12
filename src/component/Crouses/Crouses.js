import React from 'react';
import { useNavigate } from 'react-router';

const Crouses = props => {
    const { title, body, price, rating, img } = props.crouse;
    // console.log(props.crouse);
    let navigate = useNavigate();
    const heandelDetailsBtn = () => {
        navigate('/deatils')
    }
    return (


        <div className="w-[300px] flex flex-col items-center justify-start p-[5px] m-auto my-5 border-4 shadow-blue-400 drop-shadow-2xl hover:bg-white rounded border-double hover:translate-y-1 hover:duration-500 duration-500 ">

            <div className='image-section '>
                <img src={img} className="rounded" alt={title} />
            </div>
            <div className="card-info">
                <h3 className='font-mono text-lg font-bold tracking-tighter'>{title}</h3>
                <small className='text-blue-600'>Faculty: {body}</small>
                <p className='font-bold'>Price: {price}</p>
                <p>Ratting: {rating}</p>
                <button onClick={heandelDetailsBtn} className='btn transition duration-700 ease-in-out hover:bg-cyan-500'>All Details</button>
            </div>
        </div>
    );
};

export default Crouses;