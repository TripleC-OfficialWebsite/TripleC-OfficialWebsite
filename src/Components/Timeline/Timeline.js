import React, { useState, useEffect } from 'react'
import TimelineContainer from './TimelineContainer'
import LoadMore from './LoadMore'
import timelineJson from '../../Content/home.json'
import './Timeline.css'

const events = timelineJson.timeline.events
const eventsPerPage = 3
let arrayForHoldingEvents = []

function Timeline() {
  console.log(arrayForHoldingEvents.length)
  const [eventsToShow, setEventsToShow] = useState([])
  const [next, setNext] = useState(3)

  const loopWithSlice = (start, end) => {
    const slicedEvents = events.slice(start, end)
    arrayForHoldingEvents = [...arrayForHoldingEvents, ...slicedEvents]
    setEventsToShow(arrayForHoldingEvents)
  }

  useEffect(() => {
    if (arrayForHoldingEvents.length === 0) {
      loopWithSlice(0, eventsPerPage)
    }
  }, [])

  const handleShowMoreEvents = () => {
    loopWithSlice(next, next + eventsPerPage)
    setNext(next + eventsPerPage)
  }

  return (
    <div className='timelineTop'>
      <div>
        <div className='text-center'>
          <h1 className='title'>{timelineJson.timeline.title}</h1>
          <h2 className='subtitle'>{timelineJson.timeline.subtitle}</h2>
        </div>
      </div>
      <div className='timeline'>
        <br></br>
        <br></br>
        <TimelineContainer eventsToRender={eventsToShow} />
      </div>
      <div className='timeline-button'>
        <LoadMore
          handleShowMoreEvents={handleShowMoreEvents}
          numEvents={events.length}
          numDisplayed={eventsToShow.length}
        />
      </div>
    </div>
  )
}

export default Timeline
