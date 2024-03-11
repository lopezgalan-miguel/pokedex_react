import React, { Component } from 'react';

function Stat({ item }){
  return (
    <li className="pokemon-stat">
      <span className="stat-name"><b>{item.stat.name}: </b></span>
      <span>{item.base_stat}</span>
    </li>
  )
}

export default class Pokescreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: this.props.pokemon,
      loading: this.props.loading,
      error: this.props.error
    }
  }
  render() {
    if(this.state.error) {
      return(
        <div>
          Error, intentelo de nuevo
        </div>
      )
    }
    if(this.state.loading) {
      return(
        <div> Cargando ...</div>
      )
    }
    return(
      <div className="pokedex-screen">
        <div className="pokemon-info">
          <h2 className="pokemon-name">{this.pokemon?.name}</h2>
          <img
            className="pokemon-img"
            src={this.pokemon?.sprites.front_default}
            alt={this.ºpokemon?.name}
          />
          <ul className="pokemon-stats">
          <ul className="pokemon-stats">
            { this.pokemon?.stats.map(item => (
              <Stat key={item.stat.name} item={item}/>
            ))}
          </ul>
          </ul>
        </div>
      </div>
      )
  }
}
