import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { List } from "../components/List";
import { v4 as uuid } from "uuid";
uuid();

const itens = [
  {
    id: uuid(),
    content: "Conteúdo",
  },
  {
    id: uuid(),
    content: "Conteúdo",
  },
  {
    id: uuid(),
    content: "Conteúdo",
  },
];

const columns = [
  {
    id: uuid(),
    name: "To Do",
    cards: itens,
  },
];

const Home = () => {
  const [lists, setLists] = useState(columns);
  return (
    <div className="App">
      <List lists={lists} />
    </div>
  );
};

export default Home;
