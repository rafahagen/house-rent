import React from 'react';
import useCrouses from '../Hooks/Data';
import CourseList from './CourseList';

const Course = () => {
    const [crouses] = useCrouses()
    return (
        <CourseList crouses={crouses} />
    );
};

export default Course;