import React from 'react';
import Card from '../ui/Card';
import { Col } from 'react-bootstrap';


const capitalizeFirstLetter = ([first, ...rest], locale = navigator.language) =>
  first.toLocaleUpperCase(locale) + rest.join('')

function PokemonItem(props) {
  const image = props.pokemon.imagen;
  const id = props.pokemon.numero;
  const name = capitalizeFirstLetter(props.pokemon.nombre);
  const moves = props.pokemon.ataque;
  const type = props.pokemon.tipo;


  return (
    <Col>
      <Card>
        <div className='card-header'>
          <h4 className='card-title'>{name}</h4>
        </div>
        <img className='card-img-top' src={image} alt={name} />
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>No.</b> {id}</li>
          <li className="list-group-item">{type.length === 1 ? <b>Tipo</b> : <b>Tipos</b>}: {type.join(', ')}</li>
          <li className="list-group-item"><b>Mejor Ataque:</b> {moves[0]}</li>
        </ul>
      </Card>
    </Col>
  );

}



export default PokemonItem;
