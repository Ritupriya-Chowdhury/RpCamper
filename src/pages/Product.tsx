import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchProducts } from "../redux/features/productSlice";
import { Link, useLocation } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state: RootState) => state.products);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | ''>('');
  const location = useLocation();

  // Get search term and category from query parameters
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    const search = queryParams.get('search');
    
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

  // Apply search, filter, and sort
  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(product => 
      categoryFilter ? product.category === categoryFilter : true
    )
    .filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    )
    .sort((a, b) => 
      sortOrder === 'asc' ? a.price - b.price : sortOrder === 'desc' ? b.price - a.price : 0
    );

  return (
    <div className="container mx-auto p-6 mt-20">
      <div className="filters mb-6 flex flex-wrap gap-4">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="px-4 py-2 border rounded-md shadow-sm w-full sm:w-auto"
        />
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
          <option value="Furniture and Comfort">Furniture and Comfort</option>
          <option value="Water and Hydration">Water and Hydration</option>
          <option value="Bag Packs">Bag Packs</option>
          <option value="Clothing">Clothing</option>
          <option value="Footwear">Footwear</option>
        </select>
        <input 
          type="number" 
          placeholder="Min Price" 
          onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))} 
          className="px-4 py-2 border rounded-md shadow-sm w-full sm:w-auto"
        />
        <input 
          type="number" 
          placeholder="Max Price" 
          onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))} 
          className="px-4 py-2 border rounded-md shadow-sm w-full sm:w-auto"
        />
        <select 
          onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')} 
          value={sortOrder} 
          className="px-4 py-2 border rounded-md shadow-sm w-full sm:w-auto"
        >
          <option value="">Sort By Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
        <button 
          onClick={() => {
            setSearchTerm('');
            setCategoryFilter('');
            setPriceRange({ min: 0, max: Infinity });
            setSortOrder('');
          }} 
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 transition duration-300"
        >
          Clear Filters
        </button>
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product._id} className="product-card bg-white p-4 rounded-lg shadow-lg">
            <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <Link to={`/products/${product._id}`}
              className="px-4 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 transition duration-300 w-full"
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
