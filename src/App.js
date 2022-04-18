import React from 'react';
import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div className="app">
     <Header />
     <div className='app_body'>
     <Sidebar />
     </div>
    </div>
  );
}

export default App;
