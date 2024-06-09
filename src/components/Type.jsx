import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Options from './Options';
import Products from './Products';

export default function Type({ orderType }) {
    // const [countChecked, setCountChecked] = useState(0);
    const [items, setItems] = useState([])

    useEffect(() => {
      loadItems(orderType);
    }, [orderType])

    const loadItems = async (orderType) => {
        try {
            await axios.get(`http://localhost:4000/${orderType}`)
            .then(response => setItems(response.data))
        } catch (error) {
            console.log(error);
        }
    }
    
    const ItemComponent = orderType === 'products' ? Products : Options;

    const optionItems = items.map(item => (
        <ItemComponent 
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
        />
    ))

    return (
        <div>
            <h2>주문 종류</h2>
            <p>하나의 가격</p>
            <p>총 가격:</p>
            <div className={orderType === 'options' ? 'flex-col' : 'flex'}>
                {optionItems}
            </div>
        </div>
    )
}
