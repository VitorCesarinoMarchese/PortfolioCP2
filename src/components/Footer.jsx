import { CaretUp, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {

  return (
    <footer className="w-full">
      <div className="flex justify-evenly p-10 mt-8 w-full border-t-2 border-t-blue h-52" id="Contatos">
        <span className="text-blue font-bold text-4xl max-w-60">Vitor Cesarino Marchese</span>
        <ul className="flex flex-col gap-4">
          <li>
            <p className="text-blue font-bold text-xl">Navegacao</p>
          </li>
          <li>
            <a href="#Sobre">Sobre</a>
          </li>
          <li>
            <a href="#Projetos">Meus Projetos</a>
          </li>
          <li>
            <a href="#">
              <CaretUp size={32} color="#53a8b2" />
            </a>
          </li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li>
            <p className="text-blue font-bold text-xl">Contatos</p>
          </li>
          <li>
            <p className="font-bold">Telefone:</p><p>{"(11)"} 98755-1050</p>
          </li>
          <li>
            <p className="font-bold">Email:</p>
            <p>vitorcesarino1@gmail.com</p>
          </li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li>
            <p className="text-blue font-bold text-xl">Social</p>
          </li>
          <li className="flex gap-2">
            <a
              href="https://github.com/VitorCesarinoMarchese"
              target="_blank"
              className="github"
            >
              <GithubLogo size={32} color="#53a8b2" weight="fill" />
            </a>
            <a
              href="https://www.linkedin.com/in/vitor-cesarino/"
              target="_blank"
            >
              <LinkedinLogo size={32} color="#53a8b2" weight="fill"/>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
