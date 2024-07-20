import { getMovies } from "./actions/getMovies";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

async function  Home() {

  const filmes: Filme[] =  await getMovies();


  return (
    <main className="flex min-h-screen flex-col"> 
      <Navbar/>
      <Title title="Filmes em alta" className="font-medium text-lg m-3 mt-24 border-amber-500 border-l-8 p-2"></Title>
      <section className="flex m-3 gap-10 overflow-scroll">
        {filmes.map((filme) => <Card key={filme.id} filme={filme}/>)} 
      </section>
      {/*<Title title="Lançamentos"></Title> */}
      
      {/*<Title  title="Destaques"></Title> */}
      
    </main>
  );
}

export default Home;
