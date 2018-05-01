import { Component } from 'react';

export default class Rabbits extends Component {
  render(){
    return this.props.children(
      Array.from(Array(this.props.getPairs()))
    );
  }

} // Rabbits
