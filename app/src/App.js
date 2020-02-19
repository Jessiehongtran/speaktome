import React from 'react';
import './App.css';
import Videos from './components/videos';

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Let's english</h1>
        <Videos/>
      </div>
    )
  }
}

export default App;
