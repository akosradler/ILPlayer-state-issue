import React from "react";
import "./App.css";
import { ContentPlayer } from "./ContentPlayer";
import { drillContentTextEntry } from "./data/drillContent";

function App() {
  return (
    <div className="App">
      <p>Content Player</p>
      <section>
        <ContentPlayer item={drillContentTextEntry} />
      </section>
    </div>
  );
}

export default App;
