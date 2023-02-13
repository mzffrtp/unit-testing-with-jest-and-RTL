import React from 'react';
import Scoops from './Scoops';
import OrderForm from "../form/OrderForm"
import Toppings from './Toppings';


const Welcome = () => {
  return (
    <div>
      <Scoops />
      <Toppings />
      <OrderForm />
    </div>
  )
}

export default Welcome
