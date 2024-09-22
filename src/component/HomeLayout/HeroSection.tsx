import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import heroImage from "../../assets/Home/tent-fire-pit-front-mountain-dusk.jpg"; // Update this path to your image
import { Link } from "react-router-dom";

const Hero = () => {
  const theme = useAppSelector((state: RootState) => state.theme.theme);

  return (
    <div
      className={`hero-section ${
        theme === "dark"
          ? "bg-gray-700 "
          : "bg-gray-100 "
      }  pt-28 pb-8`}
    >
      <div className="text-center px-4 grid md:grid-cols-2 grid-cols-1">
        <div className="md:order-last w-full">
          <img
            src={heroImage}
            alt="Adventure"
            className=" rounded-lg shadow-lg max-w-full h-11/12 mb-8 "
          />
        </div>
        <div className="lg:my-12 lg:mx-8 md:mx-4  mx-2 ">
          <h1 className={`text-4xl lg:text-6xl font-bold mb-4 ${theme==='dark'?'text-sky-500':'text-sky-600'}`}>
            Welcome to RpCamper
          </h1>
          <p className={`text-lg md:text-2xl my-8 ${theme==='dark'?'text-sky-500':'text-sky-600'}`}>
            Your adventure starts here. Find the perfect equipment for your
            adventure.
          </p>
          <Link to='/products' className={`border-2 ml-2 px-3 py-3 lg:mt-2 md:mt-0 mt-3 text-lg font-bold rounded-lg 
            ${theme==='dark'?"border-sky-500 text-sky-500 hover:border-sky-500 hover:bg-sky-500 hover:text-white"
            :"border-sky-600 text-sky-600 hover:border-sky-600 hover:bg-sky-600 hover:text-white"}`}>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
