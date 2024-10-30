import { useState } from 'react'
import './App.css'
import Pokemonlist from './Componants/pokemonlist/pokemonlist'
import SearchPokemon from './Componants/search/search'
import Pokemon from './Componants/pokemon/pokemon'
import Customroutes from '../Routes/Customroute.jsx'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
    {/* <Pokemon /> */}
    {/* <SearchPokemon /> */}
  {/* < Pokemonlist /> */}
  <div className='pokemoncard'>
  <h1 pokemon style={{letterSpacing:'5px',marginBottom:"15px",fontSize:'2.5rem',fontWeight:'800px',backgroundColor:'black',padding:'6px', borderRadius:'8px'}}> <Link to='/'> <b> Pokemon </b> </Link></h1>
  <Customroutes />
  </div>
    </div>
  )
}

export default App
