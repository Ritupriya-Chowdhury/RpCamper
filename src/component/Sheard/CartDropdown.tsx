
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { removeFromCart } from '../../redux/features/cartSlice';
import { Link } from 'react-router-dom';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemove = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg overflow-hidden z-50">
      {cartItems.length === 0 ? (
        <p className="p-4 text-center">No items in cart</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.product._id} className="flex items-center p-4 border-b border-gray-200">
              <img src={item.product.images[0]} alt={item.product.name} className="w-16 h-16 object-cover rounded-md" />
              <div className="ml-4 flex-1">
                <p className="font-semibold">{item.product.name}</p>
                <p className="text-gray-600">Qty: {item.quantity}</p>
                <p className="text-gray-800">${(item.product.price * item.quantity).toFixed(2)}</p>
              </div>
              <button
                onClick={() => handleRemove(item.product._id)}
                className="text-red-500 hover:text-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="p-4 border-t border-gray-200">
            <Link
              to="/checkout"
              className="block text-center bg-blue-500 text-white rounded-md py-2"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
