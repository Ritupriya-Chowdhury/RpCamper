import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { useEffect, useState } from 'react';
import { Product } from '../types/product';
import { deleteProduct, fetchProducts } from '../redux/features/productSlice';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { useBeforeUnload } from '../component/RefreshWarning';

const ProductManagement = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const items = useAppSelector((state: RootState) => state.cart.items);
 useBeforeUnload(items.length > 0);
  const dispatch: AppDispatch = useDispatch();
  const { products, loading, error } = useSelector((state: RootState) => state.products);
  const [showConfirmDelete, setShowConfirmDelete] = useState<boolean>(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (productId: string) => {
    setProductToDelete(productId);
    setShowConfirmDelete(true);
  };

  const confirmDelete = async () => {
    if (productToDelete) {
      setDeleting(true);
      await dispatch(deleteProduct(productToDelete));
      setShowConfirmDelete(false);
      setProductToDelete(null);
      setDeleting(false);
    }
  };

  const cancelDelete = () => {
    setShowConfirmDelete(false);
    setProductToDelete(null);
  };

  return (
   <div className={`${theme === 'dark' ? 'bg-gray-400' : 'bg-gray-200'} md:w-full w-[600px]`} >
     <div className={`p-6 pt-32 `}>
      <div className="mb-6 flex justify-between items-center">
        <h2 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-blue-800' : ''}`}>Product Management</h2>
        <Link to='/create-product' className="px-4 py-2 bg-sky-500 text-white rounded-md shadow-sm hover:bg-sky-600 transition duration-300">
          Create New Product
        </Link>
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {!loading && !error && (
        <table className="w-full bg-gray-100 border border-gray-300  rounded-md shadow-md">
          <thead>
            <tr className="bg-gray-200 border-b border-gray-300">
              <th className="md:p-4 p-2 text-left">Image</th>
              <th className="md:p-4   text-left">Name</th>
              <th className="md:p-4 py-2 text-left">Price</th>
              <th className="md:p-4 p-2 text-left">Category</th>
              <th className="md:p-4 p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: Product) => (
              <tr key={product._id} className="border-b border-gray-300">
                <td className="md:p-4 p-2">
                  <img src={product.images[0]} alt={product.name} className="md:w-16 w-8 md:h-16 h-8 object-cover rounded-md" />
                </td>
                <td className="md:p-4 p-2">{product.name}</td>
                <td className="md:p-4 p-2">${product.price}</td>
                <td className="md:p-4 p-2">{product.category}</td>
                <td className="md:p-4 p-2">
                  <Link to={`/update-product/${product._id}`} className="md:px-4 px-2 py-2 bg-sky-500 text-white rounded-md shadow-sm hover:bg-sky-600 transition duration-300 mr-2">
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="mt-3 text-red-500 rounded-md text-3xl shadow-sm hover:text-red-600 transition duration-300"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {showConfirmDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-md max-w-sm w-full">
            <p className="text-lg mb-4">Are you sure you want to delete this product?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={confirmDelete}
                disabled={deleting}
                className={`px-4 py-2 ${deleting ? 'bg-red-300' : 'bg-red-500'} text-white rounded-md shadow-sm hover:bg-red-600 transition duration-300`}
              >
                {deleting ? 'Deleting...' : 'Confirm'}
              </button>
              <button
                onClick={cancelDelete}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-400 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
   </div>
  );
};

export default ProductManagement;
