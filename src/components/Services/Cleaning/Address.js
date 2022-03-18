import React , {useState , useEffect } from "react"
import { Form , Button , ButtonGroup , Row , Col } from 'react-bootstrap'
// import Autocom from "./Autocom"
// import PredictionsOnInputChange from "./GoogleMapApi/PredictionsOnInputChange"

import usePlacesAutocomplete , { getGeocode , getLatLng , getZipCode , getDetails } from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";
// import PlacesAutocomplete from './PlacesAutocomplete '

const Address = ( props ) => {

    const [address , setAddress] = useState(props.resultcleaning.address);
    const [roomnum , setRoomnum] = useState(props.resultcleaning.roomnum);
    const [mimportant , setMimportant] = useState(props.resultcleaning.mimportant);
    const [floorarea , setFloorarea] = useState(props.resultcleaning.floorarea);
    const [pollution , setPollution] = useState(props.resultcleaning.pollution);
    const [addressflag , setAddresflag] = useState(false);
    

    const [lat , setLat] = useState(props.resultcleaning.latitude);
    const [lng , setLng] = useState(props.resultcleaning.longitude);
    const [zipcode , setZipcode]= useState(props.resultcleaning.postcode);

    const fnMImportant = ( e ) => {
        setMimportant(e.target.value);
    }
    const fnFloorArea = ( e ) => {
        setFloorarea(e.target.value);
    }
    const fnRoomNUm = ( e ) => {
        setRoomnum(e.target.value);
    }
    const fnPollution = ( e ) => {
        setPollution(e.target.value);
    }
    const fnAdd = () => {
        setFloorarea(parseInt(floorarea)+1);
    }
    const fnSub = () => {
        setFloorarea(parseInt(floorarea)-1);
    }
    const fnClickPrev = () => {
        const newState = Object.assign({}, props.resultcleaning, {address:address , roomnum:roomnum , mimportant:mimportant , floorarea:floorarea , pollution:pollution , latitude:lat , longitude:lng , postcode:zipcode});
        props.setResultcleaning(newState);
        props.setCurrentstep(props.currentstep-1);
    }
    const fnClickNext = () => {
        if(address==="")
        {
            setAddresflag(true);
        }
        else
        {
            console.log(lat , lng)
            const newState = Object.assign({}, props.resultcleaning, {address:address , roomnum:roomnum , mimportant:mimportant , floorarea:floorarea , pollution:pollution , latitude:lat , longitude:lng , postcode:zipcode});      
            props.setResultcleaning(newState);
            props.setCurrentstep(props.currentstep+1);
        }   
    }

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
        setAddress(val);
        setAddresflag(false);
        const parameter = {
            address: val,
        };
        console.log(val);

        getGeocode(parameter)
        .then((results) => getLatLng(results[0]))
        .then((latLng) => {
            setLat(latLng.lat);
            setLng(latLng.lng);
        })
        .catch((error) => {
            console.log("Error: ", error);
        });

        getGeocode(parameter) 
        .then((results) => getZipCode(results[0], false))
        .then((zipCode) => {
            setZipcode(zipCode);
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

    useEffect(() => {
        setValue(props.resultcleaning.address);
    } , [] )

    return (
        <Row className="text-color-1">
            <Row>
                {/* <Autocom /> */}
                {/* <PredictionsOnInputChange /> */}
                
                <Form.Group className="col-6">
                    <Form.Label>ADDRESS-(TYPE&SELECT ADDRESS)</Form.Label>
                    {/* < PlacesAutocomplete /> */}
                    <Combobox onSelect={handleSelect} aria-labelledby="demo" >
                        <ComboboxInput value={value} onChange={handleInput} disabled={!ready} className={addressflag===true?"border border-danger w-100":"w-100"} />
                        <ComboboxPopover>
                            <ComboboxList>
                            {status === "OK" &&
                                data.map(({ place_id, description }) => (
                                <ComboboxOption key={place_id} value={description} />
                                ))}
                            </ComboboxList>
                        </ComboboxPopover>
                    </Combobox>
                    {/* <Form.Control type="text" onChange={fnAddress} value={address} className={addressflag&&"border border-danger"} /> */}
                </Form.Group>
                <Form.Group className="col-3">
                    <Form.Label>WHAT IS MORE IMPORTANT</Form.Label>
                    <ButtonGroup onClick={fnMImportant}>
                        <Button variant="secondary" className={mimportant==="quality"?"active_button":""} value="quality" >quality</Button>
                        <Button variant="secondary" className={mimportant==="price"?"active_button":""} value="price" >price</Button>
                    </ButtonGroup>
                </Form.Group>
                <Form.Group className="col-3">
                    <Form.Label>FLOOR AREA IN M2</Form.Label>
                    <ButtonGroup>
                        <Button variant="secondary" onClick={fnSub}> - </Button>
                        <Form.Control type="text" onChange={fnFloorArea} value={floorarea} className="text-end" />
                        <Button variant="secondary" onClick={fnAdd} > + </Button>
                    </ButtonGroup>
                </Form.Group>
            </Row>
            <Row className="pt-2">
                <Form.Group className="col-6">
                    <Form.Label>HOW MANY ROOMS DOES THE PROPERTY HAVE?</Form.Label>
                    <ButtonGroup onClick={fnRoomNUm}>
                        <Button variant="secondary" value="1" className={roomnum==="1"?"active_button":""} >1</Button>
                        <Button variant="secondary" value="2" className={roomnum==="2"?"active_button":""} >2</Button>
                        <Button variant="secondary" value="3" className={roomnum==="3"?"active_button":""} >3</Button>
                        <Button variant="secondary" value="4" className={roomnum==="4"?"active_button":""} >4</Button>
                        <Button variant="secondary" value="5" className={roomnum==="5"?"active_button":""} >5</Button>
                        <Button variant="secondary" value="6+" className={roomnum==="6+"?"active_button":""}  >6+</Button>
                    </ButtonGroup>
                </Form.Group>
                <Form.Group className="col-5">
                    <Form.Label>DEGREE OF POLLUTION?</Form.Label>
                    <ButtonGroup onClick={fnPollution}>
                        <Button variant="secondary" className={pollution==="Very dirty"?"active_button":""} value="Very dirty">Very dirty</Button>
                        <Button variant="secondary" className={pollution==="medium dirty"?"active_button":""} value="medium dirty">medium dirty</Button>
                        <Button variant="secondary" className={pollution==="Little dirty"?"active_button":""} value="Little dirty">Little dirty</Button>
                    </ButtonGroup>
                </Form.Group>
            </Row>
            <Row className="my-4 py-4">
                <Col className="text-end">
                    <Button
                        variant="warning"
                        onClick={fnClickPrev}
                    >
                        Prev
                    </Button>
                </Col>
                <Col>
                    <Button
                        variant="warning"
                        onClick={fnClickNext}
                    >
                        Next
                    </Button>
                </Col>
            </Row>
        </Row>
    );
}

export default Address;

