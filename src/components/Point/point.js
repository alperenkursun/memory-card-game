import React from "react";
import { useSelector } from "react-redux";
import { pointSelector } from "../../redux/cards/cardsSlice";

const PointDisplay = () => {
  const point = useSelector(pointSelector);

  return (
    <div className="content-top-left">
      <span>Point:</span>
      <span>{point}</span>
    </div>
  );
};

export default PointDisplay;
