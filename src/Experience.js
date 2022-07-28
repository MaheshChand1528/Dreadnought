import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience">
      <h1 className="heading">Student Experiences</h1>
      <div className="experience-in">
        <div>
          <img
            src="https://cdn.fs.teachablecdn.com/A2GPqp7OSrqIi7vEA4VY"
            alt="img"
          />
          <h3>Rob Nielsen</h3>
          <p>
            Sophomore year student at MIT says, 'I have been coding since I was
            12 but this course blew my mind away because now I know no fear. I
            can keep launching again and again till I win. The startup lessons
            are invaluable and practical.'
          </p>
        </div>
        <div>
          <img
            src="https://cdn.fs.teachablecdn.com/Uf8ZAKWtTGGO8jPVyzi3"
            alt="img"
          />
          <h3>Rashmi Tirke</h3>
          <p>
            Final year student at IIT Madras says, 'I almost gave up but then I
            realised that if I can't build these things in a controlled learning
            environment then I am not going to survive as an entrepreneur in the
            real world. I am far more confident now.'
          </p>
        </div>
        <div>
          <img
            src="https://cdn.fs.teachablecdn.com/TdbTrEo5TkGv40hXNrCN"
            alt="img"
          />
          <h3>David Raum</h3>
          <p>
            First year student at Cambridge says, 'I learnt so much and I plan
            to use the money I earned as a seed money for my startup. The
            smartest thing I did was to refer my friends as it increased my
            earnings and now we are working together.'
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
