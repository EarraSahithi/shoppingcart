import React, { useState } from 'react'
import Header from './Header'

function Cart({id,name,photo,price,quantity,removeProduct}) {
    
   
    return (
        <div>
             <div key={id} className="card"  style={{marginLeft:"100px",height:"200px",width:"300px", border:"none"}}>
                <img className="card-img-top" style={{height:"200px",width:"300px"}}src={photo} alt="img photo"/>
                    <div className="card-body ">
                      <h5 className="card-title fs-2">{name}</h5>
                        <p className="card-text fs-4">{price}</p>
                        <p className="card-text">Quantity:{quantity}</p>
                        <a href="#" className="btn btn-primary btn-lg" onClick={()=>{removeProduct(id)}}>Remove</a>
                    </div>
                    <br/>
                </div>
            
            
            
        </div>
    )
}

export default Cart
