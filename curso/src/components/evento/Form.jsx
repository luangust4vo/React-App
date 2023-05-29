import { useState } from "react";

const Form = () => {
  const cadastrar = (e) => {
    e.preventDefault();
    console.log(`Nome: ${nome} \nSenha: ${senha}`);
    console.log("Cadastrado com sucesso!");
  };

  const [nome, setName] = useState();
  const [senha, setSenha] = useState();

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={cadastrar}>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Insira seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="pass"></label>
          <input
            type="password"
            id="pass
        "
            name="pass"
            placeholder="Insira sua senha"
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
