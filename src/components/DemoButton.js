import React from 'react';
import '../style/DemoButton.css'
import { Link } from 'react-router-dom';



function DemoButton() {
  return (
    <Link to="/Demo">
    <button className="learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">Try It</span>
    </button>
   </Link>
  );
}

export default DemoButton;