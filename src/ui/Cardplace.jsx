import React from "react";

export default function Cardplace({ cls, title, des }) {
  return (
    <div className={cls}>
      <h3>{title}</h3>
      <p>{des}</p>
    </div>
  );
}
