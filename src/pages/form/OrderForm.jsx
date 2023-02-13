import React, { useState } from 'react'


const OrderForm = () => {

    const [isChecked, setIsChecked] = useState(false)

    return (
        <form
            className='mt-4 row justify-content-center align-items-center'>
            <div className='col-4 d-flex justify-content-center align-items-center gap-4'>
                <input
                    onChange={(e) => setIsChecked(e.target.checked)}
                    type="checkbox"
                    id='terms' />
                <label htmlFor='terms'>I accept the terms and conditions</label>
            </div>
            <button
                className='btn btn-success col-2 col-md-1'
                data-testId="order"
                disabled={!isChecked}
            >Order</button>
        </form>
    )
}

export default OrderForm
