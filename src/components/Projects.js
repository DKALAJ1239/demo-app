import React from "react";

function Projects(props) {
    //{ title }
  return (
    <div>
      Projects
      <h2>Projects Highlights</h2>
      <p>The following are the projects tha highlights my skillset</p>
      <div className="projectDescription">
        <h3>Title: {props.title}</h3>
        <h4>Role: {props.role}, Dates: 2020 - 2021</h4>
        <h5>location: detroit</h5>
        <p>DEscription: some description of mu project</p>
      </div>
    </div>
  );
}

export default Projects;
