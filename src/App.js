import React, { Component } from 'react';
import CirclesList from './components/CirclesList';

class App extends Component {
  state = {  }
  render() { 
    return (  
      <div className="container">
        <CirclesList />
      </div>
    );
  }
}
 
export default App;