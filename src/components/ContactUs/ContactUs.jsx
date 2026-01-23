const ContactUs = () => {
  return (
    <div>
      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-11/12 lg:w-5/6  mx-auto border-b-4 border-black"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-black text-2xl md:text-3xl lg:text-5xl font-bold">
            Contact Us
          </span>
        </div>
      </div>
      <div className="w-11/12 lg:w-5/6 mx-auto mt-20">
        <div className="flex gap-10 mt-6">
          <input
            type="text"
            placeholder="first name"
            className="input input-bordered rounded-none w-full"
          />
          <input
            type="text"
            placeholder="last name"
            className="input input-bordered rounded-none w-full"
          />
        </div>
        <div className="flex gap-10 mt-6">
          <input
            type="text"
            placeholder="your email"
            className="input input-bordered rounded-none w-full"
          />
          <input
            type="text"
            placeholder="your phone"
            className="input input-bordered rounded-none w-full"
          />
        </div>
        <div className="mt-6 ">
          <textarea
            type="text"
            placeholder="your message"
            className="input input-bordered rounded-none w-full h-60"
          />
        </div>
        <button className="btn rounded-none w-full bg-black text-white mt-6">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
