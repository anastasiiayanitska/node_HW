import React from "react";

const CustomInput = ({ placeholder, value, onChange }) => (
  <div>
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default CustomInput;
