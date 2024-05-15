// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../Components/Showcase.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Showcase = () => {
  return (
    <div className="grid py-[30px] md:mb-6 mb-[10px] grid-cols-1 md:grid-cols-6 gap-12 items-center">
      <div className="lg:col-span-4 md:order-1 order-2 md:col-span-3">
        <div className="max-w-[700px] text-center md:text-left">
          <h3 data-aos="fade-up" data-aos-duration="400" className="md:text-[30px] text-[25px] mb-3  font-bold">
            Explore Our Eco-Friendly <br /> Alternatives Showcase
          </h3>
          <p>
            Discover a curated collection of environmentally conscious alternatives that align with your values and lifestyle. From
            sustainable household products to eco-friendly personal care essentials, our showcase highlights innovative brands committed to
            reducing their environmental footprint.
          </p>
          <Link to="/queries">
            <button
              data-aos="fade-up"
              data-aos-duration="700"
              className="py-3 px-7 bg-yellow hover:bg-[#333] hover:text-white self-start font-bold rounded-lg mt-5"
            >
              Explore All Queries
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:col-span-2 md:order-2 order-1 md:col-span-3 showcase">
        <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
          <SwiperSlide>
            <img className="w-full h-full object-cover" src="https://i.ibb.co/59qJCh3/14331.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co/9ZkDxps/vecteezy-woman-traveler-with-suitcase-holding-passport-and-ticket-in-3823488.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co/fGtwnc7/vecteezy-traveler-girl-in-a-blue-dress-is-smiling-happy-with-a-3823494-copy.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src="https://i.ibb.co/b25x5kB/Buying-process.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src="https://i.ibb.co/NjvRxNz/154749-1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src="https://i.ibb.co/DCCmTtX/139762-copy.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src="https://i.ibb.co/hCs8Z6M/model1-copy.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Showcase;
