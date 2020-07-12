import React, { useState } from 'react';
//import logo from './logo.svg';
import '../App.css';
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const axios = require('axios').default;
const instance = axios.create(
  { baseURL: window.location.origin }
);
const LanguagePage = () => {

  const [bColor, setBColor] = useState([]);
  const [languages, setLanguages] = useState([]);
  function changeColor(idx) {
    let colorArr = [];
    colorArr[idx] = "orange";
    setBColor(colorArr);
  }

  return (
    <Router>
      <div>
        <div className="App">
        </div>
        <div className="box">
          <div className="title-align">
            <h1>  mSeva | Punjab</h1>
          </div>
          <div className="title-align languages">
            <h5 align="center">  English | Hindi | Punjabi</h5>
          </div>
          <div>
            <input type="button" onClick={(e) => changeColor("0")} style={{ color: "black", background: bColor[0] }} className="language-button b1" name="ENG" value="ENGLISH" />
          </div>
          <div>
            <input type="button" onClick={(e) => changeColor("1")} style={{ color: "black", background: bColor[1] }} className="language-button b2" name="HIN" value="HINDI" />
          </div>
          <div>
            <input type="button" onClick={(e) => changeColor("2")} style={{ color: "black", background: bColor[2] }} className="language-button b3" name="PUN" value="PUNJABI" />
          </div>
          <div>
            <Link to="register">
              <input type="button" className="language-button ct" name="CTU" value="CONTINUE" />
            </Link>
          </div>
        </div>
      </div>
    </Router>

  );
};

export default LanguagePage;
