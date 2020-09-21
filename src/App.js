import React, { Component } from 'react';
import HeaderNav from './containers/HeaderNav/HeaderNav';
import Home from './containers/Home/Home'
import AppLayout from './components/AppLayout/AppLayout'
class App extends Component {
  render() {
    return (
      <React.Fragment>
         <HeaderNav/>
          <Home/>
      </React.Fragment>
    );
  }
}
export default App;
