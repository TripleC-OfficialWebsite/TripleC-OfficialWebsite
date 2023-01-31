import React from 'react'
import './TimelineItem.css'

function TimelineItem(props) {
  const time = props.single_event.time
  const title = props.single_event.title
  const description = props.single_event.description
  if(description.length === 0) {
    return (
      <li>
      <div className="content">
        <h3>{title}</h3>
      </div>
      <div className="point"></div>
      <div className="date">
        <h4>{time}</h4>
      </div>
    </li>
    )
  }
  return (
    <li>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="point"></div>
      <div className="date">
        <h4>{time}</h4>
      </div>
    </li>
  )
}

export default TimelineItem
