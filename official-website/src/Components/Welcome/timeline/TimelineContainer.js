import React from 'react'
import timelineJson from '../../../Content/home.json'
import TimelineItem from './TimelineItem'
import './TimelineContainer.css'
export default function TimelineContainer() {
  return (
    <>
          {timelineJson.timeline.events.map((single_event, idx) => {
            return (
              //<li>
                <TimelineItem
                  single_event={single_event}
                  key={idx}
                />
            )
          })}
    </>
  )
}
