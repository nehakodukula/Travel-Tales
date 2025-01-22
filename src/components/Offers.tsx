import React from "react";

export default function Offers() {
  const offers = [
    {
      icon: "fa-solid fa-earth-americas",
      text: "Different countries",
    },
    {
      icon: "fa-solid fa-bus",
      text: "Bus Tours",
    },
    {
      icon: "fa-solid fa-bowl-food",
      text: "Food Tours",
    },
    {
      icon: "fa-regular fa-sun",
      text: "Summer Rest",
    },
    {
      icon: "fa-solid fa-ship",
      text: "Ship Cruises",
    },
    {
      icon: "fa-solid fa-mountain",
      text: "Mountains Tourss",
    },
  ];
  return (
    <div className="offers">
      <div className="text">
        <h1>explore</h1>
      </div>
      <h4>Select Offers for Traveling</h4>
      <div className="icons">
        {offers.map((value, index) => (
          <div key={index} className="icon">
            <i className={value.icon}></i>
            <p>{value.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
