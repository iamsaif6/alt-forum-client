import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoGrid } from 'react-icons/io5';
import { FaSquare } from 'react-icons/fa';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { CiGrid2H } from 'react-icons/ci';

const Queries = () => {
  const [queries, setQueries] = useState(null);
  const [grid, setGrid] = useState('grid-cols-3');

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/allqueries`).then(res => {
      console.log(res.data);
      setQueries(res.data);
    });
  }, []);

  return (
    <div className="max-w-7xl px-4 mx-auto">
      <div className="flex justify-end mt-[70px] items-center gap-7">
        <h2>Change Layout</h2>
        <div className="flex items-center gap-3">
          <button onClick={() => setGrid('grid-cols-1')} className="btn">
            <FaSquare />
          </button>
          <button onClick={() => setGrid('grid-cols-2')} className="btn">
            <IoGrid />
          </button>
          <button onClick={() => setGrid('grid-cols-3')} className="btn lg:block hidden">
            <BsFillGrid3X3GapFill />
          </button>
        </div>
      </div>

      <div className={`grid my-[70px] ${grid} gap-7`}>
        {queries &&
          queries.map(query => (
            <div className="border flex flex-col justify-between rounded-lg py-6 px-6" key={query._id}>
              <img className="object-cover rounded-lg w-full h-[200px]" src={query.productIMG} alt={query.productName} />
              <div>
                <h3 className="mt-6 mb-3 text-[20px] font-semibold">{query.queryTitle}</h3>
                <div className="space-y-2">
                  <p>
                    Name : <span className="font-semibold">{query.productName}</span>
                  </p>
                  <p>
                    Brand : <span className="font-semibold">{query.productBrand}</span>
                  </p>
                  <p className="py-4">
                    <span className="font-semibold">Alternation Reason :</span> <span className="text-[14px]">{query.reason}</span>
                  </p>
                  <p>
                    Posted On : <span className=" font-mono">{query.post_date}</span> |{' '}
                    <span className=" font-mono">{query.post_time}</span>
                  </p>
                  <p className="pt-5">
                    Total Recommened : <span className="font-semibold">{query.recommendationCount}</span>
                  </p>
                </div>
              </div>
              <div className="flex mt-auto align-bottom items-center gap-5 py-4">
                <h3>
                  Posted By : <span className="font-semibold">{query.user_name}</span>
                </h3>
                <img className=" w-10 h-10 rounded-full" src={query.user_photo} alt="" />
              </div>
              <div>
                <Link to={`/myqueries/${query._id}`}>
                  <button className="bg-yellow w-full mt-3 font-semibold py-2 px-2 rounded-md">Recommend</button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Queries;
