import React from 'react';
import Crouse from '../Crouse/Crouse';

const CourseList = ({ crouses }) => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2'>
            {
                crouses.map(crouse => <Crouse
                    crouse={crouse}
                    key={crouse.id}
                />)
            }
        </div>
    );
}

export default CourseList;