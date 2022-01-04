import React from "react";
import "./FormInput.css";

export default function FormInput(props) {
  const { label, handleOnBlur, value, ...others } = props;
  return (
    <div className="input-field">
      {others.type === "file" ? (
        // for farther implimentation
        <div></div>
      ) : (
        <div>
          <label htmlFor="text">{label}</label>
          <input onBlur={handleOnBlur} defaultValue={value || ""} {...others} />
        </div>
      )}
    </div>
  );
}
