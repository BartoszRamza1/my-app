import React from 'react';
import KartaPostaci from './KartaPostaci';


function ListaPostaci ({postaci, ilosc}) {
    return (
        <div>
            <h2>Lista postaci ({postaci.info.count})</h2>
            {
                postaci.results
                .fiter((item , index)=> index < 5)
                .map(({name, species , image})=> 
                <KartaPostaci name={name} species={species} image={image}/>
                )
            }
        </div>
    )
}

export default ListaPostaci