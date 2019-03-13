import React, { Component } from 'react'
import './index.scss'
import FootGuide from '../../footGuide';
import '../../../static/fonts/iconfont'
import Header from '../../common/hearder';

class Profile extends Component {
  render() {
    return (
      <div className="app-profile">
        <Header></Header>
        <div className="profile-user">
          <div className="user-avatar">
            <img src={require('../../../static/images/logo-logos/avatar.webp')} alt=""/>
          </div>
          <div className="user-info">
            <p className="user-name">树懒先生sir</p>
            <p className="user-tell">
              <i className="iconfont icon-weibiaoti-"></i>
              <span>184****1766</span>
            </p>
          </div>
          <i className="iconfont icon-right"></i>
        </div>
        
        <div className="profile-pocket">
          <a href="/" className="pocket-item">
            <p className="pocket-item-count" style={{color: 'rgb(0, 152, 251)'}}>
              <span>0.00</span>
              <span>元</span>
            </p>
            <p className="pocket-item-name">钱包</p>
          </a>
          <a href="/" className="pocket-item">
            <p className="pocket-item-count" style={{color: 'rgb(255, 95, 62)'}}>
              <span>4</span>
              <span>个</span>
            </p>
            <p className="pocket-item-name" >红包</p>
          </a>
          <a href="/" className="pocket-item">
            <p className="pocket-item-count" style={{color: 'rgb(106, 194, 11)'}}>
              <span>81</span>
              <span>个</span>
            </p>
            <p className="pocket-item-name">金币</p>
          </a>
        </div>
        
        <section className="profile-other">
          <a href="/">
            <aside>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-dizhi"></use>
              </svg>
            </aside>
           <div>我的地址<i className="iconfont icon-right"></i></div>
          </a>
        </section>
        <section className="profile-other">
          <a href="/">
           <aside>
             <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-jinbishangcheng"></use>
              </svg>
           </aside>
           <div>金币商城<i className="iconfont icon-right"></i></div>
          </a>
          <a href="/">
           <aside>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-31"></use>
              </svg>
           </aside>
           <div>分享拿10元现金<i className="iconfont icon-right"></i></div>
          </a>
        </section>
        <section className="profile-other">
          <a href="/">
           <aside>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-kefu"></use>
              </svg>
           </aside>
           <div>我的客服<i className="iconfont icon-right"></i></div>
          </a>
          <a href="/">
           <aside>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-changyonglogo40"></use>
              </svg>
           </aside>
           <div>下载饿了么APP<i className="iconfont icon-right"></i></div>
          </a>
        </section>

        <div className="profile-roles">
          规则中心
        </div>
        <FootGuide></FootGuide>
      </div>
    )
  }
}

export default Profile