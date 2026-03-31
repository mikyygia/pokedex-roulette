import './App.css'
import { useState } from "react";
import BannedFilters from './components/BannedFilters';
import Randomize from './components/Randomize'
import Saved from './components/Saved'
import ShowPokemon from './components/ShowPokemon'

function App() {
    const [currentPokemon, setCurrentPokemon] = useState({});
    const [loading, setLoading] = useState(false);
    const [banList, setBanList] = useState([]);

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
    }

    const onSetBanList = (type) => {
      // console.log(banList);
      if (!banList.includes(type)) {
        setBanList([...banList, type]);
      }
    }

  return (
    <div className="container">
      <div className="info-section">
        <h1>discover your pokemon</h1>
        <BannedFilters bannedTypes={banList}/>
        {/* <p> ur mama: {banList}</p> */}
        <Randomize onFetch={getRandomPokemon}/>
        <Saved />
      </div>
    
      <div className="display-section">
        <ShowPokemon state={loading} data={currentPokemon} bannedType={banList} setBannedType={onSetBanList}/>
      </div>
    </div>
  )
}

export default App
