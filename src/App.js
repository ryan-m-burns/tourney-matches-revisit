//import logo from './logo.svg';
import './App.css';
import PlayerList from './components/PlayerList';
import MatchList from './components/MatchList';
import Player from './components/Player';
function App() {
  return (
    <div className="App">
      <h1>
        Tournament Matches{" "}
        <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList />
      <MatchList />
    </div>
  );
}

export default App;
