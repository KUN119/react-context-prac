import React, { useState } from 'react'

export default function Options({ name, updateItemCount }) {
    return (
        <>
            <section>
                <label className='flex mb-2'>
                    <input 
                        type="checkbox" 
                        onChange={(e) => updateItemCount(name, e.target.checked ? 1 : 0)}
                    />
                    <span>&nbsp;{name}</span>
                </label>
            </section>
        </>
    )
}
