import styled from 'styled-components' ;

export const Container = styled.div `
    min-height: 75vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media screen and (width: 481px) and (max-width: 768px){
        text-align: center;
    } 

    @media screen and (width: 320px) and (max-width: 480px){
        text-align: center;
    } 
 `