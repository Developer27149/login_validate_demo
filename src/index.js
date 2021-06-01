import "./index.css"
import React, { useState,useEffect } from "react";
import { render } from "react-dom";

function App() {
    const [state, setState] = useState(true);
    useEffect(() => {
      const userInput = document.querySelector("#username")
      userInput.addEventListener('input', (evt) => {
        if(userInput.validity.tooShort) {
          // user.setCustomValidity("")
          setState("username is too short.")
        } else {
          // user.setCustomValidity("")
          setState(true)
        }
      })
    },[])
    const sub = (e) => {
      e.preventDefault();
      if(state === true) {
        console.log('let us submit the form data', state);
      } else {
        console.log('no..', state);
      }
    }
    return (
      <>
      <header>
        <nav className="login">SIGN IN</nav>
        <nav>SIGN UP</nav>
      </header>
      <form onSubmit={sub} noValidate>
        <input type="text" minLength="2" placeholder="username" id="username" required/>
        <input type="password" minLength="2" placeholder="password" id="password" required/>
        <input type="email" placeholder="email" id="email" required/>
        <button>submit</button>
      </form>
      {
        state !== true && <section>{state + " 🤔"}</section>
      }
      <footer>
        <a href="#">Forget your password?</a>
      </footer>
      </>
    )
}

render(<App />, document.getElementById("root"));