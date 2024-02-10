import { useEffect, useState } from "react";

export default function SinglePlayer({ selectedPlayerId }) {
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!selectedPlayerId) {
      setPlayer(null);
      return; // Exit early if no player ID is provided
    }

    setLoading(true);
    const fetchPlayer = async () => {
      try {
        const cohortName = "2308-acc-et-web-pt-a";
        const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players/${selectedPlayerId}`;

        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch player details.");
        }
        const data = await response.json();
        setPlayer(data.data.player);
      } catch (error) {
        console.error("Error fetching player details:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayer();
  }, [selectedPlayerId]);

  if (loading) return <p>Loading player details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!player) return <p>No player details available.</p>;

  return (
    <div>
      <h1>{player.name}</h1>
      <img
        src={player.imageUrl}
        alt={`${player.name}`}
        style={{ width: "200px", height: "200px" }}
      />
      <p>Breed: {player.breed}</p>{" "}
      {/* Assuming 'breed' is a property you're interested in */}
      <p>Status: {player.status}</p>
      <p>Team ID: {player.teamId}</p>
      {/* Add more player details as needed */}
    </div>
  );
}
