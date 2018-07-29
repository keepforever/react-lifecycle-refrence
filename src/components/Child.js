
import React, { Component } from 'react';
import GrandChild from './GrandChild';
import { clearLog } from '../utils'

class Child extends Component {

  render () {
    clearLog('CHILD render')
    const { text, counter } = this.props
    return (
        <div style={{color: 'blue'}}>
          <h4>
            Child, text: {text}
            Child Counter: {counter}
          </h4>

            <GrandChild text={text}/>
        </div>
    );
  }
}

export default Child
