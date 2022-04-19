import React, {useState} from "react";
import LightTheme from "../../layouts/Light";
import Navbar from "../../components/Navbar";
import ProjectDetailsHeader from "../../components/Project-details-header";
import ProjectDetailsIntroduction from "../../components/Project-details-introduction";
import ProjectDetailsImages from "../../components/Project-details-images";
import ProjectDetailsDescription from "../../components/Project-details-description";
import ProjectDetailsVideo from "../../components/Project-details-video";
import NextProject from "../../components/Next-project";
import SmallFooter from "../../components/Small-footer";
import {useRouter} from "next/router";
import request from "../../common/request";
import ProjectDetails2Header from "../../components/Project-details2-header";
import ProjectDetails2Introduction from "../../components/Project-details2-introduction";
import ProjectDetails2Images from "../../components/Project-details2-images";
const ProjectDetailsLight = () => {
    const router = useRouter()
    const { projectId } = router.query
    const [project,setProject] = useState()

    React.useEffect(() => {
        if(projectId)
        request.get(`/projects/${projectId}`).then((res) => setProject(res.data))
    },[projectId])

    const navbarRef = React.useRef(null);
    const logoRef = React.useRef(null);
    React.useEffect(() => {
        var navbar = navbarRef.current,
            logo = logoRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
        } else {
            navbar.classList.remove("nav-scroll");
        }
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                navbar.classList.add("nav-scroll");
            } else {
                navbar.classList.remove("nav-scroll");
            }
        });
    }, [navbarRef]);

    return (
        <LightTheme >
            <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
            {project && <ProjectDetails2Header project={project} />}
            {/*<ProjectDetails2Header />*/}
            {project && <div className="container mx-auto text-center py-5">
                <embed src={project.topic.attachment} type="application/pdf"
                       frameBorder="0"
                       scrolling="auto"
                       height="800px"
                       width="100%"/>
            </div>}
            {/*<ProjectDetails2Introduction />*/}
            {/*<ProjectDetails2Images />*/}
            {/*<ProjectDetailsDescription />*/}
            {/*<ProjectDetailsVideo*/}
            {/*    videoBackground="/img/portfolio/project2/bg.jpg"*/}
            {/*    videoType="vimeo"*/}
            {/*    videoId={127203262}*/}
            {/*/>*/}
            {/*<NextProject*/}
            {/*    projectImage="/img/portfolio/project1/bg.jpg"*/}
            {/*    projectTitle="Natural plus modern."*/}
            {/*/>*/}
            <SmallFooter />
        </LightTheme>
    );
};

export default ProjectDetailsLight;
