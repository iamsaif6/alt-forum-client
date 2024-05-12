import { Link } from 'react-router-dom';
import logo2 from '../../assets/logo2.png';

const Footer = () => {
  return (
    <div className="py-[80px] px-4 mt-[80px] border-[#444] relative border-t-[1px] bg-[#222]">
      <form className="absolute px-4 w-full -translate-y-1/2 top-0 left-1/2 -translate-x-1/2">
        <div className="relative w-full max-w-[500px] mx-auto">
          <input
            className="py-5 focus:outline-none w-full px-8 rounded-full border-yellow border"
            placeholder="Enter Email Address"
            type="email"
          />
          <button
            type="submit"
            className=" hover:bg-[#222] hover:text-white mb-3 lg:mb-0 transition-all bg-yellow text-dark py-3 font-semibold  px-11 absolute right-3 top-1/2 -translate-y-1/2  rounded-3xl"
          >
            Subscribe
          </button>
        </div>
      </form>
      <div className="grid grid-cols-5 max-w-7xl mx-auto">
        <div className="col-span-3 flex flex-col items-baseline">
          <Link className="btn-ghost text-xl mb-5 flex items-center justify-start gap-3">
            <img className="lg:max-w-[30px] max-w-[20px]" src={logo2} alt="" />
            <span className="text-[16px] text-white">Alt-Forum</span>
          </Link>
          <p className="text-white text-[13px] opacity-60 max-w-[500px] leading-6">
            Alt-Forum is more than just a platform; its a community-driven hub where individuals come together to discover, discuss, and
            share alternative products. Whether you are searching for eco-friendly alternatives, budget-friendly options, or simply want to
            explore different brands, Alt-Forum has you covered.
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
