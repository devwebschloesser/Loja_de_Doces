import React, { useState } from "react";


const TravessasDoces = () => {
  // Array de pares [imagemOriginal, imagemHover]
  const images = [
    { original: "/Screenshot_20250115-144010~2.jpg", hover: "/Screenshot_20250115-144436~2.jpg" },
    { original: "/Screenshot_20250115-143943~2.jpg", hover: "/Screenshot_20250115-144748~2.jpg" },
    { original: "/Screenshot_20250115-143933~2.jpg", hover: "/Screenshot_20250115-145602~2.jpg" },
    { original: "/Screenshot_20250115-144001~2.jpg", hover: "/Screenshot_20250115-145720~2.jpg" },
    { original: "/Screenshot_20250115-143952~2.jpg", hover: "/Screenshot_20250115-143922~2.jpg" },
    { original: "/Screenshot_20250115-144001~2.jpg", hover: "/Screenshot_20250115-145653~2.jpg" },
    { original: "/Screenshot_20250115-143922~2.jpg", hover: "/Screenshot_20250115-144453~2.jpg" },
    { original: "/Screenshot_20250115-144010~2.jpg", hover: "/Screenshot_20250115-143933~2.jpg" },
  ];

  // Estado para controlar a imagem ativa (opcional para o preview principal)
  const [currentImage, setCurrentImage] = useState(null);

  return (
    <div className="produtos-container-bolos">
      {images.map((image, index) => (
        <div key={index} className="produtos-bolos" >
          {/* Cada imagem individual */}
          <img
            src={currentImage === index ? image.hover : image.original} // Mostra a imagem correta
            alt={`Imagem ${index + 1}`}
            onMouseEnter={() => setCurrentImage(index)} // Altera para a imagem "hover"
            onMouseLeave={() => setCurrentImage(null)} // Volta para a imagem original
      
          />
        </div>
      ))}
    </div>
  );
};

export default TravessasDoces;