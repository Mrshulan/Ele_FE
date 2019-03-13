import React, { Component } from "react"

import { connect } from 'react-redux'
import { addCart, reduceCart } from '../../../actions/cartCount'
import './index.scss'
import '../../../static/fonts/iconfont'


@connect(
  state => ({cart: state}),
  {addCart, reduceCart}
)
class Shop extends Component {
  state = {
    list: [],
    product: []
  }

  render() {
    // console.log(this.props)
    let self = this
    return (
      <div className="app-shop">
        <div className="store-info-wrapper">
          <nav className="store-info-bkg">
            <a href="/" className="back"> </a>
          </nav>
          <div className="store-info-main">
            <div className="store-logo">
              <img src={require('../../../static/images/logo-logos/logo-logo-1.jpeg')} alt=""/>
            </div>
            <div className="store-name">
              <h2>
                <span>德客堡炸鸡汉堡店</span>
                <i className="Popups"></i>
              </h2>
              
            </div>
            <div className="store-rate">
              <span>评价4.8</span>
              <span>月售2135单</span>
              <span>商家配送约25分钟</span>
            </div>
            <div className="store-quan">
              <p className="quan-content">
                <span>
                  <small>¥</small>
                   7
                </span>              
                <span>
                  <i className="iconfont icon-huiyuan1"></i>
                  无门槛
                </span>
              </p>
              <p className="quan-receive">领取</p>
            </div>
            <div className="store-discount">
              <div className="store-activity">
                <span>满减</span>
                <span>满20减1，满32减2，满46减3</span>
              </div>
              <div className="store-activity-total">
               19个优惠
              </div>
            </div>
            <p className="store-inform">公告：从元旦放假开始我们也放假啦~~~放大概一星期~~~承蒙厚爱~大概从30号开始放假，啾，爱你们~</p>
          </div>
        </div>
        <div className="shop-tab-wrapper">
          <ul className="shop-tab-content">
            <li className="shop-tab-name active">
              点餐
              <span></span>
            </li>
            <li className="shop-tab-name">
              评价
              <span></span>
            </li>
            <li className="shop-tab-name">
              商家
              <span></span>
            </li>
          </ul>
        </div>
        <div className="store-main-wrapper">
          <div className="store-recommend">
            <p className="store-recommend-title">商家推荐</p>
            <div className="store-recommend-wrapper">        
              <ul className="store-recommend-content">
                <li className="recommend-item">
                  <img src={require("../../../static/images/hanbaobao.webp")} alt=""/>
                  <div className="food-info">
                    <p className="food-info-name">欢聚套餐</p>
                    <p className="food-info-rate">月售63好评率100%</p>
                    <div className="food-price">
                      <p className="food-origin-price">
                        <small>¥</small>
                        45
                      </p>
                      <span>
                        <svg className="icon" aria-hidden="true">
                          <use xlinkHref="#icon-plus"></use>
                        </svg>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="recommend-item">
                  <img src={require("../../../static/images/hanbaobao.webp")} alt=""/>
                  <div className="food-info">
                    <p className="food-info-name">欢聚套餐</p>
                    <p className="food-info-rate">月售63好评率100%</p>
                    <div className="food-price">
                      <p className="food-origin-price">
                        <small>¥</small>
                        45
                      </p>
                      <span>
                        <svg className="icon" aria-hidden="true">
                          <use xlinkHref="#icon-plus"></use>
                        </svg>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="recommend-item">
                  <img src={require("../../../static/images/hanbaobao.webp")} alt=""/>
                  <div className="food-info">
                    <p className="food-info-name">欢聚套餐</p>
                    <p className="food-info-rate">月售63好评率100%</p>
                    <div className="food-price">
                      <p className="food-origin-price">
                        <small>¥</small>
                        45
                      </p>
                      <span>
                        <svg className="icon" aria-hidden="true">
                          <use xlinkHref="#icon-plus"></use>
                        </svg>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="recommend-item">
                  <img src={require("../../../static/images/hanbaobao.webp")} alt=""/>
                  <div className="food-info">
                    <p className="food-info-name">欢聚套餐</p>
                    <p className="food-info-rate">月售63好评率100%</p>
                    <div className="food-price">
                      <p className="food-origin-price">
                        <small>¥</small>
                        45
                      </p>
                      <span>
                        <svg className="icon" aria-hidden="true">
                          <use xlinkHref="#icon-plus"></use>
                        </svg>
                      </span>
                    </div>
                  </div>
                </li>
            
              </ul>
            </div>
          </div>
          <div className="store-shopping">
            <div className="menuNav">
              <ul className="menucategory">
                <li className="menucategory-item">
                  <span>
                    <img src={require("../../../static/images/rexiao.png")} alt=""/>
                    热销
                  </span>
                </li>
                <li className="menucategory-item">
                  <span>
                  新品上市
                  </span>
                </li>
                <li className="menucategory-item">
                  <span>
                  新品上市
                  </span>
                </li>
                <li className="menucategory-item">
                  <span>
                  新品上市
                  </span>
                </li>
                <li className="menucategory-item">
                  <span>
                  新品上市
                  </span>
                </li>
                <li className="menucategory-item">
                  <span>
                  新品上市
                  </span>
                </li>
                <li className="menucategory-item">
                  <span>
                  新品上市
                  </span>
                </li>
                <li className="menucategory-item">
                  <span>
                  新品上市
                  </span>
                </li>
                <li className="menucategory-item">
                  <span>
                  新品上市
                  </span>
                </li>
                <li className="menucategory-item">
                  <span>
                  新品上市
                  </span>
                </li>
                <li className="menucategory-item">
                  <span>
                  新品上市
                  </span>
                </li>
              </ul>
            </div>
            <div className="menuView">
              <dl className="menu">
                <dt className="menutitle">
                  <strong>热销</strong>大家喜欢吃，才叫真好吃。
                </dt>
                <dd className="menuitem">
                  <span className="fooddetails-logo">
                    <span className="fooddetails-logoTag">
                      招牌
                    </span>
                    <img src={require('../../../static/images/hanbaobao.webp')} alt=""/>
                  </span>
                  <div className="fooddetails-info">
                    <p className="fooddetails-name">
                    套餐三
                    </p>
                    <p className="fooddetails-desc">
                      多种口味，任君选择主要原料: 鸡肉
                    </p>
                    <p className="fooddetails-sales">
                      <span>月售360份</span>
                      <span>好评率100%</span>
                    </p>

                    <p className="fooddetails-activity">
                      <span>8.1折</span>
                      <span>每单限1份优惠</span>
                    </p>
                    <span className="salesInfo-price">
                      <span>16</span>
                      <span className="salesInfo-lowestPrice">起</span>
                    </span>
                    <div className="fooddetails-button">

                      <span onClick = {() => {
                        this.props.reduceCart({num: -1})
                      }}>
                        <svg className="icon" aria-hidden="true">
                          <use xlinkHref="#icon-negative"></use>
                        </svg>
                      </span>
                      <span>1</span>
                      <span onClick={() => {
                        this.props.addCart({num: 1})
                      }}>
                        <svg className="icon" aria-hidden="true">
                          <use xlinkHref="#icon-plus"></use>
                        </svg>
                      </span>
                    </div>
                  </div>
                </dd>
                <dd className="menuitem">
                  <span className="fooddetails-logo">
                    <span className="fooddetails-logoTag">
                      招牌
                    </span>
                    <img src={require('../../../static/images/hanbaobao.webp')} alt=""/>
                  </span>
                  <div className="fooddetails-info">
                    <p className="fooddetails-name">
                    套餐三
                    </p>
                    <p className="fooddetails-desc">
                      多种口味，任君选择主要原料: 鸡肉
                    </p>
                    <p className="fooddetails-sales">
                      <span>月售360份</span>
                      <span>好评率100%</span>
                    </p>

                    <p className="fooddetails-activity">
                      <span>8.1折</span>
                      <span>每单限1份优惠</span>
                    </p>
                    <span className="salesInfo-price">
                      <span>16</span>
                      <span className="salesInfo-lowestPrice">起</span>
                    </span>
                    <div className="fooddetails-button">
                      <span>
                        <svg className="icon" aria-hidden="true">
                          <use xlinkHref="#icon-plus"></use>
                        </svg>
                      </span>
                    </div>
                  </div>
                </dd>
                <dd className="menuitem">
                  <span className="fooddetails-logo">
                    <span className="fooddetails-logoTag">
                      招牌
                    </span>
                    <img src={require('../../../static/images/hanbaobao.webp')} alt=""/>
                  </span>
                  <div className="fooddetails-info">
                    <p className="fooddetails-name">
                    套餐三
                    </p>
                    <p className="fooddetails-desc">
                      多种口味，任君选择主要原料: 鸡肉
                    </p>
                    <p className="fooddetails-sales">
                      <span>月售360份</span>
                      <span>好评率100%</span>
                    </p>

                    <p className="fooddetails-activity">
                      <span>8.1折</span>
                      <span>每单限1份优惠</span>
                    </p>
                    <span className="salesInfo-price">
                      <span>16</span>
                      <span className="salesInfo-lowestPrice">起</span>
                    </span>
                    <div className="fooddetails-button">
                      <span>
                        <svg className="icon" aria-hidden="true">
                          <use xlinkHref="#icon-plus"></use>
                        </svg>
                      </span>
                    </div>
                  </div>
                </dd>
                <dd className="menuitem">
                  <span className="fooddetails-logo">
                    <span className="fooddetails-logoTag">
                      招牌
                    </span>
                    <img src={require('../../../static/images/hanbaobao.webp')} alt=""/>
                  </span>
                  <div className="fooddetails-info">
                    <p className="fooddetails-name">
                    套餐三
                    </p>
                    <p className="fooddetails-desc">
                      多种口味，任君选择主要原料: 鸡肉
                    </p>
                    <p className="fooddetails-sales">
                      <span>月售360份</span>
                      <span>好评率100%</span>
                    </p>

                    <p className="fooddetails-activity">
                      <span>8.1折</span>
                      <span>每单限1份优惠</span>
                    </p>
                    <span className="salesInfo-price">
                      <span>16</span>
                      <span className="salesInfo-lowestPrice">起</span>
                    </span>
                    <div className="fooddetails-button">
                      <span>
                        <svg className="icon" aria-hidden="true">
                          <use xlinkHref="#icon-plus"></use>
                        </svg>
                      </span>
                    </div>
                  </div>
                </dd>
                <dd className="menuitem">
                  <span className="fooddetails-logo">
                    <span className="fooddetails-logoTag">
                      招牌
                    </span>
                    <img src={require('../../../static/images/hanbaobao.webp')} alt=""/>
                  </span>
                  <div className="fooddetails-info">
                    <p className="fooddetails-name">
                    套餐三
                    </p>
                    <p className="fooddetails-desc">
                      多种口味，任君选择主要原料: 鸡肉
                    </p>
                    <p className="fooddetails-sales">
                      <span>月售360份</span>
                      <span>好评率100%</span>
                    </p>

                    <p className="fooddetails-activity">
                      <span>8.1折</span>
                      <span>每单限1份优惠</span>
                    </p>
                    <span className="salesInfo-price">
                      <span>16</span>
                      <span className="salesInfo-lowestPrice">起</span>
                    </span>
                    <div className="fooddetails-button">
                      <span>
                        <svg className="icon" aria-hidden="true">
                          <use xlinkHref="#icon-plus"></use>
                        </svg>
                      </span>
                    </div>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        
          <div className="store-cartfooter">
            <span className="carticon">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-gouwuche"></use>
              </svg>
              <span>
                {
                  (function() {
                    let cartNum = 0
                    
                    self.props.cart.cartCount.forEach(item => {cartNum += item.num})
                    
                    return cartNum
                  })()
                }
              </span>
            </span>
            <div className="cartinfo">
              <p className="carttotal">
                <span>¥47</span>
                <del className="carttotalOriginal">
                  ¥89
                </del>
              </p>
              <p className="cartdelivery">另需配送费1元</p>
            </div>
            <a href="/" className="toPlay">
              <span>¥15起送</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Shop