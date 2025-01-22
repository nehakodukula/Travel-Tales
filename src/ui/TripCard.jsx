import React from "react";
import kyoto from "../assets/seasons/kyoto.jfif";
import amstradem from "../assets/seasons/amstradem.jfif";
import venice from "../assets/seasons/venice.jpg";
import hawaii from "../assets/seasons/hawaii.jfif";
import florida from "../assets/seasons/florida.jfif";
import portugal from "../assets/seasons/portugal.jfif";
import maldives from "../assets/seasons/maldives.jfif";
import greece from "../assets/seasons/greece.jfif";
import iceland from "../assets/seasons/iceland.jfif";
import gulmarg from "../assets/seasons/gulmarg.jfif";
import switzerland from "../assets/seasons/switzerland.jfif";
import finland from "../assets/seasons/finland.jfif";

export function Trip({ id, cls, src, title, clsbtn, rating }) {
  return (
    <div id={id} className={cls}>
      <div className="imgs">
        <img src={src} alt=""></img>
      </div>
      <h6>{title}</h6>
      <button className={clsbtn}>Book Now</button>
      <div className="rating">
        <i className="fa-regular fa-star"></i>
        {rating}
      </div>
    </div>
  );
}

const spring = [
  {
    id: "kyoto",
    src: kyoto,
    city: "Kyoto, Japan",
    rating: "4.7",
  },
  {
    id: "amstradem",
    src: amstradem,
    city: "Amstradem, Netherlands",
    rating: "4.5",
  },
  {
    id: "venice",
    src: venice,
    city: "Venice, Italy",
    rating: "4.1",
  },
];
const fall = [
  {
    id: "Hawaii",
    src: hawaii,
    city: "Hawaii",
    rating: "4.7",
  },
  {
    id: "florida",
    src: florida,
    city: "Orlando, Florida",
    rating: "4.5",
  },
  {
    id: "portugal",
    src: portugal,
    city: "Algarve, Portugal",
    rating: "4.1",
  },
];
const summer = [
  {
    id: "maldives",
    src: maldives,
    city: "Maldives",
    rating: "4.7",
  },
  {
    id: "greece",
    src: greece,
    city: "Greece",
    rating: "4.5",
  },
  {
    id: "iceland",
    src: iceland,
    city: "Iceland",
    rating: "4.1",
  },
];
const winter = [
  {
    id: "gulmarg",
    src: gulmarg,
    city: "Gulmarg, Kashmir",
    rating: "4.7",
  },
  {
    id: "switzerland",
    src: switzerland,
    city: "Zermatt, Switzerland",
    rating: "4.5",
  },
  {
    id: "finland",
    src: finland,
    city: "Lapland, Finland",
    rating: "4.1",
  },
];

export function SpringCard() {
  return spring.map((value, index) => (
    <Trip
      key={index}
      id={value.id}
      cls="springbox"
      src={value.src}
      title={value.city}
      clsbtn="springbutton"
      rating={value.rating}
    />
  ));
}
export function FallCard() {
  return fall.map((value, index) => (
    <Trip
      key={index}
      id={value.id}
      cls="fallbox"
      src={value.src}
      title={value.city}
      clsbtn="fallbutton"
      rating={value.rating}
    />
  ));
}
export function SummerCard() {
  return summer.map((value, index) => (
    <Trip
      key={index}
      id={value.id}
      cls="summerbox"
      src={value.src}
      title={value.city}
      clsbtn="summerbutton"
      rating={value.rating}
    />
  ));
}
export function WinterCard() {
  return winter.map((value, index) => (
    <Trip
      key={index}
      id={value.id}
      cls="winterbox"
      src={value.src}
      title={value.city}
      clsbtn="winterbutton"
      rating={value.rating}
    />
  ));
}
