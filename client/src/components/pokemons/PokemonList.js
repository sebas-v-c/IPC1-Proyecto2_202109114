import React from 'react';
import { Row } from 'react-bootstrap';

import PokemonItem from './PokemonItem';




class PokemonList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row xs={1} md={3} className="g-4">
        {this.props.pokemon.map(pokemon => {
          return (<PokemonItem
            key={pokemon.numero.toString()}
            pokemon={pokemon}
          />);
        })}
      </Row>

    );
  }

}









export default PokemonList;
