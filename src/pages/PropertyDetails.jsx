import React from "react";

// import data
import { housesData } from "../data";

// import icon
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";

const PropertyDetails = () => {
  const { id } = useParams();

  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-semibold text-2xl">{house.name}</h2>
            <h3 className="text-lg mb-4">{house.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="text-white bg-purple-500 px-3 rounded-full">
              {house.type}
            </div>
            <div className="text-white bg-yellow-500 px-3 rounded-full">
              {house.country}
            </div>
          </div>
          <div className="text-3xl font-semibold text-green-500">
            $ {house.price}
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row ">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="max-w-[768px]"
          >
            <div className="mb-8">
              <img className="rounded-lg" src={house.imageLg} alt="" />
            </div>
            <div className="flex gap-x-6 text-rose-500 mb-6">
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-2xl font-semibold" />
                <div className="text-purple-600">{house.bedrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiBath className="text-2xl font-semibold" />
                <div className="text-purple-600">{house.bathrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiArea className="text-2xl font-semibold" />
                <div className="text-purple-600">{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className=" flex-1 bg-pink-100 mb-8 w-full border border-gray-300 px-6 py-8 shadow rounded-lg"
          >
            <div className="flex gap-x-4 items-center mb-8">
              <div className="w-20 h-20 border border-yellow-500 p-1 rounded-full">
                <img src={house.agent.image} alt="" />
              </div>
              <div>
                <div className="font-bold text-lg">{house.agent.name}</div>
                <Link to=" " className=" text-rose-500 text-sm">
                  Viewed Listing...
                </Link>
              </div>
            </div>
            <form className="flex flex-col gap-y-4">
              <input
                className="border border-gay-300 focus:border-rose-500 outline-none rounded w-full px-4 h-14 text-sm"
                placeholder="Name*"
              />
              <input
                className="border border-gay-300 focus:border-rose-500 outline-none rounded w-full px-4 h-14 text-sm"
                placeholder="Email*"
              />
              <input
                className="border border-gay-300 focus:border-rose-500 outline-none rounded w-full px-4 h-14 text-sm"
                placeholder="Phone*"
              />
              <textarea
                className="border border-gray-300 focus:border-rose-400 w-full outline-none resize-none rounded p-4 h-36 text-sm text-gray-400"
                placeholder="Message*"
                defaultValue="Hello, I am Interested in [ Apartment]"
              ></textarea>
              <div className="flex gap-x-2">
                <button className="bg-rose-500 text-white text-sm p-4 hover:bg-rose-700 w-full transition">
                  Send Message
                </button>
                <button className="border border-yellow-500 text-cyan-300 hover:border-yellow-700 hover:text-cyan-400 transition text-sm w-full p-4">
                  Call Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
