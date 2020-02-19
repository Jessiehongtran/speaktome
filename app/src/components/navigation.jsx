import React from 'react';
import '../styles/navigation.scss';
import { Link } from "react-router-dom";


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        };
        
      }



    render(){
       
      return (
        <div className="nav">
            <h1>Let's english</h1>
            <ul className="nav-bar">
                <li>
                <Link exact to="/" activeClassName="activeNavButton" className="nav-text">
                    1 listen
                </Link>
                </li>
                <li>
                <Link exact to="/speak" activeClassName="activeNavButton" className="nav-text">
                    1 speak
                </Link>
                </li>
                <li>
                <Link exact to="/read" activeClassName="activeNavButton" className="nav-text">
                    1 read
                </Link>
                </li>
                <li>
                <Link exact to="/write" activeClassName="activeNavButton" className="nav-text">
                    1 write
                </Link>
                </li>
            </ul>
        </div>
      )
    }
  }
  
export default Navigation;