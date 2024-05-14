import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Routes/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyRecommendations = () => {
  const { user } = useContext(AuthContext);
  const [myRecommendation, setMyRecommendation] = useState(null);

  //Load Recommendation Data by Email
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/recommendation?email=${user.email}`).then(res => {
      setMyRecommendation(res.data);
    });
  }, [user]);

  const handleDeleteBtn = (id, query_id) => {
    console.log(id);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        //Delete Clicked Recommendation
        axios.delete(`${import.meta.env.VITE_API_URL}/recommend/${id}`).then(res => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your Recommendation has been deleted.',
              icon: 'success',
            });
            //Update UI
            const newRecommend = myRecommendation.filter(rec => rec._id !== id);
            setMyRecommendation(newRecommend);
            //Decreament The Total Recommendation Count on Original Post
            return axios.patch(`${import.meta.env.VITE_API_URL}/updaterecommend2/${query_id}`).then(res => {
              console.log(res.data);
            });
          }
        });
      }
    });
  };

  return (
    <div className="max-w-7xl px-4 mx-auto py-[80px]">
      <div>
        <h1 className="text-[30px] text-center font-bold mb-12">Recommendation Made By Me</h1>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Recommended Details</th>
                  <th>Query Details</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 3 */}
                {myRecommendation &&
                  myRecommendation.map(rec => (
                    <tr key={rec?.query_id}>
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
                        {rec?.query_title}
                        <br />
                        <span className="badge badge-ghost badge-sm">{rec?.productName}</span>
                      </td>
                      <td>{rec?.currnetDate}</td>
                      <th>
                        <button onClick={() => handleDeleteBtn(rec._id, rec.query_id)} className="btn btn-squire btn-sm btn-outline">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </th>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRecommendations;
