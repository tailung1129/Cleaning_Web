import {useState} from "react";
import { Row , Col } from "react-bootstrap"

const RequestDrop = ( props ) => {
    const[dropflag , setDropflag] = useState(0);
    const list = props.list;
    return(
        <Col>
            <p onClick={()=>setDropflag(1-dropflag)}>{dropflag?"conclude":"request details"}</p>
            <Col className={dropflag?"d-block":"d-none"}>
                <Row>
                    <Col md={4}>Category</Col>
                    <Col md={8}>{list.category.type}</Col>
                </Row>
                <Row>
                    <Col md={4}>Contact request</Col>
                    <Col md={8}></Col>
                </Row>
                <Row>
                    <Col md={4}>Date</Col>
                    <Col md={8}>{list.date}</Col>
                </Row>
                <Row>
                    <Col md={4}>Object</Col>
                    <Col md={8}></Col>
                </Row>
                <Row>
                    <Col md={4}>Number of Room</Col>
                    <Col md={8}>{list.numberOfRooms} rooms</Col>
                </Row>
                <Row>
                    <Col md={4}>Object area</Col>
                    <Col md={8}>{list.objectArea} m2</Col>
                </Row>
                <Row>
                    <Col md={4}>Pollution</Col>
                    <Col md={8}>{list.pollution}</Col>
                </Row>
                <Row>
                    <Col md={4}>Areas</Col>
                    <Col md={8}>{list.address.location}</Col>
                </Row>
                <Row>
                    <Col md={4}>Extras</Col>
                    <Col md={8}>{list.extras}</Col>
                </Row>
                <Row>
                    <Col md={4}>Distance</Col>
                    <Col md={8}>{list.distance}</Col>
                </Row>
                <Row>
                    <Col md={4}>Focus</Col>
                    <Col md={8}>{list.focus}</Col>
                </Row>
                <Row>
                    <Col md={4}>Tel. reachable</Col>
                    <Col md={8}>{list.reachableFrom}pm-{list.reachableTill}pm</Col>
                </Row>
                <Row>
                    <Col md={4}>Discount</Col>
                    <Col md={8}>{list.discount}</Col>
                </Row>
            </Col>
        </Col>
    );
}

export default RequestDrop;