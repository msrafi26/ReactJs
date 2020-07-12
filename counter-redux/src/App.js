import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div className="box">
      <div>
        <h2>Counter:  {this.props.count}</h2>
      </div>
        
        <div>
          <button className="btn b1" align="center" onClick={this.decrement}>-</button>       
          <button className="btn b2"align="center" onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(App);
