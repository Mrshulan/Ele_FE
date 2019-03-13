import React, { Component } from 'react' 
import './index.scss'
import Filter from '../../filter';
import Shoplist from '../../shoplist';
class Categories extends Component {
  render() {
    return (
      <div className="app-category" style={{paddingTop: '.8rem'}}>
        <div className="category-navTop">
          <ul className="categoryList">
            <li className="categoryList-item active">全部</li>
            <li className="categoryList-item">简餐便当</li>
            <li className="categoryList-item">面食粥点</li>
            <li className="categoryList-item">汉堡披萨</li>
            <li className="categoryList-item">香锅冒菜</li>
            <li className="categoryList-item">日韩料理</li>
            <li className="categoryList-item">轻食西餐</li>
            <li className="categoryList-item">小吃炸串</li>
            <li className="categoryList-item">地方菜系</li>
          </ul>
          <div className="category-more">
            <i className="iconfont icon-jiantouarrow486"></i>
          </div>
        </div>
        <section className="filter-category"></section>
        <div className="entry-place">
          <div className="entry-place-title">
            <span>省心套餐</span>
            <span>更多&nbsp;&gt;</span>
          </div>
          <div className="entry-place-content">
            <div className="food-item">
              <img src={require('../../../static/images/logo-logos/food-item1.webp')} alt=""/>
              <div className="food-item-info">
                <div className="food-item-title">【超级巨无霸炒饭】+碎鸡蛋+果汁+酱丁</div>
                <div className="food-item-rate">101人好评</div>
                <div className="food-item-discount">
                  <span>¥18.39</span>  
                  <span>¥41.9</span>  
                </div>
              </div>
            </div>
            <div className="food-item">
              <img src={require('../../../static/images/logo-logos/food-item2.webp')} alt=""/>
              <div className="food-item-info">
                <div className="food-item-title">金牌卤肉便当~</div>
                <div className="food-item-rate">22人好评</div>
                <div className="food-item-discount">
                  <span>¥9.9</span>  
                  <span>¥23.9</span>  
                </div>
              </div>
            </div>
            <div className="food-item">
              <img src={require('../../../static/images/logo-logos/food-item3.webp')} alt=""/>
              <div className="food-item-info">
                <div className="food-item-title">金汤肥牛单人份</div>
                <div className="food-item-rate">5人好评</div>
                <div className="food-item-discount">
                  <span>¥14.89</span>  
                  <span>¥29.88</span>  
                </div>
              </div>
            </div>
          </div>
        </div>
        <Filter></Filter>
        <Shoplist></Shoplist>
      </div>
    )
  }
}

export default Categories