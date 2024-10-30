import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// New Componatns Which Dislay new Page wiht Pokemon Information 
// In this componants to achive the Information we are using Axios and useEffect, useState and for id we used Params

function Pokemoninfo(){
    const {id} =useParams();
    const [pokemon, setpokemon]=useState({});  // Creating pokemon array usingState hook

    async function pokemondata(){  
            //Getting all the data from the API wiht async await funtion
        
            const response= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`) 
           // Storing the data into the response Variable
            console.log(response.data);
           
            // Setting the State of pokemon with new information to display on new webpage
            setpokemon({
            name:response.data.name,
            image:response.data.sprites.other.dream_world.front_default,
            weight:response.data.weight,
            height:response.data.height,
            types:response.data.types.map((t)=> t.type.name)
        })       
    }

     //Using useEffect to rerender the data after executing calling the pokemondata to load and track 
    useEffect(()=> {         
        pokemondata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    

    // Writeing the JSX- Javascripte Xmal to display the Front-end 
    // Using jsx {} to render the object and data into the Browser
    // Inline style css is Used
    return(
    <div style={{ padding:'5px 30px',display:'flex',flexDirection:'column',alignItems:'center', backgroundColor:'black',borderRadius:'5px', backdropFilter:'blur(20px)'}}>
        <div style={{letterSpacing:'8px',fontWeight:'800px',fontSize:'2rem'}} >{pokemon.name}</div>
        <img style={{height:'250px'}} src={pokemon.image} alt="" />
        <h3 style={{marginTop:'10px'}}>Weight: {pokemon.weight}</h3>
        <h3 style={{marginTop:'10px'}}>Height: {pokemon.height} feet</h3>
        <div style={{marginTop:'10px'}}>Types: {pokemon.types && pokemon.types.map((t)=> <div style={{backgroundColor:'grey', maxWidth:'100px', borderRadius:'5px', fontSize:'1.5rem',margin:'5px',padding:'5px'}} key={t} > {t} </div> )}</div>
    </div>        
    )
}

export default Pokemoninfo;