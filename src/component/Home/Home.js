// import React, { useEffect, useState } from 'react';
import Crouses from '../Crouses/Crouses';
// import Crouse from '../Hooks/Data';
import Crouse from '../Course/Course';
// import Data from '../Hooks/Data'
import useCrouses from '../Hooks/Data';

const Home = () => {
    const [crouses] = useCrouses([]);
    // const crouses = Crouse();
    // const [crouses, setCrouses] = useState([]);
    // useEffect(() => {
    //     fetch('https://raw.githubusercontent.com/mostakshahariyar/crouse_data/main/crouse.JSON')
    //         .then(res => res.json())
    //         .then(data => setCrouses(data))
    // }, [])
    // console.log(crouses)
    return (
        <div className='grid grid-cols-3 bg-slate-300'>
            {
                crouses.map(crouse => <Crouses
                    crouse={crouse}
                    key={crouse.id}
                >
                    <Crouse />
                </Crouses>
                )
            }
            {/* <Data /> */}
        </div>
    );
};

export default Home;