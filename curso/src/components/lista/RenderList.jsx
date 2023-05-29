const RenderList = ({ itens }) => {
  return (
    <>
      <h3>Lista de ferramentas de desenvolvimento web:</h3>
      {itens.length > 0 ? (
        itens.map((item, index) => <p key={index}>{item}</p>)
      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
};

export default RenderList;
