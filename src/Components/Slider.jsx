import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import photos for slider
import banner1 from '../../src/assets/banner1.png';
import banner2 from '../../src/assets/banner2.png';
import banner3 from '../../src/assets/banner3.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Components/Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Fade } from 'react-awesome-reveal';

export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  //   const onAutoplayTimeLeft = (s, time, progress) => {
  //     progressCircle.current.style.setProperty('--progress', 1 - progress);
  //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  //   };
  return (
    <>
      <div className="">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          // onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <div className="grid w-4/5 mx-auto grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h1 className="text-[65px] leading-[80px] font-extrabold">Discover Better Options</h1>
                  <p>Explore alternative products recommended by our community for a sustainable and mindful lifestyle.</p>
                  <button className=" bg-yellow text-dark py-3 font-semibold mt-5 px-11 rounded-md">Learn More</button>
                </div>
                <div className="flex items-center justify-end">
                  <img className="max-w-[600px]" src={banner1} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
}
