import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Routes/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import Lottie from 'lottie-react';
import noQuery from '../../assets/noQuery.json';
import { Helmet } from 'react-helmet';

const MyQueries = () => {
  const { user } = useContext(AuthContext);
  const [queries, setQueries] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/myqueries?email=${user.email}`).then(res => {
      console.log(res.data);
      setQueries(res.data);
    });
  }, [user]);

  //Handle Delete Button
  const handleDelete = _id => {
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
        axios.delete(`${import.meta.env.VITE_API_URL}/myqueries/${_id}`).then(res => {
          if (res.data.deletedCount > 0) {
            const updatedQueries = queries.filter(query => query._id !== _id);
            setQueries(updatedQueries);
            Swal.fire({
              title: 'Deleted!',
              text: 'Your Query has been deleted.',
              icon: 'success',
            });
          }
        });
      }
    });
  };

  return (
    <div className="mb-[120px]">
      <Helmet>
        <title>My Queries</title>
      </Helmet>
      <div className="h-[350px] bg-cover flex flex-col items-center justify-center bg-no-repeat bg-top bg-[url('https://i.ibb.co/zPVSHRW/vecteezy-portrait-of-an-excited-beautiful-girl-wearing-dress-and-16264237-copy.jpg')]">
        <div className="text-center h-full px-4  flex flex-col justify-center w-full">
          <h1 className="md:text-[40px] text-[30px] font-extrabold">Submit Your Query</h1>
          <p className="max-w-[600px] text-[12px] md:text-[16px] mt-1 mb-6 text-center mx-auto">
            Have a product in mind, but seeking better alternatives? Heres where you can voice your query! Fill out the form with details
            about the product, your inquiry, and any specific reasons for seeking alternatives.{' '}
          </p>
          <Link to="/addqueries">
            <button className="bg-[#000] text-white rounded font-semibold py-3 px-8">Add Queries</button>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl px-4 mx-auto my-16">
        <h1 className="md:text-[35px] text-[25px] mb-9 font-extrabold text-center">My Qreries</h1>
        {queries && queries.length < 1 ? (
          <div className="flex items-center flex-col justify-center">
            <Lottie className="max-w-[200px]" animationData={noQuery} loop={true} />
            <h1 className="md:text-[30px] text-[20px] font-bold mt-5  text-center">No Query Found</h1>
            <Link to="/addqueries">
              <button className="bg-[#000] text-white mt-5 rounded font-semibold py-3 px-8">Add Query Now</button>
            </Link>
          </div>
        ) : (
          ''
        )}
        <div className="grid grid-cols-3 gap-7">
          {queries &&
            queries.map(query => (
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                className="border flex flex-col justify-between rounded-lg py-6 px-6"
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
                    <p>
                      Total Recommened : <span className="font-semibold">{query.recommendationCount}</span>
                    </p>
                    <p>
                      Post Date : <span className=" font-mono">{query.post_date}</span> |{' '}
                      <span className=" font-mono">{query.post_time}</span>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mt-6 gap-3 justify-between">
                    <Link className="w-full bg-yellow  text-center font-semibold py-2 px-2 rounded-md" to={`/update/${query._id}`}>
                      <button>Update</button>
                    </Link>
                    <button onClick={() => handleDelete(query._id)} className="bg-yellow w-full font-semibold py-2 px-2 rounded-md">
                      Delete
                    </button>
                  </div>
                  <Link to={`/myqueries/${query._id}`}>
                    <button className="bg-yellow w-full mt-3 font-semibold py-2 px-2 rounded-md">View Details</button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MyQueries;
