import React, { useReducer } from "react";

function Money() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "change_money":
        return { ...state, money: action.value };
      case "change_km":
        return { ...state, km: action.value };
      case "calculate_total":
        return { ...state, total: state.money * state.km };
      default:
        return state;
    }
  };
  const value1Change = (event) => {
    dispatch({ type: "change_money", value: parseFloat(event.target.value) });
    dispatch({ type: "calculate_total" });
  };

  const value2Change = (event) => {
    dispatch({ type: "change_km", value: parseFloat(event.target.value) });
    dispatch({ type: "calculate_total" });
  };
  const [state, dispatch] = useReducer(reducer, {
    money: 0,
    km: 0,
    total: 0,
  });
  return (
    <div>
      <h2>Tính số tiền trên số km</h2>
      <div>
        <input type="number" onChange={value1Change} value={state.money} />
      </div>
      <div>
        <input type="number" onChange={value2Change} value={state.km} />
      </div>
      <div>
        <p>Giá trị là:{state.total}</p>
      </div>
    </div>
  );
}

export default Money;
