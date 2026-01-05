import React from "react";
import Menu from "../components/menu";
import Logo from "../components/logo";
import ImageSwitcher from "../components/imageSwitcher";
import TravessasDoces from "../components/travessasDoces";
import Whatsapp from "../components/whatsapp";
import TortasDoces from "../components/tortasDoces";

const Cardapio = () => {
  return (
    <>
      <Menu />
      <Logo />

      <div className="container-descricao-cardapio">
        <p>
          Transforme sua festa em um momento inesquecível! Surpreenda seus
          convidados com nossos bolos recheados de chocolate, feitos com os
          melhores ingredientes e muito amor! Temos sabores irresistíveis para
          todos os gostos: do clássico brigadeiro ao sofisticado chocolate
          trufado. Encomendas personalizadas para festas, eventos ou aquele
          momento especial. Faça já a sua encomenda e garanta o sabor que vai
          conquistar todos os paladares!Entre em contato e leve doçura e
          qualidade para sua celebração!
        </p>
        <img
          src="/Screenshot_20250115-124542~2.jpg"
          className="image-bolo-descricao"
        ></img>
      </div>

      <ImageSwitcher />

      <div className="container-descricao-cardapio">
        <p>
          Doces que encantam em cada colherada! Nossas travessas recheadas são
          pura indulgência: camadas generosas de cremosidade e sabores
          irresistíveis para adoçar qualquer ocasião! Sabores variados para
          todos os gostos chocolate, morango, leite ninho e muito mais!
          Perfeitas para festas, reuniões ou aquele momento especial em família.
          Peça agora e leve o sabor da felicidade para sua mesa!
        </p>
        <img src="/Travessas.jpg" className="image-bolo-descricao"></img>
      </div>

      <TravessasDoces />

      <div className="container-descricao-cardapio">
        <p>
          A doçura que derrete na boca! Nossas tortas doces são um verdadeiro
          convite ao prazer. Com recheios cremosos, coberturas irresistíveis e
          aquele toque especial, cada fatia é uma experiência única de sabor!
          Sabores para todos os gosto chocolate, frutas vermelhas, limão e muito
          mais. Perfeitas para qualquer ocasião: desde comemorações especiais
          até aquele momento de indulgência no dia a dia. Peça já a sua e torne
          o seu dia ainda mais doce!
        </p>
        <img className="image-bolo-descricao"
        src="/Screenshot_20250115-150124~2.jpg"></img>
      </div>
      
      <TortasDoces/>
      <Whatsapp />
    </>
  );
};

export default Cardapio;
