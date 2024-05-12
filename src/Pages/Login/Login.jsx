import { useState } from 'react';
import loginIMG from '../../assets/login.png';
import { FaEnvelope, FaEye, FaGoogle, FaFacebookF, FaGithub, FaEyeSlash } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Login = () => {
  const [showPass, setShowPass] = useState(true);

  return (
    <div className="grid md:grid-cols-5 my-9 max-w-7xl mx-auto px-4">
      <div data-aos="fade-up" data-aos-duration="1000" className="md:col-span-2 md:text-center">
        <img className="w-[200px] md:w-auto mx-auto" src={loginIMG} alt="" />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" className="md:col-span-3 flex items-center justify-center flex-col">
        <h1 className="text-[40px] font-semibold mb-5">Login Now </h1>
        <form className="max-w-[500px] w-full px-6 space-y-6">
          <div className="relative">
            <input required className="border rounded-md py-3 px-6 pl-12 border-[#F5CE5E] w-full" type="email" placeholder="Email" />

            <FaEnvelope className="absolute text-yellow top-1/2 left-5 -translate-y-1/2" />
          </div>
          <div className="relative">
            <input
              required
              className="border rounded-md py-3 px-6 pl-12
             border-[#F5CE5E] w-full"
              type={showPass ? 'password' : 'text'}
              placeholder="Password"
            />
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute cursor-pointer right-3 top-1/2 text-yellow text-[18px] -translate-y-1/2"
            >
              {showPass ? <FaEye /> : <FaEyeSlash />}
            </span>

            <RiLockPasswordFill className="absolute text-yellow top-1/2 left-5 -translate-y-1/2" />
          </div>
          <div>
            <button
              type="submit"
              className=" hover:bg-[#222] hover:text-white mb-3 lg:mb-0 transition-all bg-yellow text-dark py-3 font-semibold w-full px-11 rounded-md"
            >
              Login
            </button>
          </div>
        </form>
        <div className="relative my-8 w-full  text-center">
          <span className="relative w-full">
            or
            <span className="absolute w-[100px] md:w-[150px] h-[2px] right-8 top-1/2 -translate-y-1/2 bg-yellow"></span>
            <span className="absolute w-[100px] md:w-[150px] h-[2px] left-8 top-1/2 -translate-y-1/2 bg-yellow"></span>
          </span>
        </div>
        <div className="text-yellow text-[20px] space-x-4">
          <button className="border-yellow hover:bg-[#333] hover:border-[#333] hover:text-white p-2 border-[2px] rounded-lg">
            <FaGoogle />
          </button>
          <button className="border-yellow hover:bg-[#333] hover:border-[#333] hover:text-white p-2 border-[2px] rounded-lg">
            <FaGithub />
          </button>
          <button className="border-yellow hover:bg-[#333] hover:border-[#333] hover:text-white p-2 border-[2px] rounded-lg">
            <FaFacebookF />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
