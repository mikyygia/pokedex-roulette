import "../index.css"
import { useState } from "react";

export default function ShowPokemon ({state, data}) {
    

    return (
        <div>
            {
                state ? (
                    <p> loading ...</p>
                ) : data.name ? (
                    <div>
                        {console.log(data.sprites)}
                        <p className="pokemon-name">{data.name.replace("-", "")}</p>

                        

                        <img className="pokemon-img" src={
                                    data.sprites.other.dream_world.front_default ? // i like how these sprites look better
                                    data.sprites.other.dream_world.front_default : 
                                    data.sprites.other.home.front_default
                                } 
                            alt={data.name} />
                        
                        <button className="pokemon-save-btn">save</button>
                    </div> 
                ) : (
                    <p>click discover button to get a pokemon!</p>
                )
            }
        </div>
    );
};