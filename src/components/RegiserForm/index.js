import { useState } from "react";
import { Container , Card , Row , Col , Form } from "react-bootstrap"
import CardBody1 from "./CardBody1";
import CardBody2 from "./CardBody2"

const RegiserForm = () => {
    const [showcurrent , setShowcurrent] = useState(0);    
    const fnChangeShow = () => {
        setShowcurrent(1-showcurrent);
    }
    return (
        <Container>
            <Row>
                <Col md={{span:6 , offset:3}} className="mt-4">
                    <Card className="border-0">
                        <Card.Header className="text-center h4 background-color-2">
                            <Form.Text className="text-white">Register as a partiner for free</Form.Text>
                        </Card.Header>
                        {showcurrent?<CardBody2 fnChangeShow={fnChangeShow} />:<CardBody1 fnChangeShow={fnChangeShow} />}
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default RegiserForm;