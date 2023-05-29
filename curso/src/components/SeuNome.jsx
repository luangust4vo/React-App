const SeuNome = ({ setNome }) => {
  return (
    <div>
      <p>Insira seu nome:</p>
      <input type="text" onChange={(e) => setNome(e.target.value)} />
    </div>
  );
};

export default SeuNome;
