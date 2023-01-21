import { useState } from 'react'
import { HomeContainer,ContainerGridHome  } from '../Home/styled'
import { LeftSlider } from '../Svgs/Leftslider'
import { RightSlider } from '../Svgs/RightSlider'
import Section from '../../Components/Section/section'

function Home() {

    const [open, setOpen] = useState(false)
   

    


   
  return (
   <>
      <HomeContainer className='animation-scroll'>
         <div className='container-slider'>
           <img src={open ? 'img/slideR2.jpg' : 'img/slider1.jpg'} alt="" />

           <button onClick={() => setOpen(!open)} className='button-left-carrousel'>
               <LeftSlider/>
            </button>

            <button onClick={() => setOpen(!open)} className='button-right-carrousel'>
               <RightSlider/>
            </button>
        
          </div>
       </HomeContainer>

        <ContainerGridHome className='animation-scroll-left'>
           <div  className='container-img-first'>
              <div  className='hover-Price-1'>
                 <h2 className='hover-offer'>Oferta Especial</h2>
                 <h3 className='hover-name-shoes-1'>RESPONSE RUN</h3>
                 <p className='price'>
                    <span>R$&nbsp;499,90</span>
                    R$&nbsp;129.90
                 </p>
              </div>
              <img src="/img/pegasus-man-1.webp" alt="" />
           </div>

           <div className='container-img-second'>
             <div className='hover-Price-2'>
                  <h2 className='hover-best-offer'>Melhor Oferta</h2>
                  <h3 className='hover-name-shoes-2'>TENSAUR RUN</h3>
                  <p className='price-second'>
                   <span>R$&nbsp;179,90</span>
                    R$&nbsp;125.90
                  </p>
             </div>
            <img src="/img/pegasus-1.webp" alt="" />
           </div>
       </ContainerGridHome>

       <Section/>
     
    </>

 
  )
    
}



export default Home