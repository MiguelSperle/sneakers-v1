import { HeaderContainer } from '../Header/styled' ;
import  { IconCart }  from '../Svgs/CarOfProducts' ;
import  { Profile }  from '../Svgs/Profile' ;

import { Link } from 'react-router-dom';
import { useProducts } from '../../Providers/useProducts';
import { useState } from 'react';
import MobileMenu from '../MenuMobile/mobile'

function Header() {
   const { products } = useProducts();
   const [openMenu, setOpenMenu] = useState(false)

  return (
 <>
  { <MobileMenu setOpenMenu={setOpenMenu} openMenu={openMenu}/>}
      <HeaderContainer>
        <img className='retirarMenuMobile'  onClick={() => setOpenMenu(!openMenu)}  src={openMenu ?  '/img/menu-buguer-close.svg' : '/img/menu-buguer-open.svg'} alt="" />
         
        <div className='header-navegation'>
            <h1 className='Title'>sneakers</h1>
              <ul className='navBar'>
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/Produtos" >Produtos</Link></li>
                 <li><Link to="*ERRO">Sobre</Link></li>
             </ul>
        </div>

        
   
        <div className='container-buy'>
          {products.length > 0 && <p className='notification'></p>}
           <Link to="/Cart">< IconCart/></Link>
           <Profile/>
        </div>


     </HeaderContainer>
     
   </>

   
    
  )
    
}

export default Header