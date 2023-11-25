"use client"

import React, {useState} from "react";
import Image from "next/image";
import { CiTwitter } from "react-icons/ci";
import { FaTiktok,FaBars ,FaTimes} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoCart } from "react-icons/io5";

const Navbar = () => {
    const [nav ,setNav] = useState(false);
    const [dropDown1, setDropDown1] = useState(false);
    const [dropDown2, setDropDown2] = useState(false);
    const handleClick = () => {
        setNav(!nav)
    }
  return (
    <nav className="relative flex flex-row justify-between w-full bg-[#212122] text-white  py-[1rem] px-12 text-[13px] font-[900]">
      
       {/*hamburger icon*/}
       <div onClick={handleClick} className="lg:hidden z-50 cursor-pointer absolute left-8 top-8">
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? "hidden" : "absolute  top-0 left-0 w-1/4 h-screen z-20 bg-gray-800 bg-opacity-70 flex flex-col gap-[1.8rem] pt-[7rem] items-start pl-4 sm:mr-[-140px] sm:hover:mr-[10px] duration-300 lg:hidden"}>
        <li className="cursor-pointer">brands</li>
        <li className="cursor-pointer">shop</li>
        <li className="cursor-pointer">premium</li>
        <li className="cursor-pointer">giftcards</li>
        <li className="cursor-pointer">become an affiliate</li>
        </ul>

      {/* large screen */}
      <ul className="hidden lg:flex gap-[2rem] items-center">
        <li className="hover:text-[#e1c200] hover:underline underline-offset-8 cursor-pointer"> 
        <button
                  onClick={() => setDropDown1(!dropDown1)}
                  className="px-4 py-2 flex flex-col"
                >
                  <div className=" flex items-center gap-2">
                    Brands
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 "
                      >
                        <path
                          className={!dropDown1 ? " block" : " hidden"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                        <path
                          className={dropDown1 ? " block" : " hidden"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
                  </div> 
                  </div>

                  <div
                    className={`${
                      dropDown1 ? "block" : "hidden"
                    } flex text-left z-30 ml-6 lg:ml-0 w-[14rem] flex-col rounded-xl  lg:absolute space-y-6 bg-[#212122] shadow-md py-2 mt-6 px-4`}
                  >
                   <li className="hover:text-[#e1c200] hover:underline underline-offset-8 cursor-pointer">
                        all brands
                    </li>
                    <li className="hover:text-[#e1c200] hover:underline underline-offset-8 cursor-pointer">
                        bitfins
                    </li>
                    <li className="hover:text-[#e1c200] hover:underline underline-offset-8 cursor-pointer">
                        cardano stonerz club
                    </li>
                    <li className="hover:text-[#e1c200] hover:underline underline-offset-8 cursor-pointer">
                        cryptoraggies
                    </li>
                    <li className="hover:text-[#e1c200] hover:underline underline-offset-8 cursor-pointer">
                        danketsu
                    </li>
                    <li className="hover:text-[#e1c200] hover:underline underline-offset-8 cursor-pointer">
                        future fest
                    </li>
                    <li className="hover:text-[#e1c200] hover:underline underline-offset-8 cursor-pointer">
                        pendulum
                    </li>
                    <li className="hover:text-[#e1c200] hover:underline underline-offset-8 cursor-pointer">
                        vudu brigada
                    </li>
                  </div>
                </button>
                </li>
                <li className="hover:text-[#e1c200] hover:underline underline-offset-8 cursor-pointer"> 
        <button
                  onClick={() => setDropDown2(!dropDown2)}
                  className="px-4 py-2 flex flex-col"
                >
                  <div className=" flex items-center gap-2">
                    shop
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 "
                      >
                        <path
                          className={!dropDown2 ? " block" : " hidden"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                        <path
                          className={dropDown2 ? " block" : " hidden"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
                  </div> 
                  </div>

                  <div
                    className={`${
                      dropDown2 ? "block" : "hidden"
                    } flex text-left w-[20rem] z-30 ml-6 lg:ml-0  flex-col rounded-xl  lg:absolute space-y-6 bg-[#212122] shadow-md py-2 mt-6 px-4`}
                  >
                   <li className=" hover:text-[#e1c200] hover:underline underline-offset-8 cursor-pointer">
                        all item
                    </li>
                    <li className="hover:text-[#e1c200] hover:underline underline-offset-8 cursor-pointer">
                        bitfins
                    </li>
                    <li className="hover:text-[#e1c200] hover:underline underline-offset-8 cursor-pointer">
                        cardano stonerz club
                    </li>
                    <li className="hover:text-[#e1c200] hover:underline underline-offset-8 cursor-pointer">
                        cryptoraggies
                    </li>
                    <li className="hover:text-[#e1c200] hover:underline underline-offset-8 cursor-pointer">
                        danketsu
                    </li>
                    <li className="hover:text-[#e1c200] hover:underline underline-offset-8 cursor-pointer">
                        future fest
                    </li>
                    <li className="hover:text-[#e1c200] hover:underline underline-offset-8 cursor-pointer">
                        pendulum
                    </li>
                    <li className="hover:text-[#e1c200] hover:underline underline-offset-8 cursor-pointer">
                        vudu brigada
                    </li>
                  </div>
                </button>
                </li>
        <li className="hover:text-[#e1c200] hover:underline underline-offset-8 cursor-pointer">premium</li>
        <li className="hover:text-[#e1c200] hover:underline underline-offset-8 cursor-pointer">giftcards</li>
      </ul>

      <Image src={"/logo2.webp"} width={130} height={60} className="mx-auto	" />
      <ul className="hidden lg:flex gap-[2rem] items-center ">
        <li className="hover:text-[#e1c200] hover:underline underline-offset-8 cursor-pointer">become an affiliate</li>
        <li className="hover:text-[#e1c200] cursor-pointer">
          <CiTwitter />
        </li>
        <li className="hover:text-[#e1c200] cursor-pointer">
          <FaTiktok />
        </li>
        <li className="hover:text-[#e1c200] cursor-pointer">
          <FaInstagram />
        </li>
        <li className="hover:text-[#e1c200] cursor-pointer">
          <MdAccountCircle />
        </li>
        <li className="hover:text-[#e1c200] cursor-pointer">
          <CiSearch />
        </li>
        <li className="hover:text-[#e1c200] cursor-pointer">
          <IoCart />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
