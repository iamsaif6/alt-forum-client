import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Routes/AuthProvider';

const RecommendationsForME = () => {
  const { user } = useContext(AuthContext);
  const [recommendForMe, setRecommendForMe] = useState();

  //Load Recommendation Data by Email
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/recommendation2?email=${user.email}`).then(res => {
      setRecommendForMe(res.data);
    });
  }, [user]);

  console.log(recommendForMe);

  return (
    <div>
      <div className="max-w-7xl px-4 mx-auto py-[80px]">
        <div>
          <h1 className="text-[30px] text-center font-bold mb-12">Recommendation For Me</h1>
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Your Queries</th>
                    <th>Recommendation</th>
                    <th>Recommender</th>
                    <th>Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 3 */}
                  {recommendForMe &&
                    recommendForMe.map(rec => (
                      <tr data-aos="fade-up" data-aos-duration="700" key={rec?.query_id}>
                        <td>
                          <span className="font-bold">{rec?.query_title}</span>
                          <br />
                          <span className="badge badge-ghost badge-sm">{rec?.productName}</span>
                        </td>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src={rec?.recommendation_img} alt="Avatar Tailwind CSS Component" />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">{rec?.recommendation_title}</div>
                              <div className="text-[13px] opacity-50">{rec?.recommendation_name}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src={rec?.recommender_photo} alt="Avatar Tailwind CSS Component" />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">{rec?.recommender_name}</div>
                            </div>
                          </div>
                        </td>
                        <td>{rec?.currnetDate}</td>
                        <th></th>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationsForME;
