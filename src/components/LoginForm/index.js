import { Card, Form, Button } from "react-bootstrap";
import { fnLogin } from "../../api";
import "./LoginForm.css";

// import { useDispatch } from "react-redux";
// import { saverequestsAction } from "../../redux/actions/requestsAction";

const LoginForm = () => {
  var loginemail = "";
  var loginpassword = "";

  // const dispatch = useDispatch();

  const fnLoginEmail = (e) => {
    loginemail = e.target.value;
  };
  const fnLoginPassword = (e) => {
    loginpassword = e.target.value;
  };
  const fnSubmitLogin = (e) => {
    e.preventDefault();
    var ele = document.getElementById("login_form");
    var chk_status = ele.checkValidity();
    ele.reportValidity();
    if (chk_status) {
      var postdata = { email: loginemail, password: loginpassword };
      // console.log("here is login vaildation success");

      fnLogin(postdata)
        .then((res) => {
            console.log(res.data);
            if(res.data.response_description==="Login Success") {
              // dispatch(saverequestsAction(res.data.company.requests));
              window.location.href = "/account/requests"
            }
        }).catch((error) => {
            console.log(error)
        });
    }
  };
  return (
    <Form id="login_form">
      <Card className="w-25 mt-5 m-auto border-0">
        <Card.Header className="text-center h-60px pt-2 h2 background-color-1">
          Login
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={fnLoginEmail}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={fnLoginPassword}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
        </Card.Body>
        <Card.Footer className="d-grid gap-2">
          <Button
            variant="warning"
            type="submit"
            className="text-white"
            onClick={fnSubmitLogin}
          >
            log in
          </Button>
          <Button variant="light">Forgot Password?</Button>
        </Card.Footer>
      </Card>
    </Form>
  );
};

export default LoginForm;
