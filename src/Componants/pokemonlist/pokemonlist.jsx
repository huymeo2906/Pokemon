/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Poki from "../poki/poki.jsx";

// Axios for the data Download.
// Here useEffect and useState hooks are used.
// Using map to iterate over the Objects of API data

function Pokemonlist() {
  const [isLoading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);

  const [pokemonurl, setpokemonurl]= useState('https://pokeapi.co/api/v2/pokemon');

  const [nexturl, setnexturl]=useState('');
  const [prveurl, setprveurl]=useState('');

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        setLoading(true);
        const response = await axios.get(pokemonurl);
        const pokemonUrls = response.data.results;
        console.log(response);
        setnexturl(response.data.next)
        setprveurl(response.data.previous)
        const pokemonPromises = pokemonUrls.map((pokemon) =>
          axios.get(pokemon.url)
        );
        console.log(pokemonPromises);

        const pokemonData = await axios.all(pokemonPromises);

        const PokemonData = pokemonData.map((pokedata) => {
          const pokemon = pokedata.data;
          return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.other
              ? pokemon.sprites.other.dream_world.front_default
              : pokemon.sprites.front_shiny,
            types: pokemon.types
          };
        });
         
        setPokemonList(PokemonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
        setLoading(false);
      }
    }

    fetchPokemonData();
  }, [pokemonurl]);

  return (
    <div style={{ margin: "10px 0px" }}>
      <div style={{margin:'10px 5px'}}> 
        Pokemon List
      </div>
      <div>
        <button style={{marginRight:'10px'}}  disabled={!prveurl}  onClick={()=> setpokemonurl(prveurl)}> PREVIUS </button>
        <button  disabled={!nexturl} onClick={()=> setpokemonurl(nexturl)} > NEXT </button>
      </div>
      <div style={{display:'flex', flexWrap:'wrap' , gap:'10px', flexDirection:'row', margin:'0 auto',justifyContent:'space-between'}}>
      { (isLoading) ? 
        "Loading...": pokemonList.map((p) => <Poki name={p.name} image={p.image} key={p.id} id={p.id} /> )}
      </div>
    </div>
  );
}

export default Pokemonlist;
