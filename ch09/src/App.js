import React, { Component } from 'react';
import styles from './App.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
console.log(styles);

const isBlue = true;

class App extends Component {
  
  render() {
    return (
      
      <div className={cx('box',{blue:isBlue})} >
        <div className={cx('box-inside')} />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
