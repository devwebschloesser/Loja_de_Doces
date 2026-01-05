import React from "react";
import Menu from "../components/menu";
import axios from "axios";
import { useState, useEffect } from "react";
import Banner from "../components/banner";
import Post from "../components/post";
import { useNavigate } from "react-router-dom";
import Logo from "../components/logo";
import Whatsapp from "../components/whatsapp";

const Home = () => {
  const [produtos, setProdutos] = useState([]);

  // Fazendo a requisição para a API
  useEffect(() => {
    axios
      .get("https://api-doces-qgua.onrender.com/produtos")
      .then((response) => {
        setProdutos(response.data); // Armazena a lista de produtos no estado
      })
      .catch((error) => {
        console.error("Houve um erro ao buscar os produtos:", error);
      });
  }, []);

  const navigate=useNavigate()

  

  return (
    <>
      <Menu />

     <Logo/>

      <Banner />

      <div className="container-img">
        <img className="imagem"
          src="/Bolo Kit Kat Brigadeiro Morango (1).png"
          alt="imagem-bolo"
        ></img>
        <p className="texto">
          Deliciosamente recheados e com muito sabor, cada um de nossos bolos é
          criado para proporcionar mais amor e carinho para todas as ocasiões.
        </p>
      </div>

      <Post/>

      <div id="produtos-container">
        {produtos.map((produto) => (
          <div key={produto.id} className="produto">
            <h2>{produto.name}</h2>
            <img
               src={`https://api-doces-qgua.onrender.com${produto.image}`}
               alt={produto.name}
            ></img>
            <p>Preço: R${produto.price}</p>
            <p>{produto.description}</p>
            <button onClick={() => navigate(`/produtos/${produto.id}`)}>Eu quero</button>
          </div>
        ))}
      </div>

      <Whatsapp/>

  
      
    </>
  );
};

export default Home;



