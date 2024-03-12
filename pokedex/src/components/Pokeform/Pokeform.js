import React, { Component } from 'react';

export default class Pokeform extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPokemonId: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    if(this.state.currentPokemonId !== ''){
      this.props.onSetPokemonId(this.state.currentPokemonId)
      return
    }
  }

  setPokemon = (event) => {
    this.setState({currentPokemonId: event})
  }

  setError = (error) => {
    this.props.setError(error);
  }

  setLoading = (loading) => {
    this.props.setLoading(loading);
  }

  render() {
    return(
      <form className="pokemon-form" onSubmit={this.handleSubmit}>
        <input
          className="pokemon-input"
          type="text"
          name="pokemon"
          placeholder="Busca tu pokemon"
          onChange={event => this.setPokemon(event.target.value)}
          autoComplete="off"/>
        <input type="submit" className="pokemon-btn" value=""/>
      </form>
    )
  }
}
