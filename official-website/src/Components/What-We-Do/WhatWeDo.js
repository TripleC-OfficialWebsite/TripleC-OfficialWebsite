import "./WhatWeDo.css";
import whatWeDoJson from "../../Content/home.json";
import Icon from "@mdi/react";
import { mdiAccountGroup } from "@mdi/js";
import { mdiXml } from "@mdi/js";
import { mdiBook } from "@mdi/js";

const WhatWeDo = () => {
  return (
    <div>
      <div id="container1">
        <div className="titles">
          <h1 className="title">{whatWeDoJson.whatWeDo.title}</h1>
          <h2 className="subtitle">{whatWeDoJson.whatWeDo.subtitle}</h2>

          <div className="sections">
            <div className="column">
              <Icon path={mdiBook} size={1.5} className="iconBook" />
              <div className="section_title">
                {whatWeDoJson.whatWeDo.sections[0].title}
              </div>

              <div className="section_subtitle">
                {whatWeDoJson.whatWeDo.sections[0].subtitles[0]}
              </div>
              <div className="section_contents">
                {whatWeDoJson.whatWeDo.sections[0].descriptions[0]}
              </div>

              <div className="section_subtitle">
                {whatWeDoJson.whatWeDo.sections[0].subtitles[1]}
              </div>
              <div className="section_contents">
                {whatWeDoJson.whatWeDo.sections[0].descriptions[1]}
              </div>
            </div>

            <div className="column">
              <Icon path={mdiXml} size={1.5} className="iconXml" />
              <div className="section_title">
                {whatWeDoJson.whatWeDo.sections[1].title}
                <div className="blue_color">code( )</div>
                <div className="blink">|</div>
              </div>

              <div className="section_subtitle">
                {whatWeDoJson.whatWeDo.sections[1].subtitles[0]}
              </div>
              <div className="section_contents">
                {whatWeDoJson.whatWeDo.sections[1].descriptions[0]}
              </div>

              <div className="section_subtitle">
                {whatWeDoJson.whatWeDo.sections[1].subtitles[1]}
              </div>
              <div className="section_contents">
                {whatWeDoJson.whatWeDo.sections[1].descriptions[1]}
              </div>
            </div>

            <div className="column">
              <Icon path={mdiAccountGroup} size={1.5} className="iconGroup" />
              <div className="section_title">
                {whatWeDoJson.whatWeDo.sections[2].title}
              </div>

              <div className="section_subtitle">
                {whatWeDoJson.whatWeDo.sections[2].subtitles[0]}
              </div>
              <div className="section_contents">
                {whatWeDoJson.whatWeDo.sections[2].descriptions[0]}
              </div>

              <div className="section_subtitle">
                {whatWeDoJson.whatWeDo.sections[2].subtitles[1]}
              </div>
              <div className="section_contents">
                {whatWeDoJson.whatWeDo.sections[2].descriptions[1]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
