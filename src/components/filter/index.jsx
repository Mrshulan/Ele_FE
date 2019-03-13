import React, { Component } from 'react'
import './index.scss'
class Filter extends Component {
  render() {
    return (
      <div className="filter-wraper">
          <div className="filter">
            <a href="/">
              综合排序
              <i className="iconfont icon-jiantouarrow486" style={{fontSize: ".2rem"}}></i>
            </a>
            <a href="/">
              距离最近
            </a>
            <a href="/">
              <i className="iconfont icon-huiyuan1" style={{color: "rgb(254, 204, 74)"}}></i>
              会员领红包
            </a>
            <a href="/">
              筛选
            </a>
          </div>
        </div>
    )
  }
}

export default Filter