import React, { Component } from 'react';
import './Resume.scss';
import MyResume from '../../assets/jonathanredwine.pdf';

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <object data={MyResume} type="application/pdf" width="100%" height="100%" style={{ minHeight: '90vh' }}>
          <p>
            Something went wrong loading the resume! Please visit my{' '}
            <a href="https://www.linkedin.com/in/jonathan-redwine-168300ab/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            .
          </p>
        </object>
      </div>
    );
  }
}

export default Resume;
