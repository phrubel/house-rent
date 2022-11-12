import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import house Context
import { HouseContext } from "./HouseContext";

import House from "../components/House";

// import loading gif
import loadingGif from "../assets/img/loading.gif";
import notFound from "../assets/img/not-found.gif";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  // if loading true
  if (loading) {
    return (
      <img
        src={loadingGif}
        className="mx-auto animate-spin text-amber-400 text-4xl mt-[200px]"
        alt=""
      />
    );
  }

  // if not get house
  if (houses.length < 1) {
    return  <img
    src={notFound}
    className="mx-auto rounded-lg text-2xl mt-[200px]"
    alt=""
  />;
  }

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
