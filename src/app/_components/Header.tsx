import React from 'react'
import Image from 'next/image';
import Logo from '../../../public/house-for-sale-svgrepo-com.svg';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-pink-100 py-4 px-4 min-h-12">
      <div className="flex">
         <Image src={Logo} alt="none" width={50} height={50} />
         <h3 className="self-center ml-2 text-2xl font-medium text-blue-700">House<span className="font-bold text-cyan-400">IN</span></h3>
      </div>
    </header>
  )
}

export default Header;