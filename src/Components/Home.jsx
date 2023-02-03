import React, { useEffect } from 'react';
import './home.scss';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroSection = document.querySelector('.hero');
      heroSection.style.backgroundPositionY = `-${scrollY * 0.4}px`;

      const heroLeft = document.querySelector('.hero-left');
      heroLeft.style.backgroundPositionY = `${scrollY * 0.6}px`;

      const events = document.querySelector('.events');
      events.style.transform = `translateY(${scrollY * 0.7}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-left">
          <div className="hero-left-light"></div>
        </div>
        <div className="hero-right">
          <div className="hero-right-content">
            <img src="./logo.png" alt="Event Logo" />
            <h1>The Best Event</h1>
            <p>The best event of the year is here!</p>
          </div>
        </div>
      </div>
      <div className="sponsors">
        <h2>Our Sponsors</h2>
        <div className="sponsors-list">
          <img src="./sponsor1.png" alt="Sponsor 1" />
          <img src="./sponsor2.png" alt="Sponsor 2" />
          <img src="./sponsor3.png" alt="Sponsor 3" />
        </div>
      </div>
      <div className="events">
        <h2>Our Upcoming Events</h2>
        <div className="events-carousel">
          <div className="event-card">
            <img src="./event1.png" alt="Event 1" />
            <h3>Event 1</h3>
          </div>
          <div className="event-card">
            <img src="./event2.png" alt="Event 2" />
            <h3>Event 2</h3>
          </div>
          <div className="event-card">
            <img src="./event3.png" alt="Event 3" />
            <h3>Event 3</h3>
          </div>
        </div>
        
      <footer>
        <p>&copy; Developer by SDC</p>
      </footer>
      </div>
    </div>
  );
};

export default Home;
