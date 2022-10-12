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
            <h1 className='text-5xl text-center	mt-6'>From the Coursera community</h1>
            <p className='text-center text-3xl'>107+ million people are already learning on Coursera</p>

            <section>
                <div className="grid grid-flow-col place-items-center my-16 mx-28">
                    <div className="row-span-3">
                        <h1 className='ml-[8%] text-5xl font-thin'>Welcome to Master Study!</h1>
                        <p className='w-10/12 my-12 text-justify'>Online studies are designed for students whose scheduling commitments would otherwise make it difficult to enroll in a full-time higher education program. Offered for individual courses, diplomas, associate’s degrees and certificate programs, online studies are a valuable option. The resulting qualification a graduate receives after successfully completing.</p>
                        <div>
                            <p className='mb-6'>Unordered & Ordered Lists</p>
                            <div className='flex gap-4'>
                                <img className='w-6' src={like} alt="" />
                                <p className='text-gray-600 cursor-pointer hover:text-black'>Online Courses with full discount systems.</p>
                            </div>
                            <div className='flex gap-4'>
                                <img className='w-6' src={like} alt="" />
                                <p className='text-gray-600 cursor-pointer hover:text-black'>Online Certificates which can be used worldwide.</p>
                            </div>
                            <div className='flex gap-4'>
                                <img className='w-6' src={like} alt="" />
                                <p className='text-gray-600 cursor-pointer hover:text-black'>An online leadership development program at Masterstudy LMS.</p>
                            </div>
                        </div>

                    </div>
                    <div className="row-span-3">
                        <img src={cat} alt="" />
                    </div>
                </div>
            </section>

            <section>
                <div className="grid grid-flow-col my-16 mx-28">
                    <div className="row-span-3">
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
                <div className="border bg-red-300 mx-28">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, quidem.
                </div>
            </section>

            <hr className='my-4' />

            <div className=' mt-8'>
                <h1 className='text-3xl text-center my-4'>Our Faculty</h1>
                <div className="coruse-instractor grid grid-flow-col place-items-center">
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