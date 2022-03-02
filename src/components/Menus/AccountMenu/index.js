import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const AccountMenu = () => {
    return (
        <Nav variant="pills" justify="true" className="mt-3">
            <Nav.Item>
                <Link to="/account/requests" className="text-decoration-none"><div className="rounded-0 border py-2">Overview</div></Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/account/requests" className="text-decoration-none"><div className="rounded-0 border py-2">Filter</div></Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/account/requests" className="text-decoration-none"><div className="rounded-0 border py-2">Requests</div></Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/account/requests" className="text-decoration-none"><div  className="rounded-0 border py-2">Profile</div></Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/account/requests" className="text-decoration-none"><div  className="rounded-0 border py-2">Finacnce</div></Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/" className="text-decoration-none"><div className="rounded-0 border py-2">Logout</div></Link>
            </Nav.Item>
        </Nav>
        
    );
}

export default AccountMenu;