import React, { useState } from "react";
import "./TimelineItem.css";

function TimelineItem(props) {
  const time = props.single_event.time;
  const title = props.single_event.title;
  const description = props.single_event.description;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <li>
      {windowWidth > 960 ? (
        <>
          <div className="content">
            <h3>{title}</h3>
            {description.length !== 0 && <p>{description}</p>}
          </div>
          <div className="point"></div>
          <div className="date">
            <h4>{time}</h4>
          </div>
        </>
      ) : (
        <>
          <div className="content">
            <div className="date">
              <h4>{time}</h4>
            </div>
            <h3>{title}</h3>
            {description.length !== 0 && <p>{description}</p>}
          </div>
          <div className="point"></div>
        </>
      )}
    </li>
  );
}

export default TimelineItem;
