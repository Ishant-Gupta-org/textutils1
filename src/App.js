import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')  // whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled","success")
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() =>{
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(() =>{
      //   document.title = 'Install TextUtils now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success")
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
    {/* <Router> */}
<Navbar title="Textutils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>

<div className="container my-3">
         {/* <Routes>
          {/* exact path is because
          /users--> -Components-1 
          /users/home-->-->-Components-2
          */}
          {/* <Route exact path="/about"
            element={<About />}>
          </Route> */}
          {/* <Route exact path="/"
            element={*/} <Textform showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/> {/*> }> 
           </Route> 
        </Routes>*/}
</div>
 {/* </Router> */}
    </>
  );
}

export default App;
