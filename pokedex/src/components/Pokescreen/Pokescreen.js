import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pokescreen.module.scss';

function Stat({ item }){
  return (
    <li className="pokemon-stat">
      <span className="stat-name"><b>{item.stat.name}: </b></span>
      <span>{item.base_stat}</span>
    </li>
  )
}

const Pokescreen = ({ pokemon, loading, error }) => {
  console.log(pokemon);
  console.log(loading);
  console.log(error);
  if(loading) { //Error: Create loading component teletexto image
    return(
      <div> Cargando ...</div>
    )
  }
  if(error) { //TODO Refactor at service: in error call, return this object
    pokemon.name = 'Error, try again';
    pokemon.stats = [
      {
        base_stat: 0,
        stat: {
          name: 'hp'
        }
      },
      {
        base_stat: 0,
        stat: {
          name: 'hp'
        }
      },
      {
        base_stat: 0,
        stat: {
          name: 'Attack'
        }
      },
      {
        base_stat: 0,
        stat: {
          name: 'Defense'
        }
      },
      {
        base_stat: 0,
        stat: {
          name: 'Special-Attack'
        }
      },
      {
        base_stat: 0,
        stat: {
          name: 'Special-Defense'
        }
      },
      {
        base_stat: 0,
        stat: {
          name: 'Speed'
        }
      }
    ]
    pokemon.sprites = {
      front_default: '/assets/missigno.png'
    }
  }
  
  return(
      <div className="pokedex-screen">
      <div className="pokemon-info">
        <h2 className="pokemon-name">{pokemon?.name}</h2>
        <img
          className="pokemon-img"
          src={pokemon?.sprites.front_default}
          alt={pokemon?.name}
        />
        <ul className="pokemon-stats">
        <ul className="pokemon-stats">
          { pokemon?.stats.map(item => (
            <Stat key={item.stat.name} item={item}/>
          ))}
        </ul>
        </ul>
      </div>
    </div>
  )
};

Pokescreen.propTypes = {};

Pokescreen.defaultProps = {};

export default Pokescreen;
