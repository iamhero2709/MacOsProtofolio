import { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [storedValue, setStoredValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const clearAll = () => {
    setDisplay('0');
    setStoredValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
      return;
    }

    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (storedValue === null) {
      setStoredValue(inputValue);
    } else if (operation) {
      const currentValue = storedValue || 0;
      let newValue = 0;

      switch (operation) {
        case '+':
          newValue = currentValue + inputValue;
          break;
        case '-':
          newValue = currentValue - inputValue;
          break;
        case '×':
          newValue = currentValue * inputValue;
          break;
        case '÷':
          newValue = currentValue / inputValue;
          break;
        default:
          break;
      }

      setStoredValue(newValue);
      setDisplay(String(newValue));
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const handleEquals = () => {
    if (!operation || storedValue === null) return;
    
    performOperation(null);
    setOperation(null);
  };

  const toggleSign = () => {
    setDisplay(display.charAt(0) === '-' ? display.substr(1) : '-' + display);
  };

  const inputPercent = () => {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  };

  return (
    <div className="calculator">
      <div className="calculator-display">
        <div className="display-value">{display}</div>
      </div>
      <div className="calculator-buttons">
        <button className="function-btn" onClick={clearAll}>AC</button>
        <button className="function-btn" onClick={toggleSign}>+/-</button>
        <button className="function-btn" onClick={inputPercent}>%</button>
        <button className="operation-btn" onClick={() => performOperation('÷')}>÷</button>
        
        <button className="digit-btn" onClick={() => inputDigit(7)}>7</button>
        <button className="digit-btn" onClick={() => inputDigit(8)}>8</button>
        <button className="digit-btn" onClick={() => inputDigit(9)}>9</button>
        <button className="operation-btn" onClick={() => performOperation('×')}>×</button>
        
        <button className="digit-btn" onClick={() => inputDigit(4)}>4</button>
        <button className="digit-btn" onClick={() => inputDigit(5)}>5</button>
        <button className="digit-btn" onClick={() => inputDigit(6)}>6</button>
        <button className="operation-btn" onClick={() => performOperation('-')}>-</button>
        
        <button className="digit-btn" onClick={() => inputDigit(1)}>1</button>
        <button className="digit-btn" onClick={() => inputDigit(2)}>2</button>
        <button className="digit-btn" onClick={() => inputDigit(3)}>3</button>
        <button className="operation-btn" onClick={() => performOperation('+')}>+</button>
        
        <button className="digit-btn zero" onClick={() => inputDigit(0)}>0</button>
        <button className="digit-btn" onClick={inputDecimal}>.</button>
        <button className="operation-btn" onClick={handleEquals}>=</button>
      </div>
    </div>
  );
};

export default Calculator;