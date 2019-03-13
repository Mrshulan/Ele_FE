import React, { Component } from 'react'

import './index.scss'

class ErrLoc extends Component {
  render() {
    return (
      <div className="prod-content-loc">
        <img src={require('../../../static/images/errLoc.gif')} alt=""/>
        <h3>定位失败</h3>
        <p>阿饿君迷路了...</p>
        <button>
          手动定位
        </button>
    </div>
    )
  }
}

export default ErrLoc