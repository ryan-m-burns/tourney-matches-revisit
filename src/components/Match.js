import React from "react";

function Match(props) {
  const { players, winner, scoreDifference } = props;

  return (
    <article className="Match">
      <h1>
        {players[0]} <span>vs</span> {players[1]}
      </h1>

      {/* Ternary Operator Method */}
      {winner ? (
        <h2>
          {winner} is the winner by {scoreDifference}!
        </h2>
      ) : (
        <h2>No winner yet!</h2>
      )}

      {/* Short-Circuit Evaluation Method
      {props.winner && (
        <h2>
          {props.winner} is the winner by {props.scoreDifference}!
        </h2>
      )}
      {!props.winner && <h2>No winners yet!</h2>}
      */}

      {/* To be shown if there is a winner
      <h2>
        {winner} is the winner by {scoreDifference}!
      </h2>
      To be shown if there is no winner
      <h2>No winner yet!</h2> */}
    </article>
  );
}

export default Match;
