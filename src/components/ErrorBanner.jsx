import React from 'react'

export default function ErrorBanner({ message }) {
    const errorMessage = message ? message : '에러 발생';
    return (
        <div className='border-solid border-1 border-red-300 bg-gray-200'>
            {errorMessage}
        </div>
    )
}
