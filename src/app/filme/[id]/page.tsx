import { getDetails } from "@/app/actions/getDetails";
import { getVideos } from "@/app/actions/getVideos";
import Navbar from "@/app/components/Navbar";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import  YouTubePlayer from '@/app/components/YouTubePlayer';


export interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

async function  Detalhes({params}: Params){

  const filme = await getDetails(params.id);
  //console.log(filme);

  const videos: Video[] = await getVideos(params.id);
  //console.log(videos);

  // Filtra para pegar apenas os trailers do resultado
  const trailer = videos.find((video: Video) => video.type === 'Trailer' && video.site === 'YouTube');



  function formatarMoeda(valor:any) {
    // Converter para string e separar parte inteira e decimal
    let [parteInteira, parteDecimal] = String(valor.toFixed(2)).split('.');
  
    // Adicionar pontos como separadores de milhares
    parteInteira = parteInteira.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
    // Formatar a parte decimal com vírgula
    parteDecimal = parteDecimal ? ',' + parteDecimal : '';
  
    return 'US$ ' + parteInteira + parteDecimal;
}

    return(
        <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar/>  
          <div className="flex p-4 mt-24 gap-8 div-details-film">
            <img className="details-film-img rounded-lg " src={"https://image.tmdb.org/t/p/w500"+filme.poster_path} alt="poster" />
            <div className="div-description">
              <h2 className="text-2xl font-bold text-amber-400">{filme.title}</h2>
              <h4 className="text-amber-400 font-bold">Sinopse:</h4>
              <p>{filme.overview}</p>
              <h2 className="text-2xl font-bold text-amber-400">Trailer:</h2>
              {trailer && <YouTubePlayer videoId={trailer.key} />}
            </div>
            <div className="ficha-tecnica">
              <h2>Título Original:</h2>
              <h6>{filme.original_title}</h6>
              <h2>Tagline:</h2>
              <h6>{filme.tagline}</h6>
              <h2>Data de Lançamento: </h2>
              <h6>{filme.release_date}</h6>
              <h2>Duração:</h2>
              <h6>{filme.runtime} minutos</h6>
              <h2>País de Origem</h2>
              <h6>{filme.origin_country}</h6>
              <h2>Idioma Original:</h2>
              <h6>{filme.original_language}</h6>
              <h2>Orçamento:</h2>
              <h6>{formatarMoeda(filme.budget)}</h6>
              <h2>Receita:</h2>
              <h6>{formatarMoeda(filme.revenue)}</h6>
            </div>
          </div>          
        </main>
        );
}

export default Detalhes;


