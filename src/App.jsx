import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import StudentProfileCard from "./components/StudentProfileCard";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />

        <section id="profile" className="profile-section">
          <div className="section-container">
            <div className="section-heading">
              <span className="section-number">05</span>
              <div>
                <p>ACADEMIC PROFILE</p>
                <h2>Student Profile</h2>
              </div>
            </div>

            <StudentProfileCard
              name="KAMOLOV ABU BAKR"
              studentId="YOUR_REAL_STUDENT_ID"
              major="Computer Science"
              year={2}
              gpa={4.4}
            />
          </div>
        </section>

        <Contact />
      </main>

      <footer>
        <div>
          <span>ABU BAKR</span>
          <p>Computer Science Student & Developer</p>
        </div>

        <p>© 2026 Abu Bakr Kamolov</p>
      </footer>
    </div>
  );
}

export default App;