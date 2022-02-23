import {Card, Form , Button} from "react-bootstrap"
import "./LoginForm.css"

const LoginForm = () => {
    return (
        <Card className="w-25 mt-5 m-auto border-0">
            <Card.Header className="text-center h-60px pt-2 h2 background-color-1">Login</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                </Form>
            </Card.Body>
            <Card.Footer className="d-grid gap-2">
                <Button href="/account/requests" className="background-color-2" type="submit">
                    log in
                </Button>
                <Button variant="light">
                    Forgot Password?
                </Button>
            </Card.Footer>
        </Card>
    );
}

export default LoginForm;