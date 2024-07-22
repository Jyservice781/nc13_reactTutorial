import './App.css';
import Hello from'./Hello.js'
import Counter from "./Counter";
import ResetButton from "./ResetButton";
import MultiInput from "./MultiInput";

function App() {
  return (
      <div className="App">
        <Hello />
        <MultiInput />
        <Counter />
        <ResetButton/>
      </div>
  );
}

export default App;
