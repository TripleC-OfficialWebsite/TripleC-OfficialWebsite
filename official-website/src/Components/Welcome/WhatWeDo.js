import "./WhatWeDo.css";
import whatWeDoJson from "../../Content/home.json";

const WhatWeDo = () => {
    return (
      <div>
        <div className="home-cover"></div>
        <div id="container">
            <div className="titles">

                <h1 className="title">{whatWeDoJson.whatWeDo.title}</h1>
                <h2 className="subtitle">{whatWeDoJson.whatWeDo.subtitle}</h2>

                <div className="sections">
                    <div className="section_title"> 
                        <h3>{whatWeDoJson.whatWeDo.sections[0].title} </h3>
                        <h3>{whatWeDoJson.whatWeDo.sections[1].title} </h3>
                        <h3>{whatWeDoJson.whatWeDo.sections[2].title} </h3>
                    </div>

                    <div className="section_subtitle">

                    </div>

                </div>
            
            </div>
        </div>
      </div>
    );
  };
  
  export default WhatWeDo;