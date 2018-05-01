import React, { Component } from 'react';
import Rabbits from './Rabbits';

function *F(){
  let a = 1;
  yield a;
  let b = 1;
  yield b;
  while (true){
    let next = a + b;
    yield next;
    a = b;
    b = next;
  }
}

const Pair = () => (
  <h3>
    <i className="em em-rabbit2"></i>
    <i className="em em-rabbit2"></i>
  </h3>
);

class App extends Component {

  state = {
    month: 0,
    collection: [],
    currentPopulation: 1,
  }

  componentDidMount(){
    this.Fib = F();
  }

  componentDidUpdate(){
    this.Fib = F();
  }

  handleClick = () => this.setState(({ month, collection }) => ({ month: month + 1, collection: [...collection, month] }));

  renderRow = month => (
    <li key={month} className="list-group-item d-flex justify-content-between">
      <div id='month'>Month: {month}</div>
      <Rabbits getPairs={() => this.Fib.next().value}>
        {pairs => pairs.map((pair, index) => <Pair key={index}/>)}
      </Rabbits>
    </li>
  );

  render() {
    const { collection } = this.state;
    return (
      <div className="container">
        <h1 className="display-3 text-center"> Fibonacci Rabbits<br /><i className="em em-carrot"></i><i className="em em-rabbit"></i></h1>
        <ul className="list-group">
          {collection.map(month => this.renderRow(month))}
        </ul>
        <div className="mt-4 mb-4">
          <button
            onClick={this.handleClick}
            className="btn btn-secondary btn-lg btn-block">Next Month</button>
        </div>
      </div>
    );
  } // render
} // App

export default App;
