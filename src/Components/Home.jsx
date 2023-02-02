import React from 'react';
import { motion, useCycle } from 'framer-motion';
import './Home.scss';

const Home = () => {
  const [index, cycleIndex] = useCycle(0, 1, 2, 3);

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-left">
          <motion.div
            animate={{ x: [0, -100, 0, 100, 0] }}
            transition={{ duration: 4, ease: 'easeInOut', loop: Infinity }}
            className="hero-left-light"
          />
        </div>
        <div className="hero-right">
          <div className="hero-right-content">
            <img src="logo.png" alt="Event logo" />
            <h1>The Best Tech Event</h1>
            <p>Join us for an unforgettable experience.</p>
          </div>
        </div>
      </div>
      <div className="sponsors">
        <h2>Our Sponsors</h2>
        <div className="sponsors-list">
          <img src="sponsor1.png" alt="Sponsor 1" />
          <img src="sponsor2.png" alt="Sponsor 2" />
          <img src="sponsor3.png" alt="Sponsor 3" />
        </div>
      </div>
      <div className="events">
        <h2>Featured Events</h2>
        <motion.div className="events-carousel">
          <motion.div
            animate={{ x: [-100 * index, -100 * cycleIndex] }}
            transition={{ duration: 0.5 }}
            className="event-card"
          >
            <img src="event1.jpg" alt="Event 1" />
            <h3>Event 1</h3>
            <p>Description of Event 1</p>
          </motion.div>
          <motion.div
            animate={{ x: [-100 * index, -100 * cycleIndex] }}
            transition={{ duration: 0.5 }}
            className="event-card"
          >
            <img src="event2.jpg" alt="Event 2" />
            <h3>Event 2</h3>
            <p>Description of Event 2</p>
          </motion.div>
          <motion.div
            animate={{ x: [-100 * index, -100 * cycleIndex] }}
            transition={{ duration: 0.5 }}
            className="event-card"
          >
            <img src="event3.jpg" alt="Event 3" />
            <h3>Event 3</h3>
            <p>Description of Event 3</p>
          </motion.div>
          <motion.div
            animate={{ x: [-100 * index, -100 * cycleIndex] }}
            transition={{ duration: 0.5 }}
            className="event-card"
          >
            <img src="event4.jpg" alt="Event 4" />
            <h3>Event 4</h3>
            <p>Description of Event 4</p>
          </motion.div>
        </motion.div>
      </div>
      <footer>
        <p>&copy; Developer by SDC</p>
      </footer>
    </div>
  );
};

export default Home;
