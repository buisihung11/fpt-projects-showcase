/* eslint-disable @next/next/no-img-element */
import React, {useState} from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import request from "../../common/request";

const WorksThreeColumnWithFilter = ({ filterPosition }) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  const  [projects, setProjects] = useState([])
  React.useEffect(() => {
    request.get('/projects')
        .then((res) => setProjects(res.data.result))
        .then(() => setPageLoaded(true))
        .then(() => initIsotope())
  }, [pageLoaded]);
  console.log('projects',projects)
  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="row ">

          <div className="gallery full-width">
            {projects.map((p) =>
              <div key={p.projectId} className="col-lg-4 col-md-6 items graphic lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href={`/project-details/${p.projectId}`}>
                  <a>
                    <img src="https://upload.wikimedia.org/wikipedia/vi/1/1d/Logo_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>{p.topic.name}</h6>
                <span>
                  {p.mainMentor.name}
                </span>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksThreeColumnWithFilter;
