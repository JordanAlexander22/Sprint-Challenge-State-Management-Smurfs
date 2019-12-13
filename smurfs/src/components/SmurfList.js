import React from "react";
import Smurf from "./Smurf.js";

export default function(props) {
    return (
        <div>
            {
                props.smurfs.map(smurfz => (
                    <Smurf 
                        id={smurfz.id}
                        key={smurfz.id}
                        name={smurfz.name}
                        age={smurfz.age}
                        height={smurfz.height}
                    />
                ))
            }
        </div>
    )
}