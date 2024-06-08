import React from 'react'
import Type from '../../components/Type'

export default function OrderPage() {
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
          <h2>Total Price:</h2>
          <button>주문</button>
        </div>
      </div>
    </div>
  )
}
