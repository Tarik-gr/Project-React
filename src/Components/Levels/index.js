import React from "react";

function Levels(props) {
  return (
    <>
      <div className="row">
        <h2 className="col">Niveau {props.level}</h2>
      </div>
      <div className="row">
        <div className="col">Question : {props.idQuestion}/10</div>
        <div className="col">Score : {props.score}</div>
      </div>
    </>
  );
}

export default Levels;
