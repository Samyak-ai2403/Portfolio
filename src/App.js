import React from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav>
        <div className="container">
          <h1>My Portfolio</h1>
          <div>
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div>
          <h2>Hello, I’m <span style={{ color: "#36adb1ff" }}>Samyak</span></h2>
          <p>A passionate Web Developer creating clean and modern designs.</p>
          <a href="#projects">View My Work</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <h3>About Me</h3>
        <p>
          I am a Computer Engineering student who loves building websites and
          applications. I specialize in React, JavaScript, and modern web
          technologies. My goal is to create beautiful and user-friendly
          websites that provide real value.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h3>Projects</h3>
        <div className="grid">
          <div className="project-card">
            <h4>Online Hostel Management System</h4>
            <p>
              A web app to manage hostel records, complaints, and notices using
              React and Node.js.
            </p>
            <a href="#">View Project</a>
          </div>

          <div className="project-card">
            <h4>Retail Store POS</h4>
            <p>
              Inventory & billing system with product images, cart, and checkout
              features.
            </p>
            <a href="#">View Project</a>
          </div>

          <div className="project-card">
            <h4>Diary Web App</h4>
            <p>
              A PHP and MySQL based diary app where users can write and save
              daily notes securely.
            </p>
            <a href="#">View Project</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h3>Contact Me</h3>
        <p>
          Interested in working together? Let’s connect through social media or
          email.
        </p>
        <div>
          <a href="mailto:dhargaweamardip@gmail.com">📧 Email</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            💼 LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            💻 GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Samyak. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
