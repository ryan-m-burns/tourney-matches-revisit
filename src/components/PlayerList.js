import React from "react";
import Player from "./Player";
import playerData from "../data/playerData";

function PlayerList() {
  return (
    <section className="PlayerList">
      <h1>Current Participating Players</h1>
      <Player />
    </section>
  );
}

export default PlayerList;