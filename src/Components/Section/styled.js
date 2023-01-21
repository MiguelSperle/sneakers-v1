import  styled from 'styled-components';

export const ContainerSection = styled.div `

    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: 50px;
    gap: 20px;

    @media screen and (min-width: 320px) and (max-width: 480px) {
 
    }
    
   p {
    text-align: center;
   }

    

    @media screen and (min-width: 481px) and (max-width: 768px) {
      width: 450px;
         
    }

    @media screen and (min-width: 320px) and (max-width: 480px) {
      width: 320px;
    }

.swiper {
  width: 300px;
  height: 460px;
  
  @media screen and (min-width: 320px) and (max-width: 480px) {
          width: 200px;
          height: 480px;
}
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: black;
  display: flex;
  flex-direction: column;

}
.swiper-slide:nth-child(1n) {
  background-color: #f6f6f6;
  border: 1px solid lightgray;

}

.swiper-slide:nth-child(2n) {
  background-color: #f6f6f6;
  border: 1px solid lightgray;
}

.swiper-slide:nth-child(3n) {
  background-color: #f6f6f6;
  border: 1px solid lightgray;
}

.img-cards, .img-cards-2, .img-cards-3 {
  width: 250px;
  height: 200px;
  
  position: relative;
  border-radius: 15px;
  bottom: 40px;
  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 50px 50px 15px 14px rgba(0,0,0,0);

  @media screen and (min-width: 320px) and (max-width: 480px) {
          width: 180px;
          height: 180px;
    
  }
 
}

.global-container-price, .global-container-price-2 , .global-container-price-3{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.price-container, .price-container-2, .price-container-3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.price-card, .price-card-2, .price-card-3 {
  color: red;
  position: relative;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

.price-card span, .price-card-2 span , .price-card-3 span{
  font-size: 0.8rem;
  color: #000;
  @media screen and (min-width: 320px) and (max-width: 480px) {
       width: 180px;
    
  }
  
}

.product-name, .product-name-2, .product-name-3 {
    font-size: 14px;
    color: rgb(27, 27, 27);
    font-weight: 500;
    cursor: pointer;
    transition: all 200ms ease-in-out 0s
}


.addCart {
    width: 250px;
    height: 50px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    border-radius: 0.5rem;
    background-color: rgb(27, 27, 27);
    color: rgb(255, 255, 255);
    transition: all 0.2s ease-in-out 0s;
    font-size: 1.1rem;

    @media screen and (min-width: 320px) and (max-width: 480px) {
         width: 180px;
    
  }
}




`