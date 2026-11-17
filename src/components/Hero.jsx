function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid"></div>

      <div className="hero-content">
        <div className="availability">
          <span></span>
          Available for opportunities
        </div>

        <p className="hero-label">
          COMPUTER SCIENCE STUDENT / DEVELOPER
        </p>

        <h1>
          I build digital
          <br />
          <span>experiences.</span>
        </h1>

        <p className="hero-description">
          I'm Abu Bakr, a Computer Science student at Gachon
          University focused on web development, software
          engineering and creating meaningful digital products.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            Explore My Work
            <span>↗</span>
          </a>

          <a href="#contact" className="secondary-button">
            Get In Touch
          </a>
        </div>

        <div className="hero-meta">
          <div>
            <strong>Gachon University</strong>
            <span>Computer Science</span>
          </div>

          <div>
            <strong>South Korea</strong>
            <span>Based in Korea</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>

        <div className="visual-card">
          <div className="code-header">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="code-body">
            <p>
              <span className="code-purple">const</span>{" "}
              developer = {"{"}
            </p>

            <p className="indent">
              name: <span className="code-green">"Abu Bakr"</span>,
            </p>

            <p className="indent">
              major: <span className="code-green">"CS"</span>,
            </p>

            <p className="indent">
              passion: <span className="code-green">"Building"</span>,
            </p>

            <p>
              {"}"};
            </p>

            <p className="cursor-line">
              <span className="cursor"></span>
            </p>
          </div>
        </div>

        <div className="floating-card card-one">
          <span>⚛</span>
          React
        </div>

        <div className="floating-card card-two">
          <span>⌘</span>
          GitHub
        </div>

        <div className="floating-card card-three">
          <span>JS</span>
          JavaScript
        </div>
      </div>

      <a href="#about" className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </a>
    </section>
  );
}

export default Hero;