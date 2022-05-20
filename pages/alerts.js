import { Alert, Container } from "react-bootstrap";

const Alerts = () => {
    return (
        <Container className="mt-5" >
            <h1>Previous Alerts</h1>
            {[

                'success',
                'danger',
                'warning',
                'info',

            ].map((variant) => (
                <Alert key={variant} variant={variant}>
                    This is a {variant} alert with{' '}
                    <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
                    like.
                </Alert>
            ))}
        </Container>
    );
}

export default Alerts;