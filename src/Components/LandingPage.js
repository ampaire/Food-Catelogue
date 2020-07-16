import React from 'react';
import MdPaperPlane from 'react-ionicons/lib/MdPaperPlane';
import { Link } from 'react-router-dom';

const Main = () => (
  <div className="app-container">
    <div className="btns">
      <div className="btn-outlined">
        <div>
          <button
            className="btn btn-outline-primary"
            type="button"
          >
            <Link to="/explore" className="links">
              <MdPaperPlane color="#ffff" className="icons" />
              Explore
            </Link>
          </button>
        </div>
      </div>
      <div>
        <h2 className="app-title">The CookBook</h2>
        <blockquote>
          <p className="app-index-quote">
            Explore the world&apos;s Best dishes
          </p>
          <footer className="author">― Effie Phemia Ampaire</footer>
        </blockquote>
      </div>
    </div>
  </div>
);

export default Main;