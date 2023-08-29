import React from "react";
import Player from "./Player";


import { preparePlayerData, addWinsToPlayer } from "../helpers/playerHelpers";

function PlayerList(props) {
  const { matchData, playerData } = props;
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayer(playerDataArray, matchData);
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
