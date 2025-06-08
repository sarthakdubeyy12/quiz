import React from "react";
import "./About.css";
import {FaStar, FaAward, FaLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      

      <section className="section">
        <h2><FaLightbulb /> Why Brain Battle?</h2>
        <p>
          Brain Battle is more than just a quiz. It’s designed to make learning engaging, boost your brain power, and let you compete with style.
          Whether you're preparing for exams or just love trivia, Brain Battle keeps your mind sharp.
        </p>
      </section>

      <section className="section">
        <h2><FaStar /> Features You’ll Love</h2>
        <ul>
          <li>Beautiful and responsive design</li>
          <li>Wide range of quiz categories</li>
          <li>Levels of difficulty for all skill types</li>
          <li>Real-time scoring & results</li>
          <li>Simple and smooth user experience</li>
        </ul>
      </section>

      <section className="section">
        <h2><FaAward /> Our Vision</h2>
        <p>
          We believe learning should be exciting and rewarding. Brain Battle is built with love, keeping you inspired to learn every day.
        </p>
      </section>

      
    </div>
  );
};

export default About;
