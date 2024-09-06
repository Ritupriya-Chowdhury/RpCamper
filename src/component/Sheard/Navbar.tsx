import { Link } from "react-router-dom";
import logo2 from "../../assets/Header/Logo2.png";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, toggleMenu } from "../../redux/features/navbarSlice";
import { AppDispatch, RootState } from "../../redux/store";



const Navbar = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isMenuOpen, theme } = useSelector((state: RootState) => state.navbar);

  const handleThemeToggle = () => {
    dispatch(setTheme(theme === "dark" ? "light" : "dark"));
  };

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <header
      className={` fixed top-0 left-0 w-full p-4 flex justify-between items-center  shadow-xl ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div>
        <img
          src={logo2}
          alt="Logo"
          className="w-48 mr-2"
        />
      </div>
      <div className=" space-x-6 items-center hidden lg:block">
        <div className="flex">
          <nav className={`space-x-6 text-xl font-semibold ${
            theme === "light"
              ? "text-sky-600"
              : "text-sky-300"
          }`}>
            <Link
              to="/"
              className={`transition-colors duration-100 
          ${
            theme === "light"
              ? "hover:text-violet-700"
              : "hover:text-violet-300"
          }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors duration-100  ${
                theme === "light"
                  ? "hover:text-violet-700"
                  : "hover:text-violet-300"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/booking"
              className={`transition-colors duration-100  ${
                theme === "light"
                  ? "hover:text-violet-700"
                  : "hover:text-violet-300"
              }`}
            >
              Booking
            </Link>
            <Link
              to="/contact"
              className={`transition-colors duration-100  ${
                theme === "light"
                  ? "hover:text-violet-700"
                  : "hover:text-violet-300"
              }`}
            >
              Contact
            </Link>
          </nav>
          <div
            className="text-lg px-6 pt-1 cursor-pointer"
            onClick={handleThemeToggle}
          >
            {theme === "dark" ? <IoSunny className="text-sky-500" /> : <FaMoon className="text-sky-500" />}
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        {isMenuOpen ? (
          <HiMenuAlt1
            onClick={handleMenuToggle}
            className=" cursor-pointer transition-all"
            size={30}
          />
        ) : (
          <HiMenuAlt3
            onClick={handleMenuToggle}
            className="cursor-pointer transition-all"
            size={30}
          />
        )}
      </div>
      <div>
        <button className="bg-yellow-400 text-black px-4 py-2 mr-2 rounded">
          Login
        </button>
      </div>

      {/* Responsive Menu */}
      <div
        className={`${
          isMenuOpen ? "left-0" : "-left-full"
        } fixed top-0 bottom-0 z-20 w-1/2 lg:hidden 
         ${ theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black" }
         px-8 pb-6 pt-16 
         transition-transform duration-200 ease-in-out rounded-r-xl shadow-xl`}
      >
        <nav className="mt-8">
          <ul className={`space-y-4 text-xl font-semibold  ${theme === "light"
              ? "text-sky-600"
              : "text-sky-300"
          }`}>
            <li>
              <Link
                to="/"
                className={`transition-colors duration-100 ${
                  theme === "light" ? "hover:text-violet-700"
                  : "hover:text-violet-300"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`transition-colors duration-100 ${
                  theme === "light" ? "hover:text-violet-700"
                  : "hover:text-violet-300"
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/booking"
                className={`transition-colors duration-100 ${
                  theme === "light" ? "hover:text-violet-700"
                  : "hover:text-violet-300"
                }`}
              >
                Booking
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`transition-colors duration-100 ${
                  theme === "light" ? "hover:text-violet-700"
                  : "hover:text-violet-300"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className="text-lg px-6 mt-4 cursor-pointer"
          onClick={handleThemeToggle}
        >
          {theme === "dark" ? <IoSunny className="text-sky-300" /> : <FaMoon  className="text-sky-600"/>}
        </div>
      </div>
    </header>
  );
};

export default Navbar;