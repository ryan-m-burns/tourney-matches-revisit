import React from "react";
import Player from "./Player";

function PlayerList(props) {
  const { parsedPlayerData } = props;

  const onePlayer = parsedPlayerData[0];

  return (
    <section className="PlayerList">
      <h1>Current Participating Players</h1>
      <Player
        gamerTag={onePlayer.gamerTag}
        firstName={onePlayer.firstName}
        lastName={onePlayer.lastName}
        wins={onePlayer.wins}
      />
    </section>
  );
}

export default PlayerList;
