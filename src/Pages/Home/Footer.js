import React from 'react';
import { FaAndroid ,FaApple,FaBlackberry , FaJava , FaBattleNet} from "react-icons/fa";
const Footer = () => {
    return (
        <>
             <div class="px-10 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
  <div class="grid gap-10 row-gap-6 mb-4 sm:grid-cols-2 lg:grid-cols-4">
    <div class="sm:col-span-2">
      <a href="/" aria-label="Go home" title="Company" class="inline-flex items-center">
      <h className="text-5xl font-extrabold">
          <span className="text-[#85171A]">D</span>
          <span className="text-[#DC2025]">S</span>
          <span className="text-[#FEBA08]">I</span>
        </h>
      </a>
      <div class="mt-4 text-lg lg:max-w-sm">
        <p class=" text-gray-800">
        PT Dwidasa Samsara Indonesia
        </p>
        <p class="mt-2  text-gray-800">
        Ruko Jalur Sutera 29A No. 53
Alam Sutera Serpong, Tangerang 15323

        </p>
      </div>
    </div>
    <div class=" text-lg">
      <p class=" font-bold text-xl mb-3 tracking-wide text-gray-900">Contacts</p>
      <div class="flex">
        <p class="mr-1 text-gray-800">Phone:</p>
        <p  class="">+62.21.5314.1135</p>
      </div>
      <div class="flex my-1">
        <p class="mr-1 text-gray-800">Email:</p>
        <p > community@dwidasa.com</p>
      </div>
      <div class="flex">
        <p class="mr-1 text-gray-800">Fax :</p>
        <p >
         +62.21.5314.1135
        </p>
      </div>
    </div>
    <div className='text-lg'>
      <span class=" font-bold text-xl tracking-wide text-gray-900">Social</span>
      <div class="flex items-center mt-1 space-x-3">
        <a href="/" class="text-[#EC323B] text-2xl transition-colors duration-300 hover:text-deep-purple-accent-400">
        <FaAndroid/>
        </a>
        <a href="/" class="text-[#EC323B] text-2xl transition-colors duration-300 hover:text-deep-purple-accent-400">
          <FaApple/>
        </a>
        <a href="/" class="text-[#EC323B] text-2xl transition-colors duration-300 hover:text-deep-purple-accent-400">
          <FaBlackberry/>
        </a>
        <a href="/" class="text-[#EC323B] text-2xl transition-colors duration-300 hover:text-deep-purple-accent-400">
          <FaJava/>
        </a>
        <a href="/" class="text-[#EC323B] text-2xl transition-colors duration-300 hover:text-deep-purple-accent-400">
          <FaBattleNet/>
        </a>
      </div>
      <p class="mt-2 text-lg ">
        Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken spare ribs salami.
      </p>
    </div>
  </div>
</div>

{/* other side */}
            <div className='bg-[#EC323B] py-5'>
            <span class="block text-lg text-center text-white">Copyright © 2015 - Dwidasa Samsara Indonesia
    </span>
            </div>
   
        </>
   
    );
};

export default Footer;