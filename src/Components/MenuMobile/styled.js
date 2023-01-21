import  styled from 'styled-components';



export const MobileContainer = styled.div `
 
 
   

.menu-mobile {
 position: fixed;
 top: 70px;
 left: -100vw;
 z-index: 999;
 transition: 0.5s all cubic-bezier(0.67, 0.01, 0.1, 0.97) ;
 height: 30vh;
 width: 100vw;
 background-color:  #E6E8EA;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding-top: 20px;
 text-align: left;


}

.menu-mobile.on {
    left: 0;
 

}

nav ul {
  list-style: none;
  width: 100vw;
  padding:50px;
}

nav ul li  {
    text-decoration: none;
    color: #000;
    font-size: 1.4rem;
}


   

`