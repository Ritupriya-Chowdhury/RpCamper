import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { useNavigate } from "react-router-dom";
import pic1 from "../../assets/Home/download.jfif";
import pic2 from "../../assets/Home/9a3a500e-7ece-48e2-baab-e90b530851cd.png";
import pic3 from "../../assets/Home/88c41489-35b3-43ce-aaa4-5956641b321f_943175697.avif";
import pic4 from "../../assets/Home/images.jfif";
import pic5 from "../../assets/Home/download (3).jfif";
import pic6 from "../../assets/Home/download (2).jfif";
import pic7 from "../../assets/Home/istockphoto-1145456220-1024x1023.jpg";
import pic8 from "../../assets/Home/images (1).jfif";
import pic9 from "../../assets/Home/images (2).jfif";
import pic10 from "../../assets/Home/download (1).jfif";
import pic11 from "../../assets/Home/premium_photo-1672073399147-53ebffa8395b.avif";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

const BestSellingProducts = () => {
  const theme = useAppSelector((state: RootState) => state.theme.theme);
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate("/products");
  };

  return (
    <div
      className={`best-selling-products-section py-8 px-4 ${
        theme === "dark" ? "bg-gray-600" : ""
      }`}
    >
      <h2
        className={`text-2xl font-bold text-center mb-6 
      ${theme === "dark" ? "text-white" : "text-blue-800"}`}
      >
        Best Selling Products
      </h2>
      <Swiper
        modules={[Scrollbar]}
        direction="horizontal"
        spaceBetween={10}
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        style={{ height: "350px" }}
        className="text-gray-700 "
      >
        <SwiperSlide>
          <div
            className={`product-card px-4 pt-16 pb-4  bg-white rounded-lg shadow-md 
          ${theme === "dark" ? " " : ""}`}
          >
            <img
              src={pic1}
              alt="tent"
              className="w-64 h-48  object-cover mb-8 mx-auto rounded-lg"
            />
            <h3 className="text-xl font-semibold">Camping Tent</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`product-card p-4  bg-white rounded-lg shadow-md ${
              theme === "dark" ? " " : " "
            }`}
          >
            <img
              src={pic2}
              alt="bag"
              className="w-64 h-64 object-cover mb-4  mx-auto  rounded-lg"
            />
            <h3 className="text-xl font-semibold">Camping Bag</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`product-card p-4  bg-white rounded-lg shadow-md ${
              theme === "dark" ? " " : " "
            }`}
          >
            <img
              src={pic3}
              alt="pillow"
              className="w-64 h-64 object-cover mb-4  mx-auto  rounded-lg"
            />
            <h3 className="text-xl font-semibold">Camping Pillow</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`product-card p-4  bg-white rounded-lg shadow-md ${
              theme === "dark" ? " " : " "
            }`}
          >
            <img
              src={pic4}
              alt="Sleeping Bag"
              className="w-64 h-64 object-cover mb-4 mx-auto  rounded-lg"
            />
            <h3 className="text-xl font-semibold">Camping Sleeping Bag</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`product-card p-4  bg-white rounded-lg shadow-md ${
              theme === "dark" ? " " : " "
            }`}
          >
            <img
              src={pic5}
              alt="Jacket"
              className="w-64 h-64 object-cover mb-4  mx-auto  rounded-lg"
            />
            <h3 className="text-xl font-semibold">Weather-Resistant Jacket</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`product-card p-4  bg-white rounded-lg shadow-md ${
              theme === "dark" ? " " : " "
            }`}
          >
            <img
              src={pic6}
              alt="chair"
              className="w-64 h-64 object-cover mb-4  mx-auto  rounded-lg"
            />
            <h3 className="text-xl font-semibold">Camping Chair</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`product-card p-4  bg-white rounded-lg shadow-md ${
              theme === "dark" ? " " : " "
            }`}
          >
            <img
              src={pic7}
              alt="table"
              className="w-80 h-64 object-cover mb-4  mx-auto  rounded-lg"
            />
            <h3 className="text-xl font-semibold">Folding Camping Table</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`product-card p-4  bg-white rounded-lg shadow-md ${
              theme === "dark" ? " " : " "
            }`}
          >
            <img
              src={pic8}
              alt="stove"
              className="w-96 h-64 object-cover mb-4  mx-auto  rounded-lg"
            />
            <h3 className="text-xl font-semibold">Camping Stove</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`product-card p-4  bg-white rounded-lg shadow-md ${
              theme === "dark" ? " " : " "
            }`}
          >
            <img
              src={pic9}
              alt="pot"
              className="w-64 h-64 object-cover mb-4  mx-auto  rounded-lg"
            />
            <h3 className="text-xl font-semibold">Camping Pot</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`product-card p-4 px-4 pt-28 pb-4   bg-white rounded-lg shadow-md ${
              theme === "dark" ? " " : " "
            }`}
          >
            <img
              src={pic10}
              alt="torch"
              className="w-72 h-40 object-cover mb-4  mx-auto  rounded-lg"
            />
            <h3 className="text-xl font-semibold">Compact LED Torch</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`product-card bg-white px-4 py-1 rounded-lg shadow-md ${
              theme === "dark" ? " " : " "
            }`}
          >
            <img
              src={pic11}
              alt="kit"
              className="w-64 h-72  object-cover mb-2 mx-auto rounded-lg"
            />
            <h3 className="text-xl font-semibold">Fast Aid kit</h3>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="text-center mt-6">
        <button
          onClick={handleViewMore}
          className={`px-6 py-3 font-bold rounded-lg border-2  
          ${
            theme === "dark"
              ? " border-sky-200 text-sky-200 hover:text-white hover:bg-sky-500"
              : " border-blue-800 text-blue-800 hover:text-white hover:bg-blue-600"
          } transition duration-300`}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default BestSellingProducts;
