import React from 'react'

export const Checkbox = (props) => {
  const _onChange = (ev) => {
    props?.onChange(ev.target.checked)
  }
  return (
    <div className="item__check">
      <input type="checkbox" name="product" {...props} id="product" onChange={_onChange} />
    </div>
  )
}
