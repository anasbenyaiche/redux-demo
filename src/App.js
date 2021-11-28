import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/actions/counterActions";

function App() {
  const counter = useSelector((state) => state.counterReducer.counter);
  console.log(counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h2>{counter}</h2>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </header>
    </div>
  );
}

export default App;
