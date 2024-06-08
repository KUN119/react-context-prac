import React, { useState } from 'react'

export default function SummuryPage() {
  const [checkbox, setCheckbox] = useState(false);

  return (
    <div>
      <form>
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
