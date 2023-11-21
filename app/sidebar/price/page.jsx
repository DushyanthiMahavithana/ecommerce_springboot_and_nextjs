import React from 'react'

export default function price() {
  return (
    <div className='ml-5'>
      <h2>Price</h2>
      <p>Up to $</p>
      <div>
        <input className='' type='radio' name='text'></input>
        <span>50</span>
      </div>
      <div>
        <input className='' type='radio' name='text'></input>
        <span>100</span>
      </div>
      <div>
        <input className='' type='radio' name='text'></input>
        <span>1000</span>
      </div>
    </div>
  )
}
