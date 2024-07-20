"use client";
import { Bookmark, BookmarkCheck, Star } from "lucide-react";
import { useEffect, useState } from "react";
import useFavorito from '@/app/hooks/useFavorito';
import '@/app/globals.css';

interface cardProps {
    filme: Filme
}

function Card({filme}:cardProps){  
    
    const {carregarFavoritos, favorito, delFav, addFav} = useFavorito(filme);
    useEffect(()=> carregarFavoritos(), []);   
    

    return(
       
            <main className="flex flex-col mb-4 p-1">       
            <a href={"/filme/"+filme.id}> 
                <img className="card-img rounded-lg mb-5" src={"https://image.tmdb.org/t/p/w500/"+filme.poster_path} alt="poster" />
            </a>
            <div className="flex justify-center  flex-row gap-4">            
                <Star size={28} className="flex  items-center gap-2 text-amber-400"/>
                <span className="opacity-80">{filme.vote_average.toFixed(1)}</span>
                {favorito? 
                    <BookmarkCheck onClick={delFav} size={28} strokeWidth={2} className="cursor-pointer text-amber-400"/> :
                    <Bookmark onClick={addFav} size={28} strokeWidth={2} className="cursor-pointer"/>
                }
            </div>
            <span className="mt-5 text-center ">{filme.title}</span>
        </main>
        
    );
}

export default Card;