import { useEffect, useState } from 'react';
import './LandingPage.css';
import Accordion from './Accordion';

const LandingPage = () => {
  const [user, setUser] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/juan1003')
      .then(res => res.json())
      .then(data => {
        setUser({...data, location: 'Stanley, WI'});
      });

    fetch('https://api.github.com/users/juan1003/repos')
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="landing-page">
      <header className="header">
        <img src={user.avatar_url} alt="Avatar" className="avatar" />
        <div>
          <h1 className="name">{user.name}</h1>
          <p className="bio">{user.bio}</p>
          <p className="location">{user.location}</p>
        </div>
      </header>

      <section className="overview-section">
        <h2 className="section-title">Overview</h2>
        <p>
          I am a passionate and experienced software engineer with 9 years of experience in building and delivering high-quality software. I have a strong background in full-stack development, with expertise in a variety of technologies including React, Node.js, Python, and Go. I am always eager to learn new things and take on new challenges.
        </p>
      </section>

      <section className="skills-section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {/* Add your skills here */}
          <span className="skill">React</span>
          <span className="skill">TypeScript</span>
          <span className="skill">Node.js</span>
          <span className="skill">Python</span>
          <span className="skill">Go</span>
        </div>
      </section>

      <section className="projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
          {repos.map(repo => (
            <Accordion key={repo.id} title={repo.name}>
              <p>{repo.description}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </Accordion>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2 className="section-title">Let's work together!</h2>
        <a href="https://cal.com/juand" target="_blank" rel="noopener noreferrer" className="cta-button">Book a call</a>
      </section>
    </div>
  );
};

export default LandingPage;
