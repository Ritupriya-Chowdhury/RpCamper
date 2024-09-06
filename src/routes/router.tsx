import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Products from "../pages/Product";
import ProductDetails from "../pages/ProductDetails";
import ProductManagement from "../pages/PoductManagement";
import Cart from "../pages/Cart";
import AboutUs from "../pages/AboutUs";
import CheckOut from "../pages/CheckOut";
import Success from "../pages/Success";


const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'products',
          element: <Products />
        },
        {
          path: 'products/:id',
          element: <ProductDetails />
        },
        {
          path: 'product-management',
          element: <ProductManagement />
        },
        {
          path: 'cart',
          element: <Cart />
        },
        {
          path: 'about-us',
          element: <AboutUs />
        },
        {
          path: 'checkout',
          element: <CheckOut />
        },
        {
          path: 'success',
          element: <Success />
        }
      ]
    }
  ]);
  
  export default router;