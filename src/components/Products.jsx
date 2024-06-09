import React from 'react'

export default function Products({name, imagePath, updateItemCount}) {

    const handleChange = (e) => {
        const currentValue = e.target.value
        updateItemCount(name, currentValue)
    }

    return (
        <>
            <section className='text-center'>
                <img 
                    className='w-3/4'
                    src={`http://localhost:4000${imagePath}`}
                    alt={`${name} product`} 
                />
                <form className='mt-2'>
                    <label className='text-right'>
                        {name}
                        <input 
                            className='ml-4'
                            type="number"
                            name='quantity'
                            min='0'
                            defaultValue={0}
                            onChange={handleChange}
                        />
                    </label>
                </form>
            </section>
        </>
    )
}
