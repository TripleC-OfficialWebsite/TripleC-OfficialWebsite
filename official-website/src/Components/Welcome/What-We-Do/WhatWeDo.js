import "./WhatWeDo.css";
import whatWeDoJson from "../../../Content/home.json";

const WhatWeDo = () => {
    return (
      <div >
        <div className="cover"></div>
        <div id="container1">
            <div className="titles">

                <div className="title">{whatWeDoJson.whatWeDo.title}</div>
                <h2 className="subtitle">{whatWeDoJson.whatWeDo.subtitle}</h2>

                <div className="sections">

                  <div class="column">
                    <div className="section_title"> 
                      <h3>{whatWeDoJson.whatWeDo.sections[0].title} </h3>
                    </div>

                    <div className="section_subtitle">
                      <h4>{whatWeDoJson.whatWeDo.sections[0].subtitles[0]}</h4>
                    </div>
                    <div className="section_contents">
                      {whatWeDoJson.whatWeDo.sections[0].descriptions[0]}
                    </div>

                    <div className="section_subtitle">
                      <h4>{whatWeDoJson.whatWeDo.sections[0].subtitles[1]}</h4>
                    </div>
                    <div className="section_contents">
                      {whatWeDoJson.whatWeDo.sections[0].descriptions[1]}
                    </div>

                  </div>

                  <div class="column">
                    <div className="section_title"> 
                      <h3>{whatWeDoJson.whatWeDo.sections[1].title} </h3>
                    </div>

                    <div className="section_subtitle">
                      <h4>{whatWeDoJson.whatWeDo.sections[1].subtitles[0]}</h4>
                    </div>
                    <div className="section_contents">
                      {whatWeDoJson.whatWeDo.sections[1].descriptions[0]}
                    </div>

                    <div className="section_subtitle">
                      <h4>{whatWeDoJson.whatWeDo.sections[1].subtitles[1]}</h4>
                    </div>
                    <div className="section_contents">
                      {whatWeDoJson.whatWeDo.sections[1].descriptions[1]}
                    </div>

                  </div>

                  <div class="column">
                    <div className="section_title"> 
                      <h3>{whatWeDoJson.whatWeDo.sections[2].title} </h3>
                    </div>

                    <div className="section_subtitle">
                      <h4>{whatWeDoJson.whatWeDo.sections[2].subtitles[0]}</h4>
                    </div>
                    <div className="section_contents">
                      {whatWeDoJson.whatWeDo.sections[2].descriptions[0]}
                    </div>

                    <div className="section_subtitle">
                      <h4>{whatWeDoJson.whatWeDo.sections[2].subtitles[1]}</h4>
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