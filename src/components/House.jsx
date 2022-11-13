import React from "react";

// import icon
import { BiBed, BiBath, BiArea,BiDollarCircle } from "react-icons/bi";

const House = ({ house }) => {
  // props data
  const { image, price, type, country, address, bedrooms, bathrooms, surface } =
    house;

  return (
    <div className="p-5 shadow-3 bg-white rounded-lg rounded-tl-[90px] w-full max-w-[392px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-8" src={image} alt="" />
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-yellow-500 text-white px-3 rounded-full">{type}</div>
        <div className="bg-sky-500 text-white px-3 rounded-full">{country}</div>
      </div>
      <div className="font-semibold max-w-[260px]">{address}</div>
      <div className="flex gap-x-4 my-4">
        <div className="flex gap-1 items-center text-purple-600">
          <div className="text-[20px]">
            <BiBed />
          </div>
          <div>{bedrooms}</div>
        </div>
        <div className="flex gap-1 items-center text-purple-600">
          <div className="text-[20px]">
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className="flex gap-1 items-center text-purple-600">
          <div className="text-[20px]">
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className="font-semibold flex gap-1 items-center text-rose-500 mb-4"><BiDollarCircle/>{price}</div>
    </div>
  );
};

export default House;
