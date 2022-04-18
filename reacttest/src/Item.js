import React from 'react'

export default function Item() {
  return (
    <div>
      <label>
        <input type="checkbox" />
        {Item.name}
      </label>
    </div>
  )
}
