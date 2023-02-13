import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [coup, setCoup] = useState(0)
  const [coupIA, setCoupIA] = useState(0)
  const [state, setState] = useState(0)

  function Play() {
    var coupNumberIA = Math.random(2);
    switch (coupNumberIA) {
      case 0:
        setCoupIA("pierre");
        break;
      case 1:
        setCoupIA("papier");
        break;
      case 2:
        setCoupIA("ciseaux");
        break;

    }

    if(coup == "pierre" && coupIA == "ciseaux"
     || coup == "ciseaux" && coupIA == "papier"
     || coup == "papier" && coupIA == "pierre"){
        setState("Win");
     }else if (coup == "pierre" && coupIA == "papier"
     || coup == "ciseaux" && coupIA == "pierre"
     || coup == "papier" && coupIA == "ciseaux"){
      setState("Lose");
     }else{
      setState("Draw");
     }


    return <h1>Hello, {props.name}</h1>;
  }
 

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>{8+8}</div>
      <div>Coup = {coup}</div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={() => setCoup("papier")}>
          papier {coup}
        </button>

        <button onClick={() => setCoup("pierre")}>
          pierre
        </button>

        <button onClick={() => setCoup("ciseaux")}>
          ciseaux
        </button>

        <button onClick={() => Play()}>
          Jouer 
        </button>

        <div>{state}</div>

        <div>{coup}</div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
