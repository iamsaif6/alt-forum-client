import { Link } from 'react-router-dom';
import Slider from '../../Components/Slider';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Showcase from '../../Components/Showcase';
import NewsLetter from '../../Components/NewsLetter';
import { Helmet } from 'react-helmet';

const Home = () => {
  const [recentQuery, setRecentQuery] = useState();
  AOS.init();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/allqueries`).then(res => {
      const data = res.data;
      const splitData = data.splice(0, 6);
      setRecentQuery(splitData);
    });
  }, []);

  return (
    <>
      <Slider></Slider>
      <div className="my-[90px] max-w-7xl mx-auto px-4">
        <Helmet>
          <title>Home | Alt-Forum</title>
        </Helmet>
        <h2 className="text-[30px] mb-9 text-center font-bold">Explore Product Alternatives</h2>
        <div className="h-[300px] px-12 py-7 rounded-xl bg-[url('https://i.ibb.co/hCs8Z6M/model1-copy.jpg')] bg-no-repeat bg-cover bg-top">
          <div className="max-w-[600px] flex  justify-center flex-col h-full">
            <p data-aos="fade-up" data-aos-duration="600" className="text-white text-[15px]">
              Discover a vast array of product queries and recommendations tailored to help you find the perfect alternatives. Whether you
              are looking for better quality, lower prices, or unique features, our community-driven platform provides insights and
              suggestions from real users.
            </p>
            <Link to="/queries">
              <button data-aos="fade-up" data-aos-duration="700" className="py-3 px-7 bg-yellow self-start font-bold rounded-lg mt-5">
                Explore All Queries
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" max-w-7xl mx-auto px-4">
        <h2 data-aos="fade-up" data-aos-duration="400" className="text-[30px] mb-3 text-center font-bold">
          Recent Queries
        </h2>
        <p data-aos="fade-up" data-aos-duration="600" className="max-w-[650px] mx-auto text-center">
          Stay up-to-date with the latest product queries and find the best alternatives quickly. See what other users are asking about and
          discover new recommendations and insights.
        </p>
        <div className={`grid my-[70px] grid-cols-3 gap-7`}>
          {recentQuery &&
            recentQuery.map(query => (
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                className="border  flex flex-col justify-between rounded-lg py-6 px-6"
                key={query._id}
              >
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
                <div className="flex  align-bottom items-center gap-5 py-4">
                  <h3>
                    Posted By : <span className="font-semibold">{query.user_name}</span>
                  </h3>
                  <img className=" w-10 h-10 object-cover rounded-full" src={query.user_photo} alt="" />
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
      <div className="max-w-7xl mx-auto px-4">
        <Showcase></Showcase>
        <NewsLetter></NewsLetter>
      </div>
    </>
  );
};

export default Home;
