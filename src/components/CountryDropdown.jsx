import React, { useContext, useState } from "react";

import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
// import Menu from headless Ui React
import { Menu } from "@headlessui/react";

// import house Context
import { HouseContext } from "./HouseContext";

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  console.log(countries);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu data-aos="zoom-in-up" as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn text-left w-full"
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="font-medium text-[15px] ">{country}</div>
          <div className="text-[13px">Locate Your State</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {countries.map((country, index) => {
          return (
            <Menu.Item
              onClick={() => setCountry(country)}
              as="li"
              key={index}
              className="cursor-pointer hover:text-violet-700 transition"
            >
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
