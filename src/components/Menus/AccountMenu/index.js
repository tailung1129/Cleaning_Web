import { Nav } from "react-bootstrap"

const AccountMenu = () => {
    return (
        <Nav variant="pills" justify="true" className="mt-3">
            <Nav.Item>
                <Nav.Link href="/account/overview" className="rounded-0 border">Overview</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/account/Filter" className="rounded-0 border">Filter</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/account/requests" className="rounded-0 border">Requests</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/account/profile" className="rounded-0 border">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/account/finance" className="rounded-0 border">Finacnce</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/logout" className="rounded-0 border">Logout</Nav.Link>
            </Nav.Item>
        </Nav>
        
    );
}

export default AccountMenu;