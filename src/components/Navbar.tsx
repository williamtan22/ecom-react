import React, { FC, ReactElement } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaTelegram } from "react-icons/fa";
import { BsFillPersonFill, BsFillSuitHeartFill } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { SlMagnifier } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { BounceLoader } from "react-spinners";

const Navbar: FC = (): ReactElement => {
  const { isLoggedIn, guest, userName } = useAppSelector((state) => state.user);

  return (
    <nav>
      <div className="w-100 bg-[#7E33E0] py-2 font-JosefinSans">
        <div className="container mx-auto">
          <div className="flex justify-between items-center text-[#F1F1F1] text-base">
            <div className="flex items-center">
              <p className="flex items-center">
                <HiOutlineMail className="font-bold" />
                <span className="ml-2 font-semibold">
                  MiladSadeghi2323@gmail.com
                </span>
              </p>
              <p className="flex items-center ml-5">
                <FaTelegram className="font-bold" />
                <a
                  href="https://t.me/wsxxsw"
                  rel="noreferrer"
                  target="_blank"
                  className="ml-2 font-semibold text-base"
                >
                  @wsxxsw
                </a>
              </p>
            </div>
            <div className="flex items-center">
              <div>
                {!isLoggedIn ? (
                  <BounceLoader size={23} color="#FB2E86" />
                ) : guest ? (
                  <Link className="flex items-center" to={"signin"}>
                    <p>Login</p>
                    <span>
                      <BsFillPersonFill className="ml-2" />
                    </span>
                  </Link>
                ) : (
                  <p>{userName}</p>
                )}
              </div>
              <div className="flex items-center ml-3">
                <Link to={"/wishlist"} className="flex items-center">
                  <p>Wishlist</p>
                  <BsFillSuitHeartFill className="ml-2 text-base" />
                </Link>
              </div>
              <div className="flex items-center ml-3">
                <Link to={"/cart"} className="flex items-center">
                  <MdOutlineShoppingCart className="ml-2 text-lg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-[13.5px]">
            <h1 className="font-JosefinSans text-[#0D0E43] font-bold text-[34px]">
              Hekto
            </h1>
            <ul className="flex font-Lato text-[#0D0E43]">
              <li className="mr-9">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active-nav-link" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="mr-9">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive ? "active-nav-link" : "nav-link"
                  }
                >
                  Shop
                </NavLink>
              </li>
              <li className="mr-9">
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    isActive ? "active-nav-link" : "nav-link"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    isActive ? "active-nav-link" : "nav-link"
                  }
                >
                  About Us
                </NavLink>
              </li>
            </ul>
            <div className="relative flex items-center pl-32">
              <input
                type="text"
                className="border border-[#E7E6EF] focus:outline-none h-10 w-80 pl-5 pr-16 focus:border-[#7c7a7a] ease-in transition-[border]  duration-200"
              />
              <div className="absolute inset-y-0 right-0 flex items-center top-1/2 -translate-y-1/2 h-full bg-pink-cc px-5">
                <SlMagnifier className="text-white text-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
