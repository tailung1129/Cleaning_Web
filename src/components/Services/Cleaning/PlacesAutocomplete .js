import usePlacesAutocomplete , { getGeocode , getLatLng , getZipCode , getDetails } from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";

const PlacesAutocomplete = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete();

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = (val) => {
    setValue(val, false);
    const parameter = {
        address: val,
    };
    console.log(val);
    var result;
    getGeocode(parameter)
    .then((results) => getLatLng(results[0]))
    .then((latLng) => {
        const { lat, lng } = latLng;
        console.log("Coordinates: ", { lat, lng });
    })
    .catch((error) => {
        console.log("Error: ", error);
    });

    getGeocode(parameter) 
    .then((results) => getZipCode(results[0], false))
    .then((zipCode) => {
        console.log("ZIP Code: ", zipCode);
    })
    .catch((error) => {
        console.log("Error: ", error);
    });

    getGeocode(parameter)
    .then((results) => getDetails({placeId:results[0].place_id , fields: ["name" , "rating"]}) )
    .then((details) => {
        console.log("Details: ", details);
    })
    .catch((error) => {
        console.log("Error: ", error);
    });
    
  };

  return (
    <Combobox onSelect={handleSelect} aria-labelledby="demo">
      <ComboboxInput value={value} onChange={handleInput} disabled={!ready} />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

  export default PlacesAutocomplete