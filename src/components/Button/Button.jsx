import './Button.css';

function Button(props) {
    return (
        <div className="button" style={{ width: props.size }} onClick={() => props.handleClick(props.symbol)}>{props.symbol}</div>
    );
}

export default Button;