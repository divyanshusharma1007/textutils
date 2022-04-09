import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const [buttoncolor, setButtoncolor] = useState("dark")
  const [butext, setButext] = useState("DarkMode")
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => { setAlert(null); }, 2000)
  }

  // states realted to about text 
  const [myStyle, setmystyle] = useState({
    color: "#393939",
    backgroundColor: "#ffffff",
  });
  const [msty, setmysty] = useState({
    color: "black",
    backgroundColor: " white",
  });
  const [st2, setmyst2] = useState({
    color: "#8b8f8c",
    backgroundColor: " white",
  })
  const toggleStyle = () => {
    console.log("darkmode is enabled");
    if (myStyle.color !== "#ffffff") {
      setmystyle({
        color: "#ffffff",
        backgroundColor: "#393939",
        border: "1px solid black",
      });
      setmyst2({
        color: "white",
        backgroundColor: "#8b8f8c",
        border: "1px solid white",
      });
      setmysty({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      // 
    } else {
      setmystyle({
        color: "#292929",
        backgroundColor: "#ffffff",
        border: "2px solid black",
      });
      setmyst2({
        color: "#8b8f8c",
        backgroundColor: "white",
        border: "2px solid #575757",
      });
      setmysty({
        color: "black",
        backgroundColor: "white",
        border: "2px solid #e0e0e0",
      });
    }
  };

  let darkmode = () => {
    toggleStyle();
    if (mode === "dark") {
      setmode("light");
      setButext("DarkMode")
      setButtoncolor("dark");
      showAlert("dark mode has been enabled ", "success")
      document.body.style.background = "white"
    } else {
      showAlert("light mode has been enabled ", "success")
      document.body.style.backgroundColor = "#001c34"
      setmode("dark");
      setButext("LightMode")
      setButtoncolor("light");
    }
  };
  return (
    // using this we can easily make our routing .
    <Router>
      <Navbar mode={mode} buttontext={butext} button={buttoncolor} togglemode={darkmode}></Navbar>
      <Alert alert={alert}></Alert>
      <Switch>
        <Route path="/about">
          <br />
          <About togglemode={darkmode} myStyle={myStyle} msty={msty} st2={st2} ></About>
        </Route>
        <Route path="/">
          <div className="container my-3">
            <Textform heading="Enter the text to analyze below" mode={mode}  ></Textform>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
