import React from 'react';
import image1 from '../../img/image6.jpg'

const Slider2 = () => {
    return (
        <div className='md:px-36 px-5 bg-[#F7F7F7] '>
            <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={image1}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to <span className='text-[#EE4248]'> Dwidasa Samsara  <br class="hidden lg:inline-block"/>Indonesia (DSI)</span> 
        
      </h1>
      <p class="mb-8 text-lg leading-relaxed">Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders , who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span className='text-[#EE4248] text-xl font-bold'>DSI</span>,s distinct front-end based application concept . </p>

      <p className=' text-lg'>Managed by team of professional experts with extensive experience and impressive track  , <span className='text-[#EE4248] text-xl font-bold'>DSI</span>  believes that continuous improvement and innovations assure your business to run effectively and efficiently .</p>
    </div>
  </div>
</section>
        </div>
    );
};

export default Slider2;