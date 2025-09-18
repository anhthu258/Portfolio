import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("data/Products.json")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div className="projects-page">
      <section className="projects-list">
        <h1>My Projects</h1>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <a
              key={project.link || idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title || "Project image"}
                  className="project-img"
                />
              )}
              <h2>{project.title || project.link}</h2>
              <p>{project.description || ""}</p>
            </a>
          ))}
        </div>
      </section>
      <section className="branding">
        <aside>
            <h1>Samuel Esspresso</h1>
              <p>This is the only branding where I focused on creating a cohesive visual identity for the client. This is a approved and work in progress for me and the client</p>
              <img src="assets/samuel-package.png" alt="Packaging Design"/>
              <img src="assets/samuel-logo.png" alt="Logo Design"/>
        </aside>
        <aside>
            <h1>Samuel Esspresso Website design</h1>
            <div className="samuel-web">
              <img src="assets/samuel-shop.png" alt="Samuel Esspresso shopping page" />
              <img src="assets/samuel-forside.png" alt="Samuel Esspresso landing page" />
            </div>
        </aside>
      </section>
    </div>
  );
}