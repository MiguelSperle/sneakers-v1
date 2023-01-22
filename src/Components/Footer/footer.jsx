import { FooterContainer } from '../Footer/styled' ;
import { Link } from 'react-router-dom';
import { TopIcon } from '../Svgs/BackTop';


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
                    <li><Link to='/' onClick={() =>  window.scrollTo(0, 0)} >Home</Link></li>
                    <li><Link to='*ERRO'>Produtos</Link></li>
                    <li><Link to='*ERRO'>Sobre</Link></li>
                  </ul>
               </nav>
            </div>

            <div className='come-back-top'>
           <Link onClick={() =>  window.scrollTo(0, 0)} ><TopIcon/></Link>
             <p>Voltar pro topo</p>
            </div>
      </FooterContainer>
   

   
    
  )
    
}

export default Footer