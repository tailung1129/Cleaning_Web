import "./Cleaning.css"
import { Card } from "react-bootstrap"
import { BsBuilding , BsHouseFill , BsFileEarmarkText , BsQuestionLg } from "react-icons/bs";

const Category = () => {
    return (
        <Card className="text-center mt-5 h-50">
            <Card.Body className="text-color-2" >
                <Card.Title className="my-4">Where do you need cleaning</Card.Title>
                <div className="d-flex flex-wrap align-items-center justify-content-center my-4">
                    <div className="mx-2 bg-color-icon-div text-color-2 pt-4 nav-link mx-5">
                        <BsBuilding fontSize="5em" />
                        <div>APARTMENT</div>
                    </div>
                    <div className="mx-2 bg-color-icon-div text-color-2 pt-4 nav-link mx-5">
                        <BsHouseFill fontSize="5em" />
                        <div>HOUSE</div>
                    </div>
                    <div className="mx-2 bg-color-icon-div text-color-2 pt-4 nav-link mx-5">
                        <BsFileEarmarkText fontSize="5em" />
                        <div>OFFICE</div>
                    </div>
                    <div className="mx-2 bg-color-icon-div text-color-2 pt-4 nav-link mx-5">
                        <BsQuestionLg fontSize="5em" />
                        <div>MISCELLANEOUS</div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Category;