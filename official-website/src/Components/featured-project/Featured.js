import "./Featured.css";

import featuredJson from "../../Content/home.json";

import photoTwo from "../../Images/featured-project/project1.jpg";

console.log(featuredJson.featuredProjects.sections[0].imagePath)
console.log(photoTwo)

function Featured(){
    return(
        <div className="fpLayout">
            <div className="titleSection">
                <h1 className="title">{featuredJson.featuredProjects.title}</h1>
                <div className="subtitle">{featuredJson.featuredProjects.subtitle}</div>
            </div>

            <div className="Project">
                <div className="Project1">
                    <h1 className="Pro1Title">
                        {featuredJson.featuredProjects.sections[0].title}
                    </h1>
                    {/*<img src = {featuredJson.featuredProjects.sections[0].imagePath} className="Pro1Photo" alt="Project1 photo"/>*/}
                    <img src = {photoTwo} className="Pro1Photo" alt="Project2 photo"/>
                    <div className="Pro1Descript">
                        {featuredJson.featuredProjects.sections[0].description} <a href={featuredJson.featuredProjects.sections[0].link}>Learn more</a>
                    </div>
                </div>

                <div className="Project2">
                    <h1 className="Pro2Title">
                        {featuredJson.featuredProjects.sections[0].title}
                    </h1>
                    {/*<img src = {featuredJson.featuredProjects.sections[0].imagePath} className="Pro1Photo" alt="Project1 photo"/>*/}
                    <img src = {photoTwo} className="Pro1Photo" alt="Project2 photo"/>
                    <div className="Pro1Descript">
                        {featuredJson.featuredProjects.sections[0].description} <a href={featuredJson.featuredProjects.sections[0].link}>Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;