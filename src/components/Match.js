import React from "react";

function Match(props) {
  const { players, winner, scoreDifference } = props;

  return (
    <article className="Match">
      <h1>
        {players[0]} <span>vs</span> {players[1]}
      </h1>
      {/* To be shown if there is a winner */}
      <h2>
        {winner} is the winner by {scoreDifference}!
      </h2>
      {/* To be shown if there is no winner */}
      <h2>No winner yet!</h2>
    </article>
  );
}

export default Match;
