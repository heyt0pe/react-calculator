import './Operand.css';

function Operand(props) {
    return (
        <div className="operand" onClick={() => props.handleClick(props.symbol)}>{props.symbol}</div>
    );
}

export default Operand;