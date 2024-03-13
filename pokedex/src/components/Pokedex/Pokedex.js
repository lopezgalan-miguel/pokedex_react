import React, { Component } from 'react';
import axios from 'axios';

import Pokescreen from '../Pokescreen/Pokescreen'
import Pokeform from '../Pokeform/Pokeform';



export default class Pokedex extends Component {

   constructor(props) {
      super(props);
      this.state = {
         pokemon: null,
         error: false,
         loading:false,
         pokemonId: '1'
      }
   }

   componentDidMount() {
      this.loadPokedex();
   }


   loadPokedex() {
      this.setState({ loading: true, error: false });
      const url = `https://pokeapi.co/api/v2/pokemon/${this.state.pokemonId}`;
      axios.get(url).then(res => {
         if(res) {
           this.setData(res);
         } else {
            this.setState({loading: false})
         }
      }, ()=>  {
         this.setState({error: true, loading: false});
         this.setErrorPokemon();
      })
   }

   setData(res) {
      this.setState({ pokemon: res.data });
      
      this.setState({loading: false});
   }
   setPokemonId = (pokemonId) => {
      this.setState({pokemonId});
      setTimeout(() => {
         this.loadPokedex();
      }, 0);
   }

   setErrorPokemon() {
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
      this.setState({pokemon});
      console.log(this.state.pokemon);
   }
   setLoading = (loading) => {
      this.setState({loading});
   }

   setError = (error) => {
      this.setState({error});
   }

   render() {
      if(this.state.pokemon) {
         return (
            <div className="pokedex">
            <div className="pokedex-left">
            <div className="pokedex-left-top">
                  <div className={`light is-sky is-big ${this.state.loading && 'is-animated'}`}  />
                  <div className="light is-red" />
                  <div className="light is-yellow" />
                  <div className="light is-green" />
            </div>
            <div className="pokedex-screen-container">
                  <Pokescreen
                     key={this.state.pokemon.id}
                     pokemon={this.state.pokemon}
                     loading={this.state.loading}
                     error={this.state.error}
                  />
            </div>
            <div className="pokedex-left-bottom">
               <div className="pokedex-left-bottom-lights">
                  <div className="light is-blue is-medium" />
                  <div className="light is-green is-large" />
                  <div className="light is-orange is-large" />
               </div>
               <Pokeform
                  onSetPokemonId={this.setPokemonId}
                  setLoading={this.setLoading}
                  setError={this.setError}
                  />
   
            </div>
            </div>
            <div className ="pokedex-right-front" />
            <div className="pokedex-right-back" />
            </div>
         )
      } else {
         return(
            <div>
               Loading
            </div>
         )
      }
      }
}

