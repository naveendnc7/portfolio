import React from 'react';
import { createRoot } from 'react-dom/client';
import { profile } from './profile.js';
import './styles.css';

function App() {
  return (
    <div className="page">
      <header>
        <a href="#home" aria-label="Portfolio home">ND</a>
        <a href={profile.github}>GitHub</a>
      </header>
      <main id="home">
        <section className="hero" aria-labelledby="name">
          <h1 id="name">{profile.name}</h1>
          {profile.headline && <p className="headline">{profile.headline}</p>}
          <a className="button" href={profile.github}>View GitHub profile</a>
        </section>
        {profile.bio && (
          <section className="details">
            <h2>About</h2>
            <p>{profile.bio}</p>
          </section>
        )}
        {profile.projects.length > 0 && (
          <section className="details">
            <h2>Projects</h2>
            <ul>
              {profile.projects.map(({ name, description, url }) => (
                <li key={name}>
                  <h3>{url ? <a href={url}>{name}</a> : name}</h3>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
