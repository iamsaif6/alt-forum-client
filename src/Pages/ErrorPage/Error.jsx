import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import error from '../../assets/404.json';

const Error = () => {
  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="max-w-[600px] mx-auto">
        <Lottie animationData={error} loop={true} />
        <div className="text-center mt-5 mb-[70px]">
          <Link>
            <button className="bg-yellow font-bold  py-3 px-8 rounded">Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
