
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { EffectFade } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import useCrouses from "../Hooks/Data";
import CourseList from "../Course/CourseList";


const Home = () => {
    const [crouses] = useCrouses();


    return (
        <div className="max-w-screen-xl m-auto">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                autoplay={true}
                navigation={true}
                effect="fade"
            >
                <SwiperSlide>
                    <div className="aspect-w-16 aspect-h-9">
                        <img id="slider-img" className="w-full" src="/image/slider1.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="aspect-w-16 aspect-h-9">
                        <img id="slider-img" className="w-full" src="/image/slider2.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="aspect-w-16 aspect-h-9">
                        <img id="slider-img" className="w-full" src="/image/slider3.jpg" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <CourseList crouses={crouses.slice(0, 3)} />
        </div>
    );
};

export default Home;