import React from 'react';
import './Projects.css';
import project1Image from "../assets/project1.jpg"
import project2Image from "../assets/project2.jpg"
import project3Image from "../assets/project3.jpg"
import project4Image from "../assets/project4.jpg"
import project5Image from "../assets/project5.jpg"
import project6Image from "../assets/project6.jpg"
const projects = [
  {
    id: 1,
    title: 'Health Wellness App',
    imageUrl: project1Image,
    githubLink: 'https://github.com/SimarCheemaa/HealthApp',
  },
  {
    id: 2,
    title: 'Guess The Imposter',
    imageUrl: project2Image,
    githubLink: 'https://github.com/SimarCheemaa/Guess_The_Imposter_React',
  },
  {
    id: 3,
    title: 'Zombie Game',
    imageUrl: project3Image,
    githubLink: 'https://github.com/SimarCheemaa/Zombie-Game',
  },
  {
    id: 4,
    title: 'Hunter Prey Game',
    imageUrl: project4Image,
    githubLink: 'https://github.com/SimarCheemaa/Hunter_Prey_Simulation',
  },
  {
    id: 5,
    title: 'Search Engine',
    imageUrl: project5Image,
    githubLink: 'https://github.com/SimarCheemaa/Search_Engine',
  },
  {
    id: 6,
    title: 'Lavatory Locator App',
    imageUrl: project6Image,
    githubLink: 'https://github.com/SimarCheemaa/UCI-Lavatory-Locator-App/tree/main',
  },
];

function Projects() {
  return (
    <section className="projects">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => window.open(project.githubLink, '_blank')}
          >
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-title">{project.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
