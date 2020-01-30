import React from 'react';
import TickingClock from "./TickingClock"
import Props from './Props';
import Events from './Events';
import ConditionalRendering2 from './ConditionalRendering2'

function App() {
  return (
    <div>
      <h1>Rendering Components</h1>
      <TickingClock/>
      <br/>
      <h1>Props</h1>
      <Props name="Chessa" age="45"/>
      <Props name="Makokha" age="59"/>
      <br/>
      <h1>Handling Events</h1>
      <Events/>
      <br/>
      <h1>Conditional Rendering</h1>
      <ConditionalRendering2/>
    </div>   
  );
}

export default App;
