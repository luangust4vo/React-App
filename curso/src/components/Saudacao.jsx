const Saudacao = ({ nome }) => {
  const gerarSaudacao = (algumNome) => {
    return `Olá, ${algumNome}, saudações`;
  };
  return <p>{gerarSaudacao(nome)}</p>;
};

export default Saudacao;
