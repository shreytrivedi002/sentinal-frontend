import { useState } from "react";
import { Button } from "react-bootstrap";
import { Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";

const details = () => {
    const [userName, setUserName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [motherName, setMothersName] = useState('');
    const [medicalCon, setMedicalCon] = useState('');
    const [resipEmail, setResipEmail] = useState('');
    const [resipNumber, setResipNumber] = useState('');
    const [gender, setGender] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [add, setAdd] = useState('');
    const [message, setMessage] = useState('');
    const [age, setAge] = useState('');
    const [illness, setIllness] = useState('');
    const [blood, setBlood] = useState('');
    const [personalNumber, setpersonalNumber] = useState('');


    let finalObject = {
        userName,
        fatherName,
        motherName,
        medicalCon,
        resipEmail,
        resipNumber,
        gender,
        vehicle,
        add,
        message,
        age,
        illness,
        blood,
        personalNumber
    }




    return (
        <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', }}>
            {/* <div style={{ width: '90vw', position: 'fixed', top: '5%', height: '150px', backgroundImage: "url(" + "https://image.shutterstock.com/image-illustration/artificial-intelligence-ai-head-neural-600w-1662154321.jpg" + ")", borderRadius: '24px', zIndex: '1', objectFit: 'cover' }} ></div> */}
            <div style={{ backgroundImage: "url(" + "https://images.alphacoders.com/109/1099990.jpg" + ")", backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundColor: 'black', backgroundBlendMode: "initial", filter: 'blur(3px)', position: 'fixed', left: '0', top: '0', height: '100%', width: '100%' }}></div>
            <div style={{ maxWidth: '60%', paddingBottom: '10%', boxShadow: '5px 5px 10px 5px grey unset', zIndex: '3' }}>
                <Container className="mt-3">
                    <h1>User Details</h1>
                    <form>
                        <InputGroup className="mb-3 mt-5">
                            <InputGroup.Text id="basic-addon1">Current User</InputGroup.Text>
                            <FormControl
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={(e) => setUserName(e.target.value)}
                                required
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Fathers Name</InputGroup.Text>
                            <FormControl
                                placeholder="fathersName"
                                aria-label="fathersName"
                                aria-describedby="basic-addon1"
                                onChange={(e) => setFatherName(e.target.value)}
                                required
                            />
                        </InputGroup><InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Mothers Name</InputGroup.Text>
                            <FormControl
                                placeholder="MothersName"
                                aria-label="MothersName"
                                aria-describedby="basic-addon1"
                                onChange={(e) => setMothersName(e.target.value)}
                                required
                            />
                        </InputGroup><InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Medical Condition</InputGroup.Text>
                            <FormControl
                                placeholder=""
                                aria-label=""
                                aria-describedby="basic-addon1"
                                onChange={(e) => setMedicalCon(e.target.value)}
                                required
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder=""
                                aria-label=""
                                aria-describedby="basic-addon2"
                                onChange={(e) => setResipEmail(e.target.value)}
                                required
                            />
                            <InputGroup.Text id="basic-addon2">Recipient Email</InputGroup.Text>
                            <FormControl
                                placeholder=""
                                aria-label=""
                                aria-describedby="basic-addon2"
                                onChange={(e) => setResipNumber(e.target.value)}
                                required
                            />
                            <InputGroup.Text id="basic-addon2">Recipient Number</InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder=""
                                aria-label=""
                                aria-describedby="basic-addon2"
                                onChange={(e) => setGender(e.target.value)}
                                required
                            />
                            <InputGroup.Text id="basic-addon2">Gender</InputGroup.Text>
                            <FormControl
                                placeholder=""
                                aria-label=""
                                aria-describedby="basic-addon2"
                                onChange={(e) => setVehicle(e.target.value)}
                                required
                            />
                            <InputGroup.Text id="basic-addon2">Vehicle</InputGroup.Text>
                        </InputGroup>

                        <Form.Label htmlFor="basic-url">Your Address</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">
                                -
                            </InputGroup.Text>
                            <FormControl id="basic-url" aria-describedby="basic-addon3" onChange={(e) => setAdd(e.target.value)} required />
                        </InputGroup>

                        {/* <InputGroup className="mb-3">
                        <InputGroup.Text>$</InputGroup.Text>
                        <FormControl aria-label="Amount (to the nearest dollar)" />
                        <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup> */}

                        <InputGroup>
                            <InputGroup.Text>Add Extra Text to Message</InputGroup.Text>
                            <FormControl as="textarea" aria-label="With textarea" onChange={(e) => setMessage(e.target.value)} required />
                        </InputGroup>

                        <Row className="mt-5">
                            <Col><FormControl type="text" placeholder="Blood Type" onChange={(e) => setBlood(e.target.value)} required /> </Col>
                            <Col><FormControl type="text" placeholder="Any Chronic Illness" onChange={(e) => setIllness(e.target.value)} required /> </Col>
                            <Col><FormControl type="text" placeholder="Age" onChange={(e) => setAge(e.target.value)} required /> </Col>
                            <Col><FormControl type="text" placeholder="Mobile Number" onChange={(e) => setpersonalNumber(e.target.value)} required /> </Col>

                        </Row>
                        <Button style={{ width: '100%', marginTop: '20px' }} type="submit" onClick={(e) => { e.preventDefault; console.log(finalObject) }}>Submit</Button>
                    </form>
                </Container>
            </div>
        </div>
    );
}

export default details;