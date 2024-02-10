import React from "react";

const cohortName = "2308-acc-et-web-pt-a";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

// Component takes `selectedPlayerId` and `onPlayerDeleted` as props
const HandleDeletePlayer = ({ selectedPlayerId, onPlayerDeleted }) => {
  // Function to handle the deletion
  const deletePlayer = async () => {
    if (!selectedPlayerId) {
      console.log("No player selected for deletion");
      return;
    }
    try {
      const response = await fetch(`${API_URL}/${selectedPlayerId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Player deleted successfully");
        onPlayerDeleted(); // Invoke the callback function to notify the parent component
      } else {
        console.error("Failed to delete the player");
      }
    } catch (error) {
      console.error("Error deleting player:", error);
    }
  };

  // Render a button that, when clicked, will attempt to delete the player
  return <button onClick={deletePlayer}>Remove Player</button>;
};

export default HandleDeletePlayer;
