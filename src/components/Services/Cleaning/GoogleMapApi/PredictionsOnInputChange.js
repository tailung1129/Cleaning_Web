import React, { useState } from 'react'
import usePlacesAutocomplete from '@atomap/use-places-autocomplete'

export default function PredictionsOnInputChange() {
  const [selectedPrediction, setSelectedPrediction] = useState(null)
  const [searchValue, setSearchValue] = useState('')
  // const { predictions, error } = usePlacesAutocomplete(searchValue)

  const { predictions, error } = usePlacesAutocomplete(searchValue, {
    debounceTimeout: 400,
    componentRestrictions: { country: 'gb' },
  })

  if (error) {
    console.error(error)
  }

  const handlePredictionSelection = (e, prediction) => {
    e.preventDefault()
    setSelectedPrediction(prediction)
  }

  

  return (
    <>
      <form>
        <input
          name="predictionSearch"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <img
          src="https://developers.google.com/maps/documentation/images/powered_by_google_on_white.png"
          alt="Powered by Google"
        />
        <ul>
          {predictions?.map((prediction) => (
            <li key={prediction?.place_id}>
              <button
                onClick={(e) => handlePredictionSelection(e, prediction)}
                onKeyDown={(e) => handlePredictionSelection(e, prediction)}
              >
                {prediction?.structured_formatting?.main_text || 'Not found'}
              </button>
            </li>
          ))}
        </ul>
        <h3>You searched for: {searchValue}</h3>
        <h3>
          You selected:{' '}
          {selectedPrediction?.structured_formatting?.main_text || 'None'}
        </h3>
      </form>
    </>
  )
}