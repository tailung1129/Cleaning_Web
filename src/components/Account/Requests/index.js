import { Table , Button } from "react-bootstrap"
import RequestDrop from "./RequestDrop";

const Requests = () => {
    return (
        <Table className="mt-3" responsive striped hover> 
            <tbody>
                <tr>
                    <td>
                        <h5>Moving to Zurich(International)</h5>
                        <div>02/22/2022</div>
                        <RequestDrop />
                    </td>
                    <td>
                        <h5>CHF 24.50</h5>
                        <br/>
                        <Button href="requests/detail" size="sm">For sale</Button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>Cleaning in Baden</h5>
                        <div>02/22/2022</div>
                        <RequestDrop />
                    </td>
                    <td>
                        <h5>CHF 24.50</h5>
                        <br/>
                        <Button href="requests/detail" size="sm">For sale</Button>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Requests;