import React, { useReducer } from "react";

function Degree() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "change_c":
        return { ...state, cdegree: action.value };
      case "change_f":
        return { ...state, fdegree: action.value };
      case "calculate_c":
        return { ...state, changetoc: (state.fdegree - 32) * (5 / 9) };
      case "calculate_f":
        return { ...state, changetof: state.cdegree * (9 / 5) + 32 };
      default:
        return state;
    }
  };
  const value1Change = (event) => {
    dispatch({ type: "change_c", value: parseFloat(event.target.value) });
    dispatch({ type: "calculate_f" });
  };

  const value2Change = (event) => {
    dispatch({ type: "change_f", value: parseFloat(event.target.value) });
    dispatch({ type: "calculate_c" });
  };
  const [state, dispatch] = useReducer(reducer, {
    cdegree: 0,
    fdegree: 0,
    changetoc: 0,
    changetof: 0,
  });
  return (
    <div>
      <h2>Chuyển đổi nhiệt độ</h2>
      <div>
        <input type="number" onChange={value1Change} value={state.money} />
      </div>
      <div>
        <p>Giá trị độ F là:{state.changetof}</p>
      </div>
      <div>
        <input type="number" onChange={value2Change} value={state.km} />
      </div>
      <div>
        <p>Giá trị độ C là:{state.changetoc}</p>
      </div>
    </div>
  );
}

export default Degree;
