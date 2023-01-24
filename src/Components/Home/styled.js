import  styled from 'styled-components';

export const HomeContainer = styled.main `

display: flex;
justify-content: center;
align-items: center;
margin-top: 140px;
padding: 10px;



.swiper {
  width: 1200px;
  height: 600px;


  @media screen and (min-width: 769px) and (max-width: 1024px){
    width: 100%;
    border-radius: 0.5rem;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    border-radius: 0.5rem;
  }


  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    border-radius: 0.5rem;
  }
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
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



