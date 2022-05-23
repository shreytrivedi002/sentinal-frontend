import { useState } from "react";
import { Button } from "react-bootstrap";
import { addObjectToDb } from "../utils/dbFunctions";

const AddNewAlert = () => {
    const [vehicle, setVehicle] = useState('');
    const [location, setlocation] = useState('');
    const [number, setNumber] = useState('');


    const addNew = () => {
        vehicle && location ? addObjectToDb({
            time: new Date().toISOString(),
            location: JSON.stringify(location),
            vehicle: vehicle,
            number: number

        }).then(res => {
            setVehicle('');
            setlocation('')
        }) : '';
    }
    return (
        <div className="mt-5" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyItems: "center" }}>
            <input type="text" value={number} required placeholder="mobile number" onChange={(e) => setNumber(e.target.value)} /><br />
            <input type="text" value={vehicle} required placeholder="vehicle number" onChange={(e) => setVehicle(e.target.value)} /><br />
            <input type="text" value={location} required placeholder="location" onChange={(e) => setlocation(e.target.value)} /><br />
            <Button onClick={() => addNew()} >Add</Button>
        </div>

    );
}

export default AddNewAlert;