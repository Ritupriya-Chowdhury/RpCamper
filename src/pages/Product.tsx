import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchProducts } from "../redux/features/productSlice";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ReactImageMagnify from 'react-image-magnify';
import { useAppSelector } from "../redux/hooks";
import { useBeforeUnload } from "../component/RefreshWarning";

const Products = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const items = useAppSelector((state: RootState) => state.cart.items);
 useBeforeUnload(items.length > 0);

  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">("");
  const location = useLocation();

  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");
    const search = queryParams.get("search");

    if (category) {
      setCategoryFilter(category);
    }
    if (search) {
      setSearchTerm(search);
    }
  }, [location]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      categoryFilter ? product.category === categoryFilter : true
    )
    .filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.price - b.price
        : sortOrder === "desc"
        ? b.price - a.price
        : 0
    );

  const handleMenuToggle = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  

  return (
    <div
      className={` flex flex-col lg:flex-row p-4 pt-32 ${
        theme === "dark" ? "bg-gray-400" : "bg-gray-200"
      }`}
    >
      <div className="lg:hidden mb-4">
        {isFilterMenuOpen ? (
          <HiMenuAlt3
            onClick={handleMenuToggle}
            className={`cursor-pointer transition-all ${
              theme === "light" ? "text-sky-600" : "text-sky-300"
            }`}
            size={30}
          />
        ) : (
          <HiMenuAlt1
            onClick={handleMenuToggle}
            className={`cursor-pointer transition-all ${
              theme === "light" ? "text-sky-600" : "text-sky-300"
            }`}
            size={30}
          />
        )}
      </div>

      <div
        className={`filters ${
          isFilterMenuOpen ? "block" : "hidden"
        } lg:block mb-6 ml-4`}
      >
        <div className=" lg:block flex">
          <div className="mb-2 mr-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border rounded-md shadow-sm w-full sm:w-auto"
            />
          </div>
          <div className="mb-2">
            <select
              onChange={(e) => setCategoryFilter(e.target.value)}
              value={categoryFilter}
              className="px-4 py-2 border rounded-md shadow-sm w-full sm:w-auto"
            >
              <option value="">All Categories</option>
              <option value="Shelter Equipment">Shelter Equipment</option>
              <option value="Sleeping Gear">Sleeping Gear</option>
              <option value="Cooking Equipment">Cooking Equipment</option>
              <option value="Lighting">Lighting</option>
              <option value="Furniture and Comfort">
                Furniture and Comfort
              </option>
              <option value="Water and Hydration">Water and Hydration</option>
              <option value="Bag Packs">Bag Packs</option>
              <option value="Clothing">Clothing</option>
              <option value="Footwear">Footwear</option>
            </select>
          </div>
        </div>
        <div className="mb-2">
          <input
            type="number"
            placeholder="Min Price"
            onChange={(e) =>
              setPriceRange((prev) => ({
                ...prev,
                min: Number(e.target.value),
              }))
            }
            className="px-4 py-2 mb-2 border rounded-md shadow-sm w-full sm:w-auto"
          />
          <input
            type="number"
            placeholder="Max Price"
            onChange={(e) =>
              setPriceRange((prev) => ({
                ...prev,
                max: Number(e.target.value),
              }))
            }
            className="px-4 py-2 border rounded-md shadow-sm w-full sm:w-auto"
          />
        </div>
        <div className="lg:block md:flex">
          <div className="mb-2 mr-2">
            <select
              onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
              value={sortOrder}
              className="px-4 py-2 border rounded-md shadow-sm w-full sm:w-auto"
            >
              <option value="">Sort By Price</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
          <div>
            <button
              onClick={() => {
                setSearchTerm("");
                setCategoryFilter("");
                setPriceRange({ min: 0, max: Infinity });
                setSortOrder("");
              }}
              className="px-4 py-2 bg-sky-500 text-white rounded-md shadow-sm hover:bg-sky-600 transition duration-300"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {loading && <p className="text-center text-xl">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      <div className="product-list grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="product-card bg-white p-4 rounded-lg shadow-lg"
          >
             <ReactImageMagnify
              {...{
                smallImage: {
                  alt: product.name,
                  isFluidWidth: true,
                  src: product.images[0],
                },
                largeImage: {
                  src: product.images[0], 
                  width: 1200,
                  height: 1800,
                },
                enlargedImageContainerStyle: { background: "#fff" }, 
              }}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-3">${product.price}</p>
            <Link
              to={`/products/${product._id}`}
              className="px-4 py-2 bg-sky-500 text-white rounded-md shadow-sm hover:bg-sky-600 transition duration-300 w-full"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
