import Navbar from "../components/Navbar";

function Sobre(){

    return(
      <main className="flex flex-col items-center justify-between">
      <Navbar/>    
        <h3 className="mt-24">Olá, bem-vindo!</h3>     
        <h4 className="mt-2 p-5 text-justify">           
          O App TrailerView filmes ajuda os usuários
          a descobrir e acompanhar as últimas tendências em filmes e séries, oferecendo 
          informações detalhadas e avaliações.
        </h4>        
      </main>
      );
}

export default Sobre;