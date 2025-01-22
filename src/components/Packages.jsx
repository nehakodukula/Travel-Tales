import React from "react";
import rome from "../assets/packages/rome.jfif";
import paris from "../assets/packages/france.jfif";
import tornoto from "../assets/packages/toronto.jfif";
import dubai from "../assets/packages/dubai.jfif";
import bali from "../assets/packages/bali.jfif";
import newyork from "../assets/packages/newyork.jfif";
import maldives from "../assets/packages/maldives.jfif";
import barcelona from "../assets/packages/barcelona.jfif";

export default function Packages() {
  const filter = ["Luxury", "Premium", "Standard"];
  const cities = [
    {
      src: rome,
      location: "Rome",
      time: "19 Days",
      cls: "Premium",
      head: "Rome, Italy",
      cost: "$41000",
    },
    {
      src: paris,
      location: "Paris",
      time: "21 Days",
      cls: "Luxury",
      head: "Paris, France",
      cost: "$23000",
    },
    {
      src: tornoto,
      location: "Toronto",
      time: "35 Days",
      cls: "Luxury",
      head: "Toronto, Canada",
      cost: "$46000",
    },
    {
      src: dubai,
      location: "Dubai",
      time: "9 Days",
      cls: "Premium",
      head: "Dubai, UAE",
      cost: "$20000",
    },
    {
      src: bali,
      location: "Bali",
      time: "12 Days",
      cls: "Luxury",
      head: "Bali, Indonesia",
      cost: "$20000",
    },
    {
      src: newyork,
      location: "Newyork",
      time: "15 Days",
      cls: "Premium",
      head: "New York, USA",
      cost: "$61000",
    },
    {
      src: maldives,
      location: "Maldives",
      time: "11 Days",
      cls: "Standard",
      head: "Maldives, Italy",
      cost: "$25000",
    },
    {
      src: barcelona,
      location: "Barcelona",
      time: "29 Days",
      cls: "Premium",
      head: "Barcelona, Spain",
      cost: "$51000",
    },
  ];
  return (
    <div className="packages">
      <span>
        <p>Get To Know yourself by...</p>
      </span>
      <span>
        <h6>Exploring The World</h6>
      </span>
      <div className="filter">
        {filter.map((value, index) => (
          <>
            <input key={index} type="radio" value={value} />
            <label htmlFor={value}>{value}</label>
          </>
        ))}
      </div>
      <div className="cities">
        {cities.map((value, index) => (
          <div key={index} className="pack">
            <img src={value.src} alt="" />
            <button className="location">
              <i className="fa-sharp fa-solid fa-location-dot"></i>
              {value.location}
            </button>
            <div className="label">
              {value.time}
              <span>{value.cls}</span>
            </div>
            <h5>{value.head}</h5>
            <div className="cost">
              {value.cost}
              <button className="cb">Expires Soon</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
