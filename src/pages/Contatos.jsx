import { useState } from "react";
import NavBar from "../components/NavBar";

function Contatos() {
  const [info, setInfo] = useState("");
  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <div className="flex flex-col">
        <h1 className="text-blue font-bold text-3xl mb-10 mt-10">
          Entre em contato
        </h1>
        <label htmlFor="Mensagem" className="mb-2">
          Mensagem
        </label>
        <input
          type="text"
          id="Mensagem"
          placeholder="Mensagem"
          className="border rounded-xl text-center"
          onChange={(e) => setInfo(e.target.value)}
        />
        <button
          onClick={() => {
            window.alert("Mensagem enviada!");
            console.log(info);
          }}
          className="border transition bg-blue text-white p-2 mt-4 rounded-xl hover:bg-darkblue"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

export default Contatos;
