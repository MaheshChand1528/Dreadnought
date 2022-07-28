import React from "react";
import "./Prefooter.css";

const Prefooter = () => {
  return (
    <div className="prefooter">
      <h1 className="prefooter-h1">Sign up to learn and earn</h1>
      <p className="prefooter-p1">
        Course enables future founders to learn how to launch quickly as most
        first time founders pivot 4 to 5 times before achieving product-market
        fit.
      </p>
      <a href="##" className="prefooter-in">
        <img
          className="img1"
          src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/mzBHDQYXTCqItjILj7OI"
          alt="img"
        />
        <h3>Future Deep Tech Founders</h3>
        <p className="p2">
          Everything you need to know about building startup other than coding.
          Milestone based earnings upto USD $1000.
        </p>
        <div className="in-div1">
          <div className="in-div2">
            <img
              className="img2"
              src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/hl1PBlgTTlWt9m8RnkCS"
              alt="img"
            />
            <p className="p3">Jason Miller</p>
          </div>
          <p className="p4">FREE</p>
        </div>
      </a>
    </div>
  );
};

export default Prefooter;
