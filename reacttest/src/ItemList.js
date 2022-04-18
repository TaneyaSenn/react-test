import React from 'react'
import Items from './Item'

export default function ItemList() {
  return (
    items.map(item => {
        return <Item item={item} />
    })
    
  )
}
