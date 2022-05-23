import { useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import ModalMessage from "../components/modal-message";
import { readData } from "../utils/dbFunctions";

const Alerts = () => {
    const [currentAlert, setcurrentAlert] = useState('');
    const [allAlerts, setAllAlerts] = useState('');

    useEffect(() => { readData("alerts").then(res => setAllAlerts(res)) }, [])
    return (
        <div>
            <Container className="mt-5" >
                {currentAlert && <ModalMessage data={currentAlert} close={() => setcurrentAlert('')} />}
                <h1>Previous Alerts</h1>
                {/* {console.log(allAlerts)} */}
                {
                    allAlerts && allAlerts?.reverse()?.map((a) =>
                        parseInt(a?.number) === parseInt(localStorage.getItem('CURRENT_NUMBER')) && <Alert key={'danger'} variant={'danger'}>
                            This is a alert for Vehicle {a?.vehicle}{' '}
                            <Alert.Link onClick={() => setcurrentAlert(a)}>Click to view.</Alert.Link>. ==> {a?.time}

                        </Alert>
                    )
                }
                {/* <Alert key={'dangers'} variant={'info'}> */}
                No info

                {/* </Alert> */}
            </Container>
        </div>
    );
}

export default Alerts;