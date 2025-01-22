import React from "react";
import image1 from "../assets/gallery/download (1).jfif";
import image2 from "../assets/gallery/download (2).jfif";
import image3 from "../assets/gallery/download (3).jfif";
import image4 from "../assets/gallery/download.jfif";
import image5 from "../assets/gallery/images.jfif";
export default function UploadImg() {
  return (
    <div className="gallery">
      <div className="gtext">
        <span>Our Gallery</span>
        <h4>Best Traveler Share A Photo</h4>
      </div>
      <div className="block">
        <div className="pics">
          <img src={image1} alt=""></img>
        </div>
        <div className="pics">
          <img src={image2} alt=""></img>
        </div>
        <div className="pics">
          <img src={image3} alt=""></img>
        </div>
        <div className="pics">
          <img src={image4} alt=""></img>
        </div>
        <div className="pics">
          <img src={image5} alt=""></img>
        </div>
        <div id="addpic" className="pics">
          <i className="fa-solid fa-plus"></i>
          <span>Add pics</span>
        </div>
      </div>
    </div>
  );
}
