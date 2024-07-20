"use server";



export async function getVideos(id:number) {

  const apiKey = process.env.REACT_APP_TMDB_API_KEY;

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: apiKey
        }
      };

      const resp = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=pt-BR', options)
      
      if(resp.ok){
        const json = await resp.json();
        return json.results;
    }else{
        throw new Error('Falha ao buscar o vídeo!');
    }
    
}