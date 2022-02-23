import AccountHeader from "../components/Headers/AccountHeader";
import Footer from "../components/Footer";

const AccountLayout = ({children}) => {
    return (
        <div>
            <AccountHeader />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default AccountLayout;