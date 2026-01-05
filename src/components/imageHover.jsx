import React, { useState } from "react";



const ImageHover = () => {
    const imagem1="/bolo-decorado-com-morango-30.png"
    const imagem2="/capa.png"



    const [imagemAtual, setImagemAtual]= useState(imagem1)

    const trocarParaImagem2 = () => setImagemAtual(imagem2);
    const voltarParaImagem1 = () => setImagemAtual(imagem1);
    return ( 
        <>
         <div>
      <img
        src={imagemAtual}
        alt="Imagem"
        onMouseEnter={trocarParaImagem2} // Troca para a segunda imagem ao passar o mouse
        onMouseLeave={voltarParaImagem1} // Volta para a primeira imagem ao tirar o mouse
        style={{ width: '300px', height: '200px' }} // Define o tamanho da imagem
      />
    </div>
        </>
     );
}
 
export default ImageHover;