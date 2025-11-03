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
            Gharsa is a web and mobile application that connects sellers, buyers, and merchants in one platform.
The web version supports all three roles — admin, seller, and buyer — while the mobile app focuses on buyers and sellers.
The platform allows users to list products, sell or purchase items easily, and rely on an integrated delivery service that ensures fast and safe delivery.
Gharsa offers a smooth, user-friendly interface designed to make buying and selling effortless and efficient.
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
