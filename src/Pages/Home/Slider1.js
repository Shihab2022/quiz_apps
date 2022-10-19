import React from "react";
import image2 from '../../img/image2.png'
const Slider1 = () => {
  return (
    <div className="md:px-36 px-5  h-[80vh]  ">
      <section class=" body-font md:pt-24">
        <div class="container mx-auto flex  py-24 md:flex-row flex-col-reverse  items-center">
          <div class="lg:flex-grow md:w-2/5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-2  font-bold text-[#1F2E35]">
              Making the most of the <br /> ever-growing 
            </h1>
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#EE4248]">
              Information Technology 
            </h1>
            <p class="mb-8 leading-relaxed text-lg">
             Managed by a team of professional experts with extensive experience and impressive track records 
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-[#EE4248] border-0 py-2 px-6 focus:outline-none rounded ">
                Read More
              </button>
            </div>
          </div>

          <div class="lg:max-w-lg lg:w-full md:w-3/5 mb-5 md:mb-0  w-5/6">
            <img
              class="w-[1500px]"
              alt="hero"
              src={image2}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider1;
