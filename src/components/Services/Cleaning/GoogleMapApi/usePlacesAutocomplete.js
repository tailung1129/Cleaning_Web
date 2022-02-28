import { useState, useEffect } from "react"
// the function we just created
import { googleAutocomplete } from "./googleAutocomplete"

export default function usePlacesAutocomplete(text = "", debounceTimeout = 400) {
  const [predictions, setPredictions] = useState([])

  useEffect(() => {
    const handleDebounce = setTimeout(async () => {
      try {
        if (!text) {
          return
        }

        const nextPredictions = await googleAutocomplete(text)
        setPredictions(nextPredictions)
      } catch (e) {
        console.error(e)
      }
    }, debounceTimeout)

    return () => {
      clearTimeout(handleDebounce)
    }
  }, [text, debounceTimeout])

  return predictions
}