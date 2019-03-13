import React, { Component } from 'react' 
import './index.scss'

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="header-left" onClick={() => {window.location="/"}}>
          <i className="iconfont icon-back"></i>
        </div>
        <h1>我的</h1>
      </div>
    )
  }
}

export default Header