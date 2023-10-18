import React, { useState } from 'react'
import './Style.css'
import Description from './Description'

const Tooltip = () => {
    const [tooltip, setTooltip] = useState(false)
    const mouseEnter = () => { setTooltip(true) }
    const mouseLeave = () => {setTooltip(false)}
  return (
      <div className='tooltip'>
          <h1 onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
              Randy Orton 
          </h1>
          <div>
              {tooltip && <Description/> }
          </div>
         
    </div>
  )
}

export default Tooltip