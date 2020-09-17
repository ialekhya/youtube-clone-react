import React from 'react';
import {Image, Menu} from 'semantic-ui-react';
import './HeaderNav.css';
import logo from '../../assets/images/logo.jpg';

export class HeaderNav extends React.Component {
  render() {
    return (
      <header className="header">
          <div className="logo-wrapper">
            <img src={logo}  />
          </div>
          <form className="search-bar">
            <input className="search-bar-input" type="text" placeholder="Search "></input>
            <button class="search-btn">
               <i class="fas fa-search"></i>
            </button>
          </form> 
          <div className="header-icons">
              <button>
              <i class="fas fa-video"></i>
              </button>
              <button>
              <i class="fas fa-th"></i>
              </button>
              <button>
              <i class="fas fa-bell"></i>
              </button>
              <button>
              <i class="fas fa-user"></i>
              </button>
          </div>
      </header>
    );
  }
}

export default HeaderNav;