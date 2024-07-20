import { useState } from "react";


function useFavorito(filme){
     //! O useState é um dos hooks mais fundamentais no ReactJS. 
    //! Ele é usado para adicionar o estado a componentes de 
    //! função no React. Com useState, você pode declarar variáveis
    //! de estado em componentes de função e atualizá-las quando necessário.
    //! Isso permite que os componentes de função no React tenham estado
    //! local, uma funcionalidade anteriormente disponível apenas
    //! para componentes de classe.
    const [favorito, setFavorito] = useState(false);

    //!Favoritar um filme, essa função será encarregada de 
    //! setar o estado do componente definido na função use state, ao evento
    //! click do usuário no icone Bookmark, o estado do icone favorito 
    //! será alterado para o icone BookmarkCheck
    const addFav = () => {
        const favoritos = JSON.parse(localStorage.getItem("favoritos")) || []
        favoritos.push(filme);
        localStorage.setItem("favoritos", JSON.stringify(favoritos))
        setFavorito(true);
    }

    const delFav = () => {
        const favoritos = JSON.parse(localStorage.getItem("favoritos")) || []
        const favoritosAtualizados = favoritos.filter(f => f.id !== filme.id )
        localStorage.setItem("favoritos", JSON.stringify(favoritosAtualizados));
        setFavorito(false);
    }

    function carregarFavoritos(){
        const favoritos = JSON.parse(localStorage.getItem("favoritos")) || []
        const favorito = favoritos.find(f => f.id === filme.id);
        setFavorito(favorito);
    }

    return{
        favorito,
        addFav,
        delFav,
        carregarFavoritos
    }
}

export default useFavorito;