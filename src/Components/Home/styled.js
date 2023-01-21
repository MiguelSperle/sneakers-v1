import  styled from 'styled-components';

export const HomeContainer = styled.main `

display: flex;
justify-content: center;
align-items: center;
margin-top: 140px;


.container-slider {
    border-radius: 15px;
    width: 1200px;
    height: 25rem;

    @media screen  and (min-width: 1201px){
        width: 1170px;
    }
    
    @media screen  and (min-width: 1025px) and (max-width: 1200px){
         width: 950px;
    } 


    @media screen and (min-width: 769px) and (max-width: 1024px) {
        width: 700px;
       
    }

      
   @media screen and (min-width: 481px) and (max-width: 768px) {
        width: 400px;
         
    }

    @media screen and (min-width: 320px) and (max-width: 480px) {
        width: 300px;
        
        
    }

    
    
}
.container-slider img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    object-fit: cover;
    box-shadow: inset -1px 3px 8px 5px #1f87ff, 2px 5px 16px 0px #0b325e, 5px 5px 15px 5px rgb(0 0 0 / 0%);
    
}

.button-left-carrousel {
    background: rgb(27, 27, 27);
    color: white;
    padding: 0.5rem;
    border-radius: 50%;
    position: relative;
    bottom: 300px;
    left: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;

    @media screen and (min-width: 320px) and (max-width: 480px) {
        left:  10px;
    }
}

.button-left-carrousel svg {
    font-size: 18px;
}

.button-right-carrousel {
    background: rgb(27, 27, 27);
    color: white;
    padding: 0.5rem;
    border-radius: 50%;
    position: relative;
    bottom: 342px;
    left: 1140px;
    display: flex;
    align-items: center;
    cursor: pointer;

    
    @media screen  and (min-width: 1201px){
        left: 1115px;
    }

    @media screen  and (min-width: 1025px) and (max-width: 1200px){
         left: 895px;
    } 

    
    @media screen and (min-width: 769px) and (max-width: 1024px) {
         left: 650px;
    }

    @media screen and (min-width: 48px) and (max-width: 768px) {
        left: 345px;

    }

    @media screen and (min-width: 320px) and (max-width: 480px) {
        left: 251px;
        
    }
}

.button-right-carrousel svg {
    font-size: 18px;
}

`
export const ContainerGridHome = styled.div `
     display: grid;
     grid-template-columns: repeat(2, 400px);
     justify-content: center;
     margin-top: 120px;
     gap: 1.2rem;
     margin-bottom: 20px;

   
     @media screen and (min-width: 769px) and (max-width: 1024px) {
         display: flex;
         flex-direction: column;
         align-items: center;
    }


    @media screen and (min-width: 320px) and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (min-width: 481px) and (max-width: 768px) {
         display: flex;
         flex-direction: column;
         align-items: center;
       
    }


   
   

     .container-img-first, .container-img-second {
        width: 400px;
        height: 450px;
        border-radius: 15px;
        box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);

        @media screen and (min-width: 320px) and (max-width: 480px) {
        width: 320px;
         
        }
       

     }

     .container-img-first img, .container-img-second img {
        width: 400px;
        height: 450px;
        object-fit: cover;
        border-radius: 15px;

        @media screen and (min-width: 320px) and (max-width: 480px) {
          width: 320px;
    
         }
     }
     
     
     .hover-Price-1, .hover-Price-2 {
        position: absolute;
        border-radius: 15px;
        height: 450px;
        width: 400px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        opacity: 0;

        @media screen and (min-width: 320px) and (max-width: 480px) {
          width: 320px;
        }

      
     }

     .hover-Price-1:hover , .hover-Price-2:hover{
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.6);
        transition: all 0.4s ease;
     }

     .hover-offer, .hover-best-offer {
        color: rgb(182, 188, 200);
    }

    .hover-name-shoes-1, .hover-name-shoes-2{
        color: white;
    }

    .price, .price-second {
        color: rgb(182, 188, 200);
        font-size: 1.2rem;
        display: flex;
        flex-direction: column;
    }

    .hover-Price-1 p span, .hover-Price-2 p span {
        font-size: 20px;
        text-decoration: line-through;
    }
    

 
     
`



