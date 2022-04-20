import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
// import UserService from '../services/user.service';
import PokemonList from '../components/pokemons/PokemonList';
import SearchArea from '../components/search/SearchArea';
import PokemonService from '../services/pokemon.service';

import "bootstrap/dist/css/bootstrap.min.css";
import { CardGroup } from 'react-bootstrap';


function PokedexPage(props) {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [searchInfo, setSearchInfo] = useState({ text: "", filter: "" });
  const [loadedPokemon, setLoadedPokemon] = useState([]);


  function addSubmitHandler(submitInfo) {
    setSearchInfo({
      text: submitInfo.text,
      filter: submitInfo.filter
    });
  }


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
      navigate('/login');
    }
  }, []);



  // Fetch pokemon info
  useEffect(() => {

    setIsLoading(true);
    if (searchInfo.text !== '') {
      PokemonService.getPokemonContent(searchInfo.filter, searchInfo.text)
        .then((response) => {
          const pokemon = response.data.pokemon;

          setLoadedPokemon(pokemon);
          setIsLoading(false);
        });
    } else {
      PokemonService.getAllPokemonContent()
        .then((response) => {
          const pokemon = response.data.pokemon;

          setLoadedPokemon(pokemon);
          setIsLoading(false);
        });
    }
  }, []);


  if (isLoading) {
    return (
      <section>
        <p>Cargando...</p>
      </section>
    );
  }


  return (
    <section>
      <SearchArea onSubmit={addSubmitHandler} />
      <PokemonList pokemon={loadedPokemon} />
    </section>
  );
}



export default PokedexPage;
