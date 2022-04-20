import React from 'react';
import { Row } from 'react-bootstrap';

import PokemonItem from './PokemonItem';
import color from "./util";



class PokemonList extends React.Component {
  constructor(props) {
    super(props);
    this.type = this.props.type;
  }

  render() {
    return (
      <Row xs={1} md={3} className="g-4" style={{ backgroundColor: color(this.type) }}>
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
