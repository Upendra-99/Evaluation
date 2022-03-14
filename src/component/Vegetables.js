import React from 'react'
import SetVegetables from './setVegetable'

function setVegetable() {
  return (
    <div>
        <SetVegetables veg='potato' quant={10} />
        <SetVegetables veg='totato' quant={8} />
        <SetVegetables veg='carrot' quant={5} />
        <SetVegetables veg='onions ' quant={7} />
    </div>
  )
}

export default setVegetable
