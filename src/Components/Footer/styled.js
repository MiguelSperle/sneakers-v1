import  styled from 'styled-components';

export const FooterContainer = styled.footer `
    border-top: 1px solid #000;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
    max-width: 1280px;
    height: 19vh;
    margin-top: 20px;

    @media screen and (min-width: 320px) and (max-width: 480px) {
        width: 100%;
    }
   
    .logo {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .navigation nav ul {
        display: flex;
        flex-direction: column;
        align-items: left;
        list-style: none;
        gap: 5px;
    }

    .navigation nav ul li a {
        font-size: 0.8rem;
        text-decoration: none;
        color: #000;
        font-weight: 600;

        @media screen and (min-width: 320px) and (max-width: 480px) {
         font-size: 0.9rem;
       }
    }

    .navigation nav ul li a:hover {
        color: #007aff;
        transition: all 400ms ease;
    }

    .come-back-top {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        @media screen and (min-width: 320px) and (max-width: 480px) {
          display: none;
       }
    }

    
   

`