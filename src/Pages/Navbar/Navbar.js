import React from "react";
import { Link } from "react-router-dom";
import { FaRegEnvelopeOpen ,FaRegEnvelope,FaXing,FaAlignRight} from "react-icons/fa";

const Navbar = () => {
    const menuItems=[
        {name : "Services" , path:'/' ,id:'1'},
        {name : "Product" , path:'/' ,id:'2'},
        {name : "Technology" , path:'/' ,id:'3'},
        {name : "About" , path:'/' ,id:'4'},
        {name : "Client" , path:'/' ,id:'5'},
        {name : "Partner" , path:'/' ,id:'6'}
    ]
  return (
    <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div class="container flex md:px-24 flex-wrap justify-between items-center mx-auto">
        <h className="text-5xl font-extrabold">
          <span className="text-[#85171A]">D</span>
          <span className="text-[#DC2025]">S</span>
          <span className="text-[#FEBA08]">I</span>
        </h>
        <div class="flex md:order-2">
       <div className="flex text-xl text-zinc-700">
        <FaRegEnvelopeOpen/>
        <FaRegEnvelope className="mx-4"/>
        <FaXing/>
       </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <FaAlignRight/>
          </button>
        </div>
        <div
          class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 ">
          
            {
                menuItems.map(item=>  <li className="md:px-6 text-lg" key={item.id}>
                    <Link to={item.path}
                      href="#"
                      class="block py-2 pr-4  pl-3 text-zinc-700 md:p-0 "
                      aria-current="page"
                    >
                     {item.name}
                    </Link>
                  </li>)
            }
        
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
