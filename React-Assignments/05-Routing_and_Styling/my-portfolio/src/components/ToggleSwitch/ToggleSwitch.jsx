import { useState, useContext } from "react";
import emoji from "react-easy-emoji";

import "./ToggleSwitch.scss";
import { ThemeContext } from "../../context/ThemeContext";

export const ToggleSwitch = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [isChecked, setChecked] = useState(isDark);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => {
          toggleTheme();
          setChecked(!isChecked);
        }}
      />
      <span className="slider round">
        <span className="emoji">{isChecked ? emoji("🌜") : emoji("☀️")}</span>
      </span>
    </label>
  );
};
