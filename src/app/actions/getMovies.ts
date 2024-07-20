"use server"; //!indica para o next que este arquivo JS será executado dentro do servidor

//= O token de autenticação é necessário para fazer a requisição, porque em uma
//= API do tipo REST não existe o conceito de estar logado na API, uma arquitetura
//= REST tem o conceito de STATELESS, ou seja, ela não mantém estado, então jamais 
//= poderia dizer que você está logado, porque isso seria manter um estado na API, 
//= portanto como você não está logado, a aplicação sabe que você está autorizado
//= a acessar a API pelo token que é único de cada usuário


export async function getMovies() {

  const apiKey = process.env.REACT_APP_TMDB_API_KEY;

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: apiKey
        }
      };
      
    const resp = await fetch('https://api.themoviedb.org/3/trending/movie/week?language=pt-BR', options)

    if(resp.ok){
        const json = await resp.json();
        return json.results;
    }  
    
}


