import "./register.scss";

export const Register = () => {
  return (
    <>
      <div className="register">
        <div className="card">
          <div className="left">
            <h1>Olá! É um prazer ter você por aqui! 😁</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              aliquam!
            </p>
            <span>Já possui uma conta?</span>
            <button>Entre</button>
          </div>
          <div className="right">
            <h1>Cadastre-se</h1>
            <form>
              <input type="text" placeholder="Crie um nome de usuário" />
              <input type="text" placeholder="Insira seu melhor email" />
              <input type="password" placeholder="Insira uma senha" />
              <input type="password" placeholder="Confirme a senha" />
              <button>Cadastrar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
