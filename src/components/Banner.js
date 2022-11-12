import React from "react";

import banner from "../assets/img/house-banner.png";
import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[600px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-4 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-content flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
           
            Rent <span className="text-violet-700"> Your Dream House.</span>
          </h1>
          <p className="max-w-[480px] mb-8 text-justify ml-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            aspernatur laudantium distinctio recusandae, fuga in ipsam est
            consequuntur laborum? Minus labore sit voluptate repellendus aliquam
            possimus libero officia ex minima.
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end ">
          <img src={banner} alt="" />
        </div>
      </div>
      <Search/>
    </section>
  );
};

export default Banner;
