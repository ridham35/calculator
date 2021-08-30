import './App.css';
import {useState} from "react";

function App() {

    const [result, setResult] = useState("0");

    const handleClick = (e) => {
        if((result === "0" && e.target.name !== ".") || result === "Error") {
            setResult(e.target.name);
        }
        else {
            setResult(result.concat(e.target.name));
        }
    }

    const clear = () => {
        setResult("0");
    }

    const backspace = () => {
        setResult(result.slice(0, -1));
        if (result.length === 1) {
            setResult("0");
        }
    }

    const calculate = () => {
        try {
            // eslint-disable-next-line no-eval
            setResult(eval(result).toString());
        }
        catch (err) {
            setResult("Error")
        }
    }

    return (
        <div className="container">
            <form>
                <input type="text" value={result} readOnly={true}/>
            </form>
            <div className="keypad">
                <button id="clear" className="highlight" onClick={clear}>Clear</button>
                <button id="backspace" className="highlight" onClick={backspace}>C</button>
                <button name="/" className="highlight" onClick={handleClick}>&divide;</button>
                <button name="7" onClick={handleClick}>7</button>
                <button name="8" onClick={handleClick}>8</button>
                <button name="9" onClick={handleClick}>9</button>
                <button name="*" className="highlight" onClick={handleClick}>&times;</button>
                <button name="4" onClick={handleClick}>4</button>
                <button name="5" onClick={handleClick}>5</button>
                <button name="6" onClick={handleClick}>6</button>
                <button name="-" className="highlight" onClick={handleClick}>&ndash;</button>
                <button name="1" onClick={handleClick}>1</button>
                <button name="2" onClick={handleClick}>2</button>
                <button name="3" onClick={handleClick}>3</button>
                <button name="+" className="highlight" onClick={handleClick}>+</button>
                <button name="0" onClick={handleClick}>0</button>
                <button name="." onClick={handleClick}>.</button>
                <button id="result" className="highlight" onClick={calculate}>=</button>
            </div>
        </div>
    );
}

export default App;
