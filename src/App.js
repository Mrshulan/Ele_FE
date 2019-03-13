import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home';
import Search from './components/route/search';
import Categories from './components/route/categories';
import Ranking from './components/route/ranking';
import Profile from './components/route/propfile';
import Order from './components/route/order';
import Discover from './components/route/discover';
import Shop from './components/route/shop';
import Prod from './components/route/prod';


class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/search' component={Search}/>
            <Route path='/categories/:id' component={Categories}/>
            <Route path='/shop' component={Shop}/>
            <Route path='/ranking' component={Ranking}/>
            <Route path='/prod/' component={Prod}/>
            <Route path='/discover' component={Discover}/>
            <Route path='/order' component={Order}/>
            <Route path='/profile' component={Profile}/>
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
