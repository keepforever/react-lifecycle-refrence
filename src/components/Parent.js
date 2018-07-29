import React, { Component } from "react";
import Child from "./Child";
import { clearLog } from '../utils'

class Parent extends Component {

  constructor(props) {
    super(props);
    clearLog('Parent Constructor')
    // e.g. set state inside constructor
    this.state = {
      text: "some text",
      counter: 0
    };
  }
  // Lifecycle-palooza
  // componentWillMount() {
  //   clearLog('Parent componentWillMount')
  // }

  // should only use this for advanced animations transitions, etc.
  // static getDerivedStateFromProps(nextProps, nextState) {
  //   clearLog('Parent getDerivedStateFromProps', nextState)
  //   return nextState
  // }

  componentDidMount(){
    clearLog('Parent componentDidMount')
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    clearLog('getSnapshotBeforeUpdate')
    const keyAlpha = prevState.text + ' hello'
    //this.setState({ text: keyAlpha})
    return {
      keyAlpha,
      keyBeta: 'beta'
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    clearLog('PARENT compDidUpdate prevState', prevState)
    clearLog('PARENT compDidUpdate snapshot', snapshot)
    this.varSetInCompDidUpdate = snapshot.keyBeta
  }

  incrementCounter = () => {
    clearLog('COUNTER FIRED')
    this.setState((prevState) => {
      return {counter: prevState.counter + 1}
    });
  };

  render() {
    clearLog('Parent render')
    clearLog('PARENT props', this.props)
    const { text, counter } = this.state;

    return (
      <div style={{ color: "green" }}>
        <h4>Parent Text</h4>
        <button
          style={{ height: 100, width: 400, fontSize: 25 }}
          onClick={this.incrementCounter}
        >
          increment Counter
        </button>
        <Child counter={counter} text={text} />
      </div>
    );
  }
}

export default Parent;
