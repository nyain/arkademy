import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state ={
      number: 1
    }
  }

  handleCLick(){
    const number = this.state.number +1;
    this.setState({
      number
    })
  }


  render() {
    return (
      <div className="App">

      <nav>
              <ul id="menu">
              <li><a href="https://www.youtube.com/watch?v=IwzUs1IMdyQ" target="_blank">HOME</a></li>
              <li><a href="https://www.youtube.com/watch?v=dP9Wp6QVbsk" target="_blank">PRODUCT</a></li>
              <li><a href="https://www.youtube.com/watch?v=vQhqikWnQCU" target="_blank">GALLERY</a></li>
              <li><a href="https://www.youtube.com/watch?v=IwzUs1IMdyQ" target="_blank">NEWS</a></li>
              <li><a href="https://www.youtube.com/watch?v=IwzUs1IMdyQ" target="_blank">MY INVENTORY</a></li>
              </ul>
      </nav>
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim velit id maximus rhoncus. Vestibulum consequat pharetra nulla ut consectetur. Nulla urna quam, tristique non sodales ut, auctor a tortor. Etiam rutrum felis sed rutrum tincidunt. Fusce fringilla sed nunc non commodo. Praesent vehicula bibendum ex luctus accumsan. Ut mauris purus, iaculis ornare ultricies in, congue sed justo. Sed eu libero id nulla posuere eleifend non at magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ut fermentum felis. Donec sodales risus rhoncus libero lobortis maximus. Quisque ornare urna vitae libero luctus facilisis. Suspendisse potenti. Vivamus hendrerit lacus sit amet erat imperdiet, molestie blandit justo luctus.
          </p>

          <button className="button" onClick={()=> this.handleCLick()}>
            Increase Number
          </button>

          <p>{this.state.number}</p>
        </header>
      </div>
    );
  }
}

export default App;
