import React, { useState } from "react";
import { LangContext } from "./context/lang-context";
import App from "./App";
import languageChanging from "./data/data";

const MyApp = () => {
  const [language, setLanguage] = useState("en");
  const info = {
    languageChanging,
    language,
    setLanguage,
  };
  return (
    <LangContext.Provider value={info}>
      <App />
    </LangContext.Provider>
  );
};

export default MyApp;
