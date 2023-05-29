import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contato from "./pages/Contato";
import Empresa from "./pages/Empresa";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/empresa" element={<Empresa />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
