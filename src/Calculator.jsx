import { useState, useEffect } from 'react';

const Calculator = () => {
    const [currentValue, setCurrentValue] = useState(0);
    const [previousValue, setPreviousValue] = useState(null);
    const [operator, setOperator] = useState(null);
    const [currentValueString, setCurrentValueString] = useState('0');

      const handleNumberClick = (event) => {
        let updatedValueString = currentValueString;
        if (currentValueString.includes('.')) {
            updatedValueString = currentValueString + event.target.value;
        } else {
            updatedValueString = currentValueString === '0' ? event.target.value : currentValueString + event.target.value;
        }
        setCurrentValue(parseFloat(updatedValueString));
        setCurrentValueString(updatedValueString);
        };
      

      const handleOperatorClick = (event) => {
        setPreviousValue(currentValue);
        setCurrentValue(0);
        setOperator(event.target.value);
        setCurrentValueString('0');
      };

  const handleEqualClick = () => {
    switch (operator) {
      case '+':
        setCurrentValue(previousValue + currentValue);
        break;
      case '-':
        setCurrentValue(previousValue - currentValue);
        break;
      case '*':
        setCurrentValue(previousValue * currentValue);
        break;
      case '/':
        setCurrentValue(previousValue / currentValue);
        break;
      default:
        break;
    }
    
    setPreviousValue(null);
    setOperator(null);
    setCurrentValueString('0');
  };

  const handleClearClick = () => {
    setCurrentValue(0);
    setPreviousValue(null);
    setOperator(null);
    setCurrentValueString('0');
  };

  const handlePlusMinusClick = () => {
    setCurrentValue(-1 * currentValue);
    setCurrentValueString(currentValue.toString());
  };

  const handleDecimalClick = () => {
    if (!currentValueString.includes('.')) {
      setCurrentValueString(currentValueString + '.');
    }
  };  

  return (
    <div className='App'>
    <div className="container">
      <div className="display">{currentValueString.includes('.') ? currentValueString : currentValue}</div>
      <div className='operators'>
      <button className="button clear" onClick={handleClearClick}>
        AC
      </button>
      <button className="button" value="/" onClick={handleOperatorClick}>
        /
      </button>
      <button className="button" value="*" onClick={handleOperatorClick}>
        *
      </button>
      <button className="button" value="+" onClick={handleOperatorClick}>
        +
      </button>
      <button className="button" value="-" onClick={handleOperatorClick}>
        -
      </button>
      <button className="button" onClick={handlePlusMinusClick}>
        +/-
      </button>
      </div>
      <div className='digits'>
        <button className="button" value="7" onClick={handleNumberClick}>
        7
      </button>
      <button className="button" value="8" onClick={handleNumberClick}>
        8
      </button>
      <button className="button" value="9" onClick={handleNumberClick}>
        9
      </button>
      
      <button className="button" value="4" onClick={handleNumberClick}>
        4
      </button>
      <button className="button" value="5" onClick={handleNumberClick}>
        5
      </button>
      <button className="button" value="6" onClick={handleNumberClick}>
        6
      </button>
      
      <button className="button" value="1" onClick={handleNumberClick}>
        1
      </button>
      <button className="button" value="2" onClick={handleNumberClick}>
        2
      </button>
      <button className="button" value="3" onClick={handleNumberClick}>
        3
      </button>
      <button className="button" value="=" onClick={handleEqualClick}>
        =
      </button>
      <button className="button" value="0" onClick={handleNumberClick}>
        0
      </button>
      <button className="button" onClick={handleDecimalClick}>
        .
      </button>
      </div>
    </div>
    </div>
  );
};

export default Calculator;

