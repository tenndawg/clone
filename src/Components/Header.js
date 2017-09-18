import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
    constructor() {
        super();
        this.state = {
          menu: ['Home ', 'About ', 'Collezioni ', 'Showroom ', 'Store Locator ', 'Contatti ']
        }
    
      }
    
      Menu() {
        for (var i = 0; i <= this.state.menu.length; i++) {
          return this.state.menu[i];
        }
      }
    render() {
        return(
            <div>
                <h1 className="title">Menghi Shoes & Co.</h1>
                <div className="menu">
                    {this.state.menu}
                </div>
            </div>

        )
    }
}

export default Header;