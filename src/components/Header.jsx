import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoNotifications } from 'react-icons/io5';
import userImg from "../assets/img/users/user-10.jpg";
import product1 from "../assets/img/product/prodcut-1.jpg";
import product2 from "../assets/img/product/prodcut-2.jpg";
import product3 from "../assets/img/product/prodcut-3.jpg";
import product4 from "../assets/img/product/prodcut-4.jpg";
import product5 from "../assets/img/product/prodcut-5.jpg";

const Header = ({setSideMenu, sideMenu}) => {

  const [searchOverlay, setSearchOverlay] = useState(false);
  const [notificationTable, setNotificationTable] = useState(false);
  const [userOption, setUserOption] = useState(false);

  return (
    <header className="relative z-10 bg-white border-b border-gray border-solid py-5 px-8 pr-8 h-[64px]">
      <div className="flex justify-between">
        <div className="flex items-center space-x-6 lg:space-x-0 pl-8">
          <button 
            type="button" 
            className="block lg:hidden text-2xl text-black" 
            onClick={() => setSideMenu(!sideMenu)}
          >
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M1 6H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M1 11H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <div className="w-[30%] hidden md:block">
            <form action="#">
              <div className="w-[250px] relative pb-2">
                <input className="input h-8 w-full pr-[45px] text-sm p-2" type="text" placeholder="Search Here..." />
                <button className="absolute top-1/2 right-6 translate-y-[-50%] hover:text-theme">
                <CiSearch size={24} className='pb-2'/>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-6">
          <div className="md:hidden">
            <button 
              className="relative w-[40px] h-[40px] leading-[40px] rounded-md text-textBody border border-gray hover:bg-themeLight hover:text-theme hover:border-themeLight" 
              onClick={() => setSearchOverlay(!searchOverlay)}
            >
              <svg className="-translate-y-[2px]" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M18.9999 19L14.6499 14.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>

          <div className="flex justify-center items-center relative pb-2" >
            <button 
              onClick={() => setNotificationTable(!notificationTable)} 
              className="relative w-[35px] h-[35px] leading-[35px] rounded-md text-gray border border-gray hover:bg-themeLight hover:text-theme hover:border-themeLight"
            >
              <IoNotifications/>
              <span className="w-[20px] h-[20px] inline-block bg-red rounded-full absolute -top-[7px] -right-[2px] border-[2px] border-white text-xs leading-[18px] font-medium text-black">05</span>
            </button>
            {notificationTable && (
              <div className="absolute z-10 w-[280px] sm:w-[350px] h-[285px] overflow-y-scroll overflow-item top-full -right-[60px] sm:right-0 shadow-lg rounded-md bg-white py-5 px-5">
                <div class="flex items-center justify-between last:border-0 border-b border-gray pb-4 mb-4 last:pb-0 last:mb-0">
                                <div class="flex items-center space-x-3">
                                    <div class="">
                                        <img class="w-[40px] h-[40px] rounded-md" src={product1} alt="img"/>
                                    </div>
                                    <div class="">
                                        <h5 class="text-base mb-0 leading-none">Green shirt for women</h5>
                                        <span class="text-tiny leading-none">Jan 21, 2023 08:30 AM</span>
                                    </div>
                                </div>
                                <div class="">
                                    <button class="hover:text-danger">
                                        <svg class="-translate-y-[3px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                        <path fill="currentColor" d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z"/></svg>
                                    </button>
                                </div>
                            </div>
                            <div class="flex items-center justify-between last:border-0 border-b border-gray pb-4 mb-4 last:pb-0 last:mb-0">
                                <div class="flex items-center space-x-3">
                                    <div class="">
                                        <img class="w-[40px] h-[40px] rounded-md" src={product2} alt="img"/>
                                    </div>
                                    <div class="">
                                        <h5 class="text-base mb-0 leading-none">Red School Bag</h5>
                                        <span class="text-tiny leading-none">Jan 25, 2023 10:05 PM</span>
                                    </div>
                                </div>
                                <div class="">
                                    <button class="hover:text-danger">
                                        <svg class="-translate-y-[3px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                        <path fill="currentColor" d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z"/></svg>
                                    </button>
                                </div>
                            </div>
                            <div class="flex items-center justify-between last:border-0 border-b border-gray pb-4 mb-4 last:pb-0 last:mb-0">
                                <div class="flex items-center space-x-3">
                                    <div class="">
                                        <img class="w-[40px] h-[40px] rounded-md" src={product3} alt="img"/>
                                    </div>
                                    <div class="">
                                        <h5 class="text-base mb-0 leading-none">Shoe for men</h5>
                                        <span class="text-tiny leading-none">Feb 20, 2023 05:00 PM</span>
                                    </div>
                                </div>
                                <div class="">
                                    <button class="hover:text-danger">
                                        <svg class="-translate-y-[3px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                        <path fill="currentColor" d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z"/></svg>
                                    </button>
                                </div>
                            </div>
                            <div class="flex items-center justify-between last:border-0 border-b border-gray pb-4 mb-4 last:pb-0 last:mb-0">
                                <div class="flex items-center space-x-3">
                                    <div class="">
                                        <img class="w-[40px] h-[40px] rounded-md" src={product4} alt="img"/>
                                    </div>
                                    <div class="">
                                        <h5 class="text-base mb-0 leading-none">Yellow Bag for women</h5>
                                        <span class="text-tiny leading-none">Feb 10, 2023 11:15 AM</span>
                                    </div>
                                </div>
                                <div class="">
                                    <button class="hover:text-danger">
                                        <svg class="-translate-y-[3px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                        <path fill="currentColor" d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z"/></svg>
                                    </button>
                                </div>
                            </div>
                            <div class="flex items-center justify-between last:border-0 border-b border-gray pb-4 mb-4 last:pb-0 last:mb-0">
                                <div class="flex items-center space-x-3">
                                    <div class="">
                                        <img class="w-[40px] h-[40px] rounded-md" src={product5} alt="img"/>
                                    </div>
                                    <div class="">
                                        <h5 class="text-base mb-0 leading-none">Blavk Bag for women</h5>
                                        <span class="text-tiny leading-none">Feb 15, 2023 01:20 PM</span>
                                    </div>
                                </div>
                                <div class="">
                                    <button class="hover:text-danger">
                                        <svg class="-translate-y-[3px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                        <path fill="currentColor" d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z"/></svg>
                                    </button>
                                </div>
                            </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button 
              onClick={() => setUserOption(!userOption)} 
              className="relative" 
              type="button"
            >
              <img className="w-[35px] h-[35px] rounded-md" src={userImg} alt="" />
              <span className="w-[12px] h-[12px] inline-block bg-green-500 rounded-full absolute -top-[4px] -right-[4px] border-[2px] border-white"></span>
            </button>
            {userOption && (
              <div 
                className=" absolute w-[280px] top-full right-0 shadow-lg rounded-md bg-white py-5 px-5">
                <div className="flex items-center space-x-3 border-b border-gray pb-3 mb-2">
                  <div className="">
                    <img className="w-[50px] h-[50px] rounded-md" src={userImg} alt="" />
                  </div>
                  <div className="">
                    <h5 className="text-base mb-1 leading-none">Shahnewaz</h5>
                    <p className="mb-0 text-tiny leading-none">shahnewaz@mail.com</p>
                  </div>
                </div>
                <ul>
                  <li>
                    <a href="index-2.html" className="px-5 py-2 w-full block hover:bg-gray rounded-md hover:text-theme text-base">Dashboard</a>
                  </li>
                  <li>
                    <a href="profile.html" className="px-5 py-2 w-full block hover:bg-gray rounded-md hover:text-theme text-base">
                      Account Settings
                    </a>
                  </li>
                  <li>
                    <a href="login.html" className="px-5 py-2 w-full block hover:bg-gray rounded-md hover:text-theme text-base">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Search */}
      <div className={`fixed top-0 left-0 w-full bg-white p-10 z-50 transition-transform duration-300 md:hidden ${searchOverlay ? 'translate-y-[0px]' : '-translate-y-[230px] lg:translate-y-[0]'}`}>
        <form action="#">
          <div className="relative mb-3">
            <input className="input h-12 w-full pr-[45px]" type="text" placeholder="Search Here..." />
            <button className="absolute top-1/2 right-6 translate-y-[-50%] hover:text-theme">
              <svg className="-translate-y-[2px]" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M18.9999 19L14.6499 14.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
        </form>
        <div>
          <span className="text-tiny mr-2">Keywords :</span>
          <a href="abc" className="inline-block px-3 py-1 border border-gray6 text-tiny leading-none rounded-[4px] hover:text-white hover:bg-theme hover:border-theme">Customer</a>
          <a href="abc" className="inline-block px-3 py-1 border border-gray6 text-tiny leading-none rounded-[4px] hover:text-white hover:bg-theme hover:border-theme">Product</a>
          <a href="abc" className="inline-block px-3 py-1 border border-gray6 text-tiny leading-none rounded-[4px] hover:text-white hover:bg-theme hover:border-theme">Orders</a>
        </div>
      </div>
      <div 
        className={`fixed top-0 left-0 w-full h-full z-40 bg-black/70 transition-all duration-300 ${searchOverlay ? 'visible opacity-1' : 'invisible opacity-0'}`}
        onClick={() => setSearchOverlay(!searchOverlay)}
      ></div>
    </header>
  );
};

export default Header;

