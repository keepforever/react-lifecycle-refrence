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

  async componentDidMount() {
    // API fetch calls here
    // res
    clearLog('Parent componentDidMount')
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let users = await response.json()
    clearLog('fetchedItems', users)
    this.setState({
      user: users[0]
    })
    // fetch("https://api.example.com/items")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         isLoaded: true,
    //         items: result.items
    //       });
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   )
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
    clearLog('PARENT compDidUpdate prevState.user', prevState.user)
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
    const { text, counter, user } = this.state;
    clearLog('PARENT user', user)

    return (
      <div style={{ color: "green" }}>
        <h4>Parent Text</h4>
        <button
          style={{ height: 100, width: 400, fontSize: 25 }}
          onClick={this.incrementCounter}
        >
          Increment Counter
        </button>
        <Child counter={counter} text={text} />
      </div>
    );
  }
}

export default Parent;
