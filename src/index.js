import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';
import reportWebVitals from './reportWebVitals';
import Data from './component/Data';

function Input(){
  return <div id="input-field">
   <input type="text" name="inputData"/> <button onClick="Data()">Submit</button> 
  </div>
}
ReactDOM.render(
      <Input/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
