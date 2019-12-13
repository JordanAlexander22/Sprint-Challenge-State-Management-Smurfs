import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SmurfContext from "../contexts/SmurfContext"
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm"


export default function() {
  const [smurf, setSmurf] = useState([]);
  
  function getData() {
      axios.get("http://localhost:3333/smurfs")
      .then(res => setSmurf(res.data))
      .catch(err => console.log("error message for get  req", err))
  }

  function postData(smurf) {
      axios.post("http://localhost:3333/smurfs", smurf)
      .then(res => setSmurf(res.data))
      .catch(err => console.log("post error", err))
  }  
  useEffect(() => {
      getData();    
  }, [])
  
  return (
    <div className="App">
      <h1>SMURFS! 2.0 with Context Api</h1>
      <div>Have fun! ;)</div>
      <SmurfContext.Provider>
        <SmurfList smurfs={smurf} />
      </SmurfContext.Provider>
      <SmurfForm post={postData}/>
    </div>
  );
}
