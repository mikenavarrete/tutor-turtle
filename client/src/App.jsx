import React, { useState } from 'react';
import Navbar from './components/Navbar';
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
      <Navbar />
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
              <button className="heart-button">:heart:</button>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}
export default App;