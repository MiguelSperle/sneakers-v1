import { CartContainer } from './styled' ;
import { useProducts } from '../../Providers/useProducts';
import { useState } from 'react';

function Cart() {
   const { products,  RemoveProductCart,  addCountShoes,  removeCountShoes} =  useProducts() 
   
 

    


  return (
     <CartContainer>
        <h1>Seu carrinho aqui.</h1>
         {products.map((produto) => {
            return (
               <div key={produto.id} className='container-itens-cart' >
                  <div className='container-produto'>
                     <p>Produto</p>
                     <img style={{width: 150}} src={produto.image} alt="" />
                  </div>
                  <p className='name-itens-cart'>{produto.name}</p>
                  
                  <div className='container-count-cart'>
                     <p className='count-cart'>Quantidade</p>
                       <div className='container-theAmount-cart'>
                         <p onClick={() => removeCountShoes({
                           id: produto.id,
                           quantDeCompra: 1
                         })}>-</p>
                          <span>{produto.quantDeCompra}</span>
                         <p onClick={() => addCountShoes({
                           id: produto.id,
                           quantDeCompra: 1,
                           InStock: produto.countInStock,
                          
                           
                         })}>+</p>
                         

                         
                       </div>
                  </div>

                  <div className='container-price-remover'>
                       <div className='container-price'>
                           <p>Preço</p>
                           <p className='price-cart' >{(produto.price * produto.quantDeCompra).toFixed(2)}</p> {/*eu to pegando o preço do produto e 
                              multiplicando pelo quantidade de itens adicionados ou retirados
                            */}
                       </div>
                         <button onClick={() => RemoveProductCart(produto.id)}>Remover</button>
                  </div>
               </div>

               



            )
         })}
     </CartContainer>
      
   

   
    
  )
    
}

export default Cart