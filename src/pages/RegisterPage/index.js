import RegisterLayout from "../../layout/RegisterLayout"
import RegisterForm from "../../components/RegisterForm"
import "./Register.css"

const RegisterPage = () => {
    return (
        <div className="register_bg">
            <RegisterLayout>
                <RegisterForm />  
            </RegisterLayout>
        </div> 
    );
}

export default RegisterPage