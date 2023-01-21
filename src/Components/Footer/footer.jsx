import { FooterContainer } from '../Footer/styled' ;
import { Link } from 'react-router-dom';
import { TopIcon } from '../Svgs/BackTop';
import Header from '../../Components/Header/header'

function Footer() {
  
  return (
 
      <FooterContainer>
            <div className='logo'>
                <h2>sneakers</h2>
                <p>Ande com beleza</p>
            </div>

            <div className='navigation'>
               <nav>
                  <ul>
                    <li>Navegação</li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='*ERRO'>Produtos</Link></li>
                    <li><Link to='*ERRO'>Sobre</Link></li>
                  </ul>
               </nav>
            </div>

            <div className='come-back-top'>
            <TopIcon/>
             <p>Voltar pro topo</p>
            </div>
      </FooterContainer>
   

   
    
  )
    
}

export default Footer