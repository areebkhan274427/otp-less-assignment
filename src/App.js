import { useEffect } from "react";
import "./App.css";

function App() {

  useEffect(() => {
    window.otpless = (otplessUser) => {
      alert(JSON.stringify(otplessUser));
      console.log(otplessUser);
    };
  }, []);

  return (
    <div className="App">
      <div id="otpless-login-page"></div>
    </div>
  );
}

export default App;
