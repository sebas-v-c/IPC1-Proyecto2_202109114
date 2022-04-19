import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
// import UserService from '../services/user.service';
import PokemonList from '../components/pokemons/PokemonList';
import SearchArea from '../components/pokemons/PokemonList';


function PokedexPage(props) {
  let navigate = useNavigate();


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
      navigate('/login');
    }
  }, []);




  return (
    <div className='container'>
      <SearchArea />
      <PokemonList />
    </div>
  );
}


export default PokedexPage;
