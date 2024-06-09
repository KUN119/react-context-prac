import React, { useContext, useState } from 'react'
import { OrderContext } from '../../context/OrderContext';

export default function SummuryPage({ setStep }) {
  const [checkbox, setCheckbox] = useState(false);
  const [orderDetails] = useContext(OrderContext);
  // options에 값이 있는지 확인
  const hasOptions = orderDetails.hasOwnProperty('options');

  const productArray = Array.from(orderDetails.products);
  const productList = productArray.map(([key, value]) => (
    <li key={key}>{value} {key}</li>
  )) 
  
  const optionArray = Array.from(orderDetails.options.keys());
  const optionList = optionArray.map(key => (
    <li key={key}>{key}</li>
  ))

  const handleSumbit = (e) => {
    e.preventDefault();
    setStep(2);
  }

  return (
    <div>
      <h2>주문 확인</h2>
      <h3>여행상품: ₩{orderDetails.totals.products.toLocaleString()}</h3>
      <ul>{productList}</ul>
      {/* options에 값이 있으면 리스트 보여주기 */}
      {hasOptions && 
        <>
          <h3>옵션: ₩{orderDetails.totals.options.toLocaleString()}</h3>
          <ul>{optionList}</ul>
        </>
      }
      <form onSubmit={handleSumbit}>
        <input 
          type='checkbox'
          checked={checkbox}
          id='confirm-checkbox'
          onChange={() => setCheckbox(prev => !prev)}
        />{' '}
        <label htmlFor='confirm-checkbox'>
          주문하려는 것을 확인하셨습니까?
        </label>
        <br />
        <button
          disabled={!checkbox}
        >
          주문 확인
        </button>
      </form>
    </div>
  )
}
