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
      const pokemon = {
        id: -1,
        name: 'Error, try again',
        stats: [
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
        ],
        sprites: {
          front_default: '/assets/missigno.png'
        }
      }
      this.setState(pokemon);
      console.log('im here')
    }
    if(this.state.loading) {
      return(
        <div> Cargando ...</div>
      )
    }
    return(
      <div className="pokedex-screen">
        <div className="pokemon-info">
          <h2 className="pokemon-name">{this.state.pokemon.name}</h2>
          <img
            className="pokemon-img"
            src={this.state.pokemon.sprites.front_default}
            alt={this.state.pokemon.name}
          />
          <ul className="pokemon-stats">
          <ul className="pokemon-stats">
            { this.state.pokemon.stats.map(item => (
              <Stat key={item.stat.name} item={item}/>
            ))}
          </ul>
          </ul>
        </div>
      </div>
      )
  }
}
