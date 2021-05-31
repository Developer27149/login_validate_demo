import "./index.css"
import React, { useState } from "react";
import { render } from "react-dom";

function App() {
    const [state, setState] = useState("something error");
    const sub = (e) => {
      e.preventDefault();

      console.log('submit');
    }
    return (
      <>
      <header>
        <nav className="login">SIGN IN</nav>
        <nav>SIGN UP</nav>
      </header>
      <form onSubmit={sub}>
        <input type="text" maxLength="12" placeholder="username"/>
        <input type="password" minLength="6" pattern="^\d.*$" placeholder="password"/>
        <input type="email" placeholder="your email"/>
        <button>Login</button>
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