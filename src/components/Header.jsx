import React from 'react';
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import NavbarItem from './NavbarItem';

export default function Header() {
  return (
    <div  className='max-w-10xl  bg-gray-400'>
    <div className='flex justify-between items-center p-3 max-w-7xl mx-auto '>
      <div className='flex gap-4 font-bold'>
        <MenuItem title='home' address='/' Icon={AiFillHome} />
        <MenuItem title='about' address='/about' Icon={BsFillInfoCircleFill} />
      </div>
      <div className='flex   p-3 lg:text-lg justify-center gap-8 '>
      <NavbarItem title='Trending' param='fetchTrending' />
      <NavbarItem title='Top Rated' param='fetchTopRated' />
    </div>

      <div className='flex items-center gap-4'>
      <DarkModeSwitch />
        <Link href='/' className='flex gap-1 items-center font-bold text-gray-700 '>
         <span className='text-2xl py-1 px-2 rounded-lg'>
            Mo
          </span>
          <span className='text-xl hidden sm:inline'>Movie</span>
        </Link>
      </div>
    </div>
    </div>
  );
}
