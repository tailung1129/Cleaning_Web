import LoginLayout from "../../layout/LoginLayout"
import LoginForm from "../../components/LoginForm";
import "./Login.css"

const Login = () => {
    return (
        <div className="login_bg">
            <LoginLayout>
                <LoginForm />
            </LoginLayout>
        </div>
    );
}

export default Login;