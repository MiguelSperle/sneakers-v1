import  styled from 'styled-components';


export const ContainerPageProducts = styled.div `
   margin-top: 150px;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   gap: 2rem;

   select {
    width: 150px;
    height: 40px;
    padding: 0 20px;
    border-radius: 10px;
    border: 1px solid black;
   }

 


`

export const ContainerProdutos = styled.div `
   margin-top: 100px;
   
  
  .swiper {
    max-width: 1550px;
    height: 560px;
    
      
 
    
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background-color: #f6f6f6;
  border: 1px solid lightgray;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
 
 
}


.swiper-slide img {

  object-fit: cover;
  width: 250px;
  height: 200px;
  margin-top: 80px;
  position: relative;
  border-radius: 15px;
  bottom: 110px;
  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 50px 50px 15px 14px rgba(0,0,0,0);

  
}

.container-card-1, .container-card-2, .container-card-3 {
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    
   
    
}

.container-price p, .container-price-2 p, .container-price-3 p {
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 84px;
}

.price , .price-2, .price-3{
    color: red;
    font-size: 1.1rem;
   
}

.price span , .price-2 span, .price-3 span{
    color: #000;
    font-size: 0.8rem;
    font-weight: 600;
}

.product-name, .product-name-2, .product-name-3 {
    font-size: 0.7rem;

}

.addCart {
    width: 250px;
    height: 50px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    border-radius: 0.5rem;
    background-color: rgb(27,27,27);
    color: rgb(255,255,255);
    -webkit-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
    font-size: 1.1rem;
}

`

