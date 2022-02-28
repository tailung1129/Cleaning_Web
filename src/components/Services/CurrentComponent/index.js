import { Fragment } from "react"

const CurrentComponent = (props) => {
    return (
        <Fragment>
            {(props.steps[props.currentstep].component)}
        </Fragment>
    );
}

export default CurrentComponent;