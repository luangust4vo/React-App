import { useState } from "react";

const Condicional = () => {
  const [email, setEmail] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const enviarEmail = (e) => {
    e.preventDefault();
    setUserEmail(email);
  };
  const apagarEmail = () => {
    setUserEmail("");
  };
  return (
    <div>
      <h2>Cadastre o seu e-mail</h2>
      <form>
        <input
          type="email"
          placeholder="Digite o seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={enviarEmail}>
          Enviar e-mail
        </button>
        {userEmail && (
          <div>
            <p>O email do usuário é: {userEmail}</p>
            <button onClick={apagarEmail}>Apagar e-mail</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Condicional;
