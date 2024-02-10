import { useState } from "react";

export default function NewPlayerForm() {
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
      // Use the APIURL variable for fetch requests
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
      const result = await response.json();
      console.log(result);
      setName("");
      setBreed("");
      setTeamId("");
      setStatus("");
      setImageUrl("");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      {/* verify this part */}
      {error && <p>{error}</p>}
      <form className="add-puppy-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            placeholder="Bingo..."
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Breed
          <input
            type="text"
            value={breed}
            placeholder="Sharpei.."
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <label>
          Team
          <input
            type="text"
            value={teamId}
            placeholder="2.."
            onChange={(e) => setTeamId(e.target.value)}
          />
        </label>
        <label>
          Status
          <input
            type="text"
            value={status}
            placeholder="Field.."
            onChange={(e) => setStatus(e.target.value)}
          />
        </label>
        <label>
          Image URL
          <input
            type="text"
            value={imageUrl}
            placeholder="picture.jpg.."
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
        <button id="addPuppy">Add Puppy to Bowl</button>
      </form>
    </div>
  );
}
