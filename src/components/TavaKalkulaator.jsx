import { useState } from "react";

function TavaKalkulaator() {
    const [number, setNumber]= useState("0");

  return (
    <div>
        <div>{number * 2.637}</div>
        <button onClick={() => setNumber (7)}>7</button>
        <button onClick={() => setNumber (8)}>8</button>
        <button onClick={() => setNumber (9)}>9</button>
        <button>*</button>
        <br />
        <button onClick={() => setNumber (4)}>4</button>
        <button onClick={() => setNumber (5)}>5</button>
        <button onClick={() => setNumber (6)}>6</button>
        <button>-</button>
        <br />
        <button onClick={() => setNumber (1)}>1</button>
        <button onClick={() => setNumber (2)}>2</button>
        <button onClick={() => setNumber (3)}>3</button>
        <button>+</button>
        <br />
        <button onClick={() => setNumber (0)}>C</button>
        <button>%</button>
        <button style={{backgroundColor:"blue"}}>=</button>
        <button>/</button>
    </div>
  )
}

export default TavaKalkulaator