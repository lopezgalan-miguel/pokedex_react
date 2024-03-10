import React, { useState } from 'react';

const Pokeform = ({ setPokemonId, setLoading, setError }) => {
  const [ pokemon, setPokemon ] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    if(pokemon !== ''){
      // Estara cargando por que hará una petición a la API
      setError(true)
      setLoading(true)
      const pokemonID = window.isNaN(parseInt(pokemon)) ? pokemon.toLowerCase() : pokemon
      setPokemonId(pokemonID)
      setPokemon('')
      return
    }
    setError(true)
  }
  return(
    <form className="pokemon-form" onSubmit={handleSubmit}>
      <input
        className="pokemon-input"
        type="text"
        name="pokemon"
        value={pokemon}
        placeholder="Busca tu pokemon"
        onChange={e => setPokemon(e.target.value)}
        autoComplete="off"/>
      <input type="submit" className="pokemon-btn" value=""/>
    </form>
  )
};

Pokeform.propTypes = {};

Pokeform.defaultProps = {};

export default Pokeform;
