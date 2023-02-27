import React, { useState, useEffect } from "react";
import TimelineContainer from "./TimelineContainer";
import LoadMore from "./LoadMore";
import timelineJson from "../../Content/home.json";
import "./Timeline.css";

function Timeline() {
  const events = timelineJson.timeline.events;
  const eventsPerPage = 3;
  const [eventsToShow, setEventsToShow] = useState(events.slice(0, 3));
  const [next, setNext] = useState(3);

  const loopWithSlice = (start, end) => {
    const slicedEvents = events.slice(start, end);
    setEventsToShow([...eventsToShow, ...slicedEvents]);
  };

  const handleShowMoreEvents = () => {
    loopWithSlice(next, next + eventsPerPage);
    setNext(next + eventsPerPage);
  };

  return (
    <div className="timelineTop">
      <div>
        <div className="text-center">
          <h1 className="title">{timelineJson.timeline.title}</h1>
          <h2 className="subtitle">{timelineJson.timeline.subtitle}</h2>
        </div>
      </div>
      <div className="timeline">
        <br></br>
        <br></br>
        <TimelineContainer eventsToRender={eventsToShow} />
      </div>
      <div className="timeline-button">
        <LoadMore
          handleShowMoreEvents={handleShowMoreEvents}
          numEvents={events.length}
          numDisplayed={eventsToShow.length}
        />
      </div>
    </div>
  );
}

export default Timeline;
