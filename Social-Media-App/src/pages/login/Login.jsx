import "./login.scss";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <div className="login">
        <div className="card">
          <div className="left">
            <h1>Que bom ter você de volta! 😄</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              aliquam!
            </p>
            <span>Não possui uma conta?</span>
            <Link to="/register">
              <button>Cadastre-se</button>
            </Link>
          </div>
          <div className="right">
            <h1>Entrar</h1>
            <form>
              <input type="text" placeholder="Nome de usuário" />
              <input type="password" placeholder="Insira sua senha" />
              <button>Entrar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
