import React from 'react';
import Header from './components/Header';
import RecentPermitsList from './containers/RecentPermitsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <RecentPermitsList />
    </div>
  );
}

export default App;
