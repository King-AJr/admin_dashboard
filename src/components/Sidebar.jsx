import React, { useState } from 'react';
import { MdDashboard, MdReviews } from "react-icons/md";
import logo from '../assets/img/logo/logo.svg';
import { FaBoxOpen, FaCartShopping } from 'react-icons/fa6';
import { RiCoupon2Fill, RiTodoFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Sidebar = ({sideMenu}) => {
  const [nav, setNav] = useState(null);

  return (
    <aside className={`w-[300px] lg:w-[250px] xl:w-[300px] border-r border-gray overflow-y-scroll sidebar-scrollbar fixed left-0 top-0 h-full bg-white z-50 transition-transform duration-300 ${sideMenu ? 'translate-x-[0px]' : '-translate-x-[300px] lg:translate-x-[0]'}`}>
      <div>
        <div className="py-4 pb-8 px-8 border-b border-gray h-[64px]">
          <a href="index-2.html">
            <img className="w-[140px]" src={logo} alt="Logo" />
          </a>
        </div>
        <div className="px-4 py-5">
          <ul>
            <li>
              <Link 
                className={`group rounded-md relative text-black text-sm font-medium inline-flex items-center w-full transition-colors ease-in-out duration-300 px-5 py-[9px] mb-2 hover:bg-gray sidebar-link-active ${nav === 0 ? 'bg-themeLight hover:bg-themeLight text-theme' : ''}`}
                to={'/'}
              >
               <div className='pr-2'>
                <MdDashboard />
               </div>
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                className={`group rounded-md relative text-black text-sm font-medium inline-flex items-center w-full transition-colors ease-in-out duration-300 px-5 py-[9px] mb-2 hover:bg-gray sidebar-link-active ${nav === 0 ? 'bg-themeLight hover:bg-themeLight text-theme' : ''}`}
                to={'/products'}
              >
               <div className='pr-2'>
                    <FaBoxOpen/>
                </div>
                Product
              </Link>
            </li>
            <li>
              <Link 
                className={`group rounded-md relative text-black text-sm font-medium inline-flex items-center w-full transition-colors ease-in-out duration-300 px-5 py-[9px] mb-2 hover:bg-gray sidebar-link-active ${nav === 0 ? 'bg-themeLight hover:bg-themeLight text-theme' : ''}`}
                to={'/categories'}
              >
               <div className='pr-2'>
                <FaCartShopping />
               </div>
                Categories
              </Link>
            </li>
            <li>
              <Link 
                className={`group rounded-md relative text-black text-sm font-medium inline-flex items-center w-full transition-colors ease-in-out duration-300 px-5 py-[9px] mb-2 hover:bg-gray sidebar-link-active ${nav === 0 ? 'bg-themeLight hover:bg-themeLight text-theme' : ''}`}
                to={'/orders'}
              >
               <div className='pr-2'>
                <RiTodoFill />
               </div>
               Orders
              </Link>
            </li>
            <li>
              <a 
                
                className={`group rounded-md relative text-black text-sm font-medium inline-flex items-center w-full transition-colors ease-in-out duration-300 px-5 py-[9px] mb-2 hover:bg-gray sidebar-link-active ${nav === 0 ? 'bg-themeLight hover:bg-themeLight text-theme' : ''}`}
                href="dashboard url"
              >
               <div className='pr-2'>
                <MdReviews />
               </div>
                Reviews
              </a>
            </li>
            <li>
              <a 
                
                className={`group rounded-md relative text-black text-sm font-medium inline-flex items-center w-full transition-colors ease-in-out duration-300 px-5 py-[9px] mb-2 hover:bg-gray sidebar-link-active ${nav === 0 ? 'bg-themeLight hover:bg-themeLight text-theme' : ''}`}
                href="dashboard url"
              >
               <div className='pr-2'>
                <RiCoupon2Fill />
               </div>
                Coupons
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
