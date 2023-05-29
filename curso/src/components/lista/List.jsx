import ItemLista from "./ItemLista";

const List = () => {
  return (
    <>
      <h1>Uma Lista</h1>
      <ul>
        <ItemLista marca="Ferrari" ano_lancamento={1985} />
        <ItemLista marca="Fiat" ano_lancamento={1964} />
        <ItemLista marca="Renault" />
        <ItemLista />
      </ul>
    </>
  );
};

export default List;
