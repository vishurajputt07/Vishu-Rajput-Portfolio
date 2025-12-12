import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'SkillSprint - E-Learning Platform',
      description:
        'Developed an interactive e-learning web platform enabling users to learn and assess technical skills through dynamic lessons and real-time quizzes. Integrated user authentication and course recommendation features with a responsive and modern UI built using React.js and CSS.',
      technologies: ['React.js', 'JavaScript', 'CSS'],
      image: '📚',
      github: 'https://github.com',
      demo: 'https://example.com',
      period: 'September 2025 - October 2025',
    },
    {
      id: 2,
      title: 'Forest Fire Prediction',
      description:
        'Built a machine learning-powered web application to predict forest fire occurrences, achieving 95% prediction accuracy. Programmed an interactive and intuitive Streamlit UI for real-time fire risk predictions. Accelerated data processing algorithms, reducing computation time by 30%.',
      technologies: ['Python', 'Streamlit', 'Scikit-Learn', 'Pandas'],
      image: '🔥',
      github: 'https://github.com',
      demo: 'https://example.com',
      period: 'September 2024 - December 2024',
    },
    {
      id: 3,
      title: 'Ready Go',
      description:
        'Spearheaded front-end development for a responsive community-driven platform, enhancing accessibility and driving user engagement by 25%. Integrated custom animations using JavaScript, resulting in a 40% increase in user engagement metrics. Collaborated with back-end team, enhancing overall platform performance by 15%.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP'],
      image: '🚀',
      github: 'https://github.com',
      demo: 'https://example.com',
      period: 'February 2024 - August 2024',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-emoji">{project.image}</div>
                <div className="project-overlay">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                {project.period && (
                  <p className="project-period">{project.period}</p>
                )}
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

