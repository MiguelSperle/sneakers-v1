
import { ContainerSection } from '../Section/styled'
import  products  from '../../mock/products.json'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import { Link } from 'react-router-dom';
import { useProducts } from '../../Providers/useProducts';
import { useState } from 'react';

export default function App() {
   const { addProductCart } = useProducts();

  const [save, setSave] = useState();

  const armazenar = (key,value) => {
    localStorage.setItem(key,value)
  }


     

  return (
    
      <ContainerSection className='animation-scroll-bottom'>
        <p>Clique na foto dos tenis abaixo para saber mais.</p>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {products.map((product) => { // to dando um map no json
          return (
            <SwiperSlide key={product.id} >
            <Link to={`/Produtos/${product.slug}`} onClick={() =>  window.scrollTo(0, 0)} ><img className='img-cards' src={product.images[0].url} alt="" /></Link>
                <div className='global-container-price'>
                  <div className='price-container'>
                     <p className='price-card'>
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                        <span>Em até 5x de{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price / 5)} sem juros</span>
                     </p>
                     <p className='product-name'>{product.name}</p>
                   </div>
                  <button  onClick={() => addProductCart({
                    id: product.id, // passando como parâmetro da função de click (id, name, price e etc)
                    name: product.name,
                    price: product.price,
                    image: product.images[0].url,
                    quantDeCompra: 1,
                    InStock: product.countInStock

                  })}  className='addCart'>Add Cart</button> 
                </div>
             </SwiperSlide>
          )
        })}
        



      </Swiper>
      </ContainerSection>
   
  );
}
