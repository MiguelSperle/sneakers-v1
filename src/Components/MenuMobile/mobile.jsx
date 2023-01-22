import {  MobileContainer } from '../MenuMobile/styled' ;
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function MenuMobile({openMenu , setOpenMenu}) {

  const navigate = useNavigate()

  const handleClickRedirectToHome = () => { // função que faz com quando eu clicar no link, volte pra pagina clicada e comece no inicio da pagina
      setOpenMenu(false)
      navigate('/')
      window.scrollTo(0, 0);
  }


  
  
  
  return (

    
 
     <MobileContainer  >
       <nav className={ openMenu ? 'menu-mobile on' : 'menu-mobile'} >
            <ul>
                <Link onClick={handleClickRedirectToHome} to='/'><li>Home</li></Link>
                <Link onClick={handleClickRedirectToHome} to='*ERRO'><li>Produtos</li></Link>
                <Link onClick={handleClickRedirectToHome} to='*ERRO'><li>Sobre</li></Link>
            </ul>
        </nav>

     </MobileContainer>
   

   
    
  )
    
}

export default MenuMobile