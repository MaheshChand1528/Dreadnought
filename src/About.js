import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <h1>About Dreadnought</h1>
      <p className="aboutp1">
        Our team is comprised of digitally-native entrepreneurs, futurists and
        operators with strengths in AI, Space Tech, Genomics, AR/VR and
        Longevity. We decided to launch Dreadnought to super charge the future
        by helping unlock the potential of future deep tech entrepreneurs.
      </p>
      <div className="about-in">
        <div>
          <img
            src="https://cdn.fs.teachablecdn.com/wgiet3NFRvO2zWrAf7n6"
            alt="img"
          />
          <p>Bailee Cooper</p>
          <span>Technophile. Left Brain. Space Nerd. UC Berkeley Alum.</span>
        </div>
        <div>
          <img
            src="https://cdn.fs.teachablecdn.com/pSMNpPEQ7qEAhujaurRp"
            alt="img"
          />
          <p>Jason Miller</p>
          <span>Futurist. Entrepreneur. Hardcore Nerd. Stanford Alum.</span>
        </div>
        <div>
          <img
            src="https://cdn.fs.teachablecdn.com/44zQyTIPT5a8nqK2bkUX"
            alt="img"
          />
          <p>Ragini Malhotra</p>
          <span>AI Researcher. Right Brain. Loves Dogs. MIT Alum.</span>
        </div>
      </div>
    </div>
  );
};

export default About;
