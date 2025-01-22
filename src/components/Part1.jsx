import React from "react";

export default function Part1() {
  const bookings = [
    {
      type: "country",
      placeholder: "Destination",
      value: "Your Destination",
    },
    {
      type: "date",
      placeholder: "Check in",
      value: "Check in",
    },
    {
      type: "date",
      placeholder: "Check out",
      value: "Check out",
    },
    {
      type: "number",
      placeholder: "0",
      value: "Child",
    },
    {
      type: "number",
      placeholder: "0",
      value: "Adults",
    },
  ];
  return (
    <div class="part1">
      <div class="text">
        <h1>travel</h1>
      </div>
      <h2>"The world is yours to explore."</h2>
      <h2>
        "The most beautiful in the world is, of course, the world itself".
      </h2>
      <button id="Button1" class="b">
        Get Exploration
      </button>
      <button id="Button2" class="b">
        Read More
      </button>
      <div class="img"></div>
      <div class="mode">
        <h5>Flight</h5>
        <h5>Car</h5>
        <h5>Train</h5>
        <h5>Ship</h5>
      </div>
      <div class="bookingbar">
        {bookings.map((data, index) => (
          <span key={index}>
            <input type={data.type} placeholder={data.placeholder} />
            <h4>{data.value}</h4>
          </span>
        ))}
        <button class="Book" id="Booknow">
          Book Now
        </button>
      </div>
    </div>
  );
}
