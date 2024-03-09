import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pokescreen.module.scss';

const Pokescreen = ({ pokemon, loading, error }) => (
  <div className="pokedex-screen">
      <div className="pokemon-info">
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <img
          className="pokemon-img"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <ul className="pokemon-stats">
          // Aquí iteraremos sobre la lista de estadísticas
        </ul>
      </div>
    </div>
);

Pokescreen.propTypes = {};

Pokescreen.defaultProps = {};

export default Pokescreen;
