import React from 'react'

function Header({cart,toggleHome}) {
    return (
            
     <nav class="navbar navbar-light " style={{backgroundColor:"blue"}}>
      <div class="container-fluid">
         <span class="navbar-brand mb-0 h1 me-5" style={{fontSize:"40px"}}>Shopping Cart</span>

         <div className="mr-auto" style={{fontSize:"40px"}}>
         <i className="fa fa-shopping-cart "  style={{cursor:"pointer"}} onClick={()=>{toggleHome()}}>{cart.length}</i>
         
         </div>
         
  </div>
            
            
  
  
</nav>
        
    )
}

export default Header
