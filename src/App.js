import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user,setUser] = useState();

  useEffect(() => {
    window.otpless = (otplessUser) => {
      alert(JSON.stringify(otplessUser));
      setUser(otplessUser)
      console.log(otplessUser);
    };
  }, []);

  return (
    <div className="App">
      {user && 
      <div>
        <h1>Welcome, {user.email.name}</h1>
        </div>}
      <div id="otpless-login-page"></div>

    </div>
  );
}

export default App;
