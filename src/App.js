import React from 'react';
import './App.css';
import Browser from './Browser';
import NavBar from './NavBar';
import Window from './Window';
import './Window.css';

function App() {
  return (
    <div className='App'>
      <NavBar className='navbar' />
      <Browser />
    </div>
  );
}

export default App;
