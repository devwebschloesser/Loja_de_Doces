import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProdutoDetalhes = () => {
  const { id } = useParams(); // Pega o ID da URL
  const [produto, setProduto] = useState(null); // Inicializa como `null` para representar ausência de dados

  // Fazendo a requisição para buscar o produto pelo ID
  useEffect(() => {
    axios
      .get(`http://localhost:3000/produtos/${id}`)
      .then((response) => {
        console.log(response.data);
        setProduto(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar o produto:", error);
      });
  }, [id]);

  // Verifica se o produto ainda está carregando
  if (!produto) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <div className="produto">
        <h1>{produto.name}</h1>
        <img src={`http://localhost:3000${produto.image}`} alt={produto.name} />
        <p>Preço: R${produto.price}</p>
        <p>{produto.description}</p>
      </div>
    </div>
  );
};

export default ProdutoDetalhes;
