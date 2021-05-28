import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';
import reportWebVitals from './reportWebVitals';


class Input extends React.Component {
  constructor() {
    super();
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm() {
    console.log(this.input.value);
  }

  render() {
    return (
      <div id="input-field">
        <div>
         <input type="file"  ref={myinput => (this.input = myinput)}  ID="fileSelect" accept=".xlsx, .xls, .csv"/>
        </div>

        <button onClick={this.onSubmitForm}>Submit</button>
      </div>
    );
  }
}

export default Input;

ReactDOM.render(
      <Input/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
