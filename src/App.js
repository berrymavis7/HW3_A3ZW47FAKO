import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/components.css'
import './css/global.css'
import './css/layout.css'
import './css/sample-wallpaper.css'

import Navbar from './Navbar.js'
import Header from './Header.js'

function App() {
  return (
    <div>
     <Navbar/>
     <Header/>
    </div>
  );
}

export default App;
