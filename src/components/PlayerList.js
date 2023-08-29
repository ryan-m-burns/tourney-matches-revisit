import React from "react";
import Player from "./Player";

function PlayerList(props) {
  const { playerData } = props;

  const players = playerData.map((player) => {
    return (
      <Player
        gamerTag={player.gamerTag}
        firstName={player.firstName}
        lastName={player.lastName}
        wins={player.wins}
      />
    );
  });

  return (
    <section className="PlayerList">
      <h1>Current Participating Players</h1>
      {players}
    </section>
  );
}

export default PlayerList;
