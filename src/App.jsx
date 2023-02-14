import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ToastProvider, useToasts } from 'react-toast-notifications';

function App() {
  const [count, setCount] = useState(0)
  const [coup, setCoup] = useState(0)
  const [coupIA, setCoupIA] = useState(0)
  const [state, setState] = useState(0)

  function Play() {
    var coupNumberIA = Math.floor(Math.random() * 3);

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

    if(coup == "pierre" && coupIA == "ciseaux"){
      setState("Win");
      alert("Win");
    }else if(coup == "ciseaux" && coupIA == "papier"){
      setState("Win");
      alert("Win");
    }else if (coup == "papier" && coupIA == "pierre"){
      setState("Win");
      alert("Win");
    }else if (coup == "pierre" && coupIA == "papier"){
      setState("Lose");
      alert("Lose");
    }else if (coup == "ciseaux" && coupIA == "pierre"){
      setState("Lose");
      alert("Lose");
    }else if (coup == "papier" && coupIA == "ciseaux"){
      setState("Lose");
      alert("Lose");
    }else{
      setState("Draw");
      alert("Draw");
     }
  }
 

  return (
    <div className="App">
      <div>
          <img src="/shifumi.png" className="logo" alt="Vite logo" />
      </div>
      <h1>Shifumi !</h1>
      <div>Coup = {coup}</div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={() => setCoup("papier")}>
          papier
        </button>

        <button onClick={() => setCoup("pierre")}>
          pierre
        </button>

        <button onClick={() => setCoup("ciseaux")}>
          ciseaux
        </button>

        </div>

<div>
<button onClick={() => Play()}>
          Jouer 
        </button>
</div>


        <div>{state}</div>

        <div>{coup}</div>


    </div>
  )
}

export default App
