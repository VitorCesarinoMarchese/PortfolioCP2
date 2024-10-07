import NavBar  from "../components/NavBar";
import FullStack from "../components/FullStack";
import Sobre from "../components/Sobre";
import Projetos from "../components/Projetos.jsx";
import Footer from "../components/Footer.jsx";
import Card from "../components/Card.jsx";

function Home() {

  return (
    <div className="flex flex-col items-center">
    <NavBar/>
    <div className="flex flex-col max-w-screen-md gap-12 mt-4">
      <FullStack/>
      <Sobre/>
      <Card/>
      <Projetos/>
    </div>
      <Footer/>
    </div>
  )
}

export default Home
