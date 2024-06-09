import React, { useContext, useEffect, useState } from 'react'
import { OrderContext } from '../../context/OrderContext'
import axios from 'axios';

export default function CompletePage({ setStep }) {
  const [orderData] = useContext(OrderContext);
  const [orderHistory, setOrderHistory] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    orderCompleted(orderData);
  }, [orderData])

  const orderCompleted = async (orderData) => {
    try {
      await axios.post('http://localhost:4000/order', orderData)
      .then(response => setOrderHistory(response));
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  if(loading) {
    return (<div>...loading</div>)
  } else {
    return (
      <section>
        <h2>주문이 성공했습니다.</h2>
        <h3>지금까지 모든 주문</h3>
        <br />
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          {orderHistory.data.map((order) => (
            <tr>
              <td>{order.orderNumber}</td>
              <td>₩{order.price.toLocaleString()}</td>
            </tr>
          ))}
          </tbody>
        </table>
        <button onClick={() => setStep(0)}>돌아가기</button>
      </section>
    )
  }
}
