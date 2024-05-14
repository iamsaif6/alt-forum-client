import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../Routes/AuthProvider';
import Swal from 'sweetalert2';

const ViewDetails = () => {
  const { user } = useContext(AuthContext);
  const [details, setDetails] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const param = useParams();
  const id = param.id;

  //Load Query Recommendation
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/recommendation/${id}`).then(res => {
      setRecommendations(res.data);
    });
  }, []);

  //Load Quary Details By id
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/myqueries/${id}`).then(res => {
      setDetails(res.data);
    });
  }, [id]);

  const [reCount, setRecount] = useState(0);
  useEffect(() => {
    let count = details?.recommendationCount;
    setRecount(count);
  }, [details]);

  const handleRecommend = e => {
    e.preventDefault();

    const form = e.target;
    const recommendation_title = form.recommendation_title.value;
    const recommendation_name = form.recommendation_name.value;
    const recommendation_img = form.recommendation_img.value;
    const recommendation_reason = form.recommendation_reason.value;

    const recommendDetails = {
      recommendation_title,
      recommendation_name,
      recommendation_img,
      recommendation_reason,
      query_id: details._id,
      query_title: details.queryTitle,
      productName: details.productName,
      user_email: details.user_email,
      user_name: details.user_name,
      recommender_email: user.email,
      recommender_name: user.displayName,
      recommender_photo: user.photoURL,
      currnetDate: new Date().toLocaleDateString(),
    };

    axios.post(`${import.meta.env.VITE_API_URL}/recommend`, recommendDetails).then(res => {
      if (res.data.acknowledged) {
        //Update Recommend Cout Pot the Post
        axios.patch(`${import.meta.env.VITE_API_URL}/updaterecommend/${details._id}`).then(res => {
          if (res.data.modifiedCount > 0) {
            setRecount(reCount + 1);
            const updatedRecommendatoin = [...recommendations, recommendDetails];
            setRecommendations(updatedRecommendatoin);
          }
        });
        Swal.fire({
          title: 'Great!',
          text: 'Recommendation Added!',
          icon: 'success',
        });
        // form.reset();
      }
    });
  };

  return (
    <div className="max-w-7xl mb-[150px] my-[70px] mx-auto px-4">
      {details && (
        <div>
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-[40px] mb-10 border-b pb-6 font-semibold ">{details.queryTitle}</h2>
            <div className="flex items-center flex-wrap justify-between">
              <div className="flex items-center mb-6 gap-6">
                <p>
                  Posted By : <span className="font-bold"> {details.user_name}</span>
                </p>
                <p>|</p>
                <img className="w-9 h-9 rounded-full" src={details.user_photo} alt="" />
              </div>
              <div>
                <p className=" mb-4">
                  Posted On :
                  <span className="font-bold">
                    {details.post_date} | {details.post_time}
                  </span>
                </p>
              </div>
            </div>
            <p className="leading-8">
              <span className="font-bold"> Alternation Reason : </span>
              {details.reason}
            </p>
            <img className="mt-12 mb-10 mx-auto max-h-[400px] object-cover w-full" src={details.productIMG} alt="" />
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <p className="font-semibold">
                  Product Name : <span>{details.productName}</span>
                </p>
                <p className="text-[18px]">
                  Total Recommendation : <span className="font-bold">{reCount}</span>
                </p>
              </div>
              <p className="font-semibold">
                Product Brand : <span>{details.productBrand}</span>
              </p>
            </div>
            {/*Load all recommendation for current query */}

            <div>
              <h3 className="text-[25px] font-bold my-7 border-t pt-7">All Recommendations</h3>
            </div>
            <div>
              {recommendations &&
                recommendations.map(recommend => (
                  <div
                    className="flex items-center mb-6 gap-6 bg-[#eeeeee81] rounded-xl py-6 px-7 justify-between"
                    key={recommend.query_id}
                  >
                    <div className="w-3/4">
                      <div className="flex items-center gap-6">
                        <img
                          className="w-12 h-12 border-yellow border-[3px] p-[2px] rounded-full"
                          src={recommend.recommender_photo}
                          alt=""
                        />
                        <div>
                          <p>{recommend.recommender_name}</p>
                          <p>Recommended on : {recommend.currnetDate}</p>
                        </div>
                      </div>
                      <div>
                        <p className="mt-5 font-bold text-[20px]">
                          {recommend.recommendation_title} | {recommend.recommendation_name}
                        </p>
                        <p></p>
                      </div>
                      <p className="mt-5 leading-7">{recommend.recommendation_reason}</p>
                    </div>
                    <div className="w-1/4  rounded-xl overflow-hidden">
                      <img className="w-full max-w-[200px]" src={recommend.recommendation_img} alt="" />
                    </div>
                  </div>
                ))}
            </div>

            {/* Recommend FORM */}
            <div>
              <h2 className="text-[25px] font-bold my-7 border-t pt-7">Recommend Alternative</h2>
              <form onSubmit={handleRecommend} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <label className="text-[14px] font-semibold opacity-60 block" htmlFor="recommendation_title">
                    Title
                    <input
                      required
                      name="recommendation_title"
                      id="recommendation_title"
                      className="border mt-2 rounded-md py-3 px-6 border-[#F5CE5E] w-full"
                      type="text"
                      placeholder="Recommend Title"
                    />
                  </label>
                  <label className="text-[14px] font-semibold opacity-60 block" htmlFor="recommendation_name">
                    Product Name
                    <input
                      required
                      name="recommendation_name"
                      id="recommendation_name"
                      className="border mt-2 rounded-md py-3 px-6 border-[#F5CE5E] w-full"
                      type="text"
                      placeholder="Recommend Product Name"
                    />
                  </label>
                </div>
                <label className="text-[14px] font-semibold opacity-60 block" htmlFor="recommendation_img">
                  Image URL
                  <input
                    required
                    name="recommendation_img"
                    id="recommendation_img"
                    className="border mt-2 rounded-md py-3 px-6 border-[#F5CE5E] w-full"
                    type="url"
                    placeholder="Recommend Image URL"
                  />
                </label>
                <label className="text-[14px] font-semibold opacity-60 block" htmlFor="recommendation_reason">
                  Reason
                  <textarea
                    rows={4}
                    required
                    name="recommendation_reason"
                    id="recommendation_reason"
                    className="border mt-2 rounded-md py-3 px-6 border-[#F5CE5E] w-full"
                    type="text"
                    placeholder="Recommend Reason"
                  />
                </label>
                <button
                  className=" hover:bg-[#222] hover:text-white mb-3 lg:mb-0 transition-all bg-yellow text-dark py-3 font-semibold px-11 rounded-md"
                  type="submit"
                >
                  Add Recommendation
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewDetails;
