import "./projectsList.module.css";

const ProjectsList = ({ id, title, active, setSelected }) => {
  return (
    <div
      className={active ? "projectsList active" : "projectsList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </div>
  );
};

export default ProjectsList;
