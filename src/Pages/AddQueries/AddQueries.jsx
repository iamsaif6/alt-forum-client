import { useContext } from 'react';
import { AuthContext } from '../../Routes/AuthProvider';
import banner1 from '../../assets/banner1.png';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddQueries = () => {
  const { user } = useContext(AuthContext);

  //Add Query
  const handleQuerySubmit = e => {
    e.preventDefault();
    const form = e.target;
    const productName = form.product_name.value;
    const productBrand = form.product_brand.value;
    const productIMG = form.product_img.value;
    const queryTitle = form.query_title.value;
    const reason = form.reason.value;

    //Get date
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const currnetDate = `${day}-${month}-${year}`;

    const queryDetails = {
      productName,
      productBrand,
      productIMG,
      queryTitle,
      reason,
      user_email: user.email,
      user_name: user.displayName,
      user_photo: user.photoURL,
      recommendationCount: 0,
      post_date: currnetDate,
    };
    console.log(queryDetails);

    axios.post(`${import.meta.env.VITE_API_URL}/addqueries`, queryDetails).then(res => {
      if (res.data.acknowledged) {
        Swal.fire({
          title: 'Great!',
          text: 'Query Added!',
          icon: 'success',
        });
        form.reset();
      }
    });
  };

  return (
    <div className="max-w-7xl px-4 mx-auto">
      <div className="grid grid-cols-2 py-[80px] items-center gap-10">
        <div>
          <img className="w-full max-w-[500px]" src={banner1} alt="" />
        </div>
        <div>
          <h2 className="text-[22px] mb-7 font-bold text-center">Add Your Own Query</h2>
          <form onSubmit={handleQuerySubmit} className="space-y-4">
            <label className="text-[14px] font-semibold opacity-60 block" htmlFor="product_name">
              Product Name
              <input
                required
                name="product_name"
                id="product_name"
                className="border mt-2 rounded-md py-3 px-6 border-[#F5CE5E] w-full"
                type="text"
                placeholder="Product Name"
              />
            </label>
            <label className="text-[14px] font-semibold opacity-60 block" htmlFor="product_brand">
              Product Brand
              <input
                required
                name="product_brand"
                id="product_brand"
                className="border mt-2 rounded-md py-3 px-6 border-[#F5CE5E] w-full"
                type="text"
                placeholder="Product Brand"
              />
            </label>
            <label className="text-[14px] font-semibold opacity-60 block" htmlFor="product_img">
              Product Image URL
              <input
                required
                name="product_img"
                id="product_img"
                className="border mt-2 rounded-md py-3 px-6 border-[#F5CE5E] w-full"
                type="url"
                placeholder="Product Image URL"
              />
            </label>
            <label className="text-[14px] font-semibold opacity-60 block" htmlFor="query_title">
              Query TItle
              <input
                required
                name="query_title"
                id="query_title"
                className="border mt-2 rounded-md py-3 px-6 border-[#F5CE5E] w-full"
                type="text"
                placeholder="Query TItle"
              />
            </label>
            <label className="text-[14px] font-semibold opacity-60 block" htmlFor="reason">
              Boycotting Reason
              <input
                required
                name="reason"
                id="reason"
                className="border mt-2 rounded-md py-3 px-6 border-[#F5CE5E] w-full"
                type="text"
                placeholder="Boycotting Reason Details"
              />
            </label>
            <button
              className=" hover:bg-[#222] hover:text-white mb-3 lg:mb-0 transition-all bg-yellow text-dark py-3 font-semibold w-full px-11 rounded-md"
              type="submit"
            >
              Add Query
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddQueries;

//acknowledged
