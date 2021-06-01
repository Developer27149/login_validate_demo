import "./index.css"
import React, { useState,useEffect } from "react";
import { render } from "react-dom";

function App() {
    const [state, setState] = useState("");
    useEffect(() => {
      const user = document.querySelector("#username")
      user.addEventListener('input', (evt) => {
        console.log(user.validationMessage);
        if(user.validity.tooShort) {
          // user.setCustomValidity("")
          setState("username field is too short..")
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
        <input type="email" placeholder="your email" id="email" required/>
        <button className={state === true ? "canClick": "nerverClick"}>Login</button>
      </form>
      {
        state && <section>{state} 🤔</section>
      }
      <footer>
        <a href="#">Forget your password?</a>
      </footer>
      </>
    )
}

render(<App />, document.getElementById("root"));