import { useEffect } from "react";
import img1 from "../../assets/Home/istockphoto-1322081689-612x612.jpg";
import img2 from "../../assets/Home/istockphoto-1157144799-612x612.jpg";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import AOS from "aos";
import "aos/dist/aos.css";

const UniqueSection = () => {
  const theme = useAppSelector((state: RootState) => state.theme.theme);
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <section
      className={`py-8  ${
        theme === "dark"
          ? "bg-gray-700 text-sky-300"
          : "bg-gray-100 text-sky-600"
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-6 mt-6">
        Customers Openion
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-4 lg:mx-12 lg:my-12">
        <div
          className=" p-4 rounded-md lg:my-20 md:my-8 mx-4"
          data-aos="fade-right"
        >
          <p className="text-2xl mb-2 ">
            Great prices and excellent customer service. I found the perfect
            tent for my family, and it made our camping trip so much more
            comfortable!
          </p>

          <h4
            className={`text-2xl font-bold text-left mb-2 ${
              theme === "dark" ? "text-sky-300" : ""
            }`}
          >
            John Doe
          </h4>
        </div>
        <div data-aos="fade-left">
          <img
            src={img1}
            alt=""
            className="lg:w-11/12 w-8/11 lg:ml-12 md:ml-12 ml-4 rounded-lg"
          />
        </div>
      </div>

      <div className="lg:grid grid-cols-1 lg:grid-cols-2 px-4 mx-4 my-12  flex flex-col-reverse">
        <div data-aos="fade-right">
          <img
            src={img2}
            alt=""
            className="lg:w-11/12 w-8/11 lg:ml-12 md:ml-8 ml-4 rounded-lg"
          />
        </div>
        <div className="p-4 rounded-md lg:my-20 md:my-8 mx-4" data-aos="fade-left">
          <p className="text-2xl mb-2 lg:text-right text-left ">
            I love this shop! The staff was incredibly helpful, and their
            knowledge about camping equipment really shows. I’ll definitely be
            coming back for my next adventure.
          </p>
          <h4
            className={`text-2xl font-bold lg:text-right text-left mb-2 ${
              theme === "dark" ? "text-sky-300" : ""
            }`}
          >
            Jean Smith
          </h4>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl text-center font-bold mb-8">Watch Our Story</h3>
        <div className="relative pb-9/16">
          <iframe
            className="w-11/12 mx-auto"
            src="https://www.youtube.com/embed/PH5EX9mH0WI?si=glhOtru9ulkw7YkX" 
            height="500"
            title="Video Blog"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;
