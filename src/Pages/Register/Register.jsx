import { useState } from 'react';
import loginIMG from '../../assets/login.png';
import { FaEnvelope, FaEye, FaUser, FaEyeSlash } from 'react-icons/fa';
import { MdInsertPhoto } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import toast from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
AOS.init();

const notify = () => toast.success('Here is your toast.');

const Register = () => {
  const [showPass, setShowPass] = useState(true);

  //   Register
  const handelRegister = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <div className="grid md:grid-cols-5 my-9 max-w-7xl mx-auto px-4">
      <div data-aos="fade-up" data-aos-duration="1000" className="md:col-span-2 md:text-center">
        <img className="w-[200px] md:w-auto mx-auto" src={loginIMG} alt="" />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" className="md:col-span-3 flex items-center justify-center flex-col">
        <h1 className="text-[40px] font-semibold mb-5">Register Now </h1>
        <form onSubmit={handelRegister} className="max-w-[500px] w-full px-6 space-y-6">
          <div className="relative">
            <input
              required
              name="name"
              className="border rounded-md py-3 px-6 pl-12 border-[#F5CE5E] w-full"
              type="text"
              placeholder="Name"
            />

            <FaUser className="absolute text-yellow top-1/2 left-5 -translate-y-1/2" />
          </div>
          <div className="relative">
            <input
              required
              name="email"
              className="border rounded-md py-3 px-6 pl-12 border-[#F5CE5E] w-full"
              type="email"
              placeholder="Email"
            />
            <FaEnvelope className="absolute text-yellow top-1/2 left-5 -translate-y-1/2" />
          </div>
          <div className="relative">
            <input
              required
              name="photo"
              className="border rounded-md py-3 px-6 pl-12 border-[#F5CE5E] w-full"
              type="url"
              placeholder="Photo URL"
            />
            <MdInsertPhoto className="absolute text-yellow top-1/2 left-5 -translate-y-1/2" />
          </div>
          <div className="relative">
            <input
              required
              className="border rounded-md py-3 px-6 pl-12
           border-[#F5CE5E] w-full"
              type={showPass ? 'password' : 'text'}
              placeholder="Password"
              name="password"
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
              onClick={notify}
              type="submit"
              className=" hover:bg-[#222] hover:text-white mb-3 lg:mb-0 transition-all bg-yellow text-dark py-3 font-semibold w-full px-11 rounded-md"
            >
              Register
            </button>
          </div>
        </form>
        <div className="mt-6">
          <p className="text-right text-[13px]">
            Already Have Account ? Please{' '}
            <Link to="/login">
              <span className=" font-bold">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
