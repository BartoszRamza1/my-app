import React ,{useState} from 'react'
import './App.css'
import ListaPostaci from './components/ListaPostaci'


function App() {
    const [postaci, setPostaci] = useState(null)


    fetch(' https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data =>
        setPostaci(data))
     

    if (!postaci) {
        return(<div className="App">Brak danych z backendu</div>)
    }

  

  return(
        <div className="App">
            <ListaPostaci postaci={postaci}/>
        </div>
    );



}


export default App
