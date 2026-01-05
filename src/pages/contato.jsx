import Menu from "../components/menu";
import Logo from "../components/logo";
import Whatsapp from "../components/whatsapp";

const Contato = () => {
  return (
    <>
      <Menu />
      <Logo />

      <div className="sobre-projeto-linkdin">
        <p>
          Gostou do meu trabalho? Estou sempre em busca de novas oportunidades
          para colaborar em projetos desafiadores e criativos! Seja para
          desenvolver um site, criar soluções personalizadas ou trazer inovação
          para sua equipe, estou pronta para ajudar! Recrutadores: Se procura
          alguém apaixonada por tecnologia, com experiência em React.js,
          Node.js, API development e um olhar especial para detalhes, não deixe
          de entrar em contato! Vamos conversar? Estou disponível no linkdin e
          no whatsapp
        </p>
        <a href="https://www.linkedin.com/in/devwebschloesser/">
          <img className="linkdin-sobre" src="/images (1).png"></img>
        </a>
      </div>

      <Whatsapp />
    </>
  );
};

export default Contato;
