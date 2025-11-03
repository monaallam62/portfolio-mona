import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* ==== Header Section ==== */}
      <header className="header">
        <h1>Mona Allam</h1>
        <h2>Front-End Developer</h2>
<div className="social-icons">
  <a href="https://www.linkedin.com/in/mona-allam-675755289/" target="_blank" rel="noreferrer">
    <FaLinkedin />
  </a>
  <a href="https://github.com/monaallam62" target="_blank" rel="noreferrer">
    <FaGithub />
  </a>
  <a href="mailto:monaallam5102@gmail.com">
    <FaEnvelope />
  </a>
</div>
      </header>

      {/* ==== About Section ==== */}
      <section className="about">
        <h3>About Me</h3>
        <p>
          I'm a passionate Front-End Developer who loves creating beautiful, responsive websites
          and transforming ideas into user-friendly digital experiences.
        </p>
      </section>

      {/* ==== Skills Section ==== */}
      <section className="skills">
        <h3>Skills</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      {/* ==== Projects Section ==== */}
      <section className="projects">
        <h3>Projects</h3>
        <div className="project-card">
          <h4>Gharsa</h4>
          <p>
            A modern web project showcasing interactive design and clean UI built using React and CSS.
          </p>
<button
  onClick={() =>
    window.open("https://github.com/monaallam62/gharsa", "_blank")
  }
>
  View on GitHub
</button>
        </div>
      </section>

      {/* ==== Contact Section ==== */}
      <section className="contact">
        <h3>Contact</h3>
        <p>Feel free to reach out to me anytime 👇</p>
        <a href="mailto:monaallam5102@gmail.com" className="email">
          monaallam5102@gmail.com
        </a>
      </section>

      <footer>© 2025 Mona Allam. All rights reserved.</footer>
    </div>
  );
}

export default App;
