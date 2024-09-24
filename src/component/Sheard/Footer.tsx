import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { MdPhoneInTalk } from "react-icons/md";
import { IoIosMailOpen } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import logo from "../../assets/Header/Logo.png";
import logo3 from "../../assets/Header/Logo3.png";
import { RootState } from "../../redux/store";


const Footer = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <footer
      className={`px-8   ${
        theme === "dark" ? "bg-gray-900 text-sky-500" : "bg-gray-300 text-blue-800"
      }`}
    >
    <div className={`border-b-2 pb-12 pt-20 ${
        theme==='dark'?"border-sky-500":"border-blue-800"
    }`}>
    <div
        className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 
        border border-black w-11/12 mx-auto rounded-md shadow-md  
        ${
          theme == "dark" ? "bg-gray-400 text-sky-600" : "bg-blue-950 text-sky-500"
        } p-8`}
      >
        <div
          className={`flex border-r-2  ${
            theme === "dark" ? "border-gray-700" : "border-gray-400"
          }`}
        >
          <div className="w-12 h-12 text-3xl rounded-full bg-violet-200 p-2 mt-1">
            <MdPhoneInTalk />
          </div>
          <div className="pl-2 text-xl font-bold">
            <p className="pl-1">Call Us</p>
            <p
              className={`${
                theme === "dark" ? "text-gray-700" : "text-gray-400"
              }`}
            >
              +880-16734-57896
            </p>
          </div>
        </div>
        <div
          className={`flex border-r-2 ${
            theme === "dark" ? "border-gray-700" : "border-gray-400"
          }`}
        >
          <div className="w-12 h-12 text-3xl rounded-full bg-violet-200  p-2 mt-1">
            <IoIosMailOpen />
          </div>
          <div className="pl-2 text-xl font-bold">
            <p className="pl-1">Contact Our Team</p>
            <p
              className={`${
                theme === "dark" ? "text-gray-700" : "text-gray-400"
              }`}
            >
              rp@gmail.com
            </p>
          </div>
        </div>
        <div
          className={`flex border-r-2 ${
            theme === "dark" ? "border-gray-700" : "border-gray-400"
          }`}
        >
          <div className="w-12 h-12 text-3xl rounded-full bg-violet-200 p-2 md:mt-1 mt-2">
            <IoLocation />
          </div>
          <div className="pl-2 text-xl font-bold ">
            <p className="pl-1">Location</p>
            <p
              className={`${
                theme === "dark" ? "text-gray-700" : "text-gray-400"
              }`}
            >
              Boalkhali, Chattogram
            </p>
          </div>
        </div>
      </div>
      <div
        className=" mx-auto mt-20  grid lg:grid-cols-3 grid-cols-1
       items-center space-y-6 lg:space-y-0"
      >
        {/* Social Media Links */}
        <div>
          <div className="mb-8">
          <img src={theme==='dark'?logo3:logo} alt="Logo" className="w-48" />
            <p className={`mt-4 text-lg font-semibold ml-1`}>
              At RPCarRes Car Rentals, we're committed to delivering the perfect
              ride, whether you're embarking on a road trip adventure or
              cruising through the heart of the city.
            </p>
          </div>
          <div className="flex space-x-6">
            <p
              className=" transition-colors duration-200 
              border-2 border-blue-800 hover:border-violet-500 p-2 rounded-full hover:bg-violet-500 hover:text-white"
            >
              <FaFacebookF size={24} />
            </p>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-colors duration-200
               border-2 border-blue-800 hover:border-violet-500 p-2 rounded-full hover:bg-violet-500 hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-colors duration-200 *
               border-2 border-blue-800 hover:border-violet-500 p-2 rounded-full hover:bg-violet-500 hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="lg:mx-auto mx-0 space-y-4 ">
          <p className="text-2xl font-bold">Important Links</p>
          <div className=" text-lg text-left font-semibold">
            <ul className="space-y-4 text-xl font-semibold pl-4">
              <li>
                <Link
                  to="/"
                  className={` transition-colors duration-300 ${
                    theme === "light"
                      ? "hover:text-violet-700"
                      : "hover:text-violet-500"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={` transition-colors duration-300 ${
                    theme === "light"
                      ? "hover:text-violet-700"
                      : "hover:text-violet-500"
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/booking"
                  className={` transition-colors duration-300 ${
                    theme === "light"
                      ?"hover:text-violet-700"
                      : "hover:text-violet-500"
                  }`}
                >
                  Booking
                </Link>
              </li>
              <li className="">
                <Link
                  to="/contact"
                  className={` transition-colors duration-300 ${
                    theme === "light"
                      ? "hover:text-violet-700"
                      : "hover:text-violet-500"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Subscribe */}
        <div className="lg:mx-auto mx-0">
          <p className="text-2xl font-bold mb-4">Subscribe</p>
          <p className="mt-4 text-lg font-semibold ml-1">
            Interested in receiving updates about our services? Simply subscribe
            and we'll keep you informed via email.
          </p>
          <div className="mt-4">
            <input type="email" placeholder="Enter Your Email" className={`p-4 rounded-lg border-2 
            ${theme==='dark'?"bg-gray-900 text-sky-500 border-sky-500 ":
            "bg-gray-300 text-sky-700 border-blue-800 "}`} />
            <button className={`border-2 ml-2 px-2 py-3 lg:mt-2 md:mt-0 mt-3 text-lg font-bold rounded-lg
            ${theme==='dark'?"border-sky-500 hover:border-violet-500 hover:bg-violet-500 hover:text-white"
            :"border-blue-800 hover:border-violet-500 hover:bg-violet-500 hover:text-white"}`}>Subscribe</button>
          </div>
        </div>
      </div>

    </div>
      <div className="mt-6 pb-12 text-center text-lg opacity-75">
        &copy; {new Date().getFullYear()} Car Rental Inc. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;