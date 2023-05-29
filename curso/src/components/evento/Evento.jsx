import Button from "./Button";

const Evento = ({ numero }) => {
  const evento = () => {
    console.log("Ativado");
  };
  return (
    <>
      <p>Clique para disparar um evento</p>
      <Button text="Primeiro evento" event={evento} />
    </>
  );
};

export default Evento;
