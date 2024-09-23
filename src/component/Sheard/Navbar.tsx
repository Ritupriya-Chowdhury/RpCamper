import { Link } from "react-router-dom";
import logo2 from "../../assets/Header/Logo2.png";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/features/navbarSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { toggleTheme } from "../../redux/features/themeSlice";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isMenuOpen } = useSelector((state: RootState) => state.navbar);
  const theme = useSelector((state: RootState) => state.theme.theme);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Calculate total cart item count
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <header
      className={`fixed top-0 left-0 z-10 w-full p-4 flex justify-between items-center shadow-xl ${
        theme === "dark"
          ? "bg-gray-900 text-white hover:text-violet-400"
          : "bg-white text-black"
      }`}
    >
      <div className="flex items-center">
        <img src={logo2} alt="Logo" className="w-48" />
      </div>
      <div className="space-x-6 items-center hidden lg:flex">
        <nav
          className={`flex space-x-6 text-xl font-semibold ${
            theme === "light" ? "text-sky-600" : "text-sky-300"
          }`}
        >
          <Link to="/" className={`transition-colors duration-100 ${theme === "light" ? "hover:text-violet-700" : "hover:text-violet-400"}`}>
            Home
          </Link>
          <Link to="/products" className={`transition-colors duration-100 ${theme === "light" ? "hover:text-violet-700" : "hover:text-violet-400"}`}>
            Products
          </Link>
          <Link to="/product-management" className={`transition-colors duration-100 ${theme === "light" ? "hover:text-violet-700" : "hover:text-violet-400"}`}>
            Product Management
          </Link>
          <Link to="/about" className={`transition-colors duration-100 ${theme === "light" ? "hover:text-violet-700" : "hover:text-violet-400"}`}>
            About Us
          </Link>
          <Link to="/cart" className={`relative transition-colors duration-100 ${theme === "light" ? "hover:text-violet-700" : "hover:text-violet-400"}`}>
            <FaShoppingCart className="text-2xl" />
            {cartItemCount > 0 && (
              <p className="text-red-500 px-2 mt-1">{cartItemCount}</p>
            )}
          </Link>
          <div className="cursor-pointer" onClick={handleThemeToggle}>
            {theme === "dark" ? (
              <IoSunny className="transition-colors duration-100 text-sky-500 hover:text-violet-400 text-2xl" />
            ) : (
              <FaMoon className="transition-colors duration-100 text-sky-600 hover:text-violet-700 text-2xl" />
            )}
          </div>
        </nav>
      </div>
      <div className="lg:hidden mr-24">
        {isMenuOpen ? (
          <HiMenuAlt1
            onClick={handleMenuToggle}
            className={`cursor-pointer transition-all ${theme === "light" ? "text-sky-600" : "text-sky-300"}`}
            size={30}
          />
        ) : (
          <HiMenuAlt3
            onClick={handleMenuToggle}
            className={`cursor-pointer transition-all ${theme === "light" ? "text-sky-600" : "text-sky-300"}`}
            size={30}
          />
        )}
      </div>

      {/* Responsive Navbar */}
      <div
        className={`${
          isMenuOpen ? "left-0" : "-left-full"
        } fixed top-0 bottom-0 z-20 w-1/2 lg:hidden ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
        } px-8 pb-6 pt-16 transition-transform duration-200 ease-in-out rounded-r-xl shadow-xl`}
      >
        <nav className="mt-8">
          <ul
            className={`space-y-4 text-xl font-semibold ${
              theme === "light" ? "text-sky-600" : "text-sky-300"
            }`}
          >
            <li>
              <Link
                to="/"
                className={`transition-colors duration-100 ${
                  theme === "light" ? "hover:text-violet-700" : "hover:text-violet-400"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={`transition-colors duration-100 ${
                  theme === "light" ? "hover:text-violet-700" : "hover:text-violet-400"
                }`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/product-management"
                className={`transition-colors duration-100 ${
                  theme === "light" ? "hover:text-violet-700" : "hover:text-violet-400"
                }`}
              >
                Product Management
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`transition-colors duration-100 ${
                  theme === "light" ? "hover:text-violet-700" : "hover:text-violet-400"
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className={`flex relative transition-colors duration-100 ${
                  theme === "light" ? "hover:text-violet-700" : "hover:text-violet-400"
                }`}
              >
                <FaShoppingCart className="text-2xl" />
                {cartItemCount > 0 && (
                  <p className="text-red-500 px-2">{cartItemCount}</p>
                )}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="text-2xl mt-4 cursor-pointer" onClick={handleThemeToggle}>
          {theme === "dark" ? (
            <IoSunny className="text-sky-300 hover:text-violet-400" />
          ) : (
            <FaMoon className="text-sky-600 hover:text-violet-700" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
