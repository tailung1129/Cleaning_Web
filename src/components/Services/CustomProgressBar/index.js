import { ProgressBar } from "react-bootstrap";
const CustomProgressBar = (props) => {
    return (
        <ProgressBar variant="warning" now={props.currentstate} className="my-4" />
    );
}

export default CustomProgressBar;