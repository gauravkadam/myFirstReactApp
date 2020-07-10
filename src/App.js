import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Service from './components/service/service';
import Login from './components/login/login';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/>
      <Service/> */}
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
