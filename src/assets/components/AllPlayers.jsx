<<<<<<< HEAD
import { useEffect } from "react";
import { useState } from "react";

export default function AllPlayers({ onSelectPlayer }) {
  const [players, setPlayers] = useState([]);
  function handleSinglePlayerClick(playerId) {
    onSelectPlayer(playerId);
  }
=======
import { useEffect, useState } from "react";

export default function AllPlayers({ onSelectPlayer, refreshPlayers }) {
  const [players, setPlayers] = useState([]);
>>>>>>> 5cec228 (need to work on)

  useEffect(() => {
    async function fetchAllPlayers() {
      try {
<<<<<<< HEAD
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
=======
        // Assuming you have a base URL or cohort name to construct your API call
        const cohortName = "2308-acc-et-web-pt-a";
        const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch players");

        const data = await response.json();
        setPlayers(data.data.players);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    }

    fetchAllPlayers();
  }, [refreshPlayers]); // Empty dependency array means this effect runs once on mount

  function handlePlayerClick(playerId) {
    onSelectPlayer(playerId);
  }

  return (
    <div className="player-container">
      {players.length > 0 ? (
        players.map((player) => (
          <div key={player.id} className="player-card">
            <img
              src={player.imageUrl}
              alt={player.name}
              style={{ width: "100px", height: "100px" }}
            />
            <h2>{player.name}</h2>
            <p>{player.breed}</p>
            <button onClick={() => handlePlayerClick(player.id)}>
              View Details
>>>>>>> 5cec228 (need to work on)
            </button>
          </div>
        ))
      ) : (
<<<<<<< HEAD
        <p>Loading players...</p>
=======
        <p>No players found.</p>
>>>>>>> 5cec228 (need to work on)
      )}
    </div>
  );
}
