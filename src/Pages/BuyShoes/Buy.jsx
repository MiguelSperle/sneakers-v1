import { ContainerItem } from '../BuyShoes/styled'
import products from '../../mock/products.json'
import { useParams } from "react-router-dom"; 





// carrousel swipper
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useProducts } from '../../Providers/useProducts';

function Teste() {

  const { slug } = useParams(); // verifica se existe algum parâmetros passado no path da url
  const productSelected = products.find((product) => product.slug === slug) // verificando se existi algum produto do json que é igual a rota da url

  const { addProductCart } = useProducts();
  return (
      
     
          <ContainerItem >


              <Swiper
                pagination={{
                type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
          >
         
          {/* {productSelected.images.map((productImg) => {
            return (
              <SwiperSlide key={productImg.id}>
                 <img src={productImg.url} alt="" />
              </SwiperSlide>
            )
              ( CODIGO ACIMA EU PECORRI AS IMG E RETORNEI UM UNICO SWIPER SLIDER QUE TINHA SE TORNADO E DE ACORDO COM O Q EU CLICASSE 
                IA APARECER A IMAGEM. MAS RESOLVI USAR O ABAIXO.
                )

          })} */} 
                   <SwiperSlide >
                    <img src={productSelected.images[0].url} alt="" />
                   </SwiperSlide>

                  <SwiperSlide>
                   <img src={productSelected.images[1].url} alt="" />
                  </SwiperSlide>

                  <SwiperSlide>
                   <img src={productSelected.images[2].url} alt="" />
                  </SwiperSlide>
          
           </Swiper>
           
           
            
             <div className='container-information-shoes' >
               <h1>{productSelected.name}</h1>
               <p className='description-item'>{productSelected.description}</p>
               <p className='count-shoes'>Disponíveis: {productSelected.countInStock}</p>
               <div className='grid-size'>
                  <button>{productSelected.sizes[0]}</button>
                  <button>{productSelected.sizes[1]}</button>
                  <button>{productSelected.sizes[2]}</button>
                  <button>{productSelected.sizes[3]}</button>
                  <button>{productSelected.sizes[4]}</button>
               </div>
                 <div className='container-price'>
                   <p>
                   &nbsp;{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(productSelected.price)}
                    </p>
                 </div>
                 <div className='container-cep'>
                    <input type="text" placeholder='Calcular Frete' />
                     <button>Enviar</button>
                 </div>
                 <div className='container-add-cart'>
                 <button onClick={() => addProductCart({
                  id: productSelected.id,
                  name: productSelected.name,
                  price: productSelected.price,
                  image: productSelected.images[0].url,
                  quantDeCompra: 1,
                  InStock: productSelected.countInStock
                 })} className='button-add'>Adicionar ao carrinho</button>
                 </div>
            </div> 



          </ContainerItem>
      
   

   
    
  )
    
}

export default Teste