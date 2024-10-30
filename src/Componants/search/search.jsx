/* eslint-disable react/no-unknown-property */
const SearchPokemon =()=>{
    return(
        <div style={{display:'flex',flexDirection:'column', columnGap:'25px',justifyContent:'center', alignItems:'center'}} >
           <input
            style={{padding:'12px 12px', width:'450px', textAlign:'center' }} placeholder="Search Pokemon" type="search" name="Pokemon" id="pika" />
        </div>
    )
}

export default SearchPokemon;