import { Table , Button } from "react-bootstrap"
import RequestDrop from "./RequestDrop";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";

const Requests = () => {
    const requests = useSelector( state => state.company.requests);
    console.log(requests);
    
    return (
        <Table className="mt-3" responsive striped hover> 
        {(requests!==undefined&&requests!==null&&requests.length!==0)?
            (<tbody>
                {requests.map(( list , index ) => (
                    <tr key={index}>
                        <td>
                            <h5>{list.category.type}</h5>
                            <div>{list.date}</div>
                            <RequestDrop list={list} />
                        </td>
                        <td>
                            <h5>CHF </h5>
                            <br/>
                            <Link to={"/account/requests/detail?index="+index}><Button size="sm">Detail</Button></Link>
                            
                        </td>
                    </tr>
                ))}
            </tbody>)
        :"No data"
        }
            
        </Table>
    );
}

export default Requests;