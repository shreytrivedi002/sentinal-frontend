import { useState } from "react";
import { Button } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import { BubbleApp } from "../components/bubble";
import { ChartApp } from "../components/line-chart";

const Dashboard = () => {
    const [Loc, setLoc] = useState([]);
    const getLocation = () => {
        window && window?.navigator.geolocation.getCurrentPosition(function (position) {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            setLoc([lat, long]);
        });
    }
    return (
        <div style={{ backgroundColor: 'lightblue', height: '100vh' }}>
            <Container>
                <Row>
                    <Col>
                        <Button onClick={getLocation}>Get Location</Button><br />
                        <a href={`https://www.latlong.net/c/?lat=${Loc[0]}&long=${Loc[1]}`} target="_blank" rel="noreferrer">{`(${Loc[0]}, ${Loc[1]})`}</a>
                    </Col>
                </Row>
            </Container>
            <Row>
                <Col>
                    <ChartApp />
                </Col>
                <Col>
                    <BubbleApp />
                </Col>
            </Row>

        </div>
    );
}

export default Dashboard;