import "../index.css"

export default function ShowPokemon ({state, data, bannedType, setBannedType}) {
    return (
        <div>
            {
                state ? (
                    <p> loading ...</p>
                ) : data.name ? (
                    <div className="pokemon-info">
                        <div>
                            <p className="pokemon-name">{data.name.replace("-", "")}</p>

                            <img className="pokemon-img" src={
                                        data.sprites.other.dream_world.front_default ? // i like how these sprites look better
                                        data.sprites.other.dream_world.front_default : 
                                        data.sprites.other.home.front_default
                                    } 
                                alt={data.name} />
                            
                            <button className="pokemon-save-btn">save</button>
                        </div>


                        <div className="filter-type">
                            <h4>attributes <span>(click to move to ban list):</span></h4>
                            {
                                data.types.map((t, index) => {
                                    return (
                                        <button onClick={() => setBannedType(t.type.name)} className="filter-option">{t.type.name}</button>
                                    );
                                })
                            }
                        </div>
                    </div>
                ) : (
                    <p>click discover button to get a pokemon!</p>
                )
            }
        </div>
    );
};