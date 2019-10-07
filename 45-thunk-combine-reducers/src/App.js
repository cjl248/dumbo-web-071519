import React from 'react';
import logo from './logo.svg';
import PokeList from './PokemonList'
import DisneyPrincessList from './DisneyPrincessList'
import PokemonForm from './PokemonForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <PokeList />
      <PokemonForm />
      <DisneyPrincessList />
    </div>
  );
}

export default App;
