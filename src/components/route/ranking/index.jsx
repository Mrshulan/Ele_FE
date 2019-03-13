import React, { Component } from 'react'
import './index.scss'
class Ranking extends Component {
  addGoods = () => {
    let goodsShowed = document.querySelectorAll('.goods-item')
    let goodsPraent = goodsShowed[0].parentNode
    let goodsClone = goodsShowed[0].cloneNode(true)

    this.refs.goodsMore.switch = this.refs.goodsMore.switch || "off" 
    
    // 判断当前的状态
    if(this.refs.goodsMore.switch === "off") {
      goodsPraent.appendChild(goodsClone)
      goodsClone = goodsShowed[0].cloneNode(true)
      goodsPraent.appendChild(goodsClone)
      this.refs.goodsMore.switch = "open"
      this.refs.goodsMore.innerBefore = this.refs.goodsMore.innerHTML
      this.refs.goodsMore.innerHTML = '<span>收起</span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUBAMAAAAevyJ8AAAAGFBMVEUAAABmZmZnZ2dmZmZnZ2dmZmZmZmaAgICTqrbKAAAACHRSTlMA/lfr6fJLBMT+Jn8AAABhSURBVBjTdcqxDYAwDERRCxDUzgSmoKdgACQ2YAJGYP8KIZ/8C8QVPid+9sl4BI9uu2zwxsfsu/XuUcB9fUcDeOQs0KoA2QCWPEABWgEiAhABiAAkAUQAIkCWM7sy3faTB0qcCfeqJVkUAAAAAElFTkSuQmCC" style="transform: rotate(180deg)" alt=""/>'
    } else if(this.refs.goodsMore.switch === "open") {
      for(var i = 1,iL = goodsShowed.length;i < iL;i++) {
        goodsPraent.removeChild(goodsShowed[i])
      }
      this.refs.goodsMore.switch = "off"
      this.refs.goodsMore.innerHTML = this.refs.goodsMore.innerBefore

    } 
  }
  render() {
    return (
      <div className="app-ranking">
        <div className="ranking-navTop">
          <ul className="navTop-wrapper">
            <li className="navTop-item active">全部类型</li>
            <li className="navTop-item">简餐便当</li>
            <li className="navTop-item">传统美食</li>
            <li className="navTop-item">西式套餐</li>
            <li className="navTop-item">港粤风味</li>
            <li className="navTop-item">日韩料理</li>
          </ul>
        </div>

        <section className="ranking-content">
          <div className="content-wrapper">
            <section className="content-item">
              <header className="content-item-top">
                <img src={require('../../../static/images/logo-logos/logo-logo-1.jpeg')} alt=""/>
                <div className="item-title">
                  <h3>
                    <span className="title">德客堡炸鸡汉堡店</span>
                    <span className="rate-result">
                      <span>评分4.8</span>
                      <span></span>
                      <span>月售2095</span>
                    </span>
                  </h3>
                  <ul className="item-rateTag">
                    <li>味道超赞</li>
                    <li>回头客多</li>
                    <li>配送飞快</li>
                  </ul>
                </div>
              </header>
              <ul className="content-main">
                <li className="goods-item">
                  <img src={require('../../../static/images/logo-logos/good1.webp')}alt=""/>
                  <div className="goods-info">
                    <h4 className="goods-title">汉堡+可乐</h4>
                    <div className="goods-desc">感恩套餐1</div>
                    <div className="goods-tag">人气美食</div>
                    <div className="goods-discount">
                      <i>¥</i>
                      <span>9.9</span>
                      <div className="before">
                        <i>¥</i>
                        <span>10</span>
                      </div>
                    </div>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjEuNzI3IDE4LjA5VjkuOTk1QTEgMSAwIDAgMCAyMC43MzQgOWgtMS42NWEuOTk1Ljk5NSAwIDAgMC0uOTkzLjk5NHY4LjA5N0g5Ljk5NGExIDEgMCAwIDAtLjk5NC45OTR2MS42NDljMCAuNTQ3LjQ0NS45OTMuOTk0Ljk5M2g4LjA5N3Y4LjA5N2ExIDEgMCAwIDAgLjk5NC45OTRoMS42NDlhLjk5NS45OTUgMCAwIDAgLjk5My0uOTk0di04LjA5N2g4LjA5N2ExIDEgMCAwIDAgLjk5NC0uOTkzdi0xLjY1YS45OTUuOTk1IDAgMCAwLS45OTQtLjk5M2gtOC4wOTd6TTIwIDQwQzguOTU0IDQwIDAgMzEuMDQ2IDAgMjBTOC45NTQgMCAyMCAwczIwIDguOTU0IDIwIDIwLTguOTU0IDIwLTIwIDIweiIvPjwvc3ZnPg==" alt=""/>
                  </div>
                </li>
              </ul>
              <div className="goods-more" ref="goodsMore" onClick={this.addGoods}>
                <span>展开更多套餐 2 个</span>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUBAMAAAAevyJ8AAAAGFBMVEUAAABmZmZnZ2dmZmZnZ2dmZmZmZmaAgICTqrbKAAAACHRSTlMA/lfr6fJLBMT+Jn8AAABhSURBVBjTdcqxDYAwDERRCxDUzgSmoKdgACQ2YAJGYP8KIZ/8C8QVPid+9sl4BI9uu2zwxsfsu/XuUcB9fUcDeOQs0KoA2QCWPEABWgEiAhABiAAkAUQAIkCWM7sy3faTB0qcCfeqJVkUAAAAAElFTkSuQmCC" alt=""/>
              </div>
            </section>
          </div>
        </section>
      </div>
    )
  }
}

export default Ranking