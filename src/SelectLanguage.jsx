import React, { useContext } from "react";
import { LangContext } from "./context/lang-context";

const SelectLanguage = () => {
  const conf = useContext(LangContext);

  return (
    <div>
      <select
        defaultValue={conf.language}
        onChange={(e) => {
          conf.setLanguage(e.target.value);
        }}
      >
        <option value="ru">Русский</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default SelectLanguage;
