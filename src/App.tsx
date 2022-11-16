import { Counter } from "./components/Counter";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";



function App() {
  return (
    <>
    <h1>React + typescript</h1>
    <Counter/>
    <Usuario/>
    <h2> useEfect - useRef</h2>
    <TimerPadre/>
    </>
  );
}

export default App;
