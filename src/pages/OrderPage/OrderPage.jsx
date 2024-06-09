import React, { useContext } from 'react'
import Type from '../../components/Type'
import { OrderContext } from '../../context/OrderContext';

export default function OrderPage({ setStep }) {
  const [orderData] = useContext(OrderContext);
  console.log(orderData);

  return (
    <div>
      <h1>Travel Products</h1>
      <div>
        <Type orderType='products'/>
      </div>
      <div className='flex mt-5'>
        <div className='w-1/2'>
          <Type orderType='options'/>
        </div>
        <div className='w-1/2'>
          <h2>Total Price: {orderData.totals.total}</h2>
          <button onClick={() => setStep(1)}>주문</button>
        </div>
      </div>
    </div>
  )
}
