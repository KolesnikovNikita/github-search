import React from "react";
import * as api from "./api";
import "./App.css";

function App() {
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    const user = api.then((res) => res.json());
    console.log(user);
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <input
          type="text"
          className="search-input"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </header>
      <main className="app-content"></main>
    </div>
  );
}

export default App;
