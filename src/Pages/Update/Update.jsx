import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
  const [post, setPost] = useState(null);
  const param = useParams();
  const id = param.id;

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/myqueries/${id}`).then(res => {
      console.log(res.data);
      setPost(res.data);
    });
  }, []);

  //handle Update

  const handleUpdate = e => {
    e.preventDefault();
    const form = e.target;
    const productName = form.product_name.value;
    const productBrand = form.product_brand.value;
    const productIMG = form.product_img.value;
    const queryTitle = form.query_title.value;
    const reason = form.reason.value;

    const queryDetails = {
      productName,
      productBrand,
      productIMG,
      queryTitle,
      reason,
    };

    //Patch to server
    axios.patch(`${import.meta.env.VITE_API_URL}/myqueries/${id}`, queryDetails).then(res => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: 'Updated!',
          icon: 'success',
        });
      } else if (res.data.modifiedCount === 0) {
        Swal.fire({
          title: 'Not Updated!',
          text: 'Please Make Changes',
          icon: 'warning',
        });
      }
    });
  };

  return (
    <div className="max-w-7xl px-4 mx-auto">
      {post && (
        <div className="grid grid-cols-5 py-[80px] items-center gap-10">
          <div className="col-span-2 align-baseline">
            <div>
              <h3 className="text-[24px] font-bold mb-7  text-center">Query Preview</h3>
              <div className="border rounded-lg py-6 px-6" key={post._id}>
                <img className="object-cover rounded-lg w-full h-[200px]" src={post.productIMG} alt="" />
                <h3 className="mt-6 mb-3 text-[20px] font-semibold">{post.postTitle}</h3>
                <div className="space-y-2">
                  <p>
                    Name : <span className="font-semibold">{post.productName}</span>
                  </p>
                  <p>
                    Brand : <span className="font-semibold">{post.productBrand}</span>
                  </p>
                  <p>
                    Total Recommened : <span className="font-semibold">{post.recommendationCount}</span>
                  </p>
                  <p>
                    Post Date : <span className=" font-mono">{post.post_date}</span> | <span className=" font-mono">{post.post_time}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <h2 className="text-[22px] mb-7 font-bold text-center">Update Query For {post.productName}</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <label className="text-[14px] font-semibold opacity-60 block" htmlFor="product_name">
                Product Name
                <input
                  required
                  name="product_name"
                  id="product_name"
                  className="border mt-2 rounded-md py-3 px-6 border-[#F5CE5E] w-full"
                  type="text"
                  defaultValue={post.productName}
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
                  defaultValue={post.productBrand}
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
                  defaultValue={post.productIMG}
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
                  defaultValue={post.queryTitle}
                />
              </label>
              <label className="text-[14px] font-semibold opacity-60 block" htmlFor="reason">
                Boycotting Reason
                <textarea
                  rows={5}
                  required
                  name="reason"
                  id="reason"
                  className="border mt-2 rounded-md py-3 px-6 border-[#F5CE5E] w-full"
                  type="text"
                  placeholder="Boycotting Reason Details"
                  defaultValue={post.reason}
                />
              </label>
              <button
                className=" hover:bg-[#222] hover:text-white mb-3 lg:mb-0 transition-all bg-yellow text-dark py-3 font-semibold w-full px-11 rounded-md"
                type="submit"
              >
                Update Query
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Update;
