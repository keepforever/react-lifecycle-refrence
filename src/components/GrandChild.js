import React, { Component } from 'react';
import { clearLog } from '../utils'

class GrandChild extends Component {

  render () {
    clearLog('GRAND_CHILD Render')
    const { text } = this.props
    return (
        <div style={{color: 'brown'}}>
          <h4>
            GrandChild text: {text}
          </h4>
        </div>
    );
  }
}

export default GrandChild
