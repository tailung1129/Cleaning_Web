import RegisterLayout from "../../layout/RegisterLayout"
import RegiserForm from "../../components/RegiserForm"
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