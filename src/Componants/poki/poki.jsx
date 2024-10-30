/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// Link tag similar to anchor tag but work Diffrent in React with same functional
// This componant we used as the class using map to iterate over the object wiht name, image, id
function Poki({name , image, id}){
    return(
        <Link to={`/pokemon/${id}`}>
        <div style={{height:'350px',width:'max-content' , background:'black',display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center', padding:'10px',borderRadius:'6px'}}>
        <div style={{letterSpacing:'8px' , fontWeight:'800px',fontSize:'1.5rem'}}>{name}</div>
        <div> <img src={image} style={{height:'200px'}}/> </div> 
        </div>
        </Link>
    )
}

export default Poki;