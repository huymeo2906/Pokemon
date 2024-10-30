import Pokemonlist from '../pokemonlist/pokemonlist.jsx';
import Search from '../search/search.jsx'

// main compnants to loade details of Pokemon. Loading 2 two Componants Search and PokemonList
function Pokemon(){
  return(
   <div>
  <Search />
  <Pokemonlist />
   </div>
  )
}

export default Pokemon;