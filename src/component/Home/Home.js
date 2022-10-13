import { useEffect, useRef, useState } from "react";
import Course from "../Course/Course";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";


const featuredImages = [
    "/image/slider.jpg",
    "/image/slider2.jpg",
    "/image/slider3.jpg"
];
let count = 0;
const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef();
    useEffect(() => {
        startSlider();
        sliderRef.current.addEventListener("animationend", removeAnimation);
    }, []);
    const startSlider = () => {
        setInterval(() => {
            // handleOnNextClick();
        }, 3000);
    }
    const removeAnimation = () => {
        sliderRef.current.classList.remove("fade-anim");
    }
    // setInterval(() => {
    //     sliderRef.current.addEventListener("animationend", removeAnimation);
    //     handleOnNextClick();
    // }, 3000);



    const handleOnNextClick = () => {
        count = (currentIndex + 1) % featuredImages.length;
        setCurrentIndex(count);
        sliderRef.current.classList.add("fade-anim");
    };
    const handleOnPrevClick = () => {
        const productsLength = featuredImages.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
        sliderRef.current.classList.add("fade-anim");
    };
    // console.log(sliderRef)
    return (
        <div className="max-w-screen-xl m-auto">
            <div ref={sliderRef} className="w-full relative animationend select-none">
                <div className="aspect-w-16 aspect-h-9">
                    <img src={featuredImages[currentIndex]} alt="" />
                </div>

                <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-center px-3">
                    <button
                        className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition" onClick={handleOnPrevClick}>
                        <AiOutlineVerticalRight size={40} />
                    </button>
                    <button
                        className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition" onClick={handleOnNextClick}>
                        <AiOutlineVerticalLeft size={40} />
                    </button>
                </div>
            </div>
            <Course />
        </div>
    );
};

export default Home;