import React, { useEffect, useState } from 'react';

import PokemonList from '../pokemons/PokemonList';
import SearchArea from '../search/SearchArea';
import PokemonService from '../../services/pokemon.service';

import "bootstrap/dist/css/bootstrap.min.css";



function PokedexLayout(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [searchInfo, setSearchInfo] = useState({ text: "", filter: "" });
  const [loadedPokemon, setLoadedPokemon] = useState([]);



  function addSubmitHandler(submitInfo) {
    setSearchInfo({
      text: submitInfo.text,
      filter: submitInfo.filter
    });
  }



  // Fetch pokemon info
  useEffect(() => {

    setIsLoading(true);
    if (searchInfo.text !== '') {
      PokemonService.getPokemonContent(searchInfo.filter, searchInfo.text)
        .then((response) => {
          const pokemon = response.data;

          setLoadedPokemon(pokemon);
          setIsLoading(false);
        })
        .catch(error => {
          setIsLoading(false);
          setLoadedPokemon([]);
          console.log(error);
        });
    } else {
      PokemonService.getAllPokemonContent()
        .then((response) => {
          const pokemon = response.data.pokemon;

          setLoadedPokemon(pokemon);
          setIsLoading(false);
        });
    }

  }, [searchInfo]);




  if (isLoading) {
    return (
      <section>
        <SearchArea onSubmit={addSubmitHandler} />
        <p>Cargando...</p>
      </section>
    );
  }


  if (loadedPokemon.length === 0) {
    return (
      <section>
        <SearchArea onSubmit={addSubmitHandler} />
        <p>No se encontró ningún Pokemon :,(</p>
      </section>
    );
  }

  let type;
  if (searchInfo.filter === 'type') {
    type = searchInfo.text;
  } else {
    type = ''
  }




  console.log(searchInfo.text);

  return (
    <section>
      <SearchArea onSubmit={addSubmitHandler} />
      <br />
      <PokemonList pokemon={loadedPokemon} type={type} />
    </section>
  );

}


export default PokedexLayout;
