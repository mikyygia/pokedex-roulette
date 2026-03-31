import './App.css'
import { useState } from "react";
import ModifyFilters from './components/ModifyFilters'
import Randomize from './components/Randomize'
import Saved from './components/Saved'
import ShowPokemon from './components/ShowPokemon'

function App() {
    const [currentPokemon, setCurrentPokemon] = useState({});
    const [loading, setLoading] = useState(false);

    const getRandomPokemon = async () => {
        const randomId = Math.floor(Math.random() * 1026);
        const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

        try {
            setLoading(true);
            const res = await fetch(url);
            const data = await res.json();
            setCurrentPokemon(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

        console.log("sent");
    }
  

  return (
    <div className="container">
      <div className="info-section">
        <ModifyFilters />
        <Randomize onFetch={getRandomPokemon}/>
        <Saved />
      </div>
    
      <div className="display-section">
        <ShowPokemon state={loading} data={currentPokemon}/>
      </div>
    </div>
  )
}

export default App
