import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { addObjectToDb, deleteData, readDataWithQuery } from "../utils/dbFunctions";

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
        userName: userName ? userName : 'none',
        fatherName: fatherName ? fatherName : 'none',
        motherName: motherName ? motherName : 'none',
        medicalCon: medicalCon ? medicalCon : 'none',
        resipName1: resipName1 ? resipName1 : 'none',
        resipEmail1: resipEmail1 ? resipEmail1 : 'none',
        resipNumber1: resipNumber1 ? resipNumber1 : 'none',
        resipName2: resipName2 ? resipName2 : 'none',
        resipEmail2: resipEmail2 ? resipEmail2 : 'none',
        resipNumber2: resipNumber2 ? resipNumber2 : 'none',
        resipName1: resipName1 ? resipName1 : 'none',
        resipEmail1: resipEmail1 ? resipEmail1 : 'none',
        resipNumber1: resipNumber1 ? resipNumber1 : 'none',
        gender: gender ? gender : 'none',
        vehicle: vehicle ? vehicle : 'none',
        add: add ? add : 'none',
        message: message ? message : 'none',
        age: age ? age : 'none',
        illness: illness ? illness : 'none',
        blood: blood ? blood : 'none',
        personalNumber: personalNumber ? personalNumber : 'none'
    }

    const handleSave = (e) => {
        e.preventDefault();
        var dets = localStorage.getItem('usersDet')
        var n = localStorage.getItem('CURRENT_NUMBER')
        // if (true) {
        //     addObjectToDb(finalObject, 'userInfo')
        // }
        localStorage.setItem('usersDet', dets? JSON.stringify([...dets,finalObject]):JSON.stringify([finalObject]))
    }

    useEffect(() => {
        // readDataWithQuery('userInfo', 'personalNumber', localStorage.getItem('CURRENT_NUMBER')).then((res) => {
        //     setAdd(res?.add);
        //     setAge(res?.age);
        //     setBlood(res?.blood);
        //     setFatherName(res?.fatherName);
        //     setGender(res?.gender);
        //     setIllness(res?.illness);
        //     setMedicalCon(res?.medicalCon);
        //     setMessage(res?.message);
        //     setMothersName(res?.motherName);
        //     setResipEmail1(res?.resipEmail1);
        //     setResipEmail2(res?.resipEmail2);
        //     setResipEmail3(res?.resipEmail3);
        //     setResipName1(res?.resipName1);
        //     setResipName2(res?.resipEmail2);
        //     setResipName3(res?.resipEmail3);
        //     setResipNumber1(res?.resipNumber1);
        //     setResipNumber2(res?.resipNumber2);
        //     setResipNumber3(res?.resipNumber3);
        //     setVehicle(res?.vehicle);
        //     setpersonalNumber(res?.personalNumber);
        // });
        var a = localStorage.getItem('usersDet').localStorage?.getItem('CURRENT_NUMBER')
        // console.log(a, JSON.parse(localStorage.getItem('usersDet')));
        JSON.parse(localStorage.getItem('usersDet'))?.map((an) => {
            if (parseInt(an?.personalNumber) == parseInt(localStorage.getItem('CURRENT_NUMBER'))) {
                setAdd(an?.add);
            setAge(an?.age);
            setBlood(an?.blood);
            setFatherName(an?.fatherName);
            setGender(an?.gender);
            setIllness(an?.illness);
            setMedicalCon(an?.medicalCon);
            setMessage(an?.message);
            setMothersName(an?.motherName);
            setResipEmail1(an?.resipEmail1);
            setResipEmail2(an?.resipEmail2);
            setResipEmail3(an?.resipEmail3);
            setResipName1(an?.resipName1);
            setResipName2(an?.resipEmail2);
            setResipName3(an?.resipEmail3);
            setResipNumber1(an?.resipNumber1);
            setResipNumber2(an?.resipNumber2);
            setResipNumber3(an?.resipNumber3);
            setVehicle(an?.vehicle);
            setpersonalNumber(an?.personalNumber);
            };
        })
        
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