import React from "react";
import { FaForumbee, FaLayerGroup, FaCannabis } from "react-icons/fa";

const Card = () => {
  const cardData = [
    {
      name: "Our Product",
      description:
        "Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.",
      icon: <FaForumbee />,
      id: 1,
    },
    {
      name: "Our Service",
      description: `DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.`,
      icon: <FaLayerGroup />,
      id: 2,
    },
    {
      name: "Our Technology",
      description:
        "First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.",
      icon: <FaCannabis />,
      id: 3,
    },
  ];
  return (
    <div className="md:px-36 px-5  my-10  ">
      <h1 className="text-3xl font-bold my-10 text-center">
        Product and Service
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {cardData.map((data) => (
          <div class="max-w-sm p-5  border-2 border-red-300">
            <div className="pl-5 text-4xl text-[#EC323B]">
              {data.icon}
            </div>
            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold text-[#EC323B] ">
                  {data.name}
                </h5>
              <p class="mb-5 font-normal text-lg">{data.description}</p>
              <button class="inline-flex text-white bg-[#EE4248] border-0 py-2 px-6 focus:outline-none rounded ">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
