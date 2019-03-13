import React,{ Component} from 'react';
import './index.scss'
import 'antd/dist/antd.css'
import { Carousel } from 'antd';
import { Link } from 'react-router-dom'

import Shoplist from '../shoplist';
import Filter from '../filter';
import FootGuide from '../footGuide';
import ErrLoc from '../common/errLoc';


class Home extends Component{
  constructor() {
    super()
    this.state = {
      locStatus: 0,
      locResult: "正在为你定位>>>"
    }
  }

  componentDidMount() {
    let self = this
    let amapScript = document.createElement('script')
    amapScript.src = "https://webapi.amap.com/maps?v=1.4.10&key=a86c9e9eb4b063c06e88b4870b0f5503"
    amapScript.onload = function() {
      window.AMap.plugin('AMap.Geolocation', function () {
        var geolocation = new window.AMap.Geolocation({
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
          timeout: 10000,          //超过10秒后停止定位，默认：5s
          buttonOffset: new window.AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        });

        geolocation.getCurrentPosition(function (status, result) {
          if (status === 'complete') {
            onComplete(result, self)
          } else {
            onError(result)
          }
        });
      });

      function onComplete(data, self) {     
        self.setState({
          locStatus: 1,
          locResult: data.formattedAddress
        })
      }

      function onError(data) {
        console.log(data.message)
      }
    }

    document.body.append(amapScript)
  }

  render() {
    return (
      <div className="App">
        <div className="index-header">
          <div className="index-header-inner">
            <div className="header-inner-content clearfixed">       
              <i className="iconfont icon-icon_dingwei"></i>
              <span className="index-header-location">{this.state.locResult}</span>
              <i className="iconfont icon-jiantouarrow486"></i>
            </div>
          </div>
        </div>{/* <!--> */}
        <div className="search-wrapper">
          <div className="search">
            <Link to="/search" className="content">
              <i className="iconfont icon-sousuo"></i>
              <span>搜索饿了么商家、商品名称</span>
            </Link>
          </div>
        </div>
        <div className="foodentry">
          <Carousel>
            <div className="item">
                <Link to="/categories/malatang">
                  <img src={require('../../static/images/categories/categories1.jpeg')} alt=""/>
                  <span>麻辣烫</span>
                </Link> 
                <Link to="/categories/fruits">
                  <img src={require('../../static/images/categories/categories2.jpeg')} alt=""/>
                  <span>水果</span>
                </Link> 
                <a href="/category/list11">
                  <img src={require('../../static/images/categories/categories3.jpeg')} alt=""/>
                  <span>麻辣烫</span>
                </a> 
                <a href="/category/list11">
                  <img src={require('../../static/images/categories/categories4.jpeg')} alt=""/>
                  <span>麻辣烫</span>
                </a> 
                <a href="/category/list11">
                  <img src={require('../../static/images/categories/categories5.jpeg')} alt=""/>
                  <span>麻辣烫</span>
                </a> 
                <a href="/category/list11">
                  <img src={require('../../static/images/categories/categories6.jpeg')} alt=""/>
                  <span>麻辣烫</span>
                </a> 
                <a href="/category/list11">
                  <img src={require('../../static/images/categories/categories7.jpeg')} alt=""/>
                  <span>麻辣烫</span>
                </a> 
                <a href="/category/list11">
                  <img src={require('../../static/images/categories/categories10.jpeg')} alt=""/>
                  <span>麻辣烫</span>
                </a> 
                <a href="/category/list11">
                  <img src={require('../../static/images/categories/categories8.jpeg')} alt=""/>
                  <span>麻辣烫</span>
                </a> 
                <a href="/category/list11">
                  <img src={require('../../static/images/categories/categories9.jpeg')} alt=""/>
                  <span>麻辣烫</span>
                </a> 
            </div>
            <div className="item">
                <a href="/category/list11">
                  <img src={require('../../static/images/categories/categories9.jpeg')} alt=""/>
                  <span>麻辣烫</span>
                </a> 
            </div>
          </Carousel>
        </div>
        <div className="activity">
          <div className="vip-proprietary clearfixed">
            <div className="left">
              <img src={require('../../static/images/huiyuan.jpeg')} alt=""/>
              <span>超级会员</span>
              <span><b>1</b>无门款红包未领取</span>
            </div>
            <a href="/" className="right">领取专属红包</a>
          </div>
          <div className="recommend clearfixed">
            <div className="item left" onClick={function() {window.location="/ranking"}}>
              <h3>品质套餐</h3>
              <div>搭配齐全吃得好</div>
              <div>立即抢购&nbsp;&nbsp;&gt;</div>
              <img src={require('../../static/images/recommends/recommends1.png')} alt=""/>
            </div>
            <div className="item right" onClick={function() {window.location="/ranking"}}>
              <h3>限量抢购</h3>
              <div>超值美味 9.9起</div>
              <div><span>186</span>人正在抢&nbsp;&nbsp;&gt;</div>
              <img src={require('../../static/images/recommends/recommends2.png')} alt=""/>
            </div>
          </div>
          <div className="promotion">
            <Carousel autoplay>
              <div className="item">
                <a href="/prod">
                  <img src={require('../../static/images/promotions/promotions1.jpeg')} alt=""/>
                </a>
              </div>
              <div className="item">
                <a href="/prod">
                  <img src={require('../../static/images/promotions/promotions2.jpeg')} alt=""/>
                </a>
              </div>
              <div className="item">
                <a href="/prod">
                  <img src={require('../../static/images/promotions/promotions3.jpeg')} alt=""/>
                </a>
              </div>
              <div className="item">
                <a href="/prod">
                  <img src={require('../../static/images/promotions/promotions4.jpeg')} alt=""/>
                </a>
              </div>
              <div className="item">
                <a href="/prod">
                  <img src={require('../../static/images/promotions/promotions5.jpeg')} alt=""/>
                </a>
              </div>
              <div className="item">
                <a href="/prod">
                  <img src={require('../../static/images/promotions/promotions6.jpeg')} alt=""/>
                </a>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="shoplist-title">
          推荐商家
        </div>
        <Filter></Filter>
        {this.state.locStatus ? <Shoplist></Shoplist> : <ErrLoc></ErrLoc>}   
        <FootGuide></FootGuide>
      </div>
    )
  }
}

export default Home