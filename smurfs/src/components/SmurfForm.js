import React, {useState} from "react";

export default function(smurfzz) {
    const defaultState = {
        name: "",
        age: "",
        height: ""
    };

    const [newSmurf, setnewSmurf] = useState(defaultState);
    
    function handleChange(event) {
       setnewSmurf({
           ...newSmurf,
           [event.target.name]: event.target.value
       });
    }

    function handleSubmit(event) {
        event.preventDefault();
        smurfzz.post(newSmurf);
        setnewSmurf(defaultState);
    }
    
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="name"
                value={newSmurf.name}
                onChange={handleChange}
                placeholder="Smurf name"
            />
            <input 
                name="age"
                value={newSmurf.age}
                onChange={handleChange}
                placeholder="Smurf age"
            />
            <input 
                name="height"
                value={newSmurf.height}
                onChange={handleChange}
                placeholder="Smurf height"
            />
            <button type="submit">Submit</button>
        </form>
    )
}