// import slider1 from "../../assets/banner-1.jpg";
import { Bounce, Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div className="carousel w-full h-[50vh] md:h-screen overflow-hidden">
      {/* slide-1  */}
      <div
        id="slide1"
        className="carousel-item relative w-full bg-[url('https://i.ibb.co.com/nf1KkLX/banner-1.jpg')] bg-cover "
      >
        <div className="lg:w-3/5 relative top-10 lg:left-28 lg:top-56 space-y-10 text-center">
          <Fade>
            <h1 className="text-white text-4xl lg:text-7xl font-semibold">
              GEAR UP FOR GREATNESS
            </h1>

            <p className="text-xl lg:text-3xl text-gray-300">
              Explore premium sports gear for every game. From soccer to tennis,
              we’ve got you covered with quality and performance!
            </p>

            <a className="btn md:btn-md lg:btn-lg bg-white text-black lg:text-3xl font-bold rounded-none">
              Shop Now
            </a>
          </Fade>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* slide-2 */}
      <div
        id="slide2"
        className="carousel-item relative w-full bg-[url('https://i.ibb.co.com/30nr11P/banner-4.webp')] bg-cover  "
      >
        <div className="w-full flex flex-col justify-center items-center space-y-6 backdrop-blur-sm">
          <Bounce>
            <h1 className="text-white text-4xl lg:text-7xl text-center font-semibold">
              PLAY HARD, STAY EQUIPPED
            </h1>
            <p className="text-xl lg:text-3xl text-gray-300 w-3/4 mx-auto text-center">
              Find top-notch equipment designed to enhance your performance.
              Your journey to excellence starts here! Discover sports
              accessories that keep you ahead in the game. Shop now and elevate
              your performance to new heights.
            </p>
            <button className="btn btn-md md:btn-lg bg-white text-black lg:text-3xl font-bold rounded-none">
              Shop Now
            </button>
          </Bounce>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* slide-3 */}
      <div
        id="slide3"
        className="carousel-item relative w-full bg-[url('https://i.ibb.co.com/pjd0cGd/banner-2.jpg')] bg-cover "
      >
        <div className="w-full flex flex-col justify-center items-center space-y-6 backdrop-blur-sm">
          <Fade>
            <h1 className="text-white text-4xl lg:text-7xl text-center font-semibold">
              STYLE MEETS PERFORMANCE
            </h1>
            <p className="text-xl lg:text-3xl text-gray-300 w-3/4 mx-auto text-center">
              Look sharp and play sharper! Check out our trendy, functional
              apparel and gear for athletes of all levels.Dive into a wide range
              of accessories tailored to your favorite sports. Gear up today and
              stay ahead of the competition!
            </p>
            <button className="btn btn-md md:btn-lg bg-white text-black lg:text-3xl font-bold rounded-none">
              Shop Now
            </button>
          </Fade>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
