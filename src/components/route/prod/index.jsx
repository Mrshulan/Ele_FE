import React, { Component } from 'react'

import './index.scss'
// import ErrLoc from '../../common/errLoc';


class Prod extends Component {

  constructor() {
    super() 
    this.state = {
      locStatus: 0
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="app-prod">
        <div className="prod-img-wrapper">
          <a href="/" className="back"> </a>
          <img src={require("../../../static/images/prodbg.webp")} alt="" className="prod-img"/>
        </div>
        <div className="prod-main-wrapper">
          <div className="prod-nav-wrapper">
            <ul className="prod-nav">
              <li className="prod-nav-item">
                <img src={require("../../../static/images/prodnav1.webp")} alt="" className="active"/>
                <img src={require("../../../static/images/prodnav2.webp")} alt=""/>
              </li>
              <li className="prod-nav-item">
              <img src={require("../../../static/images/prodnav1.webp")} alt=""/>
                <img src={require("../../../static/images/prodnav2.webp")} alt="" className="active"/>
              </li>
            </ul>
          </div>
          <div className="prod-content-wrapper">
            <div className="prod-content">
              {/* <ErrLoc></ErrLoc> */}
              <div className="loc-wrapper">

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Prod