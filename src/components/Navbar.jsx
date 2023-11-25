import React from 'react';
import Image from 'next/image';
import { CiTwitter } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoCart } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between w-full bg-[#212122] text-white  py-[0.8rem] px-12 text-[13px] font-[900]'>
        <ul className='hidden lg:flex gap-[2rem] items-center'>
            <li>brands</li>
            <li>shop</li>
            <li>premium</li>
            <li>giftcards</li>
        </ul>
        {/* <Image alt='logo'/> */}
        {/* <div>image</div> */}
        <Image src={"/logo2.webp"} width={130} height={60}
        className='mx-auto	'/>
        <ul className='hidden lg:flex gap-[2rem] items-center '>
        <li>become an affiliate</li>
        <li><CiTwitter /></li>
        <li><FaTiktok /></li>
        <li><FaInstagram /></li>
        <li><MdAccountCircle /></li>
        <li><CiSearch /></li>
        <li><IoCart /></li>
        </ul>
    </nav>
  )
}

export default Navbar;