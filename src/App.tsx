import React from "react";
import "./App.css";
import { ContentPlayer } from "./ContentPlayer";
import { actualDrillContent } from "./data/actualDrillContent";

function App() {
  return (
    <div className="App">
      <p>Content Player</p>
      <section>
        <ContentPlayer item={actualDrillContent} />
      </section>
    </div>
  );
}

export default App;
