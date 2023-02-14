import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ToastProvider, useToasts } from 'react-toast-notifications';

function notifyMe(message) {
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    // Check whether notification permissions have already been granted;
    // if so, create a notification
    const notification = new Notification(message);
    // …
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        const notification = new Notification(message);
        // …
      }
    });
  }
}

function App() {
  const [count, setCount] = useState(0)
  const [coup, setCoup] = useState(0)
  const [coupIA, setCoupIA] = useState(0)
  const [state, setState] = useState(0)

  function Play() {
    var coupNumberIA = Math.floor(Math.random() * 3);
    notifyMe();

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
      notifyMe("Win");
    }else if(coup == "ciseaux" && coupIA == "papier"){
      setState("Win");
      notifyMe("Win");
    }else if (coup == "papier" && coupIA == "pierre"){
      setState("Win");
      notifyMe("Win");
    }else if (coup == "pierre" && coupIA == "papier"){
      setState("Lose");
      notifyMe("Lose");
    }else if (coup == "ciseaux" && coupIA == "pierre"){
      setState("Lose");
      notifyMe("Lose");
    }else if (coup == "papier" && coupIA == "ciseaux"){
      setState("Lose");
      notifyMe("Lose");
    }else{
      setState("Draw");
      notifyMe("Draw");
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
