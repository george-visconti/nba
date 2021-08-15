import './App.css';
import React, { useState, useEffect } from 'react';




async function getData(setMyData){
  const req = await fetch('https://nba-stat-leaders-endpoint.herokuapp.com/');
  const reqText = await req.text();
  const newText = reqText.replace(/'/g, '"');
  const reqJson = JSON.parse(newText);
  console.log(reqJson);
  setMyData(reqJson);
  
}
function Data(){
  
  const [myData,setMyData] = useState([]);
  useEffect(() => {
    getData(setMyData);
  }, []);
  return(
    <>
    <p>
      In Data
      {Object.keys(myData).map((key, index) => ( 
          <p key={index}> this is my key {key} and this is my value {myData[key]}</p> 
        ))}
    </p>
    </>
  );
}

function App() {
  return (
    <div className="App">
        <p>
          This application will display the NBA stat leaders from the 2020-2021 season. 
        </p>
        <Data />
        
    </div>
  );
}

export default App;
