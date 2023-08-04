export default function ProjectList({ projects }) {
    return (
      <div className="projectList">
        {projects.map((p, i) => (
          <img
            className={`projectList__img ${p.category}`}
            src={p.img}
            alt=""
            key={i}
          />
        ))}
      </div>
    );
  }