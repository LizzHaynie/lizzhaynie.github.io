import { Link } from "react-router-dom";

function ProjectList() {
  return (
    <div className="home-container">
      <div className="project-desc">
        Featured components which I sell on an external platform. 
      </div>
      <div className="project-link-container">
        <Link to="/projects/skeleton-loaders" className="link-row">Skeleton Loaders</Link>
      </div>
    </div>
  );
}

export default ProjectList;
