import {Routes, Route} from 'react-router-dom';
import Pokemon from '../src/Componants/pokemon/pokemon';
import Pokemoninfo from '../src/Componants/Pokemoninfo/pokemoninfo.jsx';

// Using Routes to get single page application purpouse.

function Customroutes(){
   return (
    <Routes> 
     <Route path='/' element={<Pokemon />}/>                
     <Route path="/pokemon/:id" element={<Pokemoninfo />}/>
    </Routes>
   )
}
// --------- Here setting the Route Path for the Componants on Application 

export default Customroutes;