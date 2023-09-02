import { type } from 'os'
import React from 'react'
type btn ={
    label: any;
    
}
export default function Button(props:btn ) {
  return (
    <div>

      <button  className='btn btn-danger py-2 px-4 fs-5'>{props.label} </button>
    </div>
  )
}

