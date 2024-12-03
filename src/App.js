import './App.css';
import Counter from './Hooks/Counter';
import { ReducerHook } from './Hooks/ReducerHook';

function App() {
  return (
    <div className="App">
      <h1> example-1 - one button is toggling both text and incrementing count</h1>
     <ReducerHook/>
     <h1>example-2 - counter app</h1>
     <Counter/>
    </div>
  );
}

export default App;
