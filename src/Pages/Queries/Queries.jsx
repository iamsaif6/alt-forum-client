import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoGrid } from 'react-icons/io5';
import { FaSquare } from 'react-icons/fa';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';
import Loved from '../../Components/Shared/Loved';

const Queries = () => {
  AOS.init();
  const [queries, setQueries] = useState(null);
  const [grid, setGrid] = useState('grid-cols-3');
  const [search, setSearch] = useState('');

  const handleSearch = e => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearch(text);
  };

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/allqueries?search=${search}`, { withCredentials: true }).then(res => {
      setQueries(res.data);
    });
  }, [search]);

  return (
    <div className="max-w-7xl px-4 mx-auto">
      <Helmet>
        <title>Queries</title>
      </Helmet>
      <div className="mt-14  max-w-[500px] mx-auto">
        <form onSubmit={handleSearch}>
          <div className="flex gap-1 justify-center">
            <label className=" ">
              <input
                name="search"
                type="text"
                className="w-full md:w-[350px] transition-all  border py-3 px-5 rounded-lg outline-none"
                placeholder="Search by Product Name"
              />
            </label>
            <button className="bg-yellow hover:bg-[#333] hover:text-white font-medium text-[14px] py-2 px-4 rounded-lg">Search</button>
          </div>
        </form>
      </div>
      <div className=" hidden md:flex justify-end mt-[40px] items-center gap-7">
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

      <div className={`grid my-[70px] grid-cols-1 md:${grid} lg:${grid} gap-7`}>
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
                </div>
              </div>
              <p className="pt-5 mt-auto">
                Total Recommened : <span className="font-semibold">{query.recommendationCount}</span>
              </p>
              <div className="flex justify-between align-bottom items-center gap-5 py-4">
                <div className="flex items-center gap-2">
                  <h3>
                    Posted By : <span className="font-semibold">{query.user_name}</span>
                  </h3>
                  <img className=" w-10 h-10 object-cover rounded-full" src={query.user_photo} alt="" />
                </div>
                <Loved id={query._id}></Loved>
              </div>
              <div>
                <Link to={`/myqueries/${query._id}`}>
                  <button className="bg-yellow w-full hover:bg-[#333] hover:text-white mt-3 font-semibold py-2 px-2 rounded-md">
                    Recommend
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Queries;
