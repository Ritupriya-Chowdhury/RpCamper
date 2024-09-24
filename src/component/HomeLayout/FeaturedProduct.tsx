import { useSelector} from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import {  RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';



const FeaturedProducts = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate('/products'); 
  };

  const featuredProducts = [
    { 
      _id: "66eec906249ece09b7b6d587",
      name: "Family Tent",
      price: 199.99,
      
      image:"https://contents.mediadecathlon.com/p2194582/k$07b97ef9e42e7c3dd8106bca5dd8689a/picture.jpg?format=auto&f=969x0"
       },
    { 
      _id: "66eecbc6d6b4e05e186a85f1",
      name: "Travel Bag",
      price: 59.99,
      
      image:"https://adventureshop.mt/cdn/shop/files/RKLB111_HERO_EXPLORER_BAG_rgb72dpi_01.jpg?v=1698328793&width=425"
       },
    { 
      _id: "66eed271f50c8a2c8efca8ea",
      name: "Women’s Frozen Palace Coat",
      price: 129.99,
      
      image:"data:image/jpeg;base64,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"
       },
    { 
      _id: "66eed8525417d2d6cd5a1973",
      name: "Men's Rossignol Jacket",
      price: 149.99,
      
      image:"https://cdn.shopify.com/s/files/1/0589/6427/9470/products/RLJMJ90_a_200_rgb72dpi_02_360x.jpg?v=1722361089"
       },
  
    { 
      _id: "66eedca0b89d8145acc33694",
      name: "Women's Ultra Raptor GORE-TEX Shoest",
      price: 169.99,
      
      image:"data:image/jpeg;base64,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"
       },
    { 
      _id: "66eedb63b89d8145acc33692",
      name: "Men's Ultra Raptor GORE-TEX Shoest",
      price: 179.99,
      
      image:"data:image/jpeg;base64,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"
       },
   
  ];

  
  return (
    <div className={`${theme==='dark'?"bg-gray-600":"bg-white"} py-12`}>
      <p className={`text-center text-2xl font-bold mb-4
       ${theme==='dark'?'text-white':'text-blue-800'}`}>Select Yours Products</p>
       (
        <Swiper
          
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 1,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 1,
            },
           
            1024: {
              slidesPerView: 4,
              spaceBetween: 1,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper "
        >
          {featuredProducts.map((Product) => (
            <SwiperSlide key={Product._id}>
              <div className={` w-11/12 lg:mx-0 py-2 mx-3 ${theme==='dark'?'shadow-xl bg-gray-400': 'shadow-xl bg-gray-200'}
               rounded-lg`} >
                <img src={Product.image} alt={Product.name} className=" w-72 h-72 mx-auto my-4 border rounded-lg " />
                <div className='mx-8 mb-4'>
                <h3 className={`text-xl font-semibold ${theme==='dark'?"text-white":"text-black"} mb-2`}>{Product.name}</h3>
                <p className={`font-bold ${theme==='dark'?'text-white':"text-black"}`}>{Product.price}$</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )
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

export default FeaturedProducts;