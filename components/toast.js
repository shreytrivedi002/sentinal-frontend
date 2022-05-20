import { Toast, ToastContainer } from "react-bootstrap";

const ToastApp = (props) => {
    return (
        <ToastContainer>
            <Toast>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">{props?.head || 'yo'}</strong>
                    <small className="text-muted">just now</small>
                </Toast.Header>
                <Toast.Body>{props?.msg || 'hi'}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default ToastApp;