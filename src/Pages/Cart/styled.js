import  styled from 'styled-components';

export const CartContainer = styled.div `
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 70vh;
   margin-top: 100px;

   @media screen and (min-width: 769px) and (max-width: 1024px){
       height: 85vh;
   }


   @media screen and (min-width: 481px) and (max-width: 768px){
      height: 100%;

   }
  
   
   @media screen and (min-width: 320px) and (max-width: 480px){
         height: 100%;
      } 
  
   
   h1 {
      margin-bottom: 25px;

      @media screen and (min-width: 481px) and (max-width: 768px) {
         padding: 40px 0 0 20px;
      }

      @media screen and (min-width: 320px) and (max-width: 480px){
        text-align: center;
        padding: 20px;
      } 
   }

   .container-itens-cart {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 950px;
      border-bottom: 1px solid gray;

      @media screen and (min-width: 769px) and (max-width: 1024px) {
          width: 700px;
      }

      @media screen and (min-width: 481px) and (max-width: 768px) {
         display: flex;
         flex-direction: column;
         align-items: center;
         border: none;
         width: 500px;
         
      }

      @media screen and (min-width: 320px) and (max-width: 480px){
         display: flex;
         flex-direction: column;
         align-items: center;
         width: 320px;
         border: none;
      } 

      
      
   }

   .container-produto {
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   .container-produto p {
       position: relative;
       top: 40px;
       font-size: 1.2rem;
       color: #000;

      
   }

   

   .name-itens-cart {
      font-size: 0.8rem;
      text-transform: uppercase ;
      padding-top: 40px;
      
   }
 
   .container-count-cart {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      left: 50px;

      @media screen and (min-width: 481px) and (max-width: 768px) {
         display: flex;
         flex-direction: column;
         align-items: center;
         margin: 10px 90px 0 0;
      }

      @media screen and (min-width: 320px) and (max-width: 480px){
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 10px 90px 0 0;
      } 
      
     
   }

   .count-cart {
      margin-bottom: 30px;
   }

   .container-theAmount-cart {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 20px;
      border: 1px solid gray;
      width: 120px;
      height: 40px;
      border-radius: 10px;
      position: relative;
      bottom: 10px;

   }

   .container-theAmount-cart p {
      cursor: pointer;
      font-size: 1.2rem;
      color: #000;
   }

   .container-price-remover {
      margin-left: 200px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 100px;

      @media screen and (min-width: 769px) and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    @media screen and (min-width: 481px) and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 0;
        margin: 0 0px 20px 0;
      }

      @media screen and (min-width: 320px) and (max-width: 480px){
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          margin: 10px 0 0 0;

      } 
   }

   .container-price {
      display: flex;
      flex-direction: column;
      gap: 45px;
      align-items: center;
   }


   .price-cart {
      position: relative;
      bottom: 20px;
      
   }

   .container-price-remover button {
      width: 125px;
      height: 40px;
      border-radius: 10px;
      background-color: #000;
      color: #fff;
      font-weight: 600;
      border: none;
      cursor: pointer;

      
   }
`