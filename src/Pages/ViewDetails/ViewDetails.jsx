import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {
  const param = useParams();
  const id = param.id;

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/myqueries/${id}`).then(res => {
      console.log(res.data);
    });
  }, [id]);

  return (
    <div>
      <h2 className="text-[50px] text-black">View Details</h2>
    </div>
  );
};

export default ViewDetails;
