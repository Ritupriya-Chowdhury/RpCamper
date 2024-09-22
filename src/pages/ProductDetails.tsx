import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../redux/store';
import { addToCart } from '../redux/features/cartSlice';
import { useAppSelector } from '../redux/hooks';
import { useBeforeUnload } from '../component/RefreshWarning';


const ProductDetails = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const items = useAppSelector((state: RootState) => state.cart.items);
 useBeforeUnload(items.length > 0);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) =>
    state.products.products.find((p) => p._id === id)
  );
  const cartItem = useSelector((state: RootState) =>
    state.cart.items.find((item) => item.product._id === id)
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  const isOutOfStock = product.stockQuantity === 0;
  const isMaxQuantityReached = cartItem ? cartItem.quantity >= product.stockQuantity : false;

  const handleAddToCart = () => {
    if (!isOutOfStock && !isMaxQuantityReached) {
      dispatch(addToCart(product));
    }
  };

  return (

    <div className={`px-8 p-4 pt-32 ${theme==='dark'?'bg-gray-400 text-black':'bg-gray-200'}`}>
      <div className="flex flex-wrap mx-4">
        <div className="w-full md:w-1/2 px-4">
          <img src={product.images[0]} alt={product.name} className="w-full rounded-lg shadow-md" />
          <div className="flex mt-4 space-x-2">
            {product.images.map((image, index) => (
              <img key={index} src={image} alt={`Product ${index}`} className="w-20 h-20 object-cover rounded-lg shadow-md" />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 md:px-4 px-1 lg:py-12 md:py-0 py-8 ">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-4">Stock Quantity: {product.stockQuantity}</p>
          <p className="mb-4">Category: {product.category}</p>
          <p className="mb-4">Ratings: {product.ratings} / 5</p>
          <p className="mb-6">{product.description}</p>
          <button
            onClick={handleAddToCart}
            className={`px-6 py-3 rounded-lg text-white transition duration-300 ${
              isOutOfStock || isMaxQuantityReached ? 'bg-gray-400 cursor-not-allowed' : 'bg-sky-600 hover:bg-sky-700'
            }`}
            disabled={isOutOfStock || isMaxQuantityReached}
          >
            {isOutOfStock ? 'Out of Stock' : isMaxQuantityReached ? 'Max Quantity Reached' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
