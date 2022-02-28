import React, { useState } from "react"
// the function we just created
import { googleAutocomplete } from "./googleAutocomplete"

export default function PredictionsOnFormSubmission() {
  const [searchValue, setSearchValue] = useState("")
  const [predictions, setPredictions] = useState([])

  const handleSubmit = async e => {
    e.preventDefault()
    const results = await googleAutocomplete(searchValue)
    if (results) {
      setPredictions(results)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="predictionSearch"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <img
        src="https://developers.google.com/maps/documentation/images/powered_by_google_on_white.png"
        alt="Powered by Google"
      />
      {predictions?.map(prediction => (
        <p key={prediction?.place_id}>
          {prediction?.structured_formatting?.main_text || "Not found"}
        </p>
      ))}
    </>
  )
}