import React, { useState } from 'react'
import Comp from './Comp'
import './Style.css'
const Login = () => {
    const [state, setState] = useState(false)
    const handleOnClick = () => {
        setState(!state)
    }
  return (
      <div className='login'>
          <h1 >
              Login and you will get Modal
          </h1>
          <button onClick={handleOnClick}  className='btn1'> 
              Click Me for Modal
          </button>
          <div className='modal-box'>
              {state && <Comp/>}
          </div>
          


    </div>
  )
}

export default Login