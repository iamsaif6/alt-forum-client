import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Components/Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <div className="">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          style={{
            '--swiper-navigation-size': '45px',
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop:true
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-[url('https://i.ibb.co/4jCftWT/vecteezy-portrait-of-an-excited-young-blonde-girl-pointing-with-hand-3823499-copy.jpg')] flex items-center h-[600px] w-full bg-cover bg-top">
              <div className="w-4/5 mx-auto  my-7 ">
                <div className="text-center  max-w-[700px] lg:text-left">
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="600"
                    className="lg:text-[65px] text-white text-[35px] lg:leading-[80px] font-extrabold"
                  >
                    Innovation Discover Better Options
                  </h1>

                  <p className="mt-2 text-white">
                    Explore alternative products recommended by our community for a sustainable and mindful lifestyle.
                  </p>
                  <button className=" hover:bg-[#222] hover:text-white mb-3 lg:mb-0 transition-all bg-[#333] text-white py-3 font-semibold mt-5 px-11 rounded-md">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('https://i.ibb.co/NjvRxNz/154749-1.jpg')] flex items-center h-[600px] w-full bg-cover bg-top">
              <div className="w-4/5 mx-auto  my-7 ">
                <div className="text-center  max-w-[700px] lg:text-left">
                  <h1 className="lg:text-[65px] text-white text-[35px] lg:leading-[80px] font-extrabold">Upgrade Your Choices</h1>

                  <p className="mt-2 text-white">
                    Find better alternatives to your favorite products, tailored to your needs and preferences .
                  </p>
                  <button className=" hover:bg-[#222] hover:text-white mb-3 lg:mb-0 transition-all bg-yellow text-dark py-3 font-semibold mt-5 px-11 rounded-md">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('https://i.ibb.co/dWV6vV8/14331-copy.jpg')] flex items-center h-[600px] w-full bg-cover bg-top">
              <div className="w-4/5 mx-auto  my-7 ">
                <div className="text-center  max-w-[700px] lg:text-left">
                  <h1 className="lg:text-[65px] text-white text-[35px] lg:leading-[80px] font-extrabold">Innovation Beyond Boundaries</h1>

                  <p className="mt-2 text-white">
                    Join the conversation on Alt-Forum and unlock a world of innovative alternatives for a brighter tomorrow.
                  </p>
                  <button className=" hover:bg-[#222] hover:text-white mb-3 lg:mb-0 transition-all bg-yellow text-dark py-3 font-semibold mt-5 px-11 rounded-md">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle className="  stroke-[#f5ce5e]" cx="24" cy="24" r="20"></circle>
            </svg>
            <span className="text-[#f5ce5e]" ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
}
