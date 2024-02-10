import { useEffect, useState } from "react";

export default function SinglePlayer({ selectedPlayerId }) {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    async function fetchPlayer() {
      try {
        const cohortName = "2308-acc-et-web-pt-a";
        const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players/${selectedPlayerId}`;
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data.data.player);
        setPlayer(data.data.player);
      } catch (error) {
        console.log(error);
      }
    }
    if (selectedPlayerId) {
      fetchPlayer();
    }
  }, [selectedPlayerId]);

  if (!player) return <p>Loading player details...</p>;

  return (
    <div>
      <h1>{player.name}</h1>
      <img src={player.imageUrl} alt={player.breed} />
      <p>Breed: {player.breed}</p>
      <p>Status: {player.status}</p>
      <p>Team: {player.team}</p>
    </div>
  );
}
