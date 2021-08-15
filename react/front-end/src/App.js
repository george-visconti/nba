import './App.css';
import React, { useState, useEffect } from 'react';


function DisplayPlayer(props){
    if(!props.playerObj){
      return <div></div>;
    }
    return (
      <p>{props.playerObj.name}</p>
    );
  
}

async function getData(setMyData){
  const req = await fetch('https://nba-stat-leaders-endpoint.herokuapp.com/');
  const reqText = await req.text();


  const newText = reqText.replace(/'/g, '"');
  const reqJson = JSON.parse(newText);
  //console.log(reqJson);
  setMyData(reqJson);
  
}
function Data(){
  
  const [myData,setMyData] = useState([]);
  useEffect(() => {
    getData(setMyData);
  }, []);

  const ppg= myData[0];
  // const apg= myData[1];
  // const rpg= myData[2];
  // const bpg= myData[3];
  // const spg= myData[4];
  
  return(
    <>
      <div>
        <DisplayPlayer playerObj={ppg} /> 
        
      </div>
    </>
  );
};

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