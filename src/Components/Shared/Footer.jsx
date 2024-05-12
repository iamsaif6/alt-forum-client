import { Link, NavLink } from 'react-router-dom';
import logo2 from '../../assets/logo2.png';
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaYoutube, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="pb-[50px] pt-[120px] px-4 mt-[80px] border-[#444] relative border-t-[1px] bg-[#222]">
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
      <div className="grid gap-12 md:gap-0 grid-cols-1 md:grid-cols-8 max-w-7xl mx-auto px-4 border-b pb-12 border-[#333]">
        <div className="md:col-span-4 flex flex-col items-baseline">
          <Link className="btn-ghost text-xl mb-5 flex items-center justify-start gap-3">
            <img className="lg:max-w-[30px] max-w-[20px]" src={logo2} alt="" />
            <span className="text-[16px] text-white">Alt-Forum</span>
          </Link>
          <p className="text-white text-[13px] opacity-60 max-w-[500px] leading-6">
            Alt-Forum is more than just a platform; its a community-driven hub where individuals come together to discover, discuss, and
            share alternative products. Whether you are searching for eco-friendly alternatives, budget-friendly options, or simply want to
            explore different brands, Alt-Forum has you covered.
          </p>
          <div className="flex items-center gap-2 mt-5 justify-center text-yellow text-[18px]">
            <a href="#" className="inline-block p-2 hover:bg-white hover:text-black hover:border-white rounded-md border border-yellow">
              <FaFacebookF />
            </a>
            <a href="#" className="inline-block p-2 hover:bg-white hover:text-black hover:border-white rounded-md border border-yellow">
              <FaTwitter />
            </a>
            <a href="#" className="inline-block p-2 hover:bg-white hover:text-black hover:border-white rounded-md border border-yellow">
              <FaInstagram />
            </a>
            <a href="#" className="inline-block p-2 hover:bg-white hover:text-black hover:border-white rounded-md border border-yellow">
              <FaYoutube />
            </a>
          </div>
          <div className="mt-5 flex items-center gap-7">
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow" />{' '}
              <a className="text-white opacity-80" href="tel:+990-3343">
                +990-33343
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-yellow" />{' '}
              <a className="text-white opacity-80" href="mailto:demo@mail.com">
                demo@mail.com
              </a>
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="relative">
            <h1 className="text-white text-[20px] mb-5 font-bold">Site Links</h1>
            <span className="absolute h-[2px] w-[80px] bg-white opacity-60 -bottom-2 left-0"></span>
          </div>
          <ul className="text-white opacity-70 space-y-2">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/queries">Queries</NavLink>
            </li>
            <li>
              <NavLink to="/recommendations">Recommendations For Me</NavLink>
            </li>
            <li>
              <NavLink to="/myqueries">My Queries</NavLink>
            </li>
            <li>
              <NavLink to="/myrecommendations">My Recommendations</NavLink>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <div className="relative">
            <h1 className="text-white text-[20px] mb-5 font-bold">Other Links</h1>
            <span className="absolute h-[2px] w-[80px] bg-white opacity-60 -bottom-2 left-0"></span>
          </div>
          <ul className="text-white opacity-70 space-y-2">
            <li>
              <NavLink to="/">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/">News</NavLink>
            </li>
            <li>
              <NavLink to="/">Store</NavLink>
            </li>
            <li>
              <NavLink to="/">Become Member</NavLink>
            </li>
            <li>
              <NavLink to="/">Sponsers</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-white opacity-60 text-[14px] mt-[50px] text-center">
          © 2024 Alt-Forum. All rights reserved. Join our community and discover a world of alternatives.{' '}
        </p>
      </div>
    </div>
  );
};

export default Footer;
