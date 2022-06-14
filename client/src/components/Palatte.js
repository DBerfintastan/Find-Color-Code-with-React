import React, { useState } from 'react'
import {send} from "../socketApi"
export default function Palatte() {

  const [color, setColor] = useState("#000")
  return (
    <div className='palatte'>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)} />

      <button onClick={()=>send(color)}>Click</button>
    </div>
  )
}
