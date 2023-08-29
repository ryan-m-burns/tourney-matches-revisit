import React from "react";
import Player from "./Player";
import playerData from "../data/playerData";
import matchData from "../data/matchData";
import { preparePlayerData, addWinsToPlayer } from "../helpers/playerHelpers";

function PlayerList(props) {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayer(playerDataArray, matchData);
  return (
    <section className="PlayerList">
      <h1>Current Participating Players</h1>
      <Player />
    </section>
  );
}

export default PlayerList;