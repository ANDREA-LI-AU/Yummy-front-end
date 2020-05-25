import React from 'react';
import './App.css';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactPlayer url="https://www.youtube.com/watch?v=XBJKi2tcKkE" />
      </header>
    </div>
  );
}

export default App;
