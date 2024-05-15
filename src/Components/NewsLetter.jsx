const NewsLetter = () => {
  return (
    <div className="grid grid-cols-2 items-center gap-12">
      <div>
        <img className="w-full max-w-[450px]" src="https://i.ibb.co/ZTHnzM4/Mailchimp.png" alt="" />
      </div>
      <div>
        <h2 data-aos="fade-up" data-aos-duration="500" className="text-[30px] mb-3  font-bold">
          Stay Informed, Stay Sustainable!
        </h2>
        <p data-aos="fade-up" data-aos-duration="700" className="text-[16px] text-[#888]">
          Subscribe to our newsletter for the latest eco-friendly tips, product recommendations, and exclusive offers delivered straight to
          your inbox. Join our community of environmentally conscious individuals committed to making a positive impact on the planet.
        </p>
        <form data-aos="fade-up" data-aos-duration="800" className="max-w-[500px] mt-6 relative">
          <input
            className="border outline-none focus:border-yellow rounded-full w-full  py-5 px-6"
            type="email"
            placeholder="Enter Email"
          />
          <button className="bg-yellow absolute top-1/2 right-2 text-dark font-bold py-4 -translate-y-1/2 px-9 rounded-full" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
