import { useState } from "react";
import "./Calculator.css";
import Button from './components/Button/Button';
import Operand from './components/Operand/Operand';

function Calculator() {

  const [display, setDisplay] = useState(0);
  const [formerDisplay, setFormerDisplay] = useState(0);
  const [operand, setOperand] = useState('');

  function operation(value) {
    setFormerDisplay(display);
    setOperand(value);
    setDisplay(0);
  }

  function calculate() {
    switch (operand) {
      case '+':
        setDisplay(parseFloat(formerDisplay) + parseFloat(display));
        break;
      case '-':
        setDisplay(parseFloat(formerDisplay) - parseFloat(display));
        break;
      case '÷':
        setDisplay(parseFloat(formerDisplay) / parseFloat(display));
        break;
      case 'x':
        setDisplay(parseFloat(formerDisplay) * parseFloat(display));
        break;
      default:
        break;
    }
  }

  function digitClick(digit) {
    if (`${display}` === '0') {
      setDisplay(`${digit}`);
    } else {
      setDisplay(`${display}${digit}`);
    }
  }

  function decimal() {
    if (!`${display}`.includes('.')) {
      setDisplay(`${display}.`);
    }
  }

  function invert() {
    if (`${display}`.includes('.')) {
      setDisplay(parseFloat(display) * -1);
    } else {
      setDisplay(parseInt(display) * -1);
    }
  }

  function percent() {
    setDisplay(parseInt(display) / 100);
  }

  function clear() {
    setDisplay(0);
    setFormerDisplay(0);
    setOperand('');
  }

  let digits = [];
  for (let i = 9; i > 0; i--) {
    digits.push(<Button symbol={i} key={i} handleClick={digitClick} />);
  }

  return (
    <div className="calculator">
      <div className="display">
        {display}
      </div>
      <div className="button-row">
        {`${display}` === '0' && <Button symbol='AC' handleClick={clear} />}
        {`${display}` !== '0' && <Button symbol='C' handleClick={clear} />}
        <Button symbol='±' handleClick={invert} />
        <Button symbol='%' handleClick={percent} />
        <Operand symbol='÷' handleClick={operation} />
      </div>
      <div className="button-row">
        <div className="digit-cont">
          {digits}
        </div>
        <div className="operand-cont">
          <Operand symbol='x' handleClick={operation} />
          <Operand symbol='-' handleClick={operation} />
          <Operand symbol='+' handleClick={operation} />
        </div>
      </div>
      <div className="button-row">
        <Button symbol='0' size='120px' handleClick={digitClick} />
        <Button symbol='.' handleClick={decimal} />
        <Operand symbol='=' handleClick={calculate} />
      </div>
    </div>
  );
}

export default Calculator;
