import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

class FootGuide extends Component {
  render() {
    return (
      <footer className="index-footer-wrapper">
        <div className="index-footer-guide">
          <NavLink exact to="/" className="index-footerTab">
            <i className="iconfont icon-changyonglogo40"></i>
            <span>首页</span>
          </NavLink>
          <NavLink to="/discover" className="index-footerTab">
            <i className="iconfont icon-faxian"></i>
            <span>发现</span>
          </NavLink>
          <NavLink to="/order" className="index-footerTab">
            <i className="iconfont icon-dingdan"></i>
            <span>订单</span>
          </NavLink>
          <NavLink to="/profile" className="index-footerTab">
            <i className="iconfont icon-huiyuan"></i>
            <span>我的</span>
          </NavLink>
        </div>
      </footer>
    )
  }
}

export default FootGuide