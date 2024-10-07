import React from 'react'
import Container from './Container'


const Footer = () => {
  return (
    <div>
<Container>

<nav class="border-gray-200 dark:border-gray-600 bg-transparent dark:bg-black">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="#" className='logo text-yellow-500 text-[30px] font-bold '>Taste</a>
        <button data-collapse-toggle="mega-menu-full-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full-cta" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div id="mega-menu-full-cta" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                <li>
                    <a href="#" class="block py-2 px-3 text-yellow-300 dark:text-white border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:hover:text-blue-500 md:p-0">Home</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-yellow-300 dark:text-white border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:hover:text-blue-500 md:p-0">Company</a>
                </li>
                
                <li>
                    <a href="#" class="block py-2 px-3 text-yellow-300 dark:text-white border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:hover:text-blue-500 md:p-0">Marketplace</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-yellow-300 dark:text-white border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:hover:text-blue-500 md:p-0">Resources</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-yellow-300 dark:text-white border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:hover:text-blue-500 md:p-0">Contact</a>
                </li>
            </ul>
        </div>
    </div>
    <div id="mega-menu-full-cta-dropdown" class="mt-1 bg-transparent dark:bg-black border-gray-200 shadow-sm border-y dark:border-gray-600">
        <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
            <ul class="space-y-4 sm:mb-4 md:mb-0" aria-labelledby="mega-menu-full-cta-button">
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Online Stores
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Segmentation
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Marketing CRM
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Online Stores
                    </a>
                </li>
            </ul>
            <ul class="hidden mb-4 space-y-4 md:mb-0 sm:block">
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Our Blog
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Terms & Conditions
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        License
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Resources
                    </a>
                </li>
            </ul>
            <div class="mt-4 md:mt-0">
                <h2 class="mb-2 font-semibold text-gray-900 dark:text-white">Our brands</h2>
                <p class="mb-2 text-gray-500 dark:text-gray-400">At Taste, we Provide good foods for the customer that cater to a variety of preferences.</p>
                <a href="https://www.bk.com/" class="inline-flex items-center text-sm font-medium text-blue-600 hover:underline hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-700">
                    Explore our brands 
                    <span class="sr-only">Explore our brands </span>
                    <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</nav>

    
</Container>

    </div>
  )
}

export default Footer