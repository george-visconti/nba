import './App.css';
import React, { useState, useEffect } from 'react';
import { CardContainer, Page, CardRow, Info, Picture, HeaderText, Logo, Court} from './AppElements';
import curry from './images/stephen_curry.png';
import westbrook from './images/russell_westbrook.png';
import capela from './images/clint_capela.png';
import turner from './images/myles_turner.png';
import butler from './images/jimmy_butler.png';
import warriors from './images/GSW.svg';
import wizards from './images/WAS.svg';
import hawks from './images/ATL.svg';
import pacers from './images/IND.svg';
import heat from './images/MIA.svg';
import court from './images/court.png';


function DisplayPlayer(props){
    if(!props.playerObj){
      return <div></div>;
    }
    return (
      
      <CardContainer>
        <Court src={court}/>
        <Picture src={props.img}></Picture>
        <Info>Category: {props.playerObj.category}</Info>
        <Info>Name: {props.playerObj.name}</Info>
        <Info>
          Team: {props.playerObj.team}
          <Logo src={props.teamImg}/>
        </Info>
        <Info>Stat: {props.playerObj.stat} {props.playerObj.category}</Info>
      </CardContainer>
      
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

  
  
  return(
    
      <CardRow>
        <DisplayPlayer playerObj={myData[0]} img={curry} teamImg={warriors}/> 
        <DisplayPlayer playerObj={myData[1]} img={westbrook} teamImg={wizards}/>
        <DisplayPlayer playerObj={myData[2]} img={capela} teamImg={hawks}/>
        <DisplayPlayer playerObj={myData[3]} img={turner} teamImg={pacers}/>
        <DisplayPlayer playerObj={myData[4]} img={butler} teamImg={heat}/>
      </CardRow>
    
  );
};

function App() {
  return (
    
    <Page>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"/>
      <HeaderText>NBA 2020-2021 Season Stat Leaders </HeaderText>
      
      <Data />
      
    </Page>
  );
}

export default App;