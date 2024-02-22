import './style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home.jsx';

//import studio from '@theatre/studio';
//import extension from '@theatre/r3f/dist/extension'

//studio.extend(extension);
//studio.initialize();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.Fragment>
    <Home></Home>
  </React.Fragment>
)
