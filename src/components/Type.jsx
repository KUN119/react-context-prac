import React from 'react'
import images from '../assets/images/image';

const 여행상품모음 = [
    {id: 1, name: 'Korea', src: images[0]},
    {id: 2, name: 'Japan', src: images[1]},
    {id: 3, name: 'Vientnam', src: images[2]},
    {id: 4, name: 'Philippines', src: images[3]},
]

export default function Type({ orderType }) {
    if(orderType === 'products'){
        return (
            <>
                <section>
                    <h1>Products</h1>
                    <p>Productss total: </p>
                    <section className='flex'>
                        {여행상품모음.map(여행상품 => (
                            <li className='list-none flex-col mr-10 border-solid' key={여행상품.id}>
                                <img src={여행상품.src} className='rounded-full w-40 h-40' />
                                <div className='flex items-center'>
                                    <p>{여행상품.name}:</p>
                                    <input className='flex ml-2' type="number" />
                                </div>
                            </li>
                        ))}
                    </section>
                </section>
            </>
        )
    }

    if(orderType === 'options'){
        return (
            <div>Type</div>
        )
    }
}
