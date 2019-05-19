import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    state = {  }
    render() { 
        return (  
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/info">Info</Link>
                </li>
            </ul>
        );
    }
}
 
export default Menu;