import './App.css';
import React from "react";
import UploadFiles from "./components/upload-files.component";
import FileUploadMultiple from "./components/uploadFileMultiple";
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from './action';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const counter = useSelector(state =>state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
     <h1>Counter {counter}</h1> 
     <button onClick={()=>dispatch(increment(5))}>+</button>
     <button onClick={()=>dispatch(decrement())}>-</button>
     {isLogged? <h3>isLogged</h3>: 'is not logged'}
     <div className="container" style={{width : "600px"}}>
  <UploadFiles/>
     </div>
     <FileUploadMultiple/>
   
    </div>
  );
}

export default App;
