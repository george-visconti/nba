import styled from 'styled-components'; 
import court from './images/court.png';

export const CardContainer= styled.div`
    background: gray;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    height 300px;
    width: 200px;
    align-items:center;
    margin-bottom:20px;
    background-image: url(${court});
    background-position: center;
`

export const Page= styled.div`
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content:center;
        width:100%;
        background: #479bf5;
`

export const CardRow= styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
    min-height:100vh;
    width:100%;
    margin-top: -50px;
    @media (max-width: 1024px){
        flex-direction:column;
        margin-top:40px;
        align-items: center;
    }
`

export const Info= styled.p`
    font-weight: 950;
    margin-top: auto;
    font-family: 'Open Sans', sans-serif;
    display:flex;
    align-items:center;
`

export const Picture= styled.img`
    

`

export const HeaderText= styled.p`
    font-size: 30px;
    align-text:center;
    text-decoration:underline;
    text-decoration-thickness: 2px;
    font-family: 'Open Sans', sans-serif;
    margin-top: 60px;
    font-weight: bold;
    @media (max-width: 600px){
        font-size: 18px;
        
    }
`

export const Logo= styled.img`
    width:25px;
    height:25px;
   

`




