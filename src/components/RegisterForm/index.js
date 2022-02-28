import { useState } from "react";
import { Container , Card , Col , Form } from "react-bootstrap"
import CardBody1 from "./CardBody1";
import CardBody2 from "./CardBody2"

const RegisterForm = () => {
    const [showcurrent , setShowcurrent] = useState(0);    
    const fnChangeShow = () => {
        setShowcurrent(1-showcurrent);
    }
    return (
        <Container>
            <Form id="register_form">
                <Col md={{span:6 , offset:3}} className="mt-70px">
                    <Card className="border-0">
                        <Card.Header className="text-center h4 background-color-2">
                            <Form.Text className="text-white">Register as a partiner for free</Form.Text>
                        </Card.Header>
                        {showcurrent?<CardBody2 fnChangeShow={fnChangeShow} />:<CardBody1 fnChangeShow={fnChangeShow} />}
                    </Card>
                </Col>
            </Form>
        </Container>
    );
}

export default RegisterForm;