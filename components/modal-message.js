import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function ModalMessage(props) {
    const [Loc, setLoc] = useState([]);
    const time = new Date();
    const getLocation = () => {
        window && window?.navigator.geolocation.getCurrentPosition(function (position) {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            setLoc([lat, long]);
        });
    }
    useEffect(() => { getLocation() }, [])
    return (
        <div>

            <Modal
                show={true}
                onHide={props?.close}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Alert Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Time: {props?.data?.time}<br />
                    Location:  <a href={`https://www.latlong.net/c/?lat=${props?.data?.location[0]}&long=${props?.data?.location[1]}`} target="_blank" rel="noreferrer">{JSON.stringify(Loc)}</a> <br />
                    Vehicle: {props?.data?.vehicle}  <br />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props?.close}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
