
const CurrentComponent = (props) => {
    console.log("dddd " , props.steps[0])
    return (
    <div>
        {(props.steps[props.currentstep].component)}
    </div>
    );
}

export default CurrentComponent;