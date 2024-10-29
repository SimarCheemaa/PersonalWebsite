import React from 'react';
import './AboutMe.css';
import { useInView } from 'react-intersection-observer';

function AboutMe() {

  const { ref: containerRef, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is in view
    triggerOnce: true, // Run animation only once when the element is in view
  });

  return (
    <div className="about-me-container">
      <img src={require("../assets/simarMain.png")} alt="Simar" className='about-me-photo'/>
      <div ref={containerRef} className={`credentials-container ${inView ? 'fade-in-visible' : 'fade-in'}`}>
        <div className="left-column">
          <p><strong>NAME:</strong> Simar Cheema</p>
          <p><strong>PRONOUNS:</strong> He/Him/His</p>
          <p><strong>SCHOOL:</strong> University of California, Irvine</p>
          <p><strong>AGE:</strong> 22 Years</p>
          <p><strong>HOMETOWN:</strong> Mountain House, CA</p>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/simarcheema/" target="_blank" rel="noreferrer">
              <img src={require("../assets/linkedin.png")} alt="LinkedIn" className="icon"/>
            </a>
            <a href="https://github.com/SimarCheemaa" target="_blank" rel="noreferrer">
              <img src={require("../assets/github.png")} alt="GitHub" className="icon"/>
            </a>
        </div>
      </div>
      <div className="right-column">
        <p>I am a student at the University of California, Irvine, pursuing a Bachelor of Science in Computer Science with a GPA of 3.91. I have worked as a software engineering intern at Major League Baseball, where I led automation projects that significantly reduced manual testing time and improved code maintainability. I’m proficient in both Python and JavaScript, which are my favorite programming languages. </p>
        <p>Outside of tech, I enjoy lifting and staying active. I'm also involved in extracurricular activities, including serving as an undergraduate lab tutor where I helped students master fundamental programming concepts. In my free time, I enjoy exploring new technologies and staying fit!</p>

        <a
          href={require("../assets/Simar_Cheema.pdf")} // Update the path to your resume file
          download="Simar_Cheema_Resume.pdf"
          className="download-resume-button"
        >
          DOWNLOAD RESUME
        </a>
      </div>
  </div>
  </div>
  );
}

export default AboutMe;
