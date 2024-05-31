
import React, { useState } from 'react';
import './App.css';

const subjects = [

  { icon: 'X', name: 'Spanish' },
  { icon: 'English', name: 'English' },
  { icon: 'History', name: 'History' },
  { icon: 'Piano', name: 'Piano' },
  { icon: '√x', name: 'Mathematics' },
  { icon: 'Chemistry', name: 'Chemistry' },
  { icon: 'guitar', name: 'Guitar' },
  { icon: 'Statistics', name: 'Statistics' },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredSubjects = searchTerm
    ? subjects.filter((subject) => subject.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : subjects;

  return (
    <div className="App">
      <header className="header">
        <h1>Tutor Turtle</h1>
        <nav>
          <a href="#">Become a Tutor</a>
          <a href="#">Log In</a>
        </nav>
      </header>

      <main className="main">
        <h2>"Unlock Your Learning Shell with Tutor Turtle!"</h2>

        <div className="search-bar">
          <input type="text" value={searchTerm} onChange={handleSearch} placeholder="What would you like to learn?" />
          <button type="button">Search</button>
        </div>

        <div className="subjects-container">
          {filteredSubjects.map((subject) => (
            <div key={subject.name} className="subject">
              <div className="icon">{subject.icon}</div>
              <span>{subject.name}</span>
            </div>
          ))}
        </div>

        <div className="tutors-section">
          <h3>50 million evaluated private tutors ★★★★★</h3>
          <div className="tutors-grid">
            <div className="tutor-card">
              <button className="heart-button">❤️</button>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer"></footer>
    </div>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

