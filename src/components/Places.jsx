import React from "react";
import Cardplace from "../ui/Cardplace";

export default function Places() {
  return (
    <div className="places">
      <Cardplace
        cls="p1"
        title="London"
        des="London is the epitome of timeless elegance and modern charm"
      />
      <Cardplace
        cls="p2"
        title="Australia"
        des="Come for the beaches, stay for the culture."
      />
      <Cardplace
        cls="p3"
        title="India"
        des="India:where spirituality meets reality."
      />
      <Cardplace cls="p4" title="Brazil" des="In Brazil, life is a carnival." />
      <Cardplace
        cls="p5"
        title="Japan"
        des="Japan's beauty lies in its simplicity."
      />
      <Cardplace cls="p6" title="Paris" des="Off to the city of Love!" />
    </div>
  );
}
