import React from "react";
import "./intero.css";
import Vector from "../images/vector.png";

function Intro() {
  return (
    <div className="intero">
      <img className="vector" src={Vector} alt="vector" />
      <h2>Build your library</h2>
      <p>
        Buy two selected books and get <br /> one for free
      </p>
      <button>View all</button>
    </div>
  );
}

export default Intro;
