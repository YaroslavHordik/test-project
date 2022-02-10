import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Component/Header/Header';

function About() {
  return (
    <div style={{ padding: '20px 40px' }}>
      <Header />
      About company
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default About;
