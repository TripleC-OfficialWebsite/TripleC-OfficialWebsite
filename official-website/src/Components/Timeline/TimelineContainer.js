import React from 'react'
// import timelineJson from '../../Content/home.json'
import TimelineItem from './TimelineItem'
import './TimelineContainer.css'
export default function TimelineContainer({eventsToRender}) {
  return (
    <ul>
      {eventsToRender.map((single_event, idx) => (
          <TimelineItem single_event={single_event} key={idx} />
        ))}
    </ul>
  )
}
