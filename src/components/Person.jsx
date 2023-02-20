import React from 'react'



function Person(props) {
  
  return (
    <div className='person'>
      <h1>{props.person.name}</h1>
      <p>{props.person.tribe}</p>
    </div>
  )
}



export default Person
