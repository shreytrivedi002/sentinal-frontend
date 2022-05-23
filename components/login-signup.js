import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ToastApp from "./toast";

export default function Login(props) {
    const [otp, setOtp] = useState('');
    const [inputValue, setInputValue] = useState('');
    const generateotp = () => {
        const val = Math.floor(1000 + Math.random() * 9000);
        return setOtp(val);
    }
    useEffect(() => {
        if (inputValue && !otp) {
            localStorage?.setItem('CURRENT_NUMBER', inputValue);
        }
        if (inputValue && otp) {
            if (parseInt(inputValue) === parseInt(otp)) {
                localStorage?.setItem('AUTH', 'SUCCESS');
                props?.close()
            } else {
                localStorage?.setItem('AUTH', 'FAIL');
            }

        }
    }, [inputValue, otp])
    return (
        <div>
            {console.log(otp)}
            {otp && <ToastApp head={'Auto-generated free OTP'} msg={otp} />}
            <Modal show={true} onHide={props?.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Login/SignUp</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{otp ? 'Enter OTP' : 'Mobile Number'}</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder={!otp && "+91. "}
                                autoFocus
                                onChange={(e) => setInputValue(e.target.value)}
                                value={inputValue}
                            />
                        </Form.Group>
                        {/* <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group> */}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={props?.close}>
                        Close
                    </Button> */}
                    {!otp && <Button variant="primary" onClick={() => { setInputValue(''), generateotp() }}>
                        Send OTP
                    </Button>}
                </Modal.Footer>
            </Modal>
        </div>
    );
}