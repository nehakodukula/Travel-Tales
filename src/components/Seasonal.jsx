import React from "react";
import { FallCard, SpringCard, SummerCard, WinterCard } from "../ui/TripCard";

export default function Seasonal() {
  return (
    <div className="seasons">
      <p>Best time of the year.</p>
      <h2>Choose the best locations according to the seasons.</h2>
      <div className="spring">
        <SpringCard />
        <div className="springtext">
          <h1>Spring</h1>
          <h6>Spring is nature's way of saying, 'Let's party!</h6>
        </div>
      </div>
      <div className="fall">
        <FallCard />
        <div className="falltext">
          <h1>Fall</h1>
          <h6>
            “The flame-red moon, the harvest moon, rolls along the hills, gently
            bouncing, a vast balloon.”
          </h6>
        </div>
      </div>
      <div className="summer">
        <SummerCard />
        <div className="summertext">
          <h1>Summer</h1>
          <h6>
            "Summer means happy times and good sunshine. It means going to the
            beach, going to Disneyland, having fun."
          </h6>
        </div>
      </div>
      <div className="winter">
        <WinterCard />
        <div className="wintertext">
          <h1>Winter</h1>
          <h6>
            "What good is the warmth of summer, without the cold of winter to
            give it sweetness.
          </h6>
        </div>
      </div>
    </div>
  );
}
