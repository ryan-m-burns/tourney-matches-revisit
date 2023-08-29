import React from "react";
import Match from "./Match";

function MatchList(props) {
  const { matchData } = props;
  const matches = matchData.map((match) => {
    return (
      <Match
        key={match.matchNumber}
        players={match.players}
        winner={match.winner}
        scoreDifference={match.scoreDifference}
      />
    );
  });

  return (
    <section className="PlayerList MatchList">
      <h1> Current Matches </h1>
      {matches}
    </section>
  );
}

export default MatchList;
