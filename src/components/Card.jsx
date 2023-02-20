import React from "react"
import Star from "../assets/star.png"
import Wed from "../assets/wedding-photography.png"
import byc from "../assets/mountain-bike.png"
import data from "./data"


function  Cards(props) {
  const date = new Date()
  const hours = date.getHours();

  let timeOfDay
  if (hours >= 6){
     timeOfDay = "Good morning"
  }
  else if(hours >= 12){
    timeOfDay = "aftenoon"
  }
  else{
    timeOfDay = "good night"
  }

  let badgeText
  if (props.cards.openSpot === 0) {
    badgeText = "SOLD OUT"
  }
  else if(props.cards.online === "online"){
    badgeText = "ONLINE"
  }

  return(
    <div>
      <section className="cards">
        <div className="sec-1">
          {badgeText && <div className="card--badge">{badgeText}</div>}
          <img src={props.cards.img} alt="Katie" className="katie" />
          <div className="stats">
            <img src={props.cards.star} alt="star" className="star" />
            <span>{props.rating}</span>
            <span className="opacity">{props.cards.reviewCount}</span>
            <span className="opacity">{props.cards.online}</span>
            <span className="country">{props.cards.country}</span>
          </div>
          <p className="card--para">{props.cards.title}</p>
          <p className="card--para"><span className="thick">{props.cards.price}</span>{props.cards.person}</p>
        </div>
      </section>
    </div>
  )
}

export default Cards