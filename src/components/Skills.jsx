function Skills() {
  const skills = [
    {
      name: "HTML",
      level: "Advanced",
      icon: "01",
    },
    {
      name: "CSS",
      level: "Advanced",
      icon: "02",
    },
    {
      name: "JavaScript",
      level: "Intermediate",
      icon: "03",
    },
    {
      name: "React",
      level: "Intermediate",
      icon: "04",
    },
    {
      name: "Git & GitHub",
      level: "Intermediate",
      icon: "05",
    },
    {
      name: "Pyhton",
      level: "Intermediate",
      icon: "06",
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-number">02</span>

          <div>
            <p>TECHNICAL SKILLS</p>
            <h2>Tools I work with.</h2>
          </div>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <span className="skill-number">{skill.icon}</span>

              <div>
                <h3>{skill.name}</h3>
                <p>{skill.level}</p>
              </div>

              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;