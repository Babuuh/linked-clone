import React from 'react';
import './App.css';
import Feed from './components/feed/feed';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div className="app">
     <Header />
     <div className='app_body'>
     <Sidebar />
     <Feed />
     </div>
    </div>
  );
}

export default App;
