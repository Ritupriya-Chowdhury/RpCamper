import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";

const Success = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen 
    ${theme==='dark'?'bg-gray-400':'bg-gray-200'}`}>
      <div className="bg-white p-8 rounded-md shadow-lg text-center">
        <h1 className="text-4xl font-bold text-sky-500 mb-4">Order Placed Successfully!</h1>
        <p className="text-lg mb-6">Thank you for your purchase! Your order has been placed successfully.</p>
        <div className="flex gap-4">
          <Link
            to="/"
            className="px-6 py-2 bg-sky-500 text-white rounded-md shadow-md hover:bg-sky-600 transition duration-300"
          >
            Go to Home
          </Link>
          <Link
            to="/products"
            className="px-6 py-2 border border-sky-500 text-sky-500
             rounded-md shadow-md hover:border-sky-600 hover:text-sky-600 transition duration-300"
          >
            View More Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
