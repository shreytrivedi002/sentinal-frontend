import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import { BubbleApp } from "../components/bubble";
import { ChartApp } from "../components/line-chart";
import { ScatterApp } from "../components/scatter";
import { addObjectToDb } from "../utils/dbFunctions";

const Dashboard = () => {
    const [Loc, setLoc] = useState([]);
    const getLocation = () => {
        window && window?.navigator.geolocation.getCurrentPosition(function (position) {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            setLoc([lat, long]);
        });
    }

    useEffect(() => {
        if (Loc[0]) {
            addObjectToDb({
                time: new Date().toISOString(),
                location: JSON.stringify(Loc),
                vehicle: '1815kshk7989',

            })
        }
    }, [Loc])
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Button onClick={getLocation}>Get Location</Button><br />
                        <a href={`https://www.latlong.net/c/?lat=${Loc[0]}&long=${Loc[1]}`} target="_blank" rel="noreferrer">{`(${Loc[0]}, ${Loc[1]})`}</a>
                    </Col>
                </Row>
                <h1>Head</h1>
            </Container>


            <Row>
                <Col>
                    <ChartApp />
                </Col>
                <Col>
                    <BubbleApp />
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col>
                        <ScatterApp />
                    </Col>

                </Row>

            </Container>
        </div>
    );
}

export default Dashboard;