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
          <div className="title">{whatWeDoJson.whatWeDo.title}</div>
          <div className="subtitle">{whatWeDoJson.whatWeDo.subtitle}</div>

          <div className="sections">
            <div class="column">
              <Icon path={mdiBook} size={1} className="iconBook" />
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

            <div class="column">
              <Icon path={mdiXml} size={1} className="iconXml" />
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

            <div class="column">
              <Icon path={mdiAccountGroup} size={1} className="iconGroup" />
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
