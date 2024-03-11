import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';

import Pokescreen from '../Pokescreen/Pokescreen'
import Pokeform from '../Pokeform/Pokeform';



export default class Pokedex extends Component {

   componentDidMount() {
      this.loadPokedex(1);
   }

   state = {
      pokemon: null,
      error: false,
      loading:false,
      currentPokemonId: '0'
   }

   loadPokedex(pokemonId) {
      this.setState({
         currentPokemonId: pokemonId,
         loading: true
      })
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
      axios.get(url).then(res => {
         this.setState({
            pokemon: res?.data || null,
            error: false,
            loading: false,
         });
      })
   }

   setPokemonId(pokemonId) {
      console.log(pokemonId);
   }

   setLoading(loading) {
      console.log(loading)
   }

   setError(error) {
      console.log(error)
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
                  setPokemonId={this.setPokemonId(1)}
                  setLoading={this.setLoading(false)}
                  setError={this.setError(false)}
                  />
   
            </div>
            </div>
            <div className
            ="pokedex-right-front" />
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

