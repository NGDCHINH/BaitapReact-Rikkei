import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  DeCreCounter,
  deCrByNumber,
  inCrByNumber,
  inCreCounter,
} from "./STORE/Counter";
import { useRef } from "react";

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const handleClickInc = () => {
    dispatch(inCreCounter());
  };
  const handleClickCaculator1 = () => {
    const inputvalue = inputRef.current.value;
    dispatch(inCrByNumber(inputvalue));
  };
  // const handleClickCaculator2 = () => {
  //   const inputvalue = inputRef.current.value;
  //   dispatch(deCrByNumber(inputvalue));
  // };
  const handleClickCaculator2 = () => {
    dispatch(DeCreCounter());
  };
  return (
    <>
      <h1>Counter</h1>
      <div className="card">
        <button onClick={handleClickInc}>count is {counter}</button>
        <input type="number" ref={inputRef} />
        <button onClick={handleClickCaculator1}>+</button>
        <button onClick={handleClickCaculator2}>-</button>
      </div>
    </>
  );
}

export default App;
