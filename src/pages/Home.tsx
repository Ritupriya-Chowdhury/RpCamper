import BestSellingProducts from "../component/HomeLayout/BestSelling";
import CategoriesSection from "../component/HomeLayout/CategoriesSection";
import FAQSection from "../component/HomeLayout/FAQSection";
import FeaturedProducts from "../component/HomeLayout/FeaturedProduct";
import Hero from "../component/HomeLayout/HeroSection";
import UniqueSection from "../component/HomeLayout/UniqueSection";
import { useBeforeUnload } from "../component/RefreshWarning";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

const Home = () => {
  const items = useAppSelector((state: RootState) => state.cart.items);
 useBeforeUnload(items.length > 0);
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