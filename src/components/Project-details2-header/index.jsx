import React from "react";
import Link from "next/link";
import {format, parseISO} from "date-fns";

const ProjectDetails2Header = ({ project } = {}) => {
  return (
    <section
      className="page-header proj-det bg-img parallaxie valign"
      style={{ backgroundImage: "url(/img/portfolio/project2/bg.jpg)" }}
      data-overlay-dark="4"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9">
            <div className="cont">
              <h6>software</h6>
              <h2>{project?.topic?.name}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Team</h6>
              <p>
                <a href="#0">{project.topic.code}</a>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Date</h6>
              <p>{format(parseISO(project.createAt), 'PPP')}</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Mentor</h6>
              <p>{project.mainMentor.name}
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Tags</h6>
              <p>
                <Link href="/works/works-dark">Minimal</Link> ,
                <Link href="/works/works-dark">Modern</Link> ,
                <Link href="/works/works-dark">Design</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails2Header;
