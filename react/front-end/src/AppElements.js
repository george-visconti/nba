import styled from 'styled-components'; 


export const CardContainer= styled.div`
    position:relative;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    height 300px;
    width: 200px;
    align-items:center;
    margin-bottom:20px;
   
`

export const Page= styled.div`
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content:center;
        height:100vh;
        width:100%;
`

export const CardRow= styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    height:90%;
    width:100vw;
    margin-top:60px;
    @media (max-width: 1024px){
        flex-direction:column;
        margin-top:40px;
        align-items: center;
    }
`

export const Info= styled.p`
    z-index:2;
    margin-top: auto;
    font-family: 'Open Sans', sans-serif;
    display:flex;
    align-items:center;
`

export const Picture= styled.img`
    z-index:2;

`

export const HeaderText= styled.p`
    font-size: 30px;
    align-text:center;
    text-decoration:underline;
    text-decoration-thickness: 2px;
    font-family: 'Open Sans', sans-serif;
    @media (max-width: 500px){
        font-size: 18px;
        font-weight: bold;
    }
`

export const Logo= styled.img`
    width:25px;
    height:25px;
    z-index:2;

`
export const Court= styled.img`
    position:absolute;
    top:0;
    left:0;
    z-index:1;
    opacity: 0.4;
`



