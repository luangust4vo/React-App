import { Card } from "./Card";
import { Droppable } from "react-beautiful-dnd";

export const List = ({ lists }) => {
  return (
    <>
      {lists.map((list, index) => (
        <div key={index} className="List">
          <h2>{list.name}</h2>
          <div className="list-wrapper">
            <Card cards={list.cards} />
          </div>
        </div>
      ))}
    </>
  );
};
