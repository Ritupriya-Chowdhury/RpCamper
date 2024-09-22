import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { useParams, useNavigate } from 'react-router-dom';
import { Product } from '../types/product';
import { updateProduct } from '../redux/features/productSlice';
import { useAppSelector } from '../redux/hooks';
import { useBeforeUnload } from '../component/RefreshWarning';

const UpdateProduct = () => {
  const items = useAppSelector((state: RootState) => state.cart.items);
 useBeforeUnload(items.length > 0);
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const products = useSelector((state: RootState) => state.products.products);
  
  const [formData, setFormData] = useState<Partial<Product>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const productToUpdate = products.find((product) => product._id === id);
    if (productToUpdate) {
      setFormData(productToUpdate);
      setLoading(false);
    } else {
      setError('Product not found');
      setLoading(false);
    }
  }, [id, products]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  
    e.preventDefault();
    if (formData && id) {
      try {
        const { _id, ...updates } = formData; 
        updates.stockQuantity = Number(updates.stockQuantity); 
         
        await dispatch(updateProduct({
          productId: id,
          updates, 
        }));
        navigate('/product-management');
      } catch (err) {
        setError('Failed to update product');
      }
    }
  };
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className={`p-6 pt-32 ${theme === 'dark' ? 'bg-gray-400' : 'bg-gray-200'}`}>
      <div className="max-w-2xl mx-auto p-8 shadow-lg bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-semibold">Update Product</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name || ''}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price || ''}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category || ''}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Stock Quantity</label>
            <input
              type="number"
              name="stockQuantity"
              value={formData.stockQuantity}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-sky-500 text-white rounded-md shadow-sm hover:bg-sky-600 transition duration-300"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
