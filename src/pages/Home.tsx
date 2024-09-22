import BestSellingProducts from "../component/HomeLayout/BestSelling";
import CategoriesSection from "../component/HomeLayout/CategoriesSection";
import FAQSection from "../component/HomeLayout/FAQSection";
import FeaturedProducts from "../component/HomeLayout/FeaturedProduct";
import Hero from "../component/HomeLayout/HeroSection";
import UniqueSection from "../component/HomeLayout/UniqueSection";

const Home = () => {
    return <div>
      <Hero/>
      <BestSellingProducts/>
      <CategoriesSection/>
      <FeaturedProducts/>
      <UniqueSection/>
      <FAQSection/>
    </div>;
  };
  
  export default Home;