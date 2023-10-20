import React, { useReducer } from "react";
function TextLenght() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "change_text":
        return { inputValue: action.value, charCount: action.value.length };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    inputValue: "",
    charCount: 0,
  });
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    dispatch({ type: "change_text", value: newValue });
  };

  return (
    <div>
      <h2>Đếm số ký tự</h2>
      <input
        type="text"
        value={state.inputValue}
        onChange={handleInputChange}
        placeholder="Nhập văn bản..."
      />
      <p>Số ký tự: {state.charCount}</p>
    </div>
  );
}

export default TextLenght;
