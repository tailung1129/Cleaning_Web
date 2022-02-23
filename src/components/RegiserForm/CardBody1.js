import {Card , Col , Row , Button , Form} from "react-bootstrap"

const CardBody1 = (props) => {
    return (
        <Card.Body>
            <Card.Title className="text-center text-color-1 mt-2">What services do you offer?</Card.Title>
            <Row className="mt-3">
                <Col>
                    <Form.Check type="checkbox" className="mt-2" label="window" />
                    <Form.Check type="checkbox" className="mt-2" label="furnace construction" />
                    <Form.Check type="checkbox" className="mt-2" label="painter" />
                    <Form.Check type="checkbox" className="mt-2" label="kitchen" />
                    <Form.Check type="checkbox" className="mt-2" label="foiling" />
                </Col>
                <Col>
                    <Form.Check type="checkbox" className="mt-2" label="real estate agent" />
                    <Form.Check type="checkbox" className="mt-2" label="catering" />
                    <Form.Check type="checkbox" className="mt-2" label="photography" />
                    <Form.Check type="checkbox" className="mt-2" label="cleaning" />
                </Col>
                <Col>
                    <Form.Check type="checkbox" className="mt-2" label="Put" />
                    <Form.Check type="checkbox" className="mt-2" label="driving school" />
                    <Form.Check type="checkbox" className="mt-2" label="relocation" />
                    <Form.Check type="checkbox" className="mt-2" label="used cars" />
                </Col>
            </Row>
            <Col className="text-center mt-3">
                <Button onClick={()=>props.fnChangeShow()}>Further</Button>
            </Col>
        </Card.Body>
    );
}

export default CardBody1;