import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App'
import reportWebVitals from './reportWebVitals';
import Firebase, { MyContext } from './Components/Firebase'


ReactDOM.render(
  <MyContext.Provider value={new Firebase()}> 
  {/* we provide the context of Firebase to all the application */}
    <App />
  </MyContext.Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
