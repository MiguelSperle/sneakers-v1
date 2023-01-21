import  styled from 'styled-components';


export const HeaderContainer = styled.div `
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   max-width: 1280px;
   position: fixed;
   top: 0px;
   left: 0px;
   right: 0px;
   margin: 0 auto;
   border-bottom: 1px solid #000;
   background-color: rgb(247, 248, 253);
   height: 5rem;
   padding: 10px 20px;
   z-index: 9999;

   .header-navegation {
     display: flex;
     flex-direction: row;
     align-items: center;
     gap: 80px;

     @media screen and (min-width: 320px) and (max-width: 480px) {
             display: none;
        }
     

     .Title {
        font-size: 1.4rem;
     }


     .navBar {
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style: none;
        gap: 40px;

        @media screen and (min-width: 481px) and (max-width: 768px) {
        display: none;

      }

        @media screen and (min-width: 769px) and (max-width: 1024px){
             display: none;
        }

        
     }
     
     .navBar li a {
        text-decoration: none;
        font-size: 0.927rem;
        color: rgb(27, 27, 27);
        transition: all 300ms ease;
     }

     .navBar li a:hover {
        color: #007aff;;
        transition: all 200ms ease;
     }
   
   }

   .retirarMenuMobile {
      @media screen and (min-width: 1025px) {
         display: none;
      }
   }
  

   .container-buy {
    display: flex;
    flex-direction: row;
    gap: 20px;
   }

   .container-buy svg {
    cursor: pointer;
   }

   .notification {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgb(215, 25, 32);
}
   
   

  
`