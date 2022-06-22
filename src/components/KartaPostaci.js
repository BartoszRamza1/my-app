import React from "react"
function KartaPostaci({name , image , species}) {
    return(
        <div className= 'card' data-name ={name}>
            <img src ={image} alt ={name}/>
            <div className = 'container'>
                <h4>{name}</h4>
                <p>{species}</p>
            </div>
        </div>
    )}


    export default KartaPostaci