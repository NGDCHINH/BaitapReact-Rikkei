import React, { useState } from "react";

const Radio = () => {
  const [selectedOption, setSelectedOption] = useState("option1"); // Khai báo state để lưu trữ nút radio được chọn

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value); // Cập nhật giá trị state khi người dùng chọn nút radio
  };

  return (
    <div>
      <h2>Form với Radio Buttons</h2>
      <form>
        <div>
          <label>
            <input
              type="radio"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleRadioChange}
            />
            Option 1
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleRadioChange}
            />
            Option 2
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="option3"
              checked={selectedOption === "option3"}
              onChange={handleRadioChange}
            />
            Option 3
          </label>
        </div>
      </form>
      <p>Option đã chọn: {selectedOption}</p>
    </div>
  );
};

export default Radio;
