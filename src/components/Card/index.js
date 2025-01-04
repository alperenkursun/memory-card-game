import React from "react";

function Card({ card }) {
  return (
    <button key={card.id} className="card ">
      <img src={card.url} alt={`Card`} />
    </button>
  );
}

export default Card;
