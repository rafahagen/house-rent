import React from 'react';
import { Link } from 'react-router-dom';
import facebook from './../../image/icon/icons8-facebook-50.svg';
import twitter from './../../image/icon/icons8-twitter-50.svg';
import gmail from './../../image/icon/icons8-gmail-logo-50.svg';
import instragram from './../../image/icon/icons8-instagram-50.svg'

const Footer = () => {
    return (
        <div>
            <div className='flex justify-center items-center pt-2 '>
                <a href="https://www.bdjobs.com/" className="shrink-0 h-16 w-32 text-xl hover:text-blue-400	" target="_blank">Jobs</a>
                <Link className="shrink-0 h-16 w-32 text-xl hover:text-blue-100" to="/about">About</Link>
                <Link className="shrink-0 h-16 w-32 text-xl hover:text-blue-100" to="/contact">Contact</Link>
            </div>
            <div className='flex items-center justify-center'>
                <a href="https://www.facebook.com/mostak.shahariyar.0823" target="_blank" className="shrink-0 h-16 w-32 text-xl">
                    <img src={facebook} alt="facebook" />
                </a>
                <a href="https://twitter.com/Mostak0805" target="_blank" className="shrink-0 h-16 w-32 text-xl ">
                    <img src={twitter} alt="twitter" />
                </a>
                <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" className="shrink-0 h-16 w-32 text-xl ">
                    <img src={gmail} alt="gmail" />
                </a>
                <a href="https://www.instagram.com/mostakshahariyar18/" target="_blank" className="shrink-0 h-16 w-32 text-xl ">
                    <img src={instragram} alt="instragram" />
                </a>
            </div>
        </div>
    );
};

export default Footer; <div>
    <a href="https://www.bdjobs.com/"></a></div>