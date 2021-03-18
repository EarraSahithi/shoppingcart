import React, { useState } from 'react'
import Card from './Card'
import Header from './Header'
import {cart} from '../Items'
import Cart from './Cart'

function Home() {

  const [ page,setPage]=useState("products")
    const [array1,setArray1]=useState([{
        id:1,
        productName:"DREAM CATCHER",
        price:1000,
        background:"grey",
        photo:"https://i.picsum.photos/id/104/3840/2160.jpg?hmac=Rv0qxBiYb65Htow4mdeDlyT5kLM23Z2cDlN53YYldZU" 
    },
    {   id:2,
        productName:"SHIRTS",
        price:2000,
        photo:"https://i.picsum.photos/id/1059/7360/4912.jpg?hmac=vVWk1qyiXN_VgPhpNqFm3yl2HUPW6fHqYOjTHYO2bHQ"
    },
    {    
        id:3,
        productName:"CAR",
        price:200000,
        photo:'https://i.picsum.photos/id/111/4400/2656.jpg?hmac=leq8lj40D6cqFq5M_NLXkMYtV-30TtOOnzklhjPaAAQ'
    },
    ])
    const [cart,setCart]=useState([])
    const addtoCart=(id)=>{
      console.log(id)
      var item,check=false;
      for(var j=0;j<cart.length;j++){
        if(cart[j].id===id){
          check=true;
          break;
        }
      }
      if(check===true){
        for(var j=0;j<cart.length;j++){
          if(cart[j].id===id){
            cart[j].quantity+=1;
            break;

          }
        }
        setCart( [...cart])
        console.log("In cart",cart)

      }else{
        for (var i=0;i<array1.length;i++){
          if(array1[i].id===id){
             item=array1[i];
            break;
      
          }
        }
        item.quantity=1;
  
       
        setCart( old=>{
          return [...old,item]
        })
        console.log(cart)

      }
      localStorage.setItem("cart",cart)
      
    }
    const toggleHome=()=>{
      setPage("cart")
    }
    const toggleCart=()=>{
      setPage("products")
    }


    const removeProduct=(id)=>{
      var a=[];
      for(var i=0;i<cart.lengt;i++){
        if(id!=cart[i].id){
          a.push(cart[i])
        }
      }
      setCart(cart.filter(p=>p.id!=id))

    }
      return (
        <div className="App">
          {
            (page==="products")?
            <>
             <Header cart={cart} toggleHome={toggleHome}/>
         <h1 className="m-5 bold"> Our Products</h1>
         <div style={{height:"100px",width:"90%",display:'flex',justifyContent:'space-between'}}>
           {
             array1.map((p,i)=>{
             return <Card id={p.id} name={p.productName} desc={p.description} photo={p.photo} price={p.price} addtoCart={addtoCart} />
             })
           }
         
         </div>
            </>
            :
            null
          }
          {
            (page==="cart")?
            <>
             <Header  cart={cart}/>
             <button className="btn btn-primary btn-lg m-5" style={{fontSize:"20px"}} onClick={()=>{toggleCart()}}>back</button>
             <div style={{height:"100px",width:"90%",display:'flex',justifyContent:'space-between'}}>
             {
             cart.map((p,i)=>{
             return <Cart id={p.id} name={p.productName} removeProduct={removeProduct} photo={p.photo} price={p.price} quantity={p.quantity} addtoCart={addtoCart}/>
             })
           }
           </div>

            </>
            :
            null
          }
        
        </div>
      );
}

export default Home
