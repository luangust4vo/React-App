import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

export const Card = ({ cards }) => {
  return (
    <>
      {cards.map((card, index) => (
        <div key={index} className="card">
          {card.content}
        </div>
      ))}
    </>
  );
};
