import React, { Component } from 'react'

import './index.scss'
import '../../../static/fonts/iconfont'
import FootGuide from '../../footGuide';
import Header from '../../common/hearder';

class Discover extends Component {
  render() {
    return ( 
      <div className="app-discover">
        <Header></Header>
        <a href="/" className="promotion-discover">
          <img src={require("../../../static/images/promotions/discovers1.jpeg")} alt=""/>
        </a>
        <div className="activityentry">
          <a href="/" className="activity-item">
            <div className="content-wrapper">
              <p className="title">金币商城</p>
              <p className="tips">0元好物在这里</p>
            </div>
            <img src={require("../../../static/images/libao.webp")} alt="" className="icon"/>
          </a>
          <a href="/" className="activity-item">
            <div className="content-wrapper">
              <p className="title">推荐有奖</p>
              <p className="tips">10元现金拿不停</p>
            </div>
            <img src={require("../../../static/images/kaiquan.webp")} alt="" className="icon"/>
          </a>
          <a href="/" className="activity-item" >
            <div className="content-wrapper">
              <p className="title" style={{color: 'rgb(237, 102, 96)'}}>周边优惠</p>
              <p className="tips">领取口碑好券</p>
            </div>
            <img src={require("../../../static/images/koubei1.webp")} alt="" className="icon"/>
          </a>
        </div>
        <div className="activitymain">
          <div className="activity-header">
            <span className="line left"></span>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-hongbao"></use>
            </svg>
            限时好礼
            <span className="line right"></span>
          </div>
          <p className="activity-sub-title">金币换好礼</p>
          <div className="activity-body">
            <a href="/" className="discover-food">
              <img src={require('../../../static/images/discovergood1.webp')} alt=""/>
              <div>
                <p className="good-name">扫地机器人</p>
                <p className="good-info">
                  <span className="price">9金币</span>
                  <del className="original-price">¥99</del>
                </p>
              </div>
              <span className="discount">限时优惠</span>
            </a>
            <a href="/" className="discover-food">
              <img src={require('../../../static/images/discovergood2.webp')} alt=""/>
              <div>
                <p className="good-name">3元饿了么红包</p>
                <p className="good-info">
                  <span className="price">90金币</span>
                  <del className="original-price">¥3</del>
                </p>
              </div>
              <span className="discount">限时优惠</span>
            </a>
            <a href="/" className="discover-food">
              <img src={require('../../../static/images/discovergood1.webp')} alt=""/>
              <div>
                <p className="good-name">电动按摩理疗仪</p>
                <p className="good-info">
                  <span className="price">9金币</span>
                  <del className="original-price">¥239</del>
                </p>
              </div>
              <span className="discount">特价换购</span>
            </a>
          </div>
          <p className="activity-more">
            查看更多<i className="iconfont icon-right"></i>
          </p>
        </div>
        <FootGuide></FootGuide>
      </div>
    )
  }
}

export default Discover