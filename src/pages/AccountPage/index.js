import AccountLayout from "../../layout/AccountLayout";
import {Container} from "react-bootstrap"
import { Routes , Route } from "react-router-dom";
import Requests from "../../components/Account/Requests"
import AccountMenu from "../../components/Menus/AccountMenu";
import RequestDetail from "../../components/Account/Requests/RequestDetail"

const AccountPage = () => {
    return (
        <AccountLayout>
            <Container>
                <AccountMenu />
                <Routes>
                    <Route path="requests" element={<Requests />} />
                    <Route path="requests/detail" element={<RequestDetail />} />
                </Routes>
            </Container>
        </AccountLayout>
    );
}

export default AccountPage;