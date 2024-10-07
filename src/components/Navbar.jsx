import React, { useState, useEffect } from 'react';
import Container from './Container';

const Navbar = ({ theme, toggleTheme }) => {
 
  return (
   
      <Container className="">
        <nav className="">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <svg
                    className="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-between sm:items-stretch">
                <div className="flex flex-shrink-0 items-center">
                  <a href="#" className='logo text-yellow-500 text-[30px] font-bold '>Taste</a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 justify-end  ">
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-yellow-400 text-[16px] hover:bg-gray-700 hover:text-white"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-yellow-400 text-[16px] hover:bg-gray-700 hover:text-white"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-yellow-400 text-[16px] hover:bg-gray-700 hover:text-white"
                    >
                      Menu
                    </a>
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-yellow-400 text-[16px] hover:bg-gray-700 hover:text-white"
                    >
                      Service
                    </a>
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-yellow-400 text-[16px] hover:bg-gray-700 hover:text-white"
                    >
                      Contact
                    </a>
                    <div 
          className="relative w-16 h-6 flex items-center bg-black rounded-full p-1 cursor-pointer"
          onClick={toggleTheme}
        >
          <div 
            className={`w-5 h-5 bg-white rounded-full shadow-md transform duration-300 ease-in-out 
              ${theme === 'light' ? 'translate-x-0' : 'translate-x-6'}`}
          ></div>
          <span className="absolute left-1 text-xs">🌙</span>
          <span className="absolute right-4 text-xs">☀️</span>
        </div>
                  </div>
                </div>
                {/* Theme Toggle Button */}
              
              </div>
            </div>
          </div>
        </nav>

        <div className="sm:hidden" id="mobile-menu ">
          <div className="space-y-1 px-2 pb-3 ">
            <a
              href="#"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Team
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </a>
          </div>
        </div>
      </Container>
      
    
  );
};

export default Navbar;
