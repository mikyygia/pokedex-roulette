import "../index.css"
import { useState } from "react";

export default function BannedFilters ({bannedTypes}) {
    return (
        <div className="banned-filters">
            <p>banned filters:</p>

            <div>
                {
                bannedTypes.map((ban, index) => {
                    return (
                        <button>{ban} type</button>
                    )
                })
                }
            </div>
            
        </div>
    );
}