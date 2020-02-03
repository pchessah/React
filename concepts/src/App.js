import React from 'react';
import TickingClock from "./TickingClock"
import Props from './Props';
import Events from './Events';
import ConditionalRendering2 from './ConditionalRendering2'
import Lists from './Lists'
import Forms from './Forms';

function App() {
  const numbers=[1,2,3,4,5,6,7,8]
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
      <br/>
      <h1>Lists and Keys</h1>
      <Lists numbers={numbers}/>
      <br/>
      <h1>Forms</h1>
      <Forms/>
    </div>   
  );
}

export default App;
