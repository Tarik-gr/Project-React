import React from "react";

const Results = (props) => {
  // display questions and good answers using props.datas
  const { userAnswers } = props;
  const displayResults = props.datas.map((data, index) => {
    return (
      <tr key={index} data-testId="row-result">
        <th scope="row">{data.id + 1}</th>
        <td
          style={{
            color: userAnswers[index] === data.answer ? "green" : "red",
          }}
        >
          {data.question}
        </td>
        <td
          style={{
            color: userAnswers[index] === data.answer ? "green" : "red",
          }}
          data-testId="answers"
        >
          {data.answer}
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div className="row">
        <div
          className="col"
          style={{ color: props.score > 6 ? "green" : "red" }}
        >
          Votre score est de {`${props.score * 10}%`}
        </div>
        <div className="col">
          <button
            onClick={() => props.loadSameLevel()}
            type="button"
            className="btn btn-outline-secondary"
            style={{ marginRight: "2rem" }}
          >
            Recommencer
          </button>
          <button
            onClick={() => props.loadNextLevel()}
            type="button"
            className="btn btn-outline-secondary"
            disabled={props.quizLevel === 3}
          >
            Niveau Suivant
          </button>
        </div>
      </div>
      <br />
      <h2>Récapitulatif du Quiz</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Question</th>
            <th scope="col">Réponse</th>
          </tr>
        </thead>
        <tbody>{displayResults}</tbody>
      </table>
    </div>
  );
};

export default Results;
