//import logo from './logo.svg';
import "./App.css";
import PlayerList from "./components/PlayerList";
import MatchList from "./components/MatchList";
import matchData from "./data/matchData";
import playerData from "./data/playerData";
import { preparePlayerData, addWinsToPlayer } from "./helpers/playerHelpers";

function App() {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayer(playerDataArray, matchData);

  return (
    <div className="App">
      <h1>
        Tournament Matches{" "}
        <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList parsedPlayerData={parsedPlayerData} />
      <MatchList matchData={matchData} />
    </div>
  );
}

export default App;
