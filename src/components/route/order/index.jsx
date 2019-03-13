import React, { Component } from 'react'

import './index.scss'
import FootGuide from '../../footGuide';


class Order extends Component {
  render() {
    return (
      <div className="app-order">
        <a href="/" className="orderCard">
          <div className="orderCard-body">
            <a href="/" className="orderCard-avatar">
              <img src={require('../../../static/images/logo-logos/logo-logo-3.jpeg')} alt=""/>
            </a>
            <div className="orderCard-content">
              <div className="orderCard-head">
                <div className="title">
                  <a href="/" className="name">
                    一片天铁板王炒粉炒饭
                    <i className="iconfont icon-right"></i>
                  </a>
                  <p className="status">订单已送达</p>            
                </div>
                <div className="datatime">2018-12-22 11:32</div>
              </div>
              <div className="orderCard-detail">
                <p className="detail">
                  <span className="productname">铁板鸡柳蛋炒饭+火腿+豆腐+蒙牛酸酸乳</span>
                  <span className="productcount">等3件商品</span>
                </p>
                <p className="price">¥22.00</p>
              </div>
            </div>
          </div>
          <div className="orderCard-botttom">
            <button className="cardbutton oneOther">再来一单</button>
            <button className="cardbutton remarkable">评价得金币</button>
          </div>
        </a>
        <a href="/" className="orderCard">
          <div className="orderCard-body">
            <a href="/" className="orderCard-avatar">
              <img src={require('../../../static/images/logo-logos/logo-logo-3.jpeg')} alt=""/>
            </a>
            <div className="orderCard-content">
              <div className="orderCard-head">
                <div className="title">
                  <a href="/" className="name">
                    一片天铁板王炒粉炒饭
                    <i className="iconfont icon-right"></i>
                  </a>
                  <p className="status">订单已送达</p>            
                </div>
                <div className="datatime">2018-12-22 11:32</div>
              </div>
              <div className="orderCard-detail">
                <p className="detail">
                  <span className="productname">铁板鸡柳蛋炒饭+火腿+豆腐+蒙牛酸酸乳</span>
                  <span className="productcount">等3件商品</span>
                </p>
                <p className="price">¥22.00</p>
              </div>
            </div>
          </div>
          <div className="orderCard-botttom">
            <button className="cardbutton oneOther">再来一单</button>
            <button className="cardbutton remarkable">评价得金币</button>
          </div>
        </a>
        <a href="/" className="orderCard">
          <div className="orderCard-body">
            <a href="/" className="orderCard-avatar">
              <img src={require('../../../static/images/logo-logos/logo-logo-3.jpeg')} alt=""/>
            </a>
            <div className="orderCard-content">
              <div className="orderCard-head">
                <div className="title">
                  <a href="/" className="name">
                    一片天铁板王炒粉炒饭
                    <i className="iconfont icon-right"></i>
                  </a>
                  <p className="status">订单已送达</p>            
                </div>
                <div className="datatime">2018-12-22 11:32</div>
              </div>
              <div className="orderCard-detail">
                <p className="detail">
                  <span className="productname">铁板鸡柳蛋炒饭+火腿+豆腐+蒙牛酸酸乳</span>
                  <span className="productcount">等3件商品</span>
                </p>
                <p className="price">¥22.00</p>
              </div>
            </div>
          </div>
          <div className="orderCard-botttom">
            <button className="cardbutton oneOther">再来一单</button>
            <button className="cardbutton remarkable">评价得金币</button>
          </div>
        </a>
        <FootGuide></FootGuide>
      </div>
    )
  }
}

export default Order