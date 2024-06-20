// src/components/Header.js
import React from 'react';
import userImg from "../assets/img/users/user-10.jpg";
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoSearch } from 'react-icons/io5';

const Header = ({sideMenu, setSideMenu}) => {
  return (
    <div className=" flex items-center justify-between bg-white shadow-md p-4">
      <div className="flex items-center">
      <div className={`flex items-center space-x-6 lg:space-x-0 pl-8 md:hidden ${sideMenu ? '' : 'show'} `}>
        <button
          onClick={() => setSideMenu(!sideMenu)}
        >
          <GiHamburgerMenu 
            className="mr-2"
          />
        </button>
      </div>
      <div className='flex border rounded p-2'>
      <button className="pr-2">
          <IoSearch/>
      </button>
        <input
          type="text"
          placeholder="Search"
          className="w-full h-full focus:outline-none"
        />
      </div>
        </div>
        <div className='flex'>
          <img
            src={userImg}
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
      </div>
    </div>
  );
};

export default Header;
