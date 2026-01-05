
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Contato from "./pages/contato";
import ProdutoDetalhes from "./pages/produtosDetalhes";
import Cardapio from "./pages/cardapio";


const App = () => {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio/>} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/produtos/:id" element={<ProdutoDetalhes />} /> {/* Rota dinâmica */}
          
      
         
        </Routes>
      </BrowserRouter>

     
    </>
  );
};

export default App;
