import React, { useState } from 'react';
import useLocalStorage from "use-local-storage";// lib de local storage( salvar no navegador quando algo é adicionado)
export const ProductsContext = React.createContext();
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useLocalStorage("products", "");


  
  


  
 // função de adiciona o tenis
  function addProductCart({
    id,
    name,
    price,
    image,
    quantDeCompra,
    InStock
  }){ 

    const verificationProduct = products.find((verificantionItem) => verificantionItem.id === id) // verificando se tem algum item que eu tentei adiocionar mais de uma vez no carrinho

    if(verificationProduct){ //se tiver, vai retornar o alert, assim não adicionando mais nada desse id.
      return alert('Ja foi adicionado ao carrinho')
    }

    setProducts([...products, {id, name , price, image, quantDeCompra, InStock}])
    
  }

  // função de adicionar mais de um item no carrinho (quantidade)
  function addCountShoes({
    id,

  }){   
    const itemExists = products.find((item) => item.id === id)

    const newItem = {
        ...itemExists,
        quantDeCompra: itemExists.quantDeCompra + 1,   
    }

    if(itemExists.quantDeCompra >= itemExists.InStock){
      return alert('Ja foi adicionado todos que temos em estoque no seu carrinho')
    }
   
    setProducts(products.map((item) => {
      if(item.id === id) {
          return newItem
          
      } else {
        return {
          ...item
        }
      }
      
   }))

  }

  // função de remover mais de um item no carrinho (quantidade)
  function removeCountShoes({
    id
  })  {
    const itemExists = products.find((item) => item.id === id)

    const newItem ={
      ...itemExists,
         quantDeCompra: itemExists.quantDeCompra - 1,     
    }

    if(itemExists.quantDeCompra <= 1){
      return alert('Mínimo de apenas 1 item no carrinho.')
    }
    
    setProducts(products.map((item) => {
      if(item.id === id) {
          return newItem
      } else {
        return {
          ...item
        }
      }
      
   }))
  }



 // função de remove o item todo do carrinho
  function RemoveProductCart(idProduct){
    const Restantes = products.filter( (product) => product.id !== idProduct) // to filtrando os produtos dentro do carrinho e to passando o
                                                                            // produtoID diferente do id do produto
    
     if(RemoveProductCart){
      setProducts(Restantes)
 
     }
  }



  


  return (
    <ProductsContext.Provider value={{ addProductCart, products, setProducts, RemoveProductCart, addCountShoes, removeCountShoes
    }}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => React.useContext(ProductsContext);