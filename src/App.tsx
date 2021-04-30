import React from "react";
import "./App.css";
import { ContentPlayer } from "./ContentPlayer";
import { drillContentSingleSelect } from "./data/drillContent";
import { withSlimStampen } from "./withSlimStampen";

function App() {
  return (
    <div className="App">
      <p>Content Player</p>
      <section>
        <ContentPlayer
          item={drillContentSingleSelect}
          enhance={withSlimStampen}
        />
      </section>
    </div>
  );
}

export default App;
