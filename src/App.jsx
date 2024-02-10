import "./App.css";
import { useState } from "react";
import NewPlayerForm from "./assets/components/NewPlayerForm";
import AllPlayers from "./assets/components/AllPlayers";
import SinglePlayer from "./assets/components/SinglePlayer";
import HandleDeletePlayer from "./assets/components/DeletePlayer";

export default function App() {
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);
  const [showSinglePlayer, setShowSinglePlayer] = useState(false); // State to control the display

  // Function to handle player selection
  const handleSelectPlayer = (playerId) => {
    setSelectedPlayerId(playerId);
    setShowSinglePlayer(true); // Show single player view when a player is selected
  };

  // Function to return to the list view
  const handleBackToList = () => {
    setShowSinglePlayer(false); // To return to the list view
  };

  // Function to handle state update after a player is deleted
  const handlePlayerDeleted = () => {
    setSelectedPlayerId(null); // Reset selected player
    setShowSinglePlayer(false); // Return to the list view, assuming the player list is automatically refreshed
  };

  return (
    <>
      <NewPlayerForm />
      {showSinglePlayer ? (
        <>
          <SinglePlayer selectedPlayerId={selectedPlayerId} />
          {/* Render the HandleDeletePlayer component with the necessary props */}
          <HandleDeletePlayer
            selectedPlayerId={selectedPlayerId}
            onPlayerDeleted={handlePlayerDeleted}
          />
          <button onClick={handleBackToList}>Back to List</button>
        </>
      ) : (
        <AllPlayers onSelectPlayer={handleSelectPlayer} />
      )}
    </>
  );
}
