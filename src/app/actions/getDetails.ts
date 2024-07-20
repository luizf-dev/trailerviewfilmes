"use server";

import { error } from "console";


export async function getDetails(id: number) {

  const apiKey = process.env.REACT_APP_TMDB_API_KEY;

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiKey}`
        }
      };

      const resp = await fetch('https://api.themoviedb.org/3/movie/'+id+'?language=pt-BR', options)
      
      if(resp.ok){
        const json = await resp.json();
        return json
    } 
    
}