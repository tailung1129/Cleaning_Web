import RegisterLayout from "../../layout/RegisterLayout"
import RegiserForm from "../../components/RegisterForm"
import "./Register.css"

const RegisterPage = () => {
    return (
        <div className="register_bg">
            <RegisterLayout>
                <RegiserForm />  
            </RegisterLayout>
        </div> 
    );
}

export default RegisterPage