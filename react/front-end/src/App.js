import './App.css';
import React, { useState, useEffect } from 'react';




async function getData(setMyData){
  const req = await fetch('https://nba-stat-leaders-endpoint.herokuapp.com/');
  const reqText = await req.text();
  const newText = reqText.replace(/'/g, '"');
  const reqJson = JSON.parse(newText);
  setMyData(reqJson);
  
}
function Data(){
  
  const [myData,setMyData] = useState({});
  useEffect(() => {
    getData(setMyData);
  }, []);
  return(
    <>
    <p>
      In Data
      {myData.ppg}
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
