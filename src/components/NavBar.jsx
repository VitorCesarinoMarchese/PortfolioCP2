import { useState } from "react";
import { Hamburger } from "@phosphor-icons/react";
import { Link } from "react-router-dom";


function NavBar() {
  const [active, SetActive] = useState(false);
  return (
    <>
      <nav className="flex flex-row justify-between w-full items-center p-6">
        <Link to="/"><span className="font-bold text-xl text-blue">Vitor Cesarino Marchese</span></Link>
        <button
          className={active ? "hidden" : ""}
          onClick={() => SetActive(true)}
        >
          <Hamburger size={32} color="#53a8b2" />{" "}
        </button>
        <button
          className={active ? "NavBtn" : "hidden"}
          onClick={() => SetActive(false)}
        >
          <Hamburger size={32} color="#53a8b2" weight="fill" />{" "}
        </button>
        <ul className={active ? "bg-white absolute right-0 top-14 h-full w-40 mt-4 z-10 flex items-end justify-start flex-col gap-4" : "hidden"}>
          <li className="mr-4 ">
            <a href="#Sobre" onClick={() => SetActive(false)}>
              Sobre
            </a>
          </li>
          <li className="mr-4">
            <a href="#Projetos" onClick={() => SetActive(false)}>
              Meus Projetos
            </a>
          </li>
          <li className="mr-4">
            <Link to="/contatos" onClick={() => SetActive(false)}>
              Contatos
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
