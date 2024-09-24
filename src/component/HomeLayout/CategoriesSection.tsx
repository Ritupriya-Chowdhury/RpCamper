import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { MdNightShelter } from "react-icons/md";
import { GiSleepingBag } from "react-icons/gi";
import { GiCampCookingPot } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa6";
import { IoBagSharp } from "react-icons/io5";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { GiMonclerJacket } from "react-icons/gi";
import { GiRunningShoe } from "react-icons/gi";

const categories = [
  {
    id: 1,
    Category: "Shelter Equipment",
    image: <MdNightShelter/>,
    names: ["Camping Tent", "4-Person Dome Camping Tent", "Waterproof Camping Tarp"],
  },
  {
    id: 2,
    Category: "Sleeping Gear",
    image:<GiSleepingBag />,
    names: ["Mummy Sleeping Bag", "Camping Pillow", "Inflatable Camping Pillow"],
  },
  {
    id: 3,
    Category: "Cooking Equipment",
    image: <GiCampCookingPot />,
    names: ["Camping Stove", "Single Burner Camping Stove", "Camping Pot"],
  },
  {
    id: 4,
    Category: "Lighting",
    image: <FaLightbulb />,
    names: ["High-Intensity Flashlight", "LED Flash Light"],
  },
  {
    id: 5,
    Category: "Bag Packs",
    image: <IoBagSharp />,
    names: ["Travel Bags"],
  },
  {
    id: 6,
    Category: "Furniture and Comfort",
    image: <MdOutlineTableRestaurant/>,
    names: ["Chair","Table"],
  },
  {
    id: 7,
    Category: "Clothing",
    image: < GiMonclerJacket />,
    names: ["Women’s Frozen Palace Coat","Weather-Resistant Jacket", "Women’s Lake Louise Jacket","Men's Rossignol Jacket"],
  },
  {
    id: 8,
    Category: "Footwear",
    image: <GiRunningShoe />,
    names: ["Men_sUltraRaptorGORE-TEX_Shoes3","Women_sUltraRaptorGORE-TEX_Shoes3"],
  },
];

const CategoriesSection = () => {
  const theme = useAppSelector((state: RootState) => state.theme.theme);
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
   
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  const handleNameClick = (name: string) => {
    
    navigate(`/products?search=${encodeURIComponent(name)}`);
  };

  return (
    <section>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-4 ${
          theme === "dark" ? "bg-black" : "bg-gray-300"
        }`}
      >
        {categories.map((category) => (
          <div
            key={category.id}
            className={`mx-12 my-8 cursor-pointer ${
              theme === "dark" ? "text-gray-400" : "text-gray-700"
            }`}
            onClick={() => handleCategoryClick(category.Category)} 
          >
            <div>
             <p className={`text-5xl ${
              theme === "dark" ? "text-blue-500" : "text-blue-800"
            }`}>{category.image}</p>
              <p className="text-xl font-bold">{category.Category}</p>
            </div>
            <div
              className={`${
                theme === "dark" ? "text-gray-700" : "text-gray-600"
              }`}
            >
              {category.names.map((name, index) => (
                <p
                  key={index}
                  className="text-lg font-medium cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleNameClick(name); 
                  }}
                >
                  {name}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
