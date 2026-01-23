const Error = () => {
  return (
    <div className="w-11/12 lg:w-5/6 mx-auto h-[100vh]  flex items-center">
      <div
        role="alert"
        className="alert alert-error h-[80vh] bg-black flex justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 shrink-0 stroke-current text-white"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-3xl md:text-4xl font-bold text-white text-center">
          Page Not Found
        </span>
      </div>
    </div>
  );
};

export default Error;
