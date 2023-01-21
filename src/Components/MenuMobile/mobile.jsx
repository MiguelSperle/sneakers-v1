import {  MobileContainer } from '../MenuMobile/styled' ;
import { Link } from 'react-router-dom';

function MenuMobile({openMenu , setOpenMenu}) {
  return (

    
 
     <MobileContainer  >
       <nav className={ openMenu ? 'menu-mobile on' : 'menu-mobile'} >
            <ul>
                <Link onClick={() => setOpenMenu(false)} to='/'><li>Home</li></Link>
                <Link onClick={() => setOpenMenu(false)} to='*ERRO'><li>Produtos</li></Link>
                <Link onClick={() => setOpenMenu(false)} to='*ERRO'><li>Sobre</li></Link>
            </ul>
        </nav>

     </MobileContainer>
   

   
    
  )
    
}

export default MenuMobile