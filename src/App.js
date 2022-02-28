// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Transform from './components/Transform';
import React,{useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type,
      })
      setTimeout(() => {
        setAlert(null)
      }, 3000);
  }

  const toggleMode =()=>{
    if (mode ==='light') {
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode enabled ",'success');
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled ","success")
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
         
          <Route exact path="/">
          <Transform mode={mode} showAlert={showAlert}/>
           
          </Route>
        </Switch>
        </Router>
    {/* <About /> */}
   
    </>
  );
}

export default App;
