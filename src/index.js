import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css'
import App from './pages/App.js';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Documentation from './pages/Documentation';
import LandingPage from './pages/LandingPage';
import Demo from './pages/Demo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/Documentation" element={<Documentation />} />
          <Route exact path="Demo" element={<Demo/>}/>
        </Routes>
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
