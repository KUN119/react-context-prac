import React, { useState } from 'react'

export default function Options({ name }) {
    const [checked, setChecked] = useState(false);

    const handleChangeCheckbox = (e) => {
        const { checked } = e.target
        setChecked(checked)
    }

    return (
        <>
            <section>
                <label className='flex mb-2'>
                    <input 
                        type="checkbox" 
                        onChange={handleChangeCheckbox}
                    />
                    <span>&nbsp;{name}</span>
                </label>
            </section>
        </>
    )
}
