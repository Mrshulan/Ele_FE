import React, { Component } from 'react'
import './index.scss'
class Search extends Component {

  render() {
    return  (
      <div className="app-search">
        <div className="app-search-top">
          <i className="iconfont icon-back search-back"></i>
          <form className="search-ipt">
            <i className="iconfont icon-sousuo search-icon"></i>
            <input type="text" className="search-ipt-content" placeholder="输入商家、商品名称"/>
            <button type="submit" className="search-submit">搜索</button>
          </form>
        </div>
        <div className="app-search-record">
          <section className="search-item search-histories">
            <header className="search-hot-title">历史搜索</header>
            <section className="search-hot-content">
              <button className="hot-content-item">汤圆</button>
            </section>
          </section>
          <section className="search-item search-hot">
            <header className="search-hot-title">热门搜索</header>
            <section className="search-hot-content">
              <button className="hot-content-item">汤圆</button>
              <button className="hot-content-item">奶茶</button>
              <button className="hot-content-item">疙瘩汤</button>
              <button className="hot-content-item">炒粉</button>
              <button className="hot-content-item">卫生纸</button>
              <button className="hot-content-item">肥牛</button>
              <button className="hot-content-item">粥</button>
              <button className="hot-content-item">炸鸡</button>
              <button className="hot-content-item">花生</button>
            </section>
          </section>
        </div>
      </div>
    )
  }
}
export default Search