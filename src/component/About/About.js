import React from 'react';
import R from '../../image/page/R.png';
import Gabriela from '../../image/page/Gabriela-Bitencourt-Ferreira.jpg';
import OIP from '../../image/page/R1.jpg';
import like from '../../image/icon/icons8-like-50.png';
import crouse from '../../image/page/course_image-570x308.jpg';
import certificat from '../../image/page/certificate-480x380.png';
import cat from '../../image/page/cat_2-570x350.jpg';

const About = () => {
    return (
        <div className='pb-8'>
            <h1 className='xl:text-5xl lg:text-2xl text-center text-3xl	mt-6'>From the Coursera community</h1>
            <p className='text-center xl:text-3xl text-2xl'>107+ million people are already learning on Coursera</p>

            <section>
                <div className="grid lg:grid-flow-col lg:place-items-center lg:my-16 md:my-8 md:mx-28 mx-[2%]">
                    <div className="row-span-3">
                        <h1 className='lg:ml-[8%] lg:text-5xl md:text-4xl text-2xl my-4 mx-[3%] font-thin'>Welcome to Master Study!</h1>
                        <p className='lg:w-10/12 lg:my-12 lg:text-justify'>Online studies are designed for students whose scheduling commitments would otherwise make it difficult to enroll in a full-time higher education program. Offered for individual courses, diplomas, associate’s degrees and certificate programs, online studies are a valuable option. The resulting qualification a graduate receives after successfully completing.</p>
                        <div>
                            <p className='mb-6'>Unordered & Ordered Lists</p>
                            <div className='flex gap-4'>
                                <img className='w-[20px]' src={like} alt="" />
                                <p className='text-gray-600 cursor-pointer hover:text-black'>Online Courses with full discount systems.</p>
                            </div>
                            <div className='flex gap-4'>
                                <img className='w-[20px]' src={like} alt="" />
                                <p className='text-gray-600 cursor-pointer hover:text-black'>Online Certificates which can be used worldwide.</p>
                            </div>
                            <div className='flex gap-4'>
                                <img className='w-[20px]' src={like} alt="" />
                                <p className='text-gray-600 cursor-pointer hover:text-black'>An online leadership development program at Masterstudy LMS.</p>
                            </div>
                        </div>

                    </div>
                    <div className="row-span-3 mt-4 md:mt-6">
                        <img src={cat} alt="" />
                    </div>
                </div>
            </section>

            <section>
                <div className="grid lg:grid-flow-col md:mx-28 lg:place-items-center my-16 lg:mx-28 mx-[2%] gap-x-6">
                    <div className="row-span-3 md:mb-6">
                        <img src={crouse} alt="" />
                    </div>
                    <div className="row-span-3">
                        <h1 className='text-3xl mb-6'>Professional Certificate Courses (Online)</h1>
                        <li className='list-disc'>Online certificates can be obtained in a range of specialized areas.</li>
                        <li className='list-disc'>Online diplomas are awarded for one to two years of study with LMS.</li>
                        <li>Online associate degrees usually take approximately two years then.</li>
                        <li className='list-disc'>Online preparatory year programs are an opportunity for students.</li>
                        <li className='list-disc'>Online Summer courses are a great way to gain qualifications.</li>
                    </div>
                </div>
            </section>

            {/* certificat */}
            <section>
                <div className="lg:mx-28 md:mx-28 mx-[2%]">
                    <h1 className='text-5xl font-thin mx-[2%] mb-5'>Certifications</h1>
                    <div className="lg:flex md:flex-row  lg:gap-x-3 gap-y-4">
                        <div className=' rounded'>
                            <img src={certificat} alt="" className='lg:p-4 p-2 rounded bg-orange-300 mb-4	' />
                            <p className='text-center text-2xl font-medium lg:my-0 my-2'>Google</p>
                        </div>
                        <div className=' rounded'>
                            <img src={certificat} alt="" className='lg:p-4 p-2 rounded bg-orange-300 mb-4	' />
                            <p className='text-center text-2xl font-medium lg:my-0 my-2'>Twiter</p>
                        </div>
                        <div className=' rounded'>
                            <img src={certificat} alt="" className='lg:p-4 p-2 rounded bg-orange-300 mb-4	' />
                            <p className='text-center text-2xl font-medium lg:my-0 my-2'>Amazon</p>
                        </div>


                    </div>
                </div>
            </section>

            <hr className='my-8' />

            <div className=' mt-8'>
                <h1 className='text-3xl text-center my-4'>Our Faculty</h1>
                <div className="coruse-instractor grid lg:grid-flow-col place-items-center">
                    <div className="row-span-3">
                        <img src={R} className='rounded-full h-[250px]' alt="" />
                        <h1 className='text-center text-xl mt-2'>React faculty</h1>
                    </div>
                    <div className="row-span-3">
                        <img src={Gabriela} className='rounded-full h-[250px]' alt="" />
                        <h1 className='text-center text-xl mt-2'>Python faculty</h1>
                    </div>
                    <div className="row-span-3">
                        <img src={OIP} className='rounded-full h-[250px]' alt="" />
                        <h1 className='text-center text-xl mt-2'>Networking faculty</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;