import "./index.css"
import React, { useState } from "react";
import { render } from "react-dom";

function App() {
    const [state, setState] = useState("CLICK ME");

    return (
      <>
      <header>
        <nav className="login">SIGN IN</nav>
        <nav>SIGN UP</nav>
      </header>
      <form>
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
        <input type="email" placeholder="your email"/>
        <button>Login</button>
      </form>
      <footer>
        <a href="#">Forget your password?</a>
      </footer>
      </>
    )
}

render(<App />, document.getElementById("root"));