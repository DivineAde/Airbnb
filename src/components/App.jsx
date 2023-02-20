import { useState } from 'react'
import React from 'react'
import Grid from '../assets/photo-grid.png'
import Cards from './Card'
import data from './data'
import trail from './trail'
import Person from './Person'


function App() {
  const colors = ["orange", "yellow", "green", "red", "blue", "white"]


  const personCard = trail.map(person =>{
    return ( <Person
             key={person.id}
             person= {person}
    />)
  })

  const cardEl = data.map(cards =>{
    return ( <Cards
             key={cards.id}
             cards= {cards}
    />)
  })
  
  return (
    <div className="App">
      <section className='hero'>
        <div className='grid'>
         <img src={Grid} alt="hero" className='grid-img'/>
        </div>
        <h1 className='hero__header'>Online Experience</h1>
        <p className='hero__para'>Join unique interactive activities led by  one-of-a-kind host-all without leaving home</p>
        <section className='card--list'>
         {cardEl}
         {personCard}
        </section>
      </section>
    </div>
  )
}

export default App
