


import React, { useState } from 'react';
import '../styles/Home.css';
import pic1 from '../components/images/pic1.jpg';
import pic2 from '../components/images/pic2.jpg';
import pic3 from '../components/images/pic3.jpg';
import kidStudying from '../components/images/kid-studying.jpg';
import girlWriting from '../components/images/girl-writing.jpg';
import computerStudying from '../components/images/computer-studying2.jpg';
import testimonial1 from '../components/images/testimonial1.jpg';
import testimonial2 from '../components/images/testimonial2.jpg';
import testimonial3 from '../components/images/testimonial3.jpg';


const subjects = [
  { icon: 'X', name: 'Spanish' },
  { icon: 'English', name: 'English' },
  { icon: 'History', name: 'History' },
  { icon: 'Piano', name: 'Piano' },
  { icon: '√x', name: 'Mathematics' },
  { icon: 'Chemistry', name: 'Chemistry' },
  { icon: 'guitar', name: 'Guitar' },
  { icon: '📊', name: 'Statistics' },
];
export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredSubjects = searchTerm
    ? subjects.filter((subject) => subject.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : subjects;
  return (
    <div className="Home">
    
      <main className="main">
        <h2>"Unlock Your Learning Shell with Tutor Turtle!"</h2>
        <br></br> 
        <div className="search-bar">
          <input type="text" value={searchTerm} onChange={handleSearch} placeholder="What would you like to learn?" />
          <button type="button">Search</button>
        </div>
        {/* <div className="subjects-container">
          {filteredSubjects.map((subject) => (
            <div key={subject.name} className="subject">
              <div className="icon">{subject.icon}</div>
              <span>{subject.name}</span>
            </div>
          ))}
        </div> */}
        <br></br><br></br>
        <div className="tutors-section">
          <h3>50 million evaluated private tutors ★★★★★</h3>
          <div className="tutors-grid">
            <div className="tutor-card">
              <button className="heart-button">:heart:</button>
            </div>
          </div>
        </div>
      <div className= "picsLeft">
        
        <img className="left" src={pic1} alt="Decorative right" />
        <img className="left" src={pic2} alt="Decorative right" />
        <img className="left" src={pic3} alt="Decorative right" />
      </div>
      <div className= "picsRight">
      <img className="right" src={kidStudying} alt="Decorative right" />
        <img className="right" src={girlWriting} alt="Decorative right" />
        <img className="right" src={computerStudying} alt="Decorative right" />
      </div>
      
      <div className='columns is-flex is-justify-content-center is-centered'>
      <div className='column is-one-fifth'>
        <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img
        src={testimonial1}
        alt="Placeholder image"
        style={{ objectFit: 'cover' }}
      />
    </figure>
  </div>
  <div class="card-content">
    

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
      iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
      <a href="#">#responsive</a>
      <br />
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
        </div>  
      <div className='column is-one-fifth '>
        <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img
        src={testimonial2}
        alt="Placeholder image"
        style={{ objectFit: 'cover' }}
      />
    </figure>
  </div>
  <div class="card-content">
    

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
      iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
      <a href="#">#responsive</a>
      <br />
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
        </div>  
      <div className='column is-one-fifth'>
        <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img
        src={testimonial3}
        alt="Placeholder image"
        style={{ objectFit: 'cover' }}
      />
    </figure>
  </div>
  <div class="card-content">
    

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
      iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
      <a href="#">#responsive</a>
      <br />
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
        </div>  
  

      </div>

      </main>

    </div>
  );
}
