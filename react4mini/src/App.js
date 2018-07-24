import React, { Component } from 'react';
import './App.css';

//Importing these objects
import routes from './routes'
import {Link} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Link to='/'> <p>Route1</p> </Link>
      <Link to='/Route2'> <p>Route2</p> </Link>
      <Link to='/Route3'> <p>Route3</p> </Link>
      {routes}
      </div>
    );
  }
}

export default App;
