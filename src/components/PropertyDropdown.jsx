// import Menu from headlessUi
import { Menu } from "@headlessui/react";
import React, { useContext, useState } from "react";
import { RiHome5Line, RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
// import house context
import { HouseContext } from "./HouseContext";

const PropertyDropdown = () => {
  // import from context provider
  const { property, setProperty, properties } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu data-aos="zoom-in-down" as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn text-left w-full"
      >
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <div className="font-medium text-[15px] ">{property}</div>
          <div className="text-[13px">Select Your Choice</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {properties.map((property, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(property)}
              as="li"
              key={index}
              className="cursor-pointer hover:text-violet-700 transition"
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
