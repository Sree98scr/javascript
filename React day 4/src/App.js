import React from "react";
import Counter from './usestate/counter.js';
import Prevstate from './usestate/prevState.js';
import Object from './usestate/objectstate.js';
import Effect from './usestate/effect.js';
import ReactComponent from '././ref.js';

function App() {

  return (
    
    <div className="App">
      <header className="App-header">
     
     <Counter/>
     <Prevstate/>
     <Object/>
     <Effect/>
    <ReactComponent/>
   
      </header>
    </div>
  );
}
export default App;
