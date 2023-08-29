import React from "react";
import Match from "./Match";

function MatchList() {
  return (
    <section className="PlayerList MatchList">
      <h1> Current Matches </h1>
      <Match />
    </section>
  );
}

export default MatchList;