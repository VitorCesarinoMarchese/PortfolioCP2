import ColdeLabs from "../assets/ColdeLabs.png";
import Floricultura from "../assets/Floricultura.png";
import Projeto from "./Projeto";

function Projetos() {
  return (
    <div className="flex flex-col gap-5" id="Projetos">
      <h2 className="font-bold text-blue text-4xl">Meus Projetos</h2>
      <Projeto
        url="coldelabs.web.app"
        img={ColdeLabs}
        title={"ColdeLabs"}
        desc="A Codelabs é uma plataforma educacional que torna o aprendizado de
              programação envolvente e acessível para crianças e professores,
              com metodologia comparativa e funcionalidades gamificadas."
      />
      <Projeto
        url="https://rosemarry-8b3cd.web.app/"
        img={Floricultura}
        title={"RoseMarry"}
        desc="Um site em que utilizei sua criacao para aprender o basico de como
              React e Sass funcionam, utilizando o react-router-dom para
              gerenciar as rotas."
      />
    </div>
  );
}
export default Projetos;
