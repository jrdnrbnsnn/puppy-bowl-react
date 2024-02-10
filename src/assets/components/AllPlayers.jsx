import { useEffect } from "react";
import { useState } from "react";

export default function AllPlayers({ onSelectPlayer }) {
  const [players, setPlayers] = useState([]);
  function handleSinglePlayerClick(playerId) {
    onSelectPlayer(playerId);
  }

  useEffect(() => {
    async function fetchAllPlayers() {
      try {
        const cohortName = "2308-acc-et-web-pt-a";
        const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log("here is your data ", data.data.players);
        setPlayers(data.data.players);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllPlayers();
  }, []);

  return (
    <div className="player-container">
      {players ? (
        players.map((player, index) => (
          <div key={index}>
            <img src={player.imageUrl} alt={player.breed}></img>
            <h2>{player.name}</h2>
            <button
              type="button"
              onClick={() => handleSinglePlayerClick(player.id)}
            >
              Player Details
            </button>
          </div>
        ))
      ) : (
        <p>Loading players...</p>
      )}
    </div>
  );
}
