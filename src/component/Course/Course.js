import React from 'react';
import useCrouses from '../Hooks/Data';
import Crouse from '../Crouse/Crouse'

const Course = () => {
    const [crouses] = useCrouses([]);
    return (
        <div className='grid grid-cols-3 bg-slate-300'>
            {
                crouses.map(crouse => <Crouse
                    crouse={crouse}
                    key={crouse.id}
                />)
            }
        </div>
    );
};

export default Course;