import { ProgressBar } from "react-bootstrap";
const CustomProgressBar = (props) => {
    return (
        <ProgressBar variant="warning" now={props.currentstate} />
    );
}

export default CustomProgressBar;