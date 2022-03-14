import React from 'react'

function Wishlist() {
  const [query, setQuery] = React.useState('')
  const [lists, setList] = React.useState([])

  let addList = () => {
      const payload = {
          item: query,
          status: false
      }

      const updatedList = [ ...lists, payload]
      setList(updatedList)
     
  }
  
  return (
    <div>
      <h1>Wishlist</h1>
      { 
        lists.length<=3 ?
        <>
          <input type="text" value={query}  onChange={ (e) => setQuery( e.target.value ) }/>
          <button onClick={ addList }>ADD</button>
          <ul>
              {
                lists.map( (el, i) => <li style={{listStyle: "none"}} key={i}>{el.item}</li>)    
              }
          </ul> 
        </> :
        <>
          <h3 style={{color:"red"}}>You cannot add more than 3 items to wishlist</h3>
        </>
    }
     

    </div>
  )
}

export default Wishlist