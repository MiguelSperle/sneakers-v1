import  styled from 'styled-components';

export const ContainerItem = styled.div `
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   margin-top: 400px;
   max-width: 1500px;
   height: 620px;
   margin: 0 auto;
   margin-top: 200px;
    
   @media screen and (min-width: 769px) and (max-width: 1024px) {
       display: flex;
       flex-direction: column;
       height: 100%;
       gap: 40px;

    }

    @media screen and (min-width: 481px) and (max-width: 768px) {
         display: flex;
         flex-direction: column;
         height: 100%;
          
    }

    @media screen and (min-width: 320px) and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin-top: 100px;
    }

.swiper {
  width: 500px;
  height: 450px;

  @media screen and (min-width: 769px) and (max-width: 1024px) {
         width: 600px;
           
    }

    
    @media screen and (min-width: 481px) and (max-width: 768px) {
        margin-bottom: 20px;
        width: 450px;
          
    }

    @media screen and (min-width: 320px) and (max-width: 480px) {
        width: 320px;
    }
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #f6f6f6;
  
 
  
  display: flex;
  justify-content: center;
  align-items: center;

  
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;

 
  
}

.container-information-shoes{
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-right: 100px;

    
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        text-align : center;
        padding-left: 150px;
    }

    
    @media screen and (min-width: 481px) and (max-width: 768px) {
         text-align: center;
         padding-left: 120px;
          
    }

    @media screen and (min-width: 320px) and (max-width: 480px) {
         text-align: center;
        padding-left: 90px;
    }
    
}

.container-information-shoes h1 {
    color: #000;
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
}

.description-item {
    width: 400px;
    color: rgb(86, 85, 85);
    font-size: 0.888rem;
    text-align: justify;

    @media screen and (min-width: 320px) and (max-width: 480px) {
        width: 300px;
    }
}

.count-shoes {
    font-size: 1.2rem;
}

.grid-size{ 
   display: grid;
   grid-template-columns: repeat(5,1fr);
   gap: 10px;
}

.grid-size button {
    height: 40px;
    border-radius: 7px;
    border: 1px solid gray;
    background-color: #fff;
    cursor: pointer;
    transition: all 400ms ease;
}

.grid-size button:hover {
    background-color: #000;
    color: #fff;
    transition: all 400ms ease;
}

.container-price p  {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 1.4rem;
}


.container-cep {
    display: flex;
    flex-direction: row;
    gap: 10px;
    
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        justify-content: center;
    }

    @media screen and (min-width: 481px) and (max-width: 768px) {
         justify-content: center;
          
    }

    @media screen and (min-width: 320px) and (max-width: 480px) {
       justify-content: center;
    }
}

.container-cep input {
    height: 50px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid gray;
}

.container-cep button {
    width: 90px;
    border-radius: 8px;
    background-color: #000;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
}

.container-add-cart {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    @media screen and (min-width: 769px) and (max-width: 1024px) {
        justify-content: center;
    }

    
    @media screen and (min-width: 481px) and (max-width: 768px) {
         justify-content: center;
          
    }

    @media screen and (min-width: 320px) and (max-width: 480px){
        justify-content: center;
    }
}

.button-add {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 260px;
    height: 60px;
    font-size: 1rem;
    border-radius: 10px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
}

.container-TheAmount {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid gray;
    border-radius: 9px;
    width: 120px;
    height: 50px;
}

.container-TheAmount p {
    font-size: 1.3rem;
    
}





 `