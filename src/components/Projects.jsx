import { useState } from "react";

function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Counter Strike 2",
      description:
        "A modern gaming website built with React featuring multiple pages, navigation and responsive styling.",
      tech: ["React", "CSS", "Vite"],
      category: "React",
      github: "https://github.com/mrabubakrkamolov/Counter-Strike2",
      live: "https://counter-strike2.vercel.app/",
    },
    {
      id: 2,
      title: "Portfolio Gallery",
      description:
        "A reusable React project with project cards, technology filtering and component-based architecture.",
      tech: ["React", "JavaScript", "CSS"],
      category: "React",
      github: "https://github.com/mrabubakrkamolov/portfolio-gallery",
      live: "https://mrabubakrkamolov.github.io/portfolio-gallery/",
    },
    {
      id: 3,
      title: "Student Profile",
      description:
        "A React component demonstrating props by displaying personalized student information.",
      tech: ["React", "JSX", "CSS"],
      category: "React",
      github: "https://github.com/mrabubakrkamolov/task11",
      live: "https://mrabubakrkamolov.github.io/task11/",
    },
    {
      id: 4,
      title: "Web Programming",
      description:
        "A collection of university web programming assignments covering HTML, CSS and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Web",
      github: "https://github.com/mrabubakrkamolov/Assigment",
      live: "https://mrabubakrkamolov.github.io/Assigment/",
    },
  ];

  const filters = ["All", "React", "Web"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="section-heading projects-heading">
          <span className="section-number">03</span>

          <div>
            <p>SELECTED WORK</p>
            <h2>Things I've built.</h2>
          </div>

          <div className="filter-buttons">
            {filters.map((item) => (
              <button
                key={item}
                className={filter === item ? "active-filter" : ""}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-list">
          {filteredProjects.map((project, index) => (
            <article className="project-item" key={project.id}>
              <div className="project-index">
                0{index + 1}
              </div>

              <div className="project-info">
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;