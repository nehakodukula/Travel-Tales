import React from "react";

export default function Navbar() {
  const nav = ["Home", "Packages", "Tours", "Blog", "Offers", "More"];
  return (
    <nav>
      <span class="icon">TravelTales.com</span>
      <ol>
        {nav.map((value, index) => (
          <li key={index}>
            <a href="#">{value}</a>
          </li>
        ))}
      </ol>
      <button id="b">Signin/Register</button>
    </nav>
  );
}
