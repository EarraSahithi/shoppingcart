import React, { useState } from 'react'
import {cart} from '../Items'
function Card({name,desc,price,photo,id,addtoCart}) {
  const add=(id)=>{
    console.log("clicked")
    cart=[...cart,id]
  }
    return (
        <>
        <div key={id} className="card"  style={{marginLeft:"100px",height:"100px",width:"500px",border:"none"}}>
           <img className="card-img-top" style={{height:"300px",width:"300px"}}src={photo} alt="img photo"/>
               <div className="card-body width=18rem" >
                 <h5 className="card-title fs-2">{name}</h5>
                 <p className="card-text fs-4">{price}</p>
                 <a href="#" className="  btn btn-primary btn-lg " onClick={()=>{addtoCart(id)}}>Add to cart</a>
               </div>
         </div>
        </>
    )
}

export default Card
