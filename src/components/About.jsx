function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-number">01</span>

          <div>
            <p>ABOUT ME</p>
            <h2>More than just code.</h2>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-main">
            <p className="large-text">
              I'm a Computer Science student who enjoys turning
              ideas into useful digital experiences.
            </p>

            <p>
              My journey in technology started with curiosity
              about how websites and applications work. Since
              then, I've been developing my skills through
              university projects, personal projects and
              practical problem solving.
            </p>

            <p>
              I'm particularly interested in modern web
              development and software engineering. I enjoy
              learning new technologies and using them to build
              clean, functional and user-friendly applications.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <span>01</span>
              <strong>Computer Science</strong>
              <p>Gachon University</p>
            </div>

            <div className="stat-card">
              <span>02</span>
              <strong>Web Development</strong>
              <p>React & JavaScript</p>
            </div>

            <div className="stat-card">
              <span>03</span>
              <strong>Problem Solving</strong>
              <p>Always learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;