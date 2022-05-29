import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { addObjectToDb, readDataWithQuery } from "../utils/dbFunctions";

const details = () => {
    const [userName, setUserName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [motherName, setMothersName] = useState('');
    const [medicalCon, setMedicalCon] = useState('');
    const [resipName1, setResipName1] = useState('');
    const [resipEmail1, setResipEmail1] = useState('');
    const [resipNumber1, setResipNumber1] = useState('');
    const [resipName2, setResipName2] = useState('');
    const [resipEmail2, setResipEmail2] = useState('');
    const [resipNumber2, setResipNumber2] = useState('');
    const [resipName3, setResipName3] = useState('');
    const [resipEmail3, setResipEmail3] = useState('');
    const [resipNumber3, setResipNumber3] = useState('');

    const [gender, setGender] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [add, setAdd] = useState('');
    const [message, setMessage] = useState('');
    const [age, setAge] = useState('');
    const [illness, setIllness] = useState('');
    const [blood, setBlood] = useState('');
    const [personalNumber, setpersonalNumber] = useState(localStorage.getItem('CURRENT_NUMBER'));


    let finalObject = {
        userName,
        fatherName,
        motherName,
        medicalCon,
        resipName1,
        resipEmail1,
        resipNumber1,
        resipName2,
        resipEmail2,
        resipNumber2,
        resipName1,
        resipEmail1,
        resipNumber1,
        gender,
        vehicle,
        add,
        message,
        age,
        illness,
        blood,
        personalNumber
    }

    const handleSave = (e) => {
        e.preventDefault();
        if (userName && fatherName && motherName &&
            medicalCon &&
            resipName1 &&
            resipEmail1 &&
            resipNumber1 &&
            resipName2 &&
            resipEmail2 &&
            resipNumber2 &&
            resipName3 &&
            resipEmail3 &&
            resipNumber3 &&
            gender &&
            vehicle &&
            add &&
            message &&
            age &&
            illness &&
            blood &&
            personalNumber) {
            addObjectToDb(finalObject, 'userInfo')
        }
    }

    useEffect(() => {
        readDataWithQuery('userDetails', 'personalNumber', localStorage.getItem('CURRENT_NUMBER'))
    }, [])

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
                                value={userName}
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
                                value={fatherName}
                            />
                        </InputGroup><InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Mothers Name</InputGroup.Text>
                            <FormControl
                                placeholder="MothersName"
                                aria-label="MothersName"
                                aria-describedby="basic-addon1"
                                onChange={(e) => setMothersName(e.target.value)}
                                required
                                value={motherName}
                            />
                        </InputGroup><InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Medical Condition</InputGroup.Text>
                            <FormControl
                                placeholder=""
                                aria-label=""
                                aria-describedby="basic-addon1"
                                onChange={(e) => setMedicalCon(e.target.value)}
                                required
                                value={medicalCon}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3" style={{ justifyContent: 'space-between' }}>
                            <div >
                                <InputGroup.Text id="basic-addon2">Recipient 1 Name</InputGroup.Text>

                                <FormControl
                                    placeholder=""
                                    aria-label=""
                                    aria-describedby="basic-addon2"
                                    onChange={(e) => setResipName1(e.target.value)}
                                    required
                                    value={resipName1}
                                />
                            </div>
                            <div><InputGroup.Text id="basic-addon2">Recipient 1 Email</InputGroup.Text>

                                <FormControl
                                    placeholder=""
                                    aria-label=""
                                    aria-describedby="basic-addon2"
                                    onChange={(e) => setResipEmail1(e.target.value)}
                                    required
                                    value={resipEmail1}
                                /></div>
                            <div>
                                <InputGroup.Text id="basic-addon2">Recipient 1 Number</InputGroup.Text>

                                <FormControl
                                    placeholder=""
                                    aria-label=""
                                    aria-describedby="basic-addon2"
                                    onChange={(e) => setResipNumber1(e.target.value)}
                                    required
                                    value={resipNumber1}
                                />
                            </div>
                        </InputGroup>

                        <InputGroup className="mb-3" style={{ justifyContent: 'space-between' }}>
                            <div >
                                <InputGroup.Text id="basic-addon2">Recipient 2 Name</InputGroup.Text>

                                <FormControl
                                    placeholder=""
                                    aria-label=""
                                    aria-describedby="basic-addon2"
                                    onChange={(e) => setResipName2(e.target.value)}
                                    required
                                    value={resipName2}
                                />
                            </div>
                            <div><InputGroup.Text id="basic-addon2">Recipient 2 Email</InputGroup.Text>

                                <FormControl
                                    placeholder=""
                                    aria-label=""
                                    aria-describedby="basic-addon2"
                                    onChange={(e) => setResipEmail2(e.target.value)}
                                    required
                                    value={resipEmail2}
                                /></div>
                            <div>
                                <InputGroup.Text id="basic-addon2">Recipient 2 Number</InputGroup.Text>

                                <FormControl
                                    placeholder=""
                                    aria-label=""
                                    aria-describedby="basic-addon2"
                                    onChange={(e) => setResipNumber2(e.target.value)}
                                    required
                                    value={resipNumber2}
                                />
                            </div>
                        </InputGroup>
                        <InputGroup className="mb-3" style={{ justifyContent: 'space-between' }}>
                            <div >
                                <InputGroup.Text id="basic-addon2">Recipient 3 Name</InputGroup.Text>

                                <FormControl
                                    placeholder=""
                                    aria-label=""
                                    aria-describedby="basic-addon2"
                                    onChange={(e) => setResipName3(e.target.value)}
                                    required
                                    value={resipName3}
                                />
                            </div>
                            <div><InputGroup.Text id="basic-addon2">Recipient 3 Email</InputGroup.Text>

                                <FormControl
                                    placeholder=""
                                    aria-label=""
                                    aria-describedby="basic-addon2"
                                    onChange={(e) => setResipEmail3(e.target.value)}
                                    required
                                    value={resipEmail3}
                                /></div>
                            <div>
                                <InputGroup.Text id="basic-addon2">Recipient 3 Number</InputGroup.Text>

                                <FormControl
                                    placeholder=""
                                    aria-label=""
                                    aria-describedby="basic-addon2"
                                    onChange={(e) => setResipNumber3(e.target.value)}
                                    required
                                    value={resipNumber3}
                                />
                            </div>
                        </InputGroup>
                        <InputGroup style={{ justifyContent: 'space-evenly' }} >
                            <div style={{ display: "flex" }}>
                                <InputGroup.Text id="basic-addon2">Gender</InputGroup.Text>
                                <FormControl
                                    placeholder=""
                                    aria-label=""
                                    aria-describedby="basic-addon2"
                                    onChange={(e) => setGender(e.target.value)}
                                    required
                                    value={gender}
                                />
                            </div>
                            <div style={{ display: "flex" }}>
                                <InputGroup.Text value={vehicle} id="basic-addon2">Vehicle</InputGroup.Text>

                                <FormControl
                                    placeholder=""
                                    aria-label=""
                                    aria-describedby="basic-addon2"
                                    onChange={(e) => setVehicle(e.target.value)}
                                    required
                                />
                            </div>
                        </InputGroup>

                        <Form.Label htmlFor="basic-url">Your Address</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">
                                -
                            </InputGroup.Text>
                            <FormControl id="basic-url" value={add} aria-describedby="basic-addon3" onChange={(e) => setAdd(e.target.value)} required />
                        </InputGroup>

                        {/* <InputGroup className="mb-3">
                        <InputGroup.Text>$</InputGroup.Text>
                        <FormControl aria-label="Amount (to the nearest dollar)" />
                        <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup> */}

                        <InputGroup>
                            <InputGroup.Text>Add Extra Text to Message</InputGroup.Text>
                            <FormControl as="textarea" value={message} aria-label="With textarea" onChange={(e) => setMessage(e.target.value)} required />
                        </InputGroup>

                        <Row className="mt-5">
                            <Col><FormControl type="text" value={blood} placeholder="Blood Type" onChange={(e) => setBlood(e.target.value)} required /> </Col>
                            <Col><FormControl type="text" value={illness} placeholder="Any Chronic Illness" onChange={(e) => setIllness(e.target.value)} required /> </Col>
                            <Col><FormControl type="text" value={age} placeholder="Age" onChange={(e) => setAge(e.target.value)} required /> </Col>
                            <Col><FormControl type="text" value={personalNumber} placeholder="Mobile Number" onChange={(e) => setpersonalNumber(e.target.value)} required /> </Col>

                        </Row>
                        <Button style={{ width: '100%', marginTop: '20px' }} type="submit" onClick={(e) => { handleSave(e) }}>Submit</Button>
                    </form>
                </Container>
            </div>
        </div>
    );
}

export default details;