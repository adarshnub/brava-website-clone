import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between w-full bg-[#212122] text-white font-extrabold py-[0.8rem] px-12 '>
        <ul className='flex gap-[2rem] items-center'>
            <li>brands</li>
            <li>shop</li>
            <li>premium</li>
            <li>giftcards</li>
        </ul>
        {/* <Image alt='logo'/> */}
        {/* <div>image</div> */}
        <Image src={"/logo2.webp"} width={130} height={60}/>
        <ul className='flex gap-[2rem] items-center'>
        <li>become an affiliate</li>
        <li>icon</li>
        <li>icon</li>
        <li>icon</li>
        <li>icon</li>
        <li>icon</li>
        <li>icon</li>
        </ul>
    </nav>
  )
}

export default Navbar;