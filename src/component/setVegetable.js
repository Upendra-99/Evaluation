
import React from 'react'

function Vegetables({veg, quant}) {
  const [vegQuantity, setVegetables] = React.useState(quant)

  let onIncrement = () => {
     setVegetables( vegQuantity + 1 ) 
  }
  let onDecrement = () => {
     setVegetables( vegQuantity - 1 ) 
  }
  return (
    <div>
       <h3> {veg}:{vegQuantity}</h3>
       <button onClick={onIncrement}>+</button>
       <button onClick={onDecrement}>-</button>
    </div>
  )
}

export default Vegetables