import React, { useState } from "react";


const TortasDoces = () => {
  // Array de pares [imagemOriginal, imagemHover]
  const images = [
    { original: "/Screenshot_20250115-144211~2.jpg", hover: "/Screenshot_20250115-144147~2.jpg" },
    { original: "/Screenshot_20250115-144302~2.jpg", hover: "/Screenshot_20250115-144251~2.jpg" },
    { original: "/Screenshot_20250115-144132~2.jpg", hover: "/Screenshot_20250115-144220~2.jpg" },
    { original: "/Screenshot_20250115-143353~2.jpg", hover: "/Screenshot_20250115-143402~2.jpg" },
    { original: "/Screenshot_20250115-144041~2.jpg", hover: "/Screenshot_20250115-144050~2.jpg" },
    { original: "/Screenshot_20250115-143233~2.jpg", hover: "/Screenshot_20250115-143242~2.jpg" },
    { original: "/Screenshot_20250115-143204~2.jpg", hover: "/Screenshot_20250115-143214~2.jpg" },
    { original: "/Screenshot_20250115-143353~2.jpg", hover: "/Screenshot_20250115-143402~2.jpg" },
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

export default TortasDoces;