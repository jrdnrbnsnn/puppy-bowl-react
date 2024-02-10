import { useState } from "react";
import AllPlayers from "./AllPlayers";

export default function NewPlayerForm({ onPlayerAdded }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [teamId, setTeamId] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const cohortName = "2308-acc-et-web-pt-a";
      const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

      const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
          name,
          breed,
          teamId,
          status,
          imageUrl,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        // Reset form fields
        setName("");
        setBreed("");
        setTeamId("");
        setStatus("");
        setImageUrl("");
        onPlayerAdded(); // Invoke callback to refresh player list
      } else {
        const result = await response.json();
        throw new Error(result.message || "Failed to add player");
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      {error && <p>{error}</p>}
      <form className="add-puppy-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          placeholder="Breed"
          required
        />
        <input
          type="text"
          value={teamId}
          onChange={(e) => setTeamId(e.target.value)}
          placeholder="Team ID"
          required
        />
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="Status"
          required
        />
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image URL"
          required
        />
        <button type="submit">Add Puppy to Bowl</button>
      </form>
    </div>
  );
}
