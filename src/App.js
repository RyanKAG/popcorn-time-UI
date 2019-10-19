import React from 'react';
import './App.css';
import Browser from './Browser';
import './Window.css';
import ItemPage from './ItemPage';

function App() {
  return (
    <div className='App'>
      <ItemPage title='john wick' year='2019' tegs='action/comedy/drama' />
    </div>
  );
}

export default App;
