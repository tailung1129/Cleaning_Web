
const CurrentComponent = (props) => {
    return (
    <div className="mt-5">
        {(props.steps[props.currentstep].component)}
    </div>
    );
}

export default CurrentComponent;