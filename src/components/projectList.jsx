import { Link } from "react-router-dom";

function ProjectList() {
  return (
    <div className="project-link-container">
      <Link to="/projects/skeleton-loaders" className="link-row">Skeleton Loaders</Link>
    </div>
  );
}

export default ProjectList;
