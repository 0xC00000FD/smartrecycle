import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/app';
import reportWebVitals from './reportWebVitals';
import Firebase, { FirebaseContext } from './components/firebase';

ReactDOM.render(
<<<<<<< Updated upstream
  <FirebaseContext.Provider value={new Firebase()}>
    <Map />
  </FirebaseContext.Provider>,
=======
  <React.StrictMode>
    <App />
  </React.StrictMode>,
>>>>>>> Stashed changes
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
