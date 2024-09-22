import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store'; // Ensure you import AppDispatch
import { useEffect, useState } from 'react';
import { Product } from '../types/product';
import { deleteProduct, fetchProducts } from '../redux/features/productSlice';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const ProductManagement = () => {

  const dispatch: AppDispatch = useDispatch();
  const { products, loading, error } = useSelector((state: RootState) => state.products);
  const [showConfirmDelete, setShowConfirmDelete] = useState<boolean>(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchProducts()); // Now dispatch is correctly typed for async thunk
  }, [dispatch]);

  const handleDelete = (productId: string) => {
    setProductToDelete(productId);
    setShowConfirmDelete(true);
  };

  const confirmDelete = () => {
    if (productToDelete) {
      dispatch(deleteProduct(productToDelete));
      setShowConfirmDelete(false);
      setProductToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowConfirmDelete(false);
    setProductToDelete(null);
  };
  return (
    <div className="container mx-auto p-6 mt-20">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Product Management</h2>
        <Link to='/create-product' className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 transition duration-300">
          Create New Product
        </Link>
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {!loading && !error && (
        <table className="w-full bg-white border border-gray-300 rounded-md shadow-md">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: Product) => (
              <tr key={product._id} className="border-b border-gray-300">
                <td className="p-4">
                  <img src={product.images[0]} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
                </td>
                <td className="p-4">{product.name}</td>
                <td className="p-4">${product.price}</td>
                <td className="p-4">{product.category}</td>
                <td className="p-4">
                  <button className="px-4 py-2 bg-yellow-500 text-white rounded-md shadow-sm hover:bg-yellow-600 transition duration-300 mr-2">
                    Update
                  </button>
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
                className="px-4 py-2 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600 transition duration-300"
              >
                Confirm
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
  );
};

export default ProductManagement;
