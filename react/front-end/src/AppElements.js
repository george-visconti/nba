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
    background-image: url(${court});
    background-position: center;
    @media (max-width: 1024px){
        margin-bottom:15px;
    }
`

export const Page= styled.div`
        display: flex;
        flex-direction:column;
        align-items:center;
        justify-content: center;
        min-height:100vh;
        width:100%;
        background: #479bf5;
`

export const CardRow= styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
    width:100%;
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
    text-decoration:underline;
    text-decoration-thickness: 2px;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    margin-bottom: 75px;
    @media (max-width: 600px){
        font-size: 18px;
        margin-bottom:0px;
    }
`

export const Logo= styled.img`
    width:25px;
    height:25px;
   

`

export const Name= styled.div`
    display: -webkit-inline-box;
    -webkit-line-clamp:1;
    font-weight: 950;
    margin-top: auto;
    font-family: 'Open Sans', sans-serif;
    display:flex;
    align-items:center;
`




