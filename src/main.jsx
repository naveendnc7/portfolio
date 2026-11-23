import React from 'react';
import { createRoot } from 'react-dom/client';
import { profile } from './profile.js';
import './styles.css';

function App() {
  return (
    <div className="min-h-screen bg-portfolio-bg text-portfolio-text">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <header className="flex min-h-20 items-center justify-between border-b border-portfolio-border">
          <a className="font-semibold" href="#home" aria-label="Portfolio home">ND</a>
          <a className="underline" href={profile.github}>GitHub</a>
        </header>
        <main id="home">
          <section
            className="bg-[radial-gradient(ellipse_at_top_right,#273b2b,transparent_65%)] py-16 sm:py-24"
            aria-labelledby="name"
          >
            <p className="mb-4 text-xl font-medium text-portfolio-accent">{profile.headline}</p>
            <h1
              id="name"
              className="mb-8 font-serif text-[clamp(2.75rem,10vw,8rem)] leading-[0.95] tracking-[-0.055em] sm:max-w-[10ch]"
            >
              {profile.name}
            </h1>
            <a
              className="inline-block rounded-full bg-portfolio-accent px-5 py-3 font-semibold text-portfolio-ink"
              href={profile.github}
            >
              View GitHub profile
            </a>
          </section>

          <section className="border-t border-portfolio-border py-10" aria-labelledby="about">
            <h2 id="about" className="text-2xl font-semibold">About</h2>
            <p className="mt-3 max-w-prose text-lg leading-relaxed">{profile.bio}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Skills and platforms">
              {profile.skills.map((skill) => (
                <li key={skill} className="rounded-full border border-portfolio-border px-3 py-1.5">
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          {profile.projects.length > 0 && (
            <section className="border-t border-portfolio-border py-10" aria-labelledby="projects">
              <h2 id="projects" className="text-2xl font-semibold">Projects</h2>
              <ul className="mt-5 grid gap-5 sm:grid-cols-2">
                {profile.projects.map(({ name, description, url }) => (
                  <li key={name} className="rounded-lg border border-portfolio-border p-5">
                    <h3 className="text-lg font-semibold">
                      {url ? <a className="underline" href={url}>{name}</a> : name}
                    </h3>
                    <p className="mt-2 leading-relaxed">{description}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
