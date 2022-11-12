import React from "react";
import "./TypeText.css";
import Typewriter from "typewriter-effect";

const TypeText = () => {
  
  return (
    <div className="text">
      <Typewriter 
        onInit={(typewriter) => {
          typewriter
          .typeString("tech")
          .pauseFor(200)
          .deleteAll()
          .typeString("techie tips")
          .pauseFor(150)
          .deleteAll()
          .typeString("Techy Tips { Blog } ")
          .start()
        }}
      />
    </div>
  );
};

export default TypeText;
