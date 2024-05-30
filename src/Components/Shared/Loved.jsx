import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FaCircleDown, FaCircleUp } from 'react-icons/fa6';

const Loved = ({ id }) => {
  //   const [count, setCount] = useState(0);

  const { data, refetch } = useQuery({
    queryKey: [`${id}`],
    queryFn: async () => {
      const result = await axios.get(`${import.meta.env.VITE_API_URL}/loved/${id}`);
      return result.data;
    },
  });

  //Handle Up Vote
  const handleUpvote = () => {
    axios.patch(`${import.meta.env.VITE_API_URL}/loved/${id}`).then(res => {
      if (res.data.modifiedCount > 0) {
        refetch();
      }
    });
  };

  //Handle Down Vote
  const handleDownVote = () => {
    axios.patch(`${import.meta.env.VITE_API_URL}/lovedInc/${id}`).then(res => {
      if (res.data.modifiedCount > 0) {
        refetch();
      }
    });
  };
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <button onClick={handleUpvote}>
        <FaCircleUp />
      </button>
      <p className="">{data && data.loveCount}</p>
      <button onClick={handleDownVote}>
        <FaCircleDown></FaCircleDown>
      </button>
    </div>
  );
};

export default Loved;
