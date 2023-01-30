import React from 'react'
import TimelineContainer from './TimelineContainer'
import timelineJson from '../../../Content/home.json'
import './Timeline.css'
function Timeline() {
  return (
    <div className='timelineTop'>
      <div>
          <div className='text-center'>
            <div className='title'>{timelineJson.timeline.title}</div>
            <div className='subtitle'>{timelineJson.timeline.subtitle}</div>
          </div>
      </div>
      <div className='timeline'>
      <br></br>
      <br></br>
        <ul>
          <TimelineContainer />
        </ul>
      </div>
    </div>
  )
}

export default Timeline
