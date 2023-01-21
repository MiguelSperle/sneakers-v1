import { GlobalStyle } from './GlobalStyle'
import Header from './Components/Header/header'
import Home from './Components/Home/home'
import Footer from './Components/Footer/footer';
import  Produtos  from './Pages/Produtos/Produtos' ;
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom'
import Cart from './Pages/Cart/cart';
import BuyShoes from './Pages/BuyShoes/Buy';
import PageNaoEncontrada from './Pages/404'; // importanod o que vai aparecer quando criar numa url q não tenha!
import ScrollReveal from 'scrollreveal' 
import { useEffect } from 'react';
import { ProductsProvider } from './Providers/useProducts' ;



function App() {

  useEffect( () => {
  ScrollReveal().reveal('.animation-scroll', {
    duration: 1000,
    delay: 300,
    easing: "ease-in-out",
    reset: false,
    origin: "bottom",
    distance: "10px",
});

ScrollReveal().reveal('.animation-scroll-left', {
  duration: 1200,
  delay: 400,
  easing: "ease-in-out",
  reset: false,
  origin: "bottom",
  distance: "70px",
});

ScrollReveal().reveal('.animation-scroll-bottom', {
  duration: 1400,
  delay: 500,
  easing: "ease-in-out",
  reset: false,
  origin: "bottom",
  distance: "70px",
});



  
  
   },[])
 
  
  
  return (
  <>
  <ProductsProvider>
   <Router>
   <Header/>
   <GlobalStyle/>
   <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Produtos'  element={<Produtos/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Produtos/:slug' element={<BuyShoes/>}/>
        <Route path='*ERRO' element={<PageNaoEncontrada/>}/> {/* fazendo isso pra rota 404, (rota que não existi) */}
       
   </Routes>
    <Footer/>
   </Router>
   
   </ProductsProvider>
  </>
    
  )
    
}

export default App
