import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Toppings = () => {
  const [toppings, setToppings] = useState([]);
  const [cart, setCart] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:3005/soslar")
      .then((res) => {
        setToppings(res.data)
      })
      .catch((err)=>{console.log(err);})
  }, [])

  const handleTopping = (e,topping) =>{
    if(e.target.checked){
      setCart([...cart, topping])
    }
    else{
      const updatedCart = cart.filter((i)=>i.name !== topping.name) 
      setCart(updatedCart)
    }
  }

  return (
    <div className='container mt-5'>
      <h1 className="text-start">Toppings</h1>
      <p className="text-start">2€ each</p>
      <h2 className="text-start"
      data-testid="totalPrice"
      >Total Price:{cart.length*2} €</h2>
      <div className='row'>
        {
          toppings.map((topping)=>(
            <div
            key={topping.name}
            className="container d-flex flex-column justify-content-center align-items-center mt-3"
            style={{width:"150px"}}
            > 
              <img src={topping.imagePath}
              alt={topping.name}
              className="w-100" />
              <label htmlFor={topping.name}>{topping.name}</label>
              <input 
              type="checkbox"
              onChange={(e)=>handleTopping(e,topping)}
              id={topping.name}
              />
             
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Toppings
