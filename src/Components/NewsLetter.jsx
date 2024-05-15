const NewsLetter = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-12">
      <div>
        <img className="md:w-full w-[300px]  mx-auto md:mr-auto max-w-[450px]" src="https://i.ibb.co/ZTHnzM4/Mailchimp.png" alt="" />
      </div>
      <div className="text-center md:text-left">
        <h2 data-aos="fade-up" data-aos-duration="500" className="text-[30px] mb-3  font-bold">
          Stay Informed, Stay Sustainable!
        </h2>
        <p data-aos="fade-up" data-aos-duration="700" className="text-[16px] text-[#888]">
          Subscribe to our newsletter for the latest eco-friendly tips, product recommendations, and exclusive offers delivered straight to
          your inbox. Join our community of environmentally conscious individuals committed to making a positive impact on the planet.
        </p>
        <form data-aos="fade-up" data-aos-duration="800" className="max-w-[500px] mx-auto md:mr-auto mt-6 relative">
          <input
            className="border outline-none focus:border-yellow rounded-full w-full py-3  md:py-5 px-6"
            type="email"
            placeholder="Enter Email"
          />
          <button
            type="submit"
            className=" hover:bg-[#222] hover:text-white mb-3 lg:mb-0 transition-all bg-yellow text-dark py-2 md:py-3 font-semibold px-5  md:px-11 absolute right-3 top-1/2 -translate-y-1/2  rounded-3xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
