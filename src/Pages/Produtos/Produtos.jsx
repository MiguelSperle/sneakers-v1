import { ContainerPageProducts, ContainerProdutos} from './styled' ;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import  products  from '../../mock/products.json'
import { Link } from 'react-router-dom';
import { useProducts } from '../../Providers/useProducts';
import { useState } from 'react';

function Produto() {

  const { addProductCart } =  useProducts() 


  const [lookProdutos, setLookProtutos] = useState(products)
  

  function LookCategories(e){ // rever
     let optionSelected = e.target.options[e.target.selectedIndex].value // pega o value do option
      
     if(optionSelected === 'all'){ // se optionSelect === value (all) do option
      return setLookProtutos(products) // vai retornar todos os produtos
     }

     if (optionSelected ){
      const filteredProducts = products.filter((product) => product.category === optionSelected) // filtrando as categorias
       if (filteredProducts.length === 0) { // se não tiver tal categoria vai retornar todas
          return setLookProtutos(products)
        } else { // se n, retorna a categoria q tem no option
          return setLookProtutos(filteredProducts)
        }
     
     } else {
      setLookProtutos(products)
       
     }
      
    
  }

    return (
    <Container-Global className='animation-scroll-produtos'>
     <ContainerPageProducts>
       <select  name="category" id="category">
          <option value="categoria-1">
            Categoria-1
          </option>

          <option value="categoria-2">
            Categoria-2
          </option>

          <option value="Categoria-3">
             Categoria-3
          </option>
        </select>

        <select onChange={LookCategories} name="estilo" id="estilo">
           <option value="all">
               All
           </option>

           <option value="esporte">
              Esporte
           </option>

            <option value="casual">
               Casual
            </option>
        </select>
    </ContainerPageProducts>

     <ContainerProdutos>
        <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
         {lookProdutos.map((product) => {
           return (
          <SwiperSlide key={product.id}>
            <Link to={`/Produtos/${product.slug}`}> <img src={product.images[0].url} alt="" /></Link>
              <div  className='container-card-1' >
                <div className='container-price'>
                   <p className='price'>
                   {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                     <span>Em até 5x de{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price / 5)} sem juros</span>
                    </p>
                </div>
                <p className='product-name'>{product.name}</p>
                <button onClick={() => addProductCart({
                   id: product.id, // passando como parâmetro da função de click (id, name, price e etc)
                   name: product.name,
                   price: product.price,
                   image: product.images[0].url,
                   quantDeCompra: 1,
                   InStock: product.countInStock,
              
                   
                })} className='addCart'>Add Cart</button>
              </div>
          </SwiperSlide>
           )
         })}


      </Swiper>

        </ContainerProdutos>
        </Container-Global>
            
      
    )
}

export default Produto