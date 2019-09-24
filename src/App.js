import React from 'react';
import $ from  'jquery/dist/jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/header/header.component';
import HomePage from './pages/home/home.component';
function App() {
  return (
    <div>
       <Header/>
        <HomePage />
    </div>
  );
}

export default App;
