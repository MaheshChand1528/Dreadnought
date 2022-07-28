import React from "react";
import "./Social.css";

const Social = () => {
  return (
    <div className="social">
      <h1>Social Initiative By</h1>
      <div className="social-in">
        <div>
        <img
          src="https://cdn.fs.teachablecdn.com/iHpm1TXUQQeQk6PQVAMw"
          alt="img"
        />
        <p>AI for Good Foundation</p>
        </div>
        <div>
        <img
          src="https://cdn.fs.teachablecdn.com/2GJ3PRzFSAyZblVHipUF"
          alt="img"
        />
        <p>Y Combinator</p>
        </div>
        <div>
        <img
          src="https://cdn.fs.teachablecdn.com/xOBdZe6Q1GYXG5bPyTFS"
          alt="img"
        />
        <p>Stanford University</p>
        </div>
      </div>
    </div>
  );
};

export default Social;
