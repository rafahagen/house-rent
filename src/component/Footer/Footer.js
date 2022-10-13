import React from 'react';
import { Link } from 'react-router-dom';
import facebook from './../../image/icon/icons8-facebook-50.svg';
import twitter from './../../image/icon/icons8-twitter-50.svg';
import gmail from './../../image/icon/icons8-gmail-logo-50.svg';
import instragram from './../../image/icon/icons8-instagram-50.png'
import blog from '../../image/page/blog.jpeg';
import blog2 from '../../image/page/blog2.jpeg'
import copyRight from '../../image/icon/copyright.png'


const Footer = () => {
    return (
        <div>
            <hr className='my-8' />
            <div className='md:mx-28 mx-[5%]  mb-8'>
                <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2">
                    <div className='mb-6'>
                        <h1 className='text-xl font-semibold mb-6'>About</h1>
                        <p className='text-justify w-[85%]'> <Link to='/home' className='text-blue-400'>Masterstudy</Link> is Education featured by Learning Management System (LMS) for online education.
                            Developed by <a href="https://web.facebook.com/mostak.shahariyar.0823" target='_blank' className='text-blue-400'>Mostak Shahariyar</a>.</p>
                        <div className="link-section flex gap-x-4 mt-2">
                            <a href="https://web.facebook.com/mostak.shahariyar.0823" target='_blank'>
                                <img src={facebook} className='w-[30px] cursor-pointer' alt="" />
                            </a>
                            <a href="https://www.instagram.com/mostakshahariyar18/" target='_blank'>
                                <img src={instragram} className='w-[30px] cursor-pointer' alt="" />
                            </a>
                            <a href="https://mail.google.com/mail/u/0/#inbox" target='_blank'>
                                <img src={gmail} className='w-[30px] cursor-pointer' alt="" />
                            </a>
                            <a href="https://twitter.com/Mostak0805" target='_blank'>
                                <img src={twitter} className='w-[30px] cursor-pointer' alt="" />
                            </a>
                        </div>

                    </div>
                    <div className='mb-6'>
                        <h1 className='text-xl font-semibold mb-6'>Contact</h1>
                        <p className='mb-2'>Uttara10, Road-10, House-10, <br /> Dhaka Bangladesh</p>
                        <p>+880 1763524178</p>
                        <p>+880 1741526378</p>
                        <p className='mt-2 text-gray-400 cursor-pointer'>info@master.edu</p>
                    </div>
                    <div className='mb-6'>
                        <h1 className='text-xl font-semibold mb-6'>Page</h1>
                        <p className='list-disc hover:text-blue-600 cursor-pointer'>
                            <Link to='/home'>Home</Link>
                        </p>
                        <p className='list-disc hover:text-blue-600 cursor-pointer'>
                            <Link to='/crouse'>Crouse</Link>
                        </p>
                        <p className='list-disc hover:text-blue-600 cursor-pointer'>
                            <Link to='/about'>About</Link>
                        </p>
                        <p className='list-disc hover:text-blue-600 cursor-pointer'>
                            <Link to='/contact'>Contact</Link>
                        </p>
                    </div>
                    <div className='mb-6'>
                        <h1 className='text-xl font-semibold mb-6'>Blog</h1>
                        <div className='flex gap-x-4 mb-4'>
                            <img src={blog} alt="" className='w-[90px] h-[90px]' />
                            <div>
                                <p>Our main target is to “Developing Yourself as a Leader”</p>
                                <p className='text-gray-400'> -August 9, 2018</p>
                            </div>
                        </div>
                        <div className='flex gap-x-4 mb-4'>
                            <img src={blog2} alt="" className='w-[90px] h-[90px]' />
                            <div>
                                <p>Those Other College Expenses You Aren`t Thinking About</p>
                                <p className='text-gray-400'> -June 3, 2015</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mb-4 text-gray-400">
                <img src={copyRight} alt="" />
                <p> 2022 masterstudy education.</p>
            </div>

        </div>
    );
};

export default Footer;